import React, { useState, useEffect, useRef } from "react";
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

// Données FAQ
const faqData = [
  {
    question: "Quelles sont les modalités de formation ?",
    answer: "Nous proposons des formations en présentiel, adaptées à vos disponibilités. Nos programmes peuvent être individuels ou en groupe, selon vos objectifs spécifiques."
  },
  {
    question: "Comment financer ma formation ?",
    answer: "Grâce à notre certification Qualiopi, vous pouvez bénéficier de financements via votre OPCO ou le CPF. Nous vous accompagnons dans toutes les démarches administratives."
  },
  {
    question: "Quelle est la durée moyenne d'une formation ?",
    answer: "Nos formations s'étendent de 1 à 2 jours, avec des programmes intensifs conçus pour un impact immédiat sur votre pratique professionnelle."
  },
  {
    question: "Les formations sont-elles personnalisables ?",
    answer: "Absolument ! Chaque formation peut être adaptée aux enjeux spécifiques de votre entreprise. Nous réalisons un audit préalable pour garantir la pertinence du contenu."
  },
  {
    question: "Comment sont évalués les acquis ?",
    answer: "Nous utilisons une approche multi-critères : mises en situation, projets pratiques, et évaluations formelles pour valider la maîtrise des compétences."
  }
];

export default function FormationsPage() {
  const [modalFormationKey, setModalFormationKey] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const figuresRef = useRef(null);

  // Animation des compteurs
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const numbers = entry.target.querySelectorAll('.figure-number');
            numbers.forEach((numberElement) => {
              const target = parseInt(numberElement.getAttribute('data-target'));
              let current = 0;
              const increment = target / 50;
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                numberElement.textContent = Math.floor(current);
              }, 30);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (figuresRef.current) {
      observer.observe(figuresRef.current);
    }

    return () => {
      if (figuresRef.current) {
        observer.unobserve(figuresRef.current);
      }
    };
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

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

      {/* Section Pour Qui ? */}
      <section className="target-audience-section">
        <Container>
          <div className="section-header">
            <h2>Pour qui ?</h2>
            <p className="section-subtitle">Des formations conçues pour les professionnels ambitieux</p>
          </div>
          
          <div className="audience-grid">
            <div className="audience-card">
              <div className="audience-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Managers</h3>
              <p>Renforcez votre leadership et optimisez l'impact de vos équipes</p>
            </div>
            
            <div className="audience-card">
              <div className="audience-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Équipes</h3>
              <p>Développez vos compétences collectives et votre performance</p>
            </div>
            
            <div className="audience-card">
              <div className="audience-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>Dirigeants</h3>
              <p>Accélérez votre développement professionnel et stratégique</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section Chiffres Clés */}
      <section className="key-figures-section">
        <Container>
          <div className="section-header">
            <h2>Ne nous croyez pas sur parole, croyez nos chiffres</h2>
            <p className="section-subtitle">L'impact réel de nos formations</p>
          </div>
          
          <div className="figures-grid" ref={figuresRef}>
            <div className="figure-card">
              <div className="figure-number" data-target="500">0</div>
              <div className="figure-label">Apprenants formés</div>
              <div className="figure-plus">+</div>
            </div>
            
            <div className="figure-card">
              <div className="figure-number" data-target="98">0</div>
              <div className="figure-label">Satisfaction</div>
              <div className="figure-percent">%</div>
            </div>
            
            <div className="figure-card">
              <div className="figure-number" data-target="15">0</div>
              <div className="figure-label">Ans d'expertise</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section Le Formateur */}
      <section className="trainer-section">
        <Container>
          <div className="trainer-content">
            <div className="trainer-image">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="Formateur expert FormaSecret"
              />
            </div>
            <div className="trainer-info">
              <h2>L'expertise au service de votre réussite</h2>
              <p>
                Avec plus de 15 ans d'expérience dans le développement des compétences, 
                notre formateur allie expertise pédagogique et connaissance approfondie des enjeux 
                d'entreprise. Une approche pragmatique et orientée résultats pour garantir 
                l'applicabilité immédiate des acquis.
              </p>
              <div className="trainer-credentials">
                <div className="credential-item">
                  <i className="fas fa-award"></i>
                  <span>Certifié Qualiopi</span>
                </div>
                <div className="credential-item">
                  <i className="fas fa-graduation-cap"></i>
                  <span>Expert en formation</span>
                </div>
                <div className="credential-item">
                  <i className="fas fa-chart-line"></i>
                  <span>Résultats prouvés</span>
                </div>
              </div>
            </div>
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

      {/* Modal */}
      <FormationModal
        formationKey={modalFormationKey}
        onClose={() => setModalFormationKey(null)}
      />
    </>
  );
}
