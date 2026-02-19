import React from 'react'

export default function FormationDetailIntro({ tags, introTitle, introDescription }) {
  return (
    <section className="formation-ref-intro">
      <div className="container">
        <div className="formation-ref-intro-grid">
          <div className="formation-ref-intro-text">
            {tags && tags.length > 0 && (
              <div className="formation-ref-tags">
                {tags.map((tag, i) => (
                  <span key={i} className="formation-ref-tag">{tag}</span>
                ))}
              </div>
            )}
            <h2 dangerouslySetInnerHTML={{ __html: introTitle }} />
            <p>{introDescription}</p>
          </div>
          <div className="formation-ref-intro-card">
            <div className="formation-ref-intro-card-inner">
              <i className="fas fa-graduation-cap" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
