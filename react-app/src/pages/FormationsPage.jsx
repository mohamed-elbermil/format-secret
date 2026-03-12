import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import FormationModal from "../components/formations/FormationModal";
import { formations } from "../data/formations";
import "../styles/FormationsPage.css";

// Données des formations formatées pour le design minimaliste
const formCards = [
  {
    key: 'formation3',
    title: 'Pratiques managériales',
    duration: '2 jours',
    level: 'Intermédiaire',
    description: 'Développez votre leadership et optimisez votre impact managérial',
    category: 'Management',
    satisfaction: '100%',
    rating: '9/10',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'formation7',
    title: 'Prise de parole en public',
    duration: '2 jours',
    level: 'Tous niveaux',
    description: 'Gagnez en aisance et en confiance pour vos interventions publiques',
    category: 'Communication',
    satisfaction: '95%',
    rating: '8.5/10',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'formation5',
    title: 'Techniques de vente',
    duration: '2 jours',
    level: 'Intermédiaire',
    description: 'Maîtrisez les techniques de vente et augmentez votre performance',
    category: 'Commercial',
    satisfaction: '88%',
    rating: '9/10',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'formation8',
    title: 'Gestion du temps',
    duration: '1 jour',
    level: 'Tous niveaux',
    description: 'Optimisez votre organisation et votre productivité',
    category: 'Efficacité',
    satisfaction: '100%',
    rating: '10/10',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'formation16',
    title: 'Accueil performant',
    duration: '1 jour',
    level: 'Tous niveaux',
    description: 'Améliorez votre accueil physique et téléphonique',
    category: 'Communication',
    satisfaction: '92%',
    rating: '8.8/10',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b8f50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'formation14',
    title: 'Écrits professionnels',
    duration: '1 jour',
    level: 'Tous niveaux',
    description: 'Perfectionnez vos écrits pour plus d\'impact',
    category: 'Communication',
    satisfaction: '94%',
    rating: '8.7/10',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'formation15',
    title: 'Réunions efficaces',
    duration: '1 jour',
    level: 'Tous niveaux',
    description: 'Transformez vos réunions en moments productifs',
    category: 'Efficacité',
    satisfaction: '91%',
    rating: '8.9/10',
    image: 'https://images.unsplash.com/photo-1515189021306-79d6e3193a4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    key: 'formation21',
    title: 'Sauveteur Secouriste',
    duration: '2 jours',
    level: 'Tous niveaux',
    description: 'Devenez acteur essentiel de la sécurité au travail',
    category: 'Sécurité',
    satisfaction: '98%',
    rating: '9.2/10',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }
];

export default function FormationsPage() {
  const [modalFormationKey, setModalFormationKey] = useState(null);

  return (
    <>
      {/* Hero Section - Minimaliste et percutant */}
      <section className="formations-hero">
        <Container>
          <div className="hero-content">
            <h1>Formations qui transforment</h1>
            <p className="hero-subtitle">
              Développez vos compétences avec des formations certifiées et orientées résultats
            </p>
          </div>
        </Container>
      </section>

      {/* Grille de Formations - Design épuré */}
      <section className="formations-grid-section">
        <Container>
          <div className="section-header">
            <h2>Nos formations certifiées</h2>
            <p className="section-subtitle">Des programmes conçus pour votre développement professionnel</p>
          </div>
          
          <div className="formations-grid">
            {formCards.map((card) => (
              <div 
                key={card.key}
                className="formation-card"
                onClick={() => setModalFormationKey(card.key)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setModalFormationKey(card.key)}
              >
                <div className="card-image-container">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="card-image"
                  />
                  <div className="card-badge">{card.category}</div>
                </div>
                
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">{card.title}</h3>
                    <div className="card-meta">
                      <div className="meta-item">
                        <i className="fas fa-clock"></i>
                        <span>{card.duration}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-signal"></i>
                        <span>{card.level}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="card-description">{card.description}</p>
                  
                  <div className="card-stats">
                    <div className="stat-item">
                      <div className="stat-value">{card.satisfaction}</div>
                      <div className="stat-label">Satisfaction</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">{card.rating}</div>
                      <div className="stat-label">Note moyenne</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Preuve Sociale - Discrète mais puissante */}
      <section className="social-proof-section">
        <Container>
          <div className="social-proof-content">
            <h3>Ils nous font confiance</h3>
            <div className="testimonial">
              <p className="testimonial-text">
                "Une approche pédagogique remarquable. Les formateurs sont experts et les contenus directement applicables. Vraiment utile pour notre développement professionnel."
              </p>
              <div className="testimonial-author">— Marie Laurent, Responsable RH</div>
            </div>
            <div className="certification-badge">
              <img 
                src="/assets/images/logo-qualiopi-valide-400x179.png" 
                alt="Certification Qualiopi" 
              />
              <span>Certification Qualiopi - Gage de qualité</span>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section - Bouton unique et percutant */}
      <section className="cta-section">
        <Container>
          <div className="cta-content">
            <h2>Prêt à développer vos compétences ?</h2>
            <p className="cta-subtitle">
              Contactez-nous pour discuter de vos besoins et co-construire votre parcours de formation
            </p>
            <Link to="/#contact" className="cta-button">
              Démarrer une conversation
            </Link>
          </div>
        </Container>
      </section>

      {/* Contact Section - Minimaliste */}
      <section className="contact-section">
        <Container>
          <div className="contact-content">
            <h2>Contact</h2>
            <div className="contact-grid">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <strong>Téléphone</strong>
                  <span>04 58 28 04 29</span>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <strong>Email</strong>
                  <span>contact@formasecret.fr</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Modal */}
      <FormationModal
        formationKey={modalFormationKey}
        onClose={() => setModalFormationKey(null)}
      />
    </>
  );
}
