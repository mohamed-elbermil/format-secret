import React, { useState } from 'react'
import { useRegistration } from '@/hooks/useRegistration'

function formatDateRange(start, end) {
  const opts = { day: 'numeric', month: 'long', year: 'numeric' }
  const s = new Date(start + 'T00:00:00')
  const e = new Date(end + 'T00:00:00')
  if (start === end) return s.toLocaleDateString('fr-FR', opts)
  const sStr = s.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })
  const eStr = e.toLocaleDateString('fr-FR', opts)
  return `${sStr} – ${eStr}`
}

const IconBack = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const IconCheck = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function RegistrationForm({ session, formationTitle, onBack, onSuccess }) {
  const { register, loading, success, error } = useRegistration()
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', company: ''
  })

  const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    const ok = await register(session, form)
    if (ok) onSuccess?.()
  }

  if (success) {
    return (
      <div className="sc-success">
        <div className="sc-success__icon"><IconCheck /></div>
        <h3 className="sc-success__title">Inscription confirmée !</h3>
        <p className="sc-success__text">
          Un email de confirmation vous a été envoyé à <strong>{form.email}</strong>.<br />
          Notre équipe vous contactera prochainement pour finaliser votre dossier.
        </p>
        <button className="sc-success__btn" onClick={onBack} type="button">
          Retour aux sessions
        </button>
      </div>
    )
  }

  return (
    <form className="sc-form" onSubmit={handleSubmit} noValidate>
      <button className="sc-form__back" type="button" onClick={onBack}>
        <IconBack /> Retour aux sessions
      </button>

      <div className="sc-form__session-recap">
        {formationTitle} · <span>{formatDateRange(session.start_date, session.end_date)}</span>
        <br /><small style={{ fontWeight: 400, color: 'inherit', opacity: 0.8 }}>{session.location}</small>
      </div>

      <div className="sc-form__grid">
        <div className="sc-form__field">
          <label className="sc-form__label">Prénom *</label>
          <input className="sc-form__input" type="text" value={form.firstName} onChange={set('firstName')} placeholder="Marie" required />
        </div>
        <div className="sc-form__field">
          <label className="sc-form__label">Nom *</label>
          <input className="sc-form__input" type="text" value={form.lastName} onChange={set('lastName')} placeholder="Dupont" required />
        </div>
        <div className="sc-form__field sc-form__field--full">
          <label className="sc-form__label">Email *</label>
          <input className="sc-form__input" type="email" value={form.email} onChange={set('email')} placeholder="marie@entreprise.fr" required />
        </div>
        <div className="sc-form__field">
          <label className="sc-form__label">Téléphone</label>
          <input className="sc-form__input" type="tel" value={form.phone} onChange={set('phone')} placeholder="06 00 00 00 00" />
        </div>
        <div className="sc-form__field">
          <label className="sc-form__label">Entreprise</label>
          <input className="sc-form__input" type="text" value={form.company} onChange={set('company')} placeholder="Nom de la société" />
        </div>

        {error && <p className="sc-form__error">{error}</p>}

        <button className="sc-form__submit" type="submit" disabled={loading || !form.firstName || !form.lastName || !form.email}>
          {loading ? 'Envoi en cours…' : "Confirmer mon inscription"}
        </button>
      </div>
    </form>
  )
}
