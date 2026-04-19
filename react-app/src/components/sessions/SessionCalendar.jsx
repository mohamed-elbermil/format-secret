import React, { useState } from 'react'
import { useSessions } from '@/hooks/useSessions'
import RegistrationForm from './RegistrationForm'
import '@/assets/css/components/session-calendar.css'

function formatDateRange(start, end) {
  const opts = { day: 'numeric', month: 'long', year: 'numeric' }
  const s = new Date(start + 'T00:00:00')
  const e = new Date(end + 'T00:00:00')
  if (start === end) return s.toLocaleDateString('fr-FR', opts)
  const sStr = s.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })
  const eStr = e.toLocaleDateString('fr-FR', opts)
  return `${sStr} – ${eStr}`
}

function spotsInfo(session) {
  const left = session.capacity - session.spots_taken
  if (left <= 0) return { label: 'Complet', cls: 'full' }
  if (left <= 2) return { label: `${left} place${left > 1 ? 's' : ''} restante${left > 1 ? 's' : ''}`, cls: 'low' }
  return { label: `${left} places disponibles`, cls: 'ok' }
}

export default function SessionCalendar({ formationKey, formationTitle }) {
  const { sessions, loading, error, refresh } = useSessions(formationKey)
  const [selected, setSelected] = useState(null)

  if (loading) return <div className="sc-loading">Chargement des sessions…</div>
  if (error) return <div className="sc-empty">Impossible de charger les sessions.</div>

  const upcoming = sessions.filter(s => new Date(s.end_date + 'T23:59:59') >= new Date())

  if (upcoming.length === 0) {
    return (
      <div className="sc-empty">
        Aucune session planifiée pour le moment.<br />
        <a href="/#contact" style={{ color: 'var(--clr-gold)', fontWeight: 600 }}>Contactez-nous</a> pour être informé des prochaines dates.
      </div>
    )
  }

  if (selected) {
    return (
      <RegistrationForm
        session={selected}
        formationTitle={formationTitle}
        onBack={() => setSelected(null)}
        onSuccess={() => { setSelected(null); refresh() }}
      />
    )
  }

  return (
    <div className="sc-wrapper">
      <div className="sc-list">
        <p className="sc-list__title">Sessions disponibles</p>
        {upcoming.map(session => {
          const { label, cls } = spotsInfo(session)
          const isFull = cls === 'full'
          return (
            <button
              key={session.id}
              className={`sc-session${isFull ? ' sc-session--full' : ''}`}
              onClick={() => !isFull && setSelected(session)}
              disabled={isFull}
              type="button"
            >
              <div className="sc-session__info">
                <p className="sc-session__dates">{formatDateRange(session.start_date, session.end_date)}</p>
                <p className="sc-session__meta">{session.location}</p>
                {session.notes && <p className="sc-session__meta">{session.notes}</p>}
              </div>
              <span className={`sc-session__spots sc-session__spots--${cls}`}>{label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
