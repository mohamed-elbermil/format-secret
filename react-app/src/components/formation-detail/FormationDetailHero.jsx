import React from 'react'
import Button from '../ui/Button'
import Breadcrumb from '../ui/Breadcrumb'

export default function FormationDetailHero({ heroTitle, heroSubtitle, heroCtaText, heroImage, heroImageAlt }) {
  return (
    <>
      <div className="bc-banner container" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="container">
          <Breadcrumb items={[
            { label: "Accueil",    href: "/" },
            { label: "Formations", href: "/formations" },
            { label: heroTitle },
          ]} />
        </div>
      </div>
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
    </>
  )
}
