import React from 'react'
import { Link } from 'react-router-dom'
import '@/assets/css/components/formation-detail.css'

const IconSep = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)
const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)
const IconClock = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
)

export default function FormationDetailHero({ heroTitle, heroSubtitle, heroCtaText, heroImage, heroImageAlt, tags }) {
  return (
    <section className="fd-hero" aria-label={heroTitle}>
      <div className="fd-hero__inner container">

        {/* Colonne texte */}
        <div className="fd-hero__text">
          <nav className="fd-hero__breadcrumb" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <span className="fd-hero__breadcrumb-sep"><IconSep /></span>
            <Link to="/titres-professionnels">Titres Professionnels</Link>
            <span className="fd-hero__breadcrumb-sep"><IconSep /></span>
            <span aria-current="page">{heroTitle}</span>
          </nav>

          <p className="fd-hero__eyebrow">
            <span aria-hidden="true">●</span>
            Titre Professionnel · Certifié Qualiopi
          </p>

          <h1 className="fd-hero__title">{heroTitle}</h1>

          <div className="fd-hero__divider" aria-hidden="true" />

          {heroSubtitle && (
            <p className="fd-hero__subtitle">{heroSubtitle}</p>
          )}

          {tags && tags.length > 0 && (
            <div className="fd-hero__tags">
              {tags.map((tag, i) => (
                <span key={i} className="fd-hero__tag">{tag}</span>
              ))}
            </div>
          )}

          <div className="fd-hero__ctas">
            <a href="/#contact" className="fd-hero__btn fd-hero__btn--primary">
              {heroCtaText || "Je m'inscris"} <IconArrow />
            </a>
            <Link to="/titres-professionnels" className="fd-hero__btn fd-hero__btn--secondary">
              Tous les titres pro
            </Link>
          </div>
        </div>

        {/* Colonne visuelle */}
        {heroImage && (
          <div className="fd-hero__visual">
            <img src={heroImage} alt={heroImageAlt || heroTitle} className="fd-hero__img" loading="eager" />
            <div className="fd-hero__img-badge">
              <IconClock /> Bac+2 reconnu par l'État
            </div>
          </div>
        )}
      </div>

      <div className="fd-hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,50 L0,50 Z" fill="#fff" />
        </svg>
      </div>
    </section>
  )
}
