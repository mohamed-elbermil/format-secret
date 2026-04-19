import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export function useRegistration() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  async function register(session, formData) {
    setLoading(true)
    setError(null)
    setSuccess(false)

    const spotsLeft = session.capacity - session.spots_taken
    if (spotsLeft <= 0) {
      setError('Cette session est complète.')
      setLoading(false)
      return false
    }

    const { error: insertErr } = await supabase
      .from('registrations')
      .insert([{
        session_id: session.id,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
      }])

    if (insertErr) {
      setError(insertErr.message)
      setLoading(false)
      return false
    }

    const { error: updateErr } = await supabase
      .from('sessions')
      .update({ spots_taken: session.spots_taken + 1 })
      .eq('id', session.id)

    if (updateErr) {
      setError(updateErr.message)
      setLoading(false)
      return false
    }

    try {
      await supabase.functions.invoke('send-confirmation-email', {
        body: {
          to: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          formationKey: session.formation_key,
          startDate: session.start_date,
          endDate: session.end_date,
          location: session.location,
        },
      })
    } catch (_) {
      // Email failure is non-blocking
    }

    setSuccess(true)
    setLoading(false)
    return true
  }

  function reset() {
    setSuccess(false)
    setError(null)
  }

  return { register, loading, success, error, reset }
}
