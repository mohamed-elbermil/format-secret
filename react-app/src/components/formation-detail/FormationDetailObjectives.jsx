import React from 'react'

export default function FormationDetailObjectives({ objectives }) {
  if (!objectives?.length) return null
  return (
    <section className="fd-objectives">
      <div className="container">
        <div className="fd-section-header">
          <span className="fd-section-eyebrow">Ce que vous apprendrez</span>
          <h2 className="fd-section-title">
            Les objectifs de <em>la formation</em>
          </h2>
        </div>
        <div className="fd-objectives__grid">
          {objectives.map((obj, i) => (
            <div key={i} className="fd-objective-card">
              <div className="fd-objective-card__icon">
                <i className={obj.icon || 'fas fa-check-circle'} aria-hidden="true" />
              </div>
              <p>{obj.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
