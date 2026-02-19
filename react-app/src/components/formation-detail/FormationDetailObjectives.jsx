import React from 'react'

export default function FormationDetailObjectives({ objectives }) {
  if (!objectives?.length) return null
  return (
    <section className="formation-ref-objectives">
      <div className="container">
        <h2>Les objectifs de <br /><strong>la formation</strong></h2>
        <div className="formation-ref-objectives-grid">
          {objectives.map((obj, i) => (
            <div key={i} className="formation-ref-objective-card">
              <div className="formation-ref-objective-icon">
                <i className={obj.icon || 'fas fa-check-circle'} />
              </div>
              <p>{obj.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
