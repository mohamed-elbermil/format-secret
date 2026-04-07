import React from 'react'
import { Link } from 'react-router-dom'
import '@/assets/css/components/formations-hero.css'

/* ── Icônes SVG ── */
const IconArrowDown = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </svg>
)

const IconSep = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

export default function FormationsHero() {
  const scrollToCatalogue = (e) => {
    e.preventDefault()
    document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="fh-section" aria-label="Bannière page Formations">

      {/* ── Fond photo + overlay ── */}
      <div className="fh-bg" aria-hidden="true">
        <img
          src="/assets/images/pexels-photo-8062280.jpeg"
          alt=""
          loading="eager"
          fetchpriority="high"
        />
      </div>

      {/* ── Contenu principal ── */}
      <div className="fh-inner container">

        {/* Fil d'Ariane */}
        <nav className="fh-breadcrumb" aria-label="Fil d'Ariane">
          <Link to="/">Accueil</Link>
          <span className="fh-breadcrumb-sep" aria-hidden="true">
            <IconSep />
          </span>
          <span className="fh-breadcrumb-current" aria-current="page">Formations</span>
        </nav>

        {/* Eyebrow */}
        <p className="fh-eyebrow">
          <span aria-hidden="true">●</span>
          Certifié Qualiopi · Financement OPCO accepté
        </p>

        {/* Titre H1 */}
        <h1 className="fh-title">
          Nos formations
          <br />
          <em>professionnelles</em>
        </h1>

        {/* Séparateur or */}
        <div className="fh-divider" aria-hidden="true" />

        {/* Sous-titre */}
        <p className="fh-subtitle">
          Des programmes sur mesure pour développer vos compétences en
          management, efficacité professionnelle et vente — animés par
          des experts praticiens.
        </p>

        {/* CTAs */}
        <div className="fh-ctas">
          <a
            href="#catalogue"
            className="fh-btn fh-btn--primary"
            onClick={scrollToCatalogue}
          >
            Voir le catalogue
            <IconArrowDown />
          </a>
          <a href="/#contact" className="fh-btn fh-btn--secondary">
            Nous contacter
          </a>
        </div>

      </div>

      {/* ── Vague de transition vers la section catalogue ── */}
      <div className="fh-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,50 L0,50 Z" fill="var(--clr-cream)" />
        </svg>
      </div>

    </section>
  )
}
