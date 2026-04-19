import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export function useSessions(formationKey) {
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!formationKey) {
      setSessions([])
      setLoading(false)
      return
    }

    let cancelled = false

    async function fetchSessions() {
      setLoading(true)
      setError(null)

      const { data, error: err } = await supabase
        .from('sessions')
        .select('*')
        .eq('formation_key', formationKey)
        .order('start_date', { ascending: true })

      if (cancelled) return

      if (err) {
        setError(err.message)
      } else {
        setSessions(data || [])
      }
      setLoading(false)
    }

    fetchSessions()
    return () => { cancelled = true }
  }, [formationKey])

  const refresh = async () => {
    if (!formationKey) return
    const { data } = await supabase
      .from('sessions')
      .select('*')
      .eq('formation_key', formationKey)
      .order('start_date', { ascending: true })
    setSessions(data || [])
  }

  return { sessions, loading, error, refresh }
}
