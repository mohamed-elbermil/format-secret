import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import { formationsData, categories } from "../data/formationsData";
import "../styles/FormationsPage.css";

// Filtrer les formations par catégorie active
const getFilteredFormations = (activeCategory) => {
  if (!activeCategory) return [];
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

  // Obtenir les formations filtrées
  const filteredFormations = getFilteredFormations(activeCategory);

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
                <h3>{categories.find(c => c.id === activeCategory)?.title}</h3>
                <p className="formation-count">{filteredFormations.length} formation{filteredFormations.length > 1 ? 's' : ''} disponible{filteredFormations.length > 1 ? 's' : ''}</p>
              </div>
              
              <div className="formations-grid">
                {filteredFormations.map((formation) => (
                  <div
                    key={formation.id}
                    className="formation-card"
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
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
