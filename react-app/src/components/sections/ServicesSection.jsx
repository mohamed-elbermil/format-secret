import React from 'react'
import ServiceCard from '../cards/ServiceCard'
import Container from '../layout/Container'
import { services } from '../../data/services'
import '@/assets/css/components/services.css'

export default function ServicesSection() {
  return (
    <section className="svc-section" aria-labelledby="svc-title">
      <Container>

        {/* ── En-tête ── */}
        <div className="svc-header">
          <p className="svc-header__eyebrow">Nos domaines d'expertise</p>

          <h2 id="svc-title" className="svc-header__title">
            Des formations <em>certifiées</em>
            <br />
            pour chaque ambition
          </h2>

          <p className="svc-header__subtitle">
            Efficacité professionnelle, management, vente — trois pôles de compétences
            pour accompagner vos collaborateurs à chaque étape de leur développement.
          </p>

          {/* Ligne décorative */}
          <div className="svc-header__rule" aria-hidden="true">
            <span className="svc-header__rule-line" />
            <span className="svc-header__rule-diamond" />
            <span className="svc-header__rule-line" />
          </div>
        </div>

        {/* ── Grille de cartes ── */}
        <div className="svc-grid">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>

      </Container>
    </section>
  )
}
