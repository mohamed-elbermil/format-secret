import React from 'react'
import { Link } from 'react-router-dom'

/* ── Icônes SVG par domaine ── */
const DomainIcon = ({ badge }) => {
  if (badge === 'Efficacité') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    )
  }
  if (badge === 'Management') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
  // Vente
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6"  y1="20" x2="6"  y2="16" />
    </svg>
  )
}

const IconArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export default function ServiceCard({ image, alt, badge, title, description, link = '/formations' }) {
  return (
    <article className="svc-card">

      {/* Zone image + badge domaine */}
      <div className="svc-card__image">
        <img src={image} alt={alt} loading="lazy" />
        <span className="svc-card__badge" aria-label={`Domaine : ${badge}`}>
          {badge}
        </span>
      </div>

      {/* Corps */}
      <div className="svc-card__body">

        {/* Icône domaine */}
        <div className="svc-card__icon" aria-hidden="true">
          <DomainIcon badge={badge} />
        </div>

        <h3 className="svc-card__title">{title}</h3>
        <p className="svc-card__desc">{description}</p>

        {/* Lien "En savoir plus" */}
        <Link to={link} className="svc-card__link">
          En savoir plus
          <IconArrow />
        </Link>

      </div>
    </article>
  )
}
