import React from 'react'
import { Link } from 'react-router-dom'
import heroPeople from '../../assets/images/hero-people.png'
import '@/assets/css/components/hero.css'

/* ── Icônes SVG inline (pas d'emoji, pas de Font Awesome) ── */

const IconArrow = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export default function HeroSection() {
  return (
    <section className="hero-section" aria-label="Bannière principale FormaSecret">

      {/* ── Éléments de fond décoratifs ── */}
      <div className="hero-section__bg" aria-hidden="true">
        <div className="hero-section__bg-dots" />
        <div className="hero-section__bg-glow" />
        <div className="hero-section__bg-glow-2" />
      </div>

      {/* ── Contenu principal ── */}
      <div className="hero-section__inner container">

        {/* Colonne texte */}
        <div className="hero-section__text">

          {/* Eyebrow – label de confiance */}
          <p className="hero-section__eyebrow">
            <span className="hero-section__eyebrow-dot" aria-hidden="true" />
            Organisme de formation certifié Qualiopi
          </p>

          {/* Titre principal en Cormorant Garamond */}
          <h1 className="hero-section__title">
            Votre succès,
            <br />
            <em>c'est notre secret&nbsp;!</em>
          </h1>

          {/* Séparateur or */}
          <div className="hero-section__divider" aria-hidden="true" />

          {/* Sous-titre : 3 domaines */}
          <p className="hero-section__subtitle">
            Expert en <strong>efficacité professionnelle</strong>,{' '}
            <strong>management</strong> et <strong>vente &amp; commerce</strong> —
            des formations concrètes animées par des praticiens, pour des compétences
            immédiatement applicables en entreprise.
          </p>

          {/* Boutons CTA */}
          <div className="hero-section__ctas">
            <Link
              to="/formations"
              className="hero-section__cta hero-section__cta--primary"
            >
              Découvrir nos formations
              <IconArrow />
            </Link>
            <a
              href="/#contact"
              className="hero-section__cta hero-section__cta--secondary"
            >
              Nous contacter
            </a>
          </div>

          {/* Preuve sociale */}
          <div className="hero-section__proof">
            <span className="hero-section__stars" aria-label="5 étoiles sur 5">
              ★★★★★
            </span>
            <span className="hero-section__proof-text">
              Recommandé par <strong>+500 professionnels</strong>
            </span>
          </div>
        </div>

        {/* Colonne visuelle */}
        <div className="hero-section__visual" aria-hidden="true">
          <img
            src={heroPeople}
            alt="Apprenants et formateurs FormaSecret"
            className="hero-section__visual-img"
            loading="eager"
            fetchpriority="high"
          />

          {/* Badge flottant */}
          <div className="hero-section__badge">
            <span className="hero-section__badge-number">98%</span>
            <span className="hero-section__badge-label">de satisfaction</span>
          </div>
        </div>

      </div>

      {/* ── Vague de transition vers la section suivante ── */}
      <div className="hero-section__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="var(--clr-cream)" />
        </svg>
      </div>

    </section>
  )
}
