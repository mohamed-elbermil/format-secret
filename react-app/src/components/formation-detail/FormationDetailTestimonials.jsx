import React from 'react'

export default function FormationDetailTestimonials({ testimonialsTitle, testimonials }) {
  if (!testimonials?.length) return null
  return (
    <section className="fd-testimonials">
      <div className="container">
        <div className="fd-section-header">
          <span className="fd-section-eyebrow">Retours d'expérience</span>
          <h2 className="fd-section-title">
            {testimonialsTitle || <>Ils nous font <em>confiance</em></>}
          </h2>
        </div>
        <div className="fd-testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={i} className="fd-testimonial-card">
              <div className="fd-testimonial-card__avatar" aria-hidden="true">
                <i className="fas fa-user" />
              </div>
              <h4>{t.name}</h4>
              <div className="fd-testimonial-card__stars" aria-label={`${t.stars ?? 5} étoiles sur 5`}>
                {'★'.repeat(t.stars ?? 5)}
              </div>
              <p>"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
