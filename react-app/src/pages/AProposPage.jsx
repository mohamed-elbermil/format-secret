import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import ContactSection from "../components/sections/ContactSection";
import useScrollToTop from "../hooks/useScrollToTop";

const statistics = [
  {
    number: "25+",
    label: "Ans d'expérience",
    description: "Au service de l'excellence",
  },
  {
    number: "8",
    label: "Formations certifiées",
    description: "Programmes qualifiopi",
  },
  { number: "98%", label: "Satisfaction", description: "Témoignages clients" },
];

const missionValues = [
  {
    icon: "fa-solid fa-check",
    title: "Excellence",
    description:
      "Des formations de haute qualité, conçues par des experts pour garantir des résultats tangibles.",
  },
  {
    icon: "fas fa-users",
    title: "Humain",
    description:
      "Une approche centrée sur l'humain, où chaque apprenant est au cœur de notre démarche pédagogique.",
  },
  {
    icon: "fas fa-lightbulb",
    title: "Innovation",
    description:
      "Des méthodes modernes et adaptées aux enjeux actuels des entreprises et des professionnels.",
  },
];

const visionValues = [
  {
    icon: "fas fa-globe",
    title: "Impact",
    description:
      "Former pour transformer les carrières et booster la performance des entreprises.",
  },
  {
    icon: "fas fa-award",
    title: "Qualité",
    description:
      "Maintenir notre certification Qualiopi comme gage de notre engagement envers l'excellence.",
  },
  {
    icon: "fas fa-rocket",
    title: "Croissance",
    description:
      "Accompagner chaque professionnel dans son développement pour un avenir réussi.",
  },
];

export default function AProposPage() {
  // Réinitialiser le scroll en haut de page au chargement
  useScrollToTop();
  return (
    <>
      {/* Hero Section - Design asymétrique moderne */}
      <section className="about-hero">
        <Container>
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h1>
                <span className="title-style">{"L'Excellence "}</span>
                {"Formation"}
              </h1>
              <p>
                Plus de 25 ans d\'expertise au service de votre développement
                professionnel. FormaSecret transforme les compétences en
                performance, avec une approche innovante et humaine de la
                formation.
              </p>
              <div className="about-hero-cta">
                <Link to="/#contact" className="cta-button-picto">
                  <i className="fa-solid fa-arrow-right"></i>
                  {"Découvrir notre approche"}
                </Link>
              </div>
            </div>
            <div className="about-hero-visual">
              <div className="about-hero-image">
                <img
                  src="/assets/images/loddo.jpg"
                  alt="Stéphanie Loddo, fondatrice de FormaSecret"
                />
              </div>
              <div className="about-hero-badge">
                <div className="badge-content">
                  <i className="fas fa-graduation-cap"></i>
                  <span>FormaSecret</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section Engagement */}
      <section className="about-commitment">
        <Container>
          <div className="commitment-content">
            <h2>
              <span className="title-style">{"Notre "}</span>
              {"Engagement"}
            </h2>
            <p className="commitment-text">
              Chez FormaSecret, nous nous engageons à fournir des{" "}
              <strong>
                formations innovantes, durables et centrées sur vos besoins
              </strong>
              . Notre mission est de vous accompagner dans l\'acquisition de
              compétences qui transforment véritablement votre pratique
              professionnelle et boostent votre carrière.
            </p>
          </div>
        </Container>
      </section>

      {/* Section Statistiques */}
      <section className="about-statistics">
        <Container>
          <div className="statistics-grid">
            {statistics.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section Mission */}
      <section className="about-mission">
        <Container>
          <div className="mission-content">
            <div className="mission-visual">
              <div className="mission-images">
                <img
                  src="/assets/images/pexels-photo-2977547.jpeg"
                  alt="Formation professionnelle"
                  className="mission-img mission-img-1"
                />
                <img
                  src="/assets/images/pexels-photo-3184465.jpeg"
                  alt="Apprenants en formation"
                  className="mission-img mission-img-2"
                />
              </div>
            </div>
            <div className="mission-text">
              <h2>
                <span className="title-style">{"Notre "}</span>
                {"Mission"}
              </h2>
              <p className="mission-description">
                FormaSecret a pour mission de transformer les potentiels en
                performances. Nous concevons des parcours de formation qui
                allient exigence, méthode et humanité pour garantir des
                résultats concrets et durables.
              </p>
              <div className="mission-values">
                {missionValues.map((value, i) => (
                  <div key={i} className="value-item">
                    <div className="value-icon">
                      <i className={value.icon}></i>
                    </div>
                    <div className="value-content">
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section Vision */}
      <section className="about-vision">
        <Container>
          <div className="vision-content">
            <div className="vision-text">
              <h2>
                <span className="title-style">{"Notre "}</span>
                {"Vision"}
              </h2>
              <p className="vision-description">
                Nous visionnons un avenir où chaque professionnel a accès à des
                formations de qualité qui lui permettent de s'épanouir
                professionnellement et de contribuer activement à la réussite de
                son entreprise.
              </p>
              <div className="vision-values">
                {visionValues.map((value, i) => (
                  <div key={i} className="value-item">
                    <div className="value-icon">
                      <i className={value.icon}></i>
                    </div>
                    <div className="value-content">
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="vision-visual">
              <img
                src="/assets/images/pexels-photo-5915194.jpeg"
                alt="Vision FormaSecret"
                className="vision-img"
              />
            </div>
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
