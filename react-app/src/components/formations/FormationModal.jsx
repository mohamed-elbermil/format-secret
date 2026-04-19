import React, { useState, useEffect, useRef, useCallback } from 'react'
import { formations } from '../../data/formations'
import SessionCalendar from '@/components/sessions/SessionCalendar'
import '@/assets/css/components/formation-modal.css'

/* ── Couleur badge par catégorie (correspond aux cards) ── */
const catColors = {
  management:    '#1B2F4E',
  communication: '#2D6A4F',
  commercial:    '#C8922A',
  developpement: '#6B3FA0',
  securite:      '#9B2335',
  numerique:     '#0D7C8F',
}

/* Mapping clé formation → catégorie */
const keyCat = {
  formation3:  'management',
  formation8:  'management',
  formation15: 'management',
  formation7:  'communication',
  formation16: 'communication',
  formation14: 'communication',
  formation5:  'commercial',
  formation6:  'developpement',
  formation20: 'securite',
  formation21: 'securite',
  formation22: 'securite',
  formation23: 'numerique',
}

const catLabels = {
  management:    'Management',
  communication: 'Communication',
  commercial:    'Commercial',
  developpement: 'Dév. Personnel',
  securite:      'Sécurité',
  numerique:     'Numérique & IA',
}

/* ── Icônes SVG ── */
const IconClose = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)
const IconDownload = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)
const IconCalendar = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

export default function FormationModal({ formationKey, onClose }) {
  const [calendarVisible, setCalendarVisible] = useState(false)
  const modalRef = useRef(null)
  const closeRef = useRef(null)

  const formation = formationKey ? formations[formationKey] : null
  const catId     = keyCat[formationKey] || 'management'
  const badgeColor = catColors[catId] || catColors.management

  /* Réinitialise le calendrier à chaque ouverture */
  useEffect(() => {
    setCalendarVisible(false)
  }, [formationKey])

  /* Focus trap : focus sur le bouton close à l'ouverture */
  useEffect(() => {
    if (formation && closeRef.current) {
      closeRef.current.focus()
    }
  }, [formation])

  /* Fermer avec Escape */
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (!formation) return
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [formation, handleKeyDown])

  const toggleCalendar = () => setCalendarVisible(v => !v)

  if (!formation) return null

  return (
    /* Backdrop */
    <div
      className="fm-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="fm-title"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      {/* Modale */}
      <div className="fm-modal" ref={modalRef}>

        {/* Bande couleur catégorie */}
        <div className="fm-modal__stripe" style={{ background: badgeColor }} aria-hidden="true" />

        {/* ── En-tête ── */}
        <div className="fm-modal__head">
          <div className="fm-modal__head-left">
            <span
              className="fm-modal__badge"
              style={{ background: badgeColor }}
            >
              {catLabels[catId]}
            </span>
            <h2 id="fm-title" className="fm-modal__title">
              {formation.title}
            </h2>
          </div>

          <button
            ref={closeRef}
            className="fm-modal__close"
            onClick={onClose}
            aria-label="Fermer la fenêtre"
          >
            <IconClose />
          </button>
        </div>

        {/* ── Corps : description HTML existante inchangée ── */}
        <div className="fm-modal__body">
          <div
            className="fm-modal__desc"
            dangerouslySetInnerHTML={{ __html: formation.description }}
          />

          {/* ── Sessions Supabase ── */}
          {calendarVisible && (
            <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(200,146,42,0.2)', paddingTop: '1.25rem' }}>
              <SessionCalendar
                formationKey={formationKey}
                formationTitle={formation.title}
              />
            </div>
          )}
        </div>

        {/* ── Pied : boutons d'action ── */}
        <div className="fm-modal__foot">
          <a
            href={formation.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="fm-modal__cta fm-modal__cta--primary"
            aria-label={`Télécharger le PDF de ${formation.title}`}
          >
            <IconDownload />
            Télécharger le PDF
          </a>

          <button
            type="button"
            className={`fm-modal__cta fm-modal__cta--secondary${calendarVisible ? ' is-active' : ''}`}
            onClick={toggleCalendar}
          >
            <IconCalendar />
            {calendarVisible ? 'Masquer les sessions' : 'Voir les sessions'}
          </button>
        </div>

      </div>
    </div>
  )
}
