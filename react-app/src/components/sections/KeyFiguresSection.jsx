import React from 'react'
import FigureCard from '../cards/FigureCard'
import Container from '../layout/Container'
import { keyFigures } from '../../data/figures'
import '@/assets/css/components/key-figures.css'

const IconCheck = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const reassuranceItems = [
  { label: <><strong>Certifié Qualiopi</strong> — gage de qualité reconnu par l'État</> },
  { label: <><strong>Financement OPCO</strong> — prise en charge facilitée</> },
  { label: <><strong>Formateurs praticiens</strong> — experts issus du terrain</> },
]

export default function KeyFiguresSection() {
  return (
    <section className="kf-section" aria-labelledby="kf-title">
      <Container>

        {/* ── En-tête ── */}
        <div className="kf-header">
          <p className="kf-header__eyebrow">Des résultats, rien que des résultats</p>

          <h2 id="kf-title" className="kf-header__title">
            Nos chiffres <em>clés</em>
          </h2>

          <p className="kf-header__subtitle">
            Des indicateurs mesurés et vérifiables, qui reflètent notre engagement
            quotidien envers la qualité pédagogique.
          </p>
        </div>

        {/* ── Grille des chiffres ── */}
        <div className="kf-grid" role="list">
          {keyFigures.map((figure) => (
            <FigureCard key={figure.id} {...figure} />
          ))}
        </div>

        {/* ── Bandeau de réassurance ── */}
        <div className="kf-footer" aria-label="Nos engagements">
          {reassuranceItems.map((item, i) => (
            <div key={i} className="kf-footer__item">
              <IconCheck />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}
