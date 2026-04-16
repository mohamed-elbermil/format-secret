import React from 'react'

export default function FormationDetailFinancement({ financementTitle, financementContent, financementItems }) {
  if (!financementTitle && !financementContent && !financementItems?.length) return null
  return (
    <section className="fd-financement">
      <div className="container">
        <div className="fd-section-header">
          <span className="fd-section-eyebrow">Accessibilité financière</span>
          <h2 className="fd-section-title">
            {financementTitle || <>Modes de <em>financement</em></>}
          </h2>
        </div>

        {financementContent && (
          <div
            className="fd-financement__intro"
            dangerouslySetInnerHTML={{ __html: financementContent }}
          />
        )}

        {financementItems?.length ? (
          <div className="fd-financement__grid">
            {financementItems.map((item, i) => (
              <div key={i} className="fd-financement-card">
                {item.icon && (
                  <div className="fd-financement-card__icon">
                    <i className={item.icon} aria-hidden="true" />
                  </div>
                )}
                <div>
                  <h3>{item.title}</h3>
                  {item.description && <p>{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
