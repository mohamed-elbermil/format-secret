import React from 'react'
import AdvantageCard from '../cards/AdvantageCard'
import Container from '../layout/Container'
import { advantages } from '../../data/advantages'
import '@/assets/css/components/advantages.css'

const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export default function AdvantagesSection() {
  return (
    <section className="adv-section" aria-labelledby="adv-title">
      <Container>

        {/* ── En-tête ── */}
        <div className="adv-header">
          <p className="adv-header__eyebrow">
            <span className="adv-header__eyebrow-line" aria-hidden="true" />
            Pourquoi nous choisir
            <span className="adv-header__eyebrow-line" aria-hidden="true" />
          </p>

          <h2 id="adv-title" className="adv-header__title">
            Nos avantages <em>clés</em>
          </h2>

          <p className="adv-header__subtitle">
            Des formations concrètes, animées par des experts praticiens, pour développer
            des compétences utiles et immédiatement applicables en situation de travail.
          </p>
        </div>

        {/* ── Grille 2×2 ── */}
        <div className="adv-grid">
          {advantages.map((adv) => (
            <AdvantageCard key={adv.id} {...adv} />
          ))}
        </div>

        {/* ── CTA bas de section ── */}
        <div className="adv-footer">
          <a href="/#contact" className="adv-footer__cta">
            Demander un devis personnalisé
            <IconArrow />
          </a>
        </div>

      </Container>
    </section>
  )
}
