import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Carte bloc formation (ex. NTC).
 * Réutilisable pour toute formation avec image, label, titre et liste d'infos.
 * Cliquable : redirige vers la page détaillée de la formation.
 */
export default function FormationBlockCard({ id, slug, image, imageAlt, label, title, infoItems }) {
  // Utilise le slug pour l'URL (plus SEO-friendly) ou l'ID en fallback
  const formationPath = `/formation-ntc/${slug || id}`

  return (
    <Link to={formationPath} className="formation-block-card-link">
      <div className="formation-block-card">
        <div className="formation-block-image">
          <img src={image} alt={imageAlt ?? title} />
        </div>
        <div className="formation-block-content">
          {label && <p className="formation-block-label">{label}</p>}
          <h3 className="formation-block-title">{title}</h3>
          <div className="formation-block-info">
            {infoItems?.map((text, index) => (
              <div key={index} className="formation-info-item">
                <i className="fas fa-calendar-alt" aria-hidden="true" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
