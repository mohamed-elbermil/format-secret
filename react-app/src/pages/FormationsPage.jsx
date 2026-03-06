import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Container from "../components/layout/Container";
import FormationBlockCard from "../components/cards/FormationBlockCard";
import FormationModal from "../components/formations/FormationModal";
import ContactSection from "../components/sections/ContactSection";
import { formationCategories } from "../data/formations";
import { formations } from "../data/formations";
import { ntcBlocksList } from "../data/formationNtc";
import { keyFigures } from "../data/figures";
import FigureCard from "../components/cards/FigureCard";

const modalites = [
  {
    icon: "fas fa-users",
    title: "Formations en Groupe",
    description: "Favorise l'échange et la collaboration entre participants.",
  },
  {
    icon: "fas fa-user",
    title: "Formations Individuelles",
    description: "Approche personnalisée adaptée à vos besoins spécifiques.",
  },
  {
    icon: "fas fa-map-marked-alt",
    title: "Couverture Nationale",
    description: "Nous nous déplaçons sur toute la France pour vos formations.",
  },
];

const faqItems = [
  {
    q: "Quelles sont les modalités de formation ?",
    a: "Nous proposons des formations en présentiel. Nos formations peuvent être individuelles ou en groupe, selon vos besoins.",
  },
  {
    q: "Comment financer ma formation ?",
    a: "Si votre entreprise compte moins de 50 salariés, vous avez la possibilité de solliciter un financement auprès de votre OPCO (Opérateur de Compétences) grâce à notre certification Qualiopi.",
  },
  {
    q: "Quelle est la durée moyenne d'une formation ?",
    a: "La durée varie selon le type de formation, allant d'une journée à plusieurs jours. Nous adaptons la durée en fonction de vos objectifs et disponibilités.",
  },
  {
    q: "Comment sont évalués les acquis ?",
    a: "Nous utilisons diverses méthodes d'évaluation, incluant des exercices pratiques, des mises en situation, et des tests de connaissances, pour assurer que les objectifs d'apprentissage sont atteints.",
  },
  {
    q: "Puis-je personnaliser mon programme de formation ?",
    a: "Oui, toutes nos formations sont personnalisables. FormaSecret s'adapte aux besoins et attentes de chaque entreprise afin de répondre au mieux à votre demande.",
  },
];

const statistics = [
  {
    number: "150+",
    label: "Formations certifiées",
    description: "Programmes qualifiopi",
  },
  {
    number: "2000+",
    label: "Apprenants formés",
    description: "Parcours transformés",
  },
  { number: "98%", label: "Satisfaction", description: "Témoignages clients" },
  {
    number: "25+",
    label: "Ans d'expérience",
    description: "Au service de l'excellence",
  },
];

