import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/layout/Container'
import ContactSection from '../components/sections/ContactSection'

const approcheCards = [
  { icon: 'fas fa-puzzle-piece', title: 'Solutions sur mesure', description: 'Nous concevons des formations adaptées aux besoins spécifiques de chaque entreprise, pour garantir des parcours parfaitement alignés avec vos enjeux terrains et vos objectifs opérationnels.' },
  { icon: 'fas fa-bullseye', title: 'Focus sur votre cœur de métier', description: 'En développant les compétences clés de vos équipes, nous vous permettons de renforcer votre organisation et de vous concentrer pleinement sur les priorités stratégiques de votre activité.' },
  { icon: 'fas fa-chart-line', title: 'Développement des compétences', description: 'Nos formations en efficacité professionnelle, management et vente sont conçues pour renforcer les compétences essentielles, améliorer la performance collective et soutenir durablement la croissance de votre entreprise.' },
]

const methodes = [
  { num: '01', title: 'Formations Inter et Intra Entreprise', p: 'Des programmes adaptés à votre environnement professionnel' },
  { num: '02', title: 'Formations Individuelles ou en Groupe', p: 'Des sessions flexibles pour répondre à vos besoins spécifiques, que ce soit en one-to-one ou en équipe.' },
  { num: '03', title: 'Couverture Nationale', p: 'Nos formateurs se déplacent dans toute la France pour assurer des formations sur site.' },
  { num: '04', title: 'Programmes Sur Mesure', p: "Des formations d'une journée à plusieurs jours, conçues pour répondre précisément à vos exigences professionnelles." },
]

const roadmapItems = [
  { icon: 'fas fa-clipboard-check', title: 'Conception Minutieuse', p: "Élaboration soignée de chaque programme pour une expérience d'apprentissage optimale." },
  { icon: 'fas fa-user-check', title: 'Réponse Personnalisée', p: 'Adaptation de nos formations aux besoins spécifiques de chaque client.' },
  { icon: 'fas fa-chart-line', title: 'Amélioration Continue', p: 'Évaluation et perfectionnement constants de nos services et méthodes.' },
  { icon: 'fas fa-medal', title: 'Excellence Reconnue', p: 'Notre certification Qualiopi témoigne de notre engagement envers la qualité.' },
]

const hexagons = [
  { icon: 'fas fa-graduation-cap', title: 'Expertise', p: "25+ ans d'expérience" },
  { icon: 'fas fa-cogs', title: 'Sur Mesure', p: 'Solutions adaptées' },
  { icon: 'fas fa-certificate', title: 'Qualiopi', p: 'Qualité certifiée' },
  { icon: 'fas fa-handshake', title: 'Personnalisé', p: 'Approche unique' },
  { icon: 'fas fa-map-marked-alt', title: 'National', p: 'Couverture France' },
  { icon: 'fas fa-chart-line', title: 'Innovation', p: 'Amélioration continue' },
]

export default function AProposPage() {
  return (
    <>
      <section className="a-propos-hero">
        <Container>
          <div className="a-propos-hero-content">
            <h1>Découvrez FormaSecret</h1>
            <p>Une expertise confirmée en efficacité professionnelle, management et développement commercial, enrichie par plus de 25 ans d'expérience.</p>
          </div>
        </Container>
      </section>

      <section className="histoire-fondation">
        <Container>
          <h2>Notre Histoire</h2>
          <div className="histoire-content">
            <div className="histoire-image">
              <img src="/assets/images/loddo.jpg" alt="Stéphanie Loddo, fondatrice de FormaSecret" />
            </div>
            <div className="histoire-text">
              <h3>FormaSecret : Une expertise de plus de 25 ans.</h3>
              <h4>⭐ NOTRE HISTOIRE – FORMASECRET</h4>
              <p className="text-justify"><strong>FormaSecret est un organisme de formation spécialisé en efficacité professionnelle, management et performance commerciale. Fondé et dirigé par Stéphanie Loddo, FormaSecret s'appuie sur 25 ans d'expérience professionnelle, dont 10 années dédiées à l'accompagnement des entreprises dans le développement de leurs compétences.</strong></p>
              <p className="text-justify">Créé avec la volonté d'apporter des solutions concrètes, modernes et immédiatement opérationnelles, FormaSecret place l'humain au cœur de sa pédagogie. Chaque formation est conçue pour renforcer la posture, la confiance et l'efficacité de chacun, afin de générer plus de performance, d'engagement et d'autonomie au sein des équipes.</p>
              <p className="text-justify"><strong>FormaSecret a progressivement enrichi son expertise pour accompagner les entreprises avec des méthodes modernes, certifiées DISC Flow® et conformes au référentiel QUALIOPI.</strong> Cette démarche garantit des formations structurées, exigeantes et alignées avec les standards actuels de la montée en compétences.</p>
              <h4>⭐ L'ACADÉMIE DU MANAGEMENT ET DE LA VENTE</h4>
              <p className="text-justify">Pour répondre aux besoins croissants des dirigeants, managers et équipes commerciales, FormaSecret a créé <strong>l'Académie du Management et de la Vente.</strong> Cette Académie propose des parcours structurés, modulables et orientés résultats, permettant aux entreprises d'accompagner leurs collaborateurs sur le long terme.</p>
              <p className="text-justify">Elle incarne notre vision : <strong>Former différemment, accompagner durablement, élever les compétences avec exigence, méthode et humanité.</strong></p>
              <h4>⭐ UNE DÉMARCHE QUALITÉ RECONNUE</h4>
              <p className="text-justify"><strong>FormaSecret est officiellement certifié QUALIOPI</strong>, une reconnaissance attestant de la qualité de ses processus pédagogiques, de son engagement envers les entreprises et du sérieux de son accompagnement.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="notre-approche">
        <Container>
          <h2>Notre Approche</h2>
          <div className="approche-grid">
            {approcheCards.map((card, i) => (
              <div key={i} className="approche-card">
                <div className="approche-icon"><i className={card.icon} /></div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="methodes-formation">
        <Container>
          <h2>Nos Méthodes de Formation</h2>
          <br />
          <div className="methodes-content">
            <div className="methodes-image">
              <img src="/assets/images/Formasecret_logo_condens%C3%A9_couleurs.png" alt="Méthodes de formation FormaSecret" />
            </div>
            <div className="methodes-list">
              {methodes.map((m, i) => (
                <div key={i} className="methode-item">
                  <span className="methode-number">{m.num}</span>
                  <div className="methode-info">
                    <h3>{m.title}</h3>
                    <p>{m.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="engagement-qualite">
        <Container>
          <h2>Notre Engagement Qualité</h2>
          <br />
          <div className="qualite-roadmap">
            {roadmapItems.map((item, i) => (
              <div key={i} className="roadmap-item">
                <div className="roadmap-content">
                  <div className="roadmap-icon"><i className={item.icon} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.p}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pourquoi-choisir">
        <Container>
          <h2>Pourquoi Choisir FormaSecret</h2>
          <div className="choix-hexagrid">
            {hexagons.map((h, i) => (
              <div key={i} className="hexagon">
                <div className="hexagon-content">
                  <i className={h.icon} />
                  <h3>{h.title}</h3>
                  <p>{h.p}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  )
}
