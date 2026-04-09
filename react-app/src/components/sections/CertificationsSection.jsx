import React from 'react'
import Container from '../layout/Container'
import '@/assets/css/components/certifications.css'

/* ── Icône coche stylisée ── */
const IconCheck = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

/* ── Icône lien externe ── */
const IconExternal = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

/* ── SVG DISC FLOW® — 4 quadrants + centre ── */
const DiscFlowIcon = () => (
  <svg className="cert-card__disc-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="DISC FLOW® — 4 profils comportementaux" role="img">
    {/* Quadrant D — Dominance (or) */}
    <path d="M50 50 L50 8 A42 42 0 0 1 92 50 Z" fill="#C8922A" opacity="0.9" />
    {/* Quadrant I — Influence (navy clair) */}
    <path d="M50 50 L92 50 A42 42 0 0 1 50 92 Z" fill="#2C5F8A" opacity="0.9" />
    {/* Quadrant S — Stabilité (navy) */}
    <path d="M50 50 L50 92 A42 42 0 0 1 8 50 Z" fill="#1B2F4E" opacity="0.9" />
    {/* Quadrant C — Conformité (or pâle) */}
    <path d="M50 50 L8 50 A42 42 0 0 1 50 8 Z" fill="#8B6914" opacity="0.9" />
    {/* Séparateurs */}
    <line x1="50" y1="8" x2="50" y2="92" stroke="white" strokeWidth="1.5" opacity="0.4" />
    <line x1="8" y1="50" x2="92" y2="50" stroke="white" strokeWidth="1.5" opacity="0.4" />
    {/* Cercle blanc central */}
    <circle cx="50" cy="50" r="22" fill="white" />
    {/* Lettres DISC */}
    <text x="50" y="42" textAnchor="middle" fontFamily="serif" fontWeight="700" fontSize="8.5" fill="#C8922A">D</text>
    <text x="62" y="54" textAnchor="middle" fontFamily="serif" fontWeight="700" fontSize="8.5" fill="#2C5F8A">I</text>
    <text x="50" y="66" textAnchor="middle" fontFamily="serif" fontWeight="700" fontSize="8.5" fill="#1B2F4E">S</text>
    <text x="38" y="54" textAnchor="middle" fontFamily="serif" fontWeight="700" fontSize="8.5" fill="#8B6914">C</text>
  </svg>
)

/* ── Données certifications ── */
const qualiopi = {
  badge: 'Certifié',
  title: 'Certification Qualiopi',
  description:
    'FormaSecret est certifiée Qualiopi, la certification nationale qualité pour les prestataires de formation. Elle atteste de la qualité de nos processus pédagogiques et de notre engagement envers les apprenants.',
  items: [
    'Gage de qualité des processus de formation reconnu par l'État',
    'Condition nécessaire pour accéder aux financements publics de la formation',
    'Audit régulier garantissant un suivi rigoureux et transparent',
  ],
  link: {
    href: 'https://certifopac.fr/qualiopi/certification/verification/?siren=911922540',
    label: 'Vérifier notre certification sur certifopac.fr',
  },
}

const discFlow = {
  badge: 'Méthode',
  title: 'Méthode DISC FLOW®',
  description:
    'Le DISC FLOW® est un outil d'analyse comportementale qui permet à chaque apprenant de mieux se connaître, de comprendre ses modes de communication et d'optimiser ses interactions professionnelles.',
  items: [
    'Identification des profils comportementaux (Dominance, Influence, Stabilité, Conformité)',
    'Amélioration de la communication interpersonnelle et du travail en équipe',
    'Outil intégré dans nos parcours Management et Efficacité professionnelle',
  ],
  link: {
    href: 'https://www.profilsandco.com/disc-flow/',
    label: 'En savoir plus sur DISC FLOW®',
  },
}

function CertCard({ card, isDisc = false }) {
  return (
    <div className={`cert-card${isDisc ? ' cert-card--disc' : ''}`}>
      <div className="cert-card__stripe" aria-hidden="true" />
      <span className="cert-card__badge">{card.badge}</span>

      <div className="cert-card__body">

        {/* Visuel */}
        <div className="cert-card__visual">
          {isDisc ? (
            <DiscFlowIcon />
          ) : (
            <a
              href={card.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card__logo"
              aria-label="Voir la certification Qualiopi sur certifopac.fr"
            >
              <img
                src="/assets/images/logo-qualiopi-valide-400x179.png"
                alt="Logo Certification Qualiopi"
                loading="lazy"
              />
            </a>
          )}
        </div>

        {/* Titre */}
        <h3 className="cert-card__title">{card.title}</h3>

        {/* Description */}
        <p className="cert-card__desc">{card.description}</p>

        {/* Checklist */}
        <ul className="cert-card__list" aria-label={`Points clés — ${card.title}`}>
          {card.items.map((item, i) => (
            <li key={i} className="cert-card__list-item">
              <span className="cert-card__check" aria-hidden="true">
                <IconCheck />
              </span>
              {item}
            </li>
          ))}
        </ul>

        {/* Lien externe */}
        <a
          href={card.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-card__link"
        >
          {card.link.label}
          <IconExternal />
        </a>

      </div>
    </div>
  )
}

export default function CertificationsSection() {
  return (
    <section className="cert-section" aria-labelledby="cert-title">
      <Container>

        {/* ── En-tête ── */}
        <div className="cert-header">
          <p className="cert-header__eyebrow">Gage de sérieux et de qualité</p>

          <h2 id="cert-title" className="cert-header__title">
            Nos <em>certifications</em>
          </h2>

          <p className="cert-header__subtitle">
            Des garanties concrètes sur la qualité de nos formations et
            la rigueur de nos méthodes pédagogiques.
          </p>
        </div>

        {/* ── Grille 2 cards ── */}
        <div className="cert-grid">
          <CertCard card={qualiopi} />
          <CertCard card={discFlow} isDisc />
        </div>

        {/* Note légale discrète */}
        <p className="cert-note">
          La certification qualité a été délivrée au titre de la catégorie d'action suivante : <em>Actions de formation</em>.
          Numéro SIREN : 911922540.
        </p>

      </Container>
    </section>
  )
}
