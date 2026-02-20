import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import Container from '../components/layout/Container'
import FormationBlockCard from '../components/cards/FormationBlockCard'
import FormationModal from '../components/formations/FormationModal'
import ContactSection from '../components/sections/ContactSection'
import { formationCategories } from '../data/formations'
import { formations } from '../data/formations'
import { ntcBlocksList } from '../data/formationNtc'
import { keyFigures } from '../data/figures'
import FigureCard from '../components/cards/FigureCard'

const modalites = [
  { icon: 'fas fa-users', title: 'Formations en Groupe', description: "Favorise l'échange et la collaboration entre participants." },
  { icon: 'fas fa-user', title: 'Formations Individuelles', description: 'Approche personnalisée adaptée à vos besoins spécifiques.' },
  { icon: 'fas fa-map-marked-alt', title: 'Couverture Nationale', description: 'Nous nous déplaçons sur toute la France pour vos formations.' },
]

const faqItems = [
  { q: 'Quelles sont les modalités de formation ?', a: 'Nous proposons des formations en présentiel. Nos formations peuvent être individuelles ou en groupe, selon vos besoins.' },
  { q: 'Comment financer ma formation ?', a: 'Si votre entreprise compte moins de 50 salariés, vous avez la possibilité de solliciter un financement auprès de votre OPCO (Opérateur de Compétences) grâce à notre certification Qualiopi.' },
  { q: "Quelle est la durée moyenne d'une formation ?", a: "La durée varie selon le type de formation, allant d'une journée à plusieurs jours. Nous adaptons la durée en fonction de vos objectifs et disponibilités." },
  { q: 'Comment sont évalués les acquis ?', a: "Nous utilisons diverses méthodes d'évaluation, incluant des exercices pratiques, des mises en situation, et des tests de connaissances, pour assurer que les objectifs d'apprentissage sont atteints." },
  { q: 'Puis-je personnaliser mon programme de formation ?', a: 'Oui, toutes nos formations sont personnalisables. FormaSecret s\'adapte aux besoins et attentes de chaque entreprise afin de répondre au mieux à votre demande.' },
]

export default function FormationsPage() {
  const [modalFormationKey, setModalFormationKey] = useState(null)

  return (
    <>
      <section className="hero-formations">
        <Container>
          <div className="hero-formations-content">
            <div className="hero-text">
              <h1>Nos Formations Professionnelles</h1>
              <p>Des programmes sur mesure pour développer vos compétences et booster votre carrière</p>
              <Button to="/#contact" variant="primary" size="md">Contactez-nous</Button>
            </div>
            <div className="hero-visual">
              <div className="hero-icon icon-1"><i className="fas fa-graduation-cap" /></div>
              <div className="hero-icon icon-2"><i className="fas fa-chart-line" /></div>
              <div className="hero-icon icon-3"><i className="fas fa-users" /></div>
              <div className="hero-shape" />
            </div>
          </div>
        </Container>
      </section>

      <section className="domaines-intervention">
        <Container>
          <h2>Nos Domaines d'Intervention</h2>
          <p className="instruction">Cliquez sur une formation pour en savoir plus et télécharger le PDF.</p>
          <div className="domaines-grid">
            <div className="domaine-card">
              <div className="domaine-icon"><i className="fas fa-briefcase" /></div>
              <h3>Nos Formations</h3>
              <div className="formation-categories">
                {formationCategories.map((cat, i) => (
                  <div key={i} className="formation-category">
                    <h4 className="category-title"><i className={cat.icon} /> {cat.title}</h4>
                    <ul>
                      {cat.items.map((item) => (
                        <li
                          key={item.key}
                          onClick={() => formations[item.key] && setModalFormationKey(item.key)}
                          onKeyDown={(e) => e.key === 'Enter' && formations[item.key] && setModalFormationKey(item.key)}
                          role="button"
                          tabIndex={0}
                          data-formation={item.key}
                        >
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="domaine-card sur-mesure">
              <div className="domaine-icon"><i className="fas fa-cogs" /></div>
              <h3>Formation Sur Mesure</h3>
              <p className="text-justify"><strong>FormaSecret accompagne les entreprises avec des formations entièrement personnalisées, conçues pour répondre précisément à leurs enjeux opérationnels et humains.</strong> Au-delà de notre catalogue, nous développons des dispositifs sur mesure, adaptés à vos objectifs, à votre organisation et au niveau de vos équipes.</p>
              <p className="text-justify">Que vous souhaitiez renforcer des compétences clés, accompagner un changement interne ou structurer un parcours de montée en compétences, <strong>nos formateurs experts créent des programmes ciblés et immédiatement applicables.</strong> Chaque parcours est pensé pour optimiser l'apprentissage, favoriser l'adhésion et garantir un impact concret sur le terrain.</p>
              <p className="text-justify">Avec FormaSecret, bénéficiez d'une <strong>approche flexible, experte et orientée résultats</strong>, entièrement dédiée à la réussite de vos collaborateurs et à la performance de votre entreprise.</p>
              <div className="contact-btn-sur-mesure"><Button to="/#contact" variant="primary" size="md">Contactez Nous</Button></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="formation-blocks">
        <Container>
          <div className="formation-blocks-grid">
            {ntcBlocksList.map((block, i) => (
              <FormationBlockCard key={i} {...block} />
            ))}
          </div>
        </Container>
      </section>

      <FormationModal formationKey={modalFormationKey} onClose={() => setModalFormationKey(null)} />

      <section className="modalites-formation">
        <Container>
          <h2>Modalités de Formation</h2>
          <div className="modalites-flex">
            {modalites.map((m, i) => (
              <div key={i} className="modalite-item">
                <div className="modalite-icon"><i className={m.icon} /></div>
                <h3>{m.title}</h3>
                <p>{m.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="key-figures">
        <Container>
          <h2>NOS CHIFFRES CLÉS</h2>
          <div className="figures-grid">
            {keyFigures.map((f, i) => (
              <FigureCard key={i} {...f} />
            ))}
          </div>
        </Container>
      </section>

      <section className="faq">
        <Container>
          <h2>Foire Aux Questions</h2>
          <div className="faq-grid">
            {faqItems.map((item, i) => (
              <div key={i} className="faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="certification">
        <Container>
          <h2>Notre Certification</h2>
          <div className="qualiopi-content">
            <div className="qualiopi-logo">
              <a href="https://certifopac.fr/qualiopi/certification/verification/?siren=911922540" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/logo-qualiopi-valide-400x179.png" alt="Logo Certification Qualiopi" />
              </a>
            </div>
            <div className="qualiopi-info">
              <h3>Certification Qualiopi</h3>
              <p>FormaSecret est fière d'être certifiée Qualiopi. Cette certification atteste de la qualité du processus mis en œuvre par les prestataires d'actions concourant au développement des compétences et permet une plus grande lisibilité de l'offre de formation auprès des entreprises et des usagers.</p>
              <ul>
                <li>Gage de qualité des processus de formation</li>
                <li>Reconnaissance officielle de notre professionnalisme</li>
                <li>Assurance d'un suivi rigoureux et d'une amélioration continue</li>
              </ul>
              <p className="verify-link">
                <a href="https://certifopac.fr/qualiopi/certification/verification/?siren=911922540" target="_blank" rel="noopener noreferrer">Vérifier notre certification Qualiopi</a>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  )
}
