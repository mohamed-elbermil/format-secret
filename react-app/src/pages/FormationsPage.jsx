import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/layout/Container";
import FormationModal from "../components/formations/FormationModal";
import LeadMagnet from "../components/marketing/LeadMagnet";
import { formationsData, categories } from "../data/formationsData";
import { formations } from "../data/formations";
import "../styles/FormationsPage.css";

// Filtrer les formations par catégorie active
const getFilteredFormations = (activeCategory) => {
  if (!activeCategory) return [];
  if (activeCategory === 'all') return formationsData;
  return formationsData.filter(formation => formation.category === activeCategory);
};

// Mapping des IDs vers les clés du modal
const getFormationKey = (id) => {
  const mapping = {
    1: 'formation3',
    2: 'formation8', 
    3: 'formation5',
    4: 'formation15',
    5: 'formation16',
    6: 'formation7',
    7: 'formation14',
    8: 'formation21'
  };
  return mapping[id] || null;
};

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
  const [activeCategory, setActiveCategory] = useState(null);
  const [modalFormationKey, setModalFormationKey] = useState(null);

  // Obtenir les formations filtrées
  const filteredFormations = getFilteredFormations(activeCategory);

  // Gestion de la soumission du Lead Magnet
  const handleLeadMagnetSubmit = (email) => {
    console.log('Lead Magnet email submitted:', email);
    // Ici vous pouvez ajouter votre logique d'API pour envoyer l'email
    // Par exemple : await api.sendLeadMagnet(email);
  };

  // Animation des cartes au survol
  const cardHover = {
    whileHover: { 
      scale: 1.02, 
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 }
    }
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

      {/* Section Sélection Catégorie */}
      <section className="target-audience-section">
        <Container>
          <div className="section-header">
            <h2>Explorez nos formations</h2>
            <p className="section-subtitle">Choisissez votre domaine de développement</p>
          </div>
          
          {!activeCategory ? (
            <>
              <div className="audience-grid">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="audience-card"
                    onClick={() => setActiveCategory(category.id)}
                    style={{ borderTop: `4px solid ${category.color}` }}
                  >
                    <div className="audience-icon" style={{ background: `linear-gradient(135deg, ${category.color}, #7673c5)` }}>
                      <i className={`fas ${category.icon}`}></i>
                    </div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="see-all-formations">
                <button 
                  onClick={() => setActiveCategory('all')}
                  className="cta-button-picto-3"
                >
                  <i class="fa-solid fa-plus"></i>
                  Voir toutes les formations
                </button>
              </div>
            </>
          ) : (
            <div>
              <div className="selected-category-header">
                <button 
                  onClick={() => setActiveCategory(null)}
                  className="back-button"
                >
                  <i className="fas fa-arrow-left"></i>
                  Retour aux catégories
                </button>
                <h3>{activeCategory === 'all' ? 'Toutes nos formations' : categories.find(c => c.id === activeCategory)?.title}</h3>
                <p className="formation-count">{filteredFormations.length} formation{filteredFormations.length > 1 ? 's' : ''} disponible{filteredFormations.length > 1 ? 's' : ''}</p>
              </div>
              
              <div className="formations-grid">
                {filteredFormations.map((formation) => (
                  <motion.div
                    key={formation.id}
                    className="formation-card"
                    onClick={() => setModalFormationKey(getFormationKey(formation.id))}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setModalFormationKey(getFormationKey(formation.id))}
                    {...cardHover}
                  >
                    <div className="card-image-container">
                      <img 
                        src={formation.image} 
                        alt={formation.title}
                        className="card-image"
                      />
                      <div className="card-badge">{formation.category}</div>
                    </div>
                    
                    <div className="card-content">
                      <div className="card-header">
                        <h3 className="card-title">{formation.title}</h3>
                        <div className="card-meta">
                          <div className="meta-item">
                            <i className="fas fa-clock"></i>
                            <span>{formation.duration}</span>
                          </div>
                          <div className="meta-item">
                            <i className="fas fa-signal"></i>
                            <span>{formation.level}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="card-description">{formation.description}</p>
                      
                      <div className="card-stats">
                        <div className="stat-item">
                          <div className="stat-value" data-suffix="%">{formation.satisfaction.replace('%', '')}</div>
                          <div className="stat-label">Satisfaction</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-value">{formation.rating}</div>
                          <div className="stat-label">Note moyenne</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>


      {/* Section Contenu Sémantique - SEO */}
      <section className="seo-content-section">
        <Container>
          <article className="seo-content">
            <h2>Pourquoi choisir FormaSecret pour votre développement professionnel ?</h2>
            
            <div className="seo-columns">
              <div className="seo-column">
                <h3>Une expertise reconnue au service de votre performance</h3>
                <p>
                  FormaSecret s'impose comme un acteur référence dans le domaine de la formation professionnelle en France. Notre approche pédagogique innovante combine théorie et pratique pour garantir des résultats tangibles. Chaque programme est méticuleusement conçu par des experts métier, assurant une pertinence et une applicabilité immédiate dans votre environnement professionnel.
                </p>
                <p>
                  Notre certification Qualiopi témoigne de notre engagement qualité et vous ouvre l'accès à multiples dispositifs de financement. Que vous soyez une entreprise cherchant à former vos équipes ou un professionnel désireux d'évoluer, nous adaptons nos solutions à vos objectifs spécifiques.
                </p>
              </div>
              
              <div className="seo-column">
                <h3>Des formations qui transforment durablement les compétences</h3>
                <p>
                  L'excellence de nos formations repose sur trois piliers fondamentaux : un contenu actualisé en permanence, une pédagogie active et centrée sur les participants, et un suivi post-formation pour assurer la pérennité des acquis. Cette méthodologie éprouvée explique notre taux de satisfaction exceptionnel de 98%.
                </p>
                <p>
                  Nos interventions couvrent les enjeux stratégiques actuels : management, performance commerciale, communication impactante, et sécurité au travail. En choisissant FormaSecret, vous investissez dans un partenariat durable pour le développement des compétences clés de votre organisation.
                </p>
              </div>
            </div>
          </article>
        </Container>
      </section>


      {/* Section Lead Magnet - CRO Optimized */}
      <LeadMagnet onSubmit={handleLeadMagnetSubmit} />

      {/* Modal */}
      <FormationModal
        formationKey={modalFormationKey}
        onClose={() => setModalFormationKey(null)}
      />
    </>
  );
}
