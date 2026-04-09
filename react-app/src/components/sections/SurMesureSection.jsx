import React from 'react'
import Container from '../layout/Container'
import '@/assets/css/components/sur-mesure.css'

/* ── Icônes SVG ── */
const IconCheck = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)

/* Icônes des 3 points forts */
const IconAudit = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
)

const IconGroup = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const IconTarget = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

/* ── Données ── */
const strengths = [
  {
    Icon: IconAudit,
    title: 'Audit préalable',
    desc: 'Un diagnostic approfondi de vos besoins, de votre contexte métier et de vos objectifs avant toute conception de programme.',
  },
  {
    Icon: IconGroup,
    title: 'Formateurs praticiens',
    desc: 'Des experts issus du terrain, qui parlent le langage de votre secteur et adaptent les exemples à votre réalité opérationnelle.',
  },
  {
    Icon: IconTarget,
    title: 'Résultats mesurables',
    desc: 'Des indicateurs de progression définis en amont, un suivi post-formation et un bilan à 3 mois pour ancrer les acquis.',
  },
]

const checkItems = [
  'Adapté à votre secteur d\'activité et à votre culture d\'entreprise',
  'Certification Qualiopi reconnue par l\'État',
  'De 1 à plusieurs jours selon vos objectifs',
]

export default function SurMesureSection() {
  return (
    <section className="surm-section" aria-labelledby="surm-title">
      <Container>
        <div className="surm-grid">

          {/* ── Colonne gauche : argumentaire ── */}
          <div className="surm-left">

            <p className="surm-left__eyebrow">
              <span className="surm-left__eyebrow-line" aria-hidden="true" />
              Formation sur mesure
              <span className="surm-left__eyebrow-line" aria-hidden="true" />
            </p>

            <h2 id="surm-title" className="surm-left__title">
              Votre programme,
              <br />
              <em>vos exigences</em>
            </h2>

            <div className="surm-left__divider" aria-hidden="true" />

            <p className="surm-left__text">
              Chaque entreprise est unique. C'est pourquoi FormaSecret conçoit des
              formations <strong>100% sur mesure</strong>, pensées à partir de vos
              enjeux réels, de votre organisation et des compétences que vous souhaitez
              développer.
            </p>

            <p className="surm-left__text">
              Du diagnostic initial à l'évaluation des acquis, nous vous accompagnons
              à chaque étape pour garantir un <strong>retour sur investissement
              concret et mesurable</strong>.
            </p>

            <ul className="surm-left__checks" aria-label="Avantages de la formation sur mesure">
              {checkItems.map((item, i) => (
                <li key={i} className="surm-left__check-item">
                  <span className="surm-left__check-icon" aria-hidden="true">
                    <IconCheck />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Colonne droite : 3 points forts ── */}
          <div className="surm-right">
            {strengths.map(({ Icon, title, desc }, i) => (
              <div key={i} className="surm-point">
                <div className="surm-point__icon" aria-hidden="true">
                  <Icon />
                </div>
                <div>
                  <h3 className="surm-point__title">{title}</h3>
                  <p className="surm-point__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ── CTA centré en bas ── */}
        <div className="surm-footer">
          <a href="/#contact" className="surm-footer__cta">
            Parlons de votre projet
            <IconArrow />
          </a>
        </div>

      </Container>
    </section>
  )
}
