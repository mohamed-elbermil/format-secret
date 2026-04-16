import React from 'react'

export default function FormationDetailMissions({ missionsTitle, missions }) {
  if (!missions?.length) return null
  return (
    <section className="fd-missions">
      {/* Vague entrante */}
      <div className="fd-missions__wave-top" aria-hidden="true">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,20 C480,50 960,0 1440,20 L1440,0 L0,0 Z" fill="#f7f5f2" />
        </svg>
      </div>

      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="fd-section-header">
          <span className="fd-section-eyebrow">Rôle & responsabilités</span>
          {missionsTitle ? (
            <h2 className="fd-section-title" dangerouslySetInnerHTML={{ __html: missionsTitle }} />
          ) : (
            <h2 className="fd-section-title">Quelles sont <em>les missions ?</em></h2>
          )}
        </div>

        <div className="fd-missions__grid">
          {missions.map((m, i) => (
            <div key={i} className="fd-mission-card">
              <div className="fd-mission-card__number">{m.number}</div>
              <h3>{m.title}</h3>
              <p>{m.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vague sortante */}
      <div className="fd-missions__wave-bot" aria-hidden="true">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,20 C480,50 960,0 1440,20 L1440,40 L0,40 Z" fill="#fff" />
        </svg>
      </div>
    </section>
  )
}
