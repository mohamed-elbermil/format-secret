import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/layout/Container'
import ContactSection from '../components/sections/ContactSection'

export default function AcademiePage() {
  return (
    <>
      <section className="hero-secretariat">
        <Container>
          <div className="hero-content">
            <h1>Académie du Management et de la Vente</h1>
            <p>Des parcours sur mesure pour développer durablement les compétences managériales et commerciales de vos équipes.</p>
          </div>
          <div className="hero-visual">
            <div className="hero-icon icon-1"><i className="fas fa-chalkboard-teacher" /></div>
            <div className="hero-icon icon-2"><i className="fas fa-chart-line" /></div>
            <div className="hero-icon icon-3"><i className="fas fa-handshake" /></div>
            <div className="hero-shape" />
          </div>
        </Container>
      </section>

      <section className="secretariat-about">
        <Container>
          <h2>Former, structurer, faire progresser.</h2>
          <div className="about-content">
            <div className="about-text">
              <p>L'Académie du Management et de la Vente accompagne les entreprises dans la montée en compétences de leurs managers, commerciaux et équipes supports, du niveau débutant au niveau confirmé.</p>
              <p>Nous concevons des programmes de formation personnalisés, construits à partir de vos enjeux métiers, de votre culture d'entreprise et de vos objectifs de performance.</p>
              <p>Les formations sont animées par un réseau de formateurs experts, sélectionnés pour leur expérience opérationnelle, leur expertise pédagogique et leur capacité à rendre les apprentissages immédiatement transférables en situation professionnelle.</p>
              <a href="/#contact" className="cta-button">Construire votre parcours de formation</a>
            </div>
            <div className="about-image">
              <img src="/assets/images/pexels-photo-8062280.jpeg" alt="Services de secrétariat FormaSecret" />
            </div>
          </div>
        </Container>
      </section>

      <section className="secretariat-about">
        <Container>
          <h2>Nos expertises</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>La méthode DISC</h3>
              <p>Le DISC est un outil de référence pour développer un management plus efficace, une communication adaptée et une performance collective durable.</p>
              <p>Nos formations permettent de :</p>
              <ul className="about-features">
                <li><i className="fas fa-check-circle" /> Comprendre les différents profils comportementaux</li>
                <li><i className="fas fa-check-circle" /> Adapter son management et sa communication selon les interlocuteurs</li>
                <li><i className="fas fa-check-circle" /> Renforcer la cohésion d'équipe et prévenir les tensions</li>
                <li><i className="fas fa-check-circle" /> Mieux organiser les interactions et les dynamiques de groupe</li>
              </ul>
              <p>Profils DISC FLOW® sous licence</p>
              <p>Les participants bénéficient de l'établissement de leur profil DISC FLOW®, réalisé à partir d'outils certifiés et utilisés sous licence, avec une restitution concrète.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="secretariat-propositions">
        <Container>
          <h2>Nos parcours de formation</h2>
          <h3>Formations Managers</h3>
          <div className="propositions-grid">
            {[
              { icon: 'fas fa-briefcase', title: 'Les fondamentaux', items: ['Posture managériale', 'Communication', 'Gestion du temps', 'Leadership'] },
              { icon: 'fas fa-tasks', title: 'Nouveau Manager', items: ['Réussir sa prise de poste', 'Motiver et fédérer'] },
              { icon: 'fas fa-chart-line', title: 'Perfectionnement', items: ['Passer du manager au leader inspirant'] },
              { icon: 'fas fa-chart-line', title: 'Stratégique', items: ["Piloter l'avenir", 'Leadership visionnaire', 'Gouvernance', 'Gestion de crise'] },
            ].map((card, i) => (
              <div key={i} className="proposition-card">
                <div className="card-header">
                  <i className={card.icon} />
                  <h4>{card.title}</h4>
                </div>
                <div className="card-content">
                  <ul>
                    {card.items.map((item, j) => (
                      <li key={j}><i className="fas fa-check" /> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <h3>Formations Commerciaux</h3>
          <div className="propositions-grid">
            {[
              { icon: 'fas fa-briefcase', title: 'Débutant', items: ['Cycle de vente, prospection multicanal, relation client, argumentation, suivi.', 'Acquérir les bons réflexes pour transformer chaque contact en opportunité.'] },
              { icon: 'fas fa-tasks', title: 'Expert', items: ['Négaciation avancée, fidélisation, gestion des comptes clés, performance par les KPI.', 'Maîtriser les techniques avancées pour transformer chaque négociation en levier de croissance durable.'] },
              { icon: 'fas fa-chart-line', title: 'Sédentaire', items: ['Vente et conseil à distance, maîtrise des outils CRM, fidélisation téléphonique.', 'Optimiser sa communication à distance pour transformer chaque appel en relation durable.'] },
            ].map((card, i) => (
              <div key={i} className="proposition-card">
                <div className="card-header">
                  <i className={card.icon} />
                  <h4>{card.title}</h4>
                </div>
                <div className="card-content">
                  <ul>
                    {card.items.map((item, j) => (
                      <li key={j}><i className="fas fa-check" /> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p>Tous nos parcours sont modulables, combinables et construits sur mesure selon vos enjeux, votre niveau et vos objectifs.</p>
          <p style={{ fontWeight: 500, fontSize: '1.5rem', color: '#f7ab3f', textAlign: 'center' }}>Des parcours entièrement modulables, à construire selon vos besoins...</p>
        </Container>
      </section>

      <section className="clients-section">
        <Container>
          <h2>Ils nous font confiance</h2>
          <div className="clients-logos">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
              <img key={n} src={`/assets/images/logo-entreprise/logo${n}.png`} alt={`Logo Client ${n}`} />
            ))}
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  )
}
