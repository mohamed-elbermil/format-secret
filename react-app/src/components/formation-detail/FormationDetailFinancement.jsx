import React from 'react'
import Button from '../ui/Button'

export default function FormationDetailFinancement({ financementTitle, financementContent, financementItems }) {
  if (!financementTitle && !financementContent && !financementItems?.length) return null
  return (
    <section className="formation-ref-financement">
      <div className="container">
        <h2>{financementTitle}</h2>
        {financementContent && (
          <div className="formation-ref-financement-content" dangerouslySetInnerHTML={{ __html: financementContent }} />
        )}
        {financementItems?.length ? (
          <div className="financement-grid">
            {financementItems.map((item, i) => (
              <div key={i} className="financement-card">
                {item.icon && <div className="financement-icon"><i className={item.icon} /></div>}
                <div className="financement-body">
                  <h3>{item.title}</h3>
                  {item.description && <p>{item.description}</p>}
                  {(item.ctaText && (item.ctaHref || item.ctaTo)) && (
                    <div className="financement-cta">
                      <Button href={item.ctaHref} to={item.ctaTo} variant="primary" size="sm">{item.ctaText}</Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