export default function FormationsPage() {
  const [modalFormationKey, setModalFormationKey] = useState(null);

  return (
    <>
      {/* Hero Section - Design asymétrique moderne */}
      <section className="about-hero">
        <Container>
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h1>
                <span className="title-style">{"Nos "}</span>
                {"Formations"}
              </h1>
              <p>
                Des programmes sur mesure pour développer vos compétences et
                booster votre carrière. FormaSecret vous accompagne avec des
                formations certifiées et adaptées aux enjeux actuels.
              </p>
              <div className="about-hero-cta">
                <Link to="/#contact" className="cta-button-picto">
                  <i className="fa-solid fa-arrow-right"></i>
                  {"Découvrir nos formations"}
                </Link>
              </div>
            </div>
            <div className="about-hero-visual">
              <div className="about-hero-image">
                <img
                  src="/assets/images/pexels-photo-3184465.jpeg"
                  alt="Formations professionnelles FormaSecret"
                />
              </div>
              <div className="about-hero-badge">
                <div className="badge-content">
                  <i className="fas fa-graduation-cap"></i>
                  <span>Expertise</span>
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

      {/* Section Domaines d'Intervention */}
      <section className="about-commitment">
        <Container>
          <div className="commitment-content">
            <h2>
              <span className="title-style">{"Nos "}</span>
              {"Domaines d'Expertise"}
            </h2>
            <p className="commitment-text">
              FormaSecret vous propose des{" "}
              <strong>formations certifiées Qualiopi</strong>
              dans les domaines clés de l'efficacité professionnelle, du
              management et du développement commercial.
            </p>
          </div>
        </Container>
      </section>

      <section className="domaines-intervention">
        <Container>
          <p className="instruction">
            Cliquez sur une formation pour en savoir plus et télécharger le PDF.
          </p>
          <div className="domaines-grid">
            <div className="domaine-card">
              <div className="domaine-icon">
                <i className="fas fa-briefcase" />
              </div>
              <h3>Nos Formations</h3>
              <div className="formation-categories">
                {formationCategories.map((cat, i) => (
                  <div key={i} className="formation-category">
                    <h4 className="category-title">
                      <i className={cat.icon} /> {cat.title}
                    </h4>
                    <ul>
                      {cat.items.map((item) => (
                        <li
                          key={item.key}
                          onClick={() =>
                            formations[item.key] &&
                            setModalFormationKey(item.key)
                          }
                          onKeyDown={(e) =>
                            e.key === "Enter" &&
                            formations[item.key] &&
                            setModalFormationKey(item.key)
                          }
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
              <div className="domaine-icon">
                <i className="fas fa-cogs" />
              </div>
              <h3>Formation Sur Mesure</h3>
              <p className="text-justify">
                <strong>
                  FormaSecret accompagne les entreprises avec des formations
                  entièrement personnalisées, conçues pour répondre précisément
                  à leurs enjeux opérationnels et humains.
                </strong>{" "}
                Au-delà de notre catalogue, nous développons des dispositifs sur
                mesure, adaptés à vos objectifs, à votre organisation et au
                niveau de vos équipes.
              </p>
              <p className="text-justify">
                Que vous souhaitiez renforcer des compétences clés, accompagner
                un changement interne ou structurer un parcours de montée en
                compétences,{" "}
                <strong>
                  nos formateurs experts créent des programmes ciblés et
                  immédiatement applicables.
                </strong>{" "}
                Chaque parcours est pensé pour optimiser l'apprentissage,
                favoriser l'adhésion et garantir un impact concret sur le
                terrain.
              </p>
              <p className="text-justify">
                Avec FormaSecret, bénéficiez d'une{" "}
                <strong>
                  approche flexible, experte et orientée résultats
                </strong>
                , entièrement dédiée à la réussite de vos collaborateurs et à la
                performance de votre entreprise.
              </p>
              <div className="contact-btn-sur-mesure">
                <Button to="/#contact" variant="primary" size="md">
                  Contactez Nous
                </Button>
              </div>
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

      <FormationModal
        formationKey={modalFormationKey}
        onClose={() => setModalFormationKey(null)}
      />

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
                  src="/assets/images/pexels-photo-5915194.jpeg"
                  alt="Apprenants en formation"
                  className="mission-img mission-img-2"
                />
              </div>
            </div>
            <div className="mission-text">
              <h2>
                <span className="title-style">{"Nos "}</span>
                {"Modalités"}
              </h2>
              <p className="mission-description">
                FormaSecret s'adapte à vos contraintes et objectifs avec des
                modalités de formation flexibles et efficaces.
              </p>
              <div className="mission-values">
                {modalites.map((m, i) => (
                  <div key={i} className="value-item">
                    <div className="value-icon">
                      <i className={m.icon}></i>
                    </div>
                    <div className="value-content">
                      <h3>{m.title}</h3>
                      <p>{m.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="about-statistics">
        <Container>
          <div className="statistics-grid">
            {keyFigures.map((f, i) => (
              <div key={i} className="stat-card">
                <div className="stat-number">{f.number}</div>
                <div className="stat-label">{f.label}</div>
                <div className="stat-description">{f.description}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="about-vision">
        <Container>
          <div className="vision-content">
            <div className="vision-text">
              <h2>
                <span className="title-style">{"Notre "}</span>
                {"Certification"}
              </h2>
              <p className="vision-description">
                FormaSecret est fière d'être certifiée Qualiopi. Cette
                certification atteste de la qualité du processus mis en œuvre
                par les prestataires d'actions concourant au développement des
                compétences et permet une plus grande lisibilité de l'offre de
                formation auprès des entreprises et des usagers.
              </p>
              <div className="vision-values">
                <div className="value-item">
                  <div className="value-icon">
                    <i className="fas fa-award"></i>
                  </div>
                  <div className="value-content">
                    <h3>Gage de Qualité</h3>
                    <p>
                      Reconnaissance officielle de la qualité de nos processus
                      de formation
                    </p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="value-content">
                    <h3>Professionnalisme</h3>
                    <p>
                      Assurance d'un suivi rigoureux et d'une amélioration
                      continue
                    </p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div className="value-content">
                    <h3>Confiance</h3>
                    <p>
                      Garantie de fiabilité et de transparence pour nos clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="vision-visual">
              <img
                src="/assets/images/logo-qualiopi-valide-400x179.png"
                alt="Logo Certification Qualiopi"
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
