import React from 'react'

export default function FormationDetailMissions({ missions }) {
  if (!missions?.length) return null
  return (
    <section className="formation-ref-missions">
      <div className="container">
        <h2>Quelles sont les missions d'un <br /><strong>négociateur technico-commercial ?</strong></h2>
        <div className="formation-ref-missions-grid">
          {missions.map((m, i) => (
            <div key={i} className="formation-ref-mission-card">
              <div className="formation-ref-mission-number">{m.number}</div>
              <h3>{m.title}</h3>
              <p>{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
