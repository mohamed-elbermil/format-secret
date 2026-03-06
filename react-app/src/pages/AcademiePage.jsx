import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import ContactSection from "../components/sections/ContactSection";

const statistics = [
  {
    number: "50+",
    label: "Parcours académiques",
    description: "Programmes spécialisés",
  },
  {
    number: "500+",
    label: "Managers formés",
    description: "Leaders développés",
  },
  {
    number: "300+",
    label: "Commerciaux certifiés",
    description: "Performance vente",
  },
  {
    number: "95%",
    label: "Taux de réussite",
    description: "Objectifs atteints",
  },
];

const expertiseValues = [
  {
    icon: "fas fa-users",
    title: "Management",
    description:
      "Développer le leadership et la posture managériale à tous les niveaux.",
  },
  {
    icon: "fas fa-handshake",
    title: "Communication",
    description:
      "Maîtriser les techniques de communication adaptative et efficace.",
  },
  {
    icon: "fas fa-chart-line",
    title: "Performance",
    description:
      "Booster les résultats grâce à des méthodes éprouvées et innovantes.",
  },
];

const parcoursValues = [
  {
    icon: "fas fa-cogs",
    title: "Sur Mesure",
    description:
      "Chaque parcours est construit selon vos enjeux et votre culture d'entreprise.",
  },
  {
    icon: "fas fa-certificate",
    title: "Certification",
    description:
      "Formations certifiées DISC FLOW® pour une reconnaissance officielle.",
  },
  {
    icon: "fas fa-infinity",
    title: "Continuum",
    description: "Des parcours modulables du débutant au niveau expert.",
  },
];

export default function AcademiePage() {
  return (
    <>
      {/* Hero Section - Design asymétrique moderne */}
      <section className="about-hero">
        <Container>
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h1>
                <span className="title-style">{"Académie "}</span>
                {"Management & Vente"}
              </h1>
              <p>
                Des parcours sur mesure pour développer durablement les
                compétences managériales et commerciales de vos équipes.
                FormaSecret transforme vos talents en performance.
              </p>
              <div className="about-hero-cta">
                <Link to="/#contact" className="cta-button-picto">
                  <i className="fa-solid fa-arrow-right"></i>
                  {"Construire votre parcours"}
                </Link>
              </div>
            </div>
            <div className="about-hero-visual">
              <div className="about-hero-image">
                <img
                  src="/assets/images/pexels-photo-8062280.jpeg"
                  alt="Académie Management et Vente"
                />
              </div>
              <div className="about-hero-badge">
                <div className="badge-content">
                  <i className="fas fa-graduation-cap"></i>
                  <span>Excellence</span>
                </div>
              </div>
            </div>
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

      {/* Section Engagement */}
      <section className="about-commitment">
        <Container>
          <div className="commitment-content">
            <h2>
              <span className="title-style">{"Former, "}</span>
              {"Structurer, Faire Progresser"}
            </h2>
            <p className="commitment-text">
              L'Académie du Management et de la Vente accompagne les entreprises
              dans la montée en compétences de leurs{" "}
              <strong>managers, commerciaux et équipes supports</strong>, du
              niveau débutant au niveau confirmé.
            </p>
          </div>
        </Container>
      </section>

      {/* Section Expertise */}
      <section className="about-mission">
        <Container>
          <div className="mission-content">
            <div className="mission-visual">
              <div className="mission-images">
                <img
                  src="/assets/images/pexels-photo-3184465.jpeg"
                  alt="Formation management"
                  className="mission-img mission-img-1"
                />
                <img
                  src="/assets/images/pexels-photo-5915194.jpeg"
                  alt="Formation commerciale"
                  className="mission-img mission-img-2"
                />
              </div>
            </div>
            <div className="mission-text">
              <h2>
                <span className="title-style">{"Notre "}</span>
                {"Expertise"}
              </h2>
              <p className="mission-description">
                La méthode DISC est un outil de référence pour développer un
                management plus efficace, une communication adaptée et une
                performance collective durable.
              </p>
              <div className="mission-values">
                {expertiseValues.map((value, i) => (
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
              <p
                style={{
                  marginTop: "20px",
                  fontWeight: "600",
                  color: "var(--color-secondary)",
                }}
              >
                Profils DISC FLOW® sous licence
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section Parcours */}
      <section className="about-vision">
        <Container>
          <div className="vision-content">
            <div className="vision-text">
              <h2>
                <span className="title-style">{"Nos "}</span>
                {"Parcours"}
              </h2>
              <p className="vision-description">
                Des formations entièrement modulables, combinables et
                construites sur mesure selon vos enjeux, votre niveau et vos
                objectifs.
              </p>
              <div className="vision-values">
                {parcoursValues.map((value, i) => (
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
              <div className="propositions-grid">
                {[
                  {
                    icon: "fas fa-briefcase",
                    title: "Managers",
                    items: [
                      "Posture managériale",
                      "Communication",
                      "Leadership",
                      "Gestion d'équipe",
                    ],
                  },
                  {
                    icon: "fas fa-handshake",
                    title: "Commerciaux",
                    items: [
                      "Prospection",
                      "Négociation",
                      "Fidélisation",
                      "Performance",
                    ],
                  },
                  {
                    icon: "fas fa-users",
                    title: "Équipes",
                    items: [
                      "Cohésion",
                      "Collaboration",
                      "Efficacité",
                      "Motivation",
                    ],
                  },
                ].map((card, i) => (
                  <div key={i} className="proposition-card">
                    <div className="card-header">
                      <i className={card.icon} />
                      <h4>{card.title}</h4>
                    </div>
                    <div className="card-content">
                      <ul>
                        {card.items.map((item, j) => (
                          <li key={j}>
                            <i className="fas fa-check" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section Clients */}
      <section className="about-commitment">
        <Container>
          <div className="commitment-content">
            <h2>
              <span className="title-style">{"Ils "}</span>
              {"Nous Font Confiance"}
            </h2>
            <div className="clients-logos">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
                <img
                  key={n}
                  src={`/assets/images/logo-entreprise/logo${n}.png`}
                  alt={`Logo Client ${n}`}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
