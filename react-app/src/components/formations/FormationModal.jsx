import React, { useState, useEffect } from 'react'
import { formations } from '../../data/formations'
import Button from '../ui/Button'

export default function FormationModal({ formationKey, onClose }) {
  const [calendarVisible, setCalendarVisible] = useState(false)
  const formation = formationKey ? formations[formationKey] : null
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  useEffect(() => {
    setCalendarVisible(false)
  }, [formationKey])

  if (!formation) return null

  const toggleCalendar = () => {
    if (isMobile) {
      const calIdMatch = formation.calendar.match(/src=([^&]+)/)
      if (calIdMatch?.[1]) {
        const calendarId = decodeURIComponent(calIdMatch[1])
        window.open(`https://calendar.google.com/calendar/u/0/r?cid=${calendarId}`, '_blank')
      }
    } else {
      setCalendarVisible((v) => !v)
    }
  }

  return (
    <div className="modal" style={{ display: formationKey ? 'block' : 'none' }} onClick={(e) => e.target.className === 'modal' && onClose()}>
      <div className="modal-content">
        <span className="close" onClick={onClose} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClose()}>&times;</span>
        <h2>{formation.title}</h2>
        <div className="modal-flex-content">
          <div className="modal-description">
            <p dangerouslySetInnerHTML={{ __html: formation.description }} />
            <div className="modal-buttons">
              <Button href={formation.pdf} variant="primary" size="sm">Télécharger PDF</Button>
              <Button type="button" variant="secondary" size="sm" fullWidth onClick={toggleCalendar}>
                {calendarVisible ? 'Masquer les sessions' : 'Voir les sessions'}
              </Button>
            </div>
          </div>
          <div className="modal-calendar" id="calendarContainer" style={{ display: calendarVisible ? 'block' : 'none' }}>
            {calendarVisible && !isMobile && (
              <>
                <iframe src={formation.calendar} title="Calendrier" frameBorder="0" scrolling="no" />
                <Button href="/#contact" variant="primary" size="sm" className="calendar-cta-button" fullWidth>
                  Je m'inscris à cette session de formation
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
