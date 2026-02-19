import React from 'react'

function StarRating({ count = 5 }) {
  return (
    <div className="formation-ref-stars" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <i key={i} className="fas fa-star" />
      ))}
    </div>
  )
}

export default function FormationDetailTestimonials({ testimonialsTitle, testimonials }) {
  if (!testimonials?.length) return null
  return (
    <section className="formation-ref-testimonials">
      <div className="container">
        <h2>{testimonialsTitle}</h2>
        <div className="formation-ref-testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="formation-ref-testimonial-card">
              <div className="formation-ref-testimonial-avatar">
                <i className="fas fa-user" />
              </div>
              <h4>{t.name}</h4>
              <StarRating count={t.stars ?? 5} />
              <p className="formation-ref-testimonial-quote">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
