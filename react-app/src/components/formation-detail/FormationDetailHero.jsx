import React from 'react'
import Button from '../ui/Button'

export default function FormationDetailHero({ heroTitle, heroSubtitle, heroCtaText, heroImage, heroImageAlt }) {
  return (
    <section className="formation-ref-hero">
      <div className="formation-ref-hero-inner">
        <div className="formation-ref-hero-image">
          <img src={heroImage} alt={heroImageAlt || heroTitle} />
        </div>
        <div className="formation-ref-hero-content">
          <h1>{heroTitle}</h1>
          <p className="formation-ref-hero-subtitle">{heroSubtitle}</p>
          <Button to="/#contact" variant="dark" size="md">{heroCtaText}</Button>
        </div>
      </div>
    </section>
  )
}
