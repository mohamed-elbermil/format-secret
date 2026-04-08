import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import useScrollToTop from "../hooks/useScrollToTop";
import "@/assets/css/components/academie.css";

// Import tous les logos depuis le dossier racine /assets (hors react-app/public)
const logoModules = import.meta.glob(
  "../../../assets/images/logo-entreprise/*.png",
  { eager: true }
);
const logos = Object.entries(logoModules)
  .sort(([a], [b]) => {
    const na = parseInt(a.match(/logo(\d+)/)?.[1] ?? 0);
    const nb = parseInt(b.match(/logo(\d+)/)?.[1] ?? 0);
    return na - nb;
  })
  .map(([, mod]) => mod.default);

const IconArrow = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <polyline points="1.5,6 5,9.5 10.5,2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const statistics = [
  { number: "50+",  label: "Parcours académiques", desc: "Programmes spécialisés" },
  { number: "500+", label: "Managers formés",       desc: "Leaders développés"    },
  { number: "300+", label: "Commerciaux certifiés", desc: "Performance vente"     },
  { number: "95%",  label: "Taux de réussite",      desc: "Objectifs atteints"    },
];

const expertiseValues = [
  {
    icon: "fas fa-users",
    title: "Management",
    desc: "Développer le leadership et la posture managériale à tous les niveaux.",
  },
  {
    icon: "fas fa-handshake",
    title: "Communication",
    desc: "Maîtriser les techniques de communication adaptative et efficace.",
  },
  {
    icon: "fas fa-chart-line",
    title: "Performance",
    desc: "Booster les résultats grâce à des méthodes éprouvées et innovantes.",
  },
];

const parcoursFeatures = [
  {
    icon: "fas fa-cogs",
    title: "Sur Mesure",
    desc: "Chaque parcours est construit selon vos enjeux et votre culture d'entreprise.",
  },
  {
    icon: "fas fa-certificate",
    title: "Certification",
    desc: "Formations certifiées DISC FLOW® pour une reconnaissance officielle.",
  },
  {
    icon: "fas fa-infinity",
    title: "Continuum",
    desc: "Des parcours modulables du débutant au niveau expert.",
  },
];

const audienceCards = [
  {
    icon: "fas fa-briefcase",
    title: "Managers",
    items: ["Posture managériale", "Communication", "Leadership", "Gestion d'équipe"],
  },
  {
    icon: "fas fa-handshake",
    title: "Commerciaux",
    items: ["Prospection", "Négociation", "Fidélisation", "Performance"],
  },
  {
    icon: "fas fa-users",
    title: "Équipes",
    items: ["Cohésion", "Collaboration", "Efficacité", "Motivation"],
  },
];

export default function AcademiePage() {
  useScrollToTop();

  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="acad-hero" aria-label="Académie Management & Vente">
        {/* Fond décoratif */}
        <div className="acad-hero__bg" aria-hidden="true">
          <div className="acad-hero__dots" />
          <div className="acad-hero__glow" />
          <div className="acad-hero__glow-2" />
        </div>

        <div className="acad-hero__inner container">
          {/* Texte */}
          <div className="acad-hero__text">
            <p className="acad-hero__eyebrow">
              <span className="acad-hero__eyebrow-dot" aria-hidden="true" />
              Organisme de formation certifié Qualiopi
            </p>

            <h1 className="acad-hero__title">
              Académie
              <br />
              <em>Management &amp; Vente</em>
            </h1>

            <div className="acad-hero__divider" aria-hidden="true" />

            <p className="acad-hero__subtitle">
              Des parcours sur mesure pour développer durablement les compétences
              managériales et commerciales de vos équipes. FormaSecret transforme
              vos talents en performance.
            </p>

            <Link to="/#contact" className="acad-hero__cta">
              Construire votre parcours
              <IconArrow />
            </Link>
          </div>

          {/* Visuel */}
          <div className="acad-hero__visual" aria-hidden="true">
            <img
              src="/assets/images/pexels-photo-8062280.jpeg"
              alt="Académie Management et Vente FormaSecret"
              className="acad-hero__img"
              loading="eager"
            />
            <div className="acad-hero__badge">
              <span className="acad-hero__badge-icon">
                <i className="fas fa-graduation-cap" aria-hidden="true" />
              </span>
              <span className="acad-hero__badge-label">Excellence</span>
            </div>
          </div>
        </div>

        {/* Vague de transition */}
        <div className="acad-hero__wave" aria-hidden="true">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="var(--clr-cream)" />
          </svg>
        </div>
      </section>

      {/* ── 2. STATISTIQUES ── */}
      <section className="acad-stats">
        <Container>
          <div className="acad-stats__grid">
            {statistics.map((s, i) => (
              <div key={i} className="acad-stat">
                <div className="acad-stat__number">{s.number}</div>
                <div className="acad-stat__label">{s.label}</div>
                <div className="acad-stat__desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 3. ENGAGEMENT ── */}
      <section className="acad-engage">
        <Container>
          <div className="acad-engage__inner">
            <span className="acad-section-eyebrow">Notre mission</span>
            <h2 className="acad-section-title">
              Former, Structurer,{" "}
              <em>Faire Progresser</em>
            </h2>
            <p className="acad-engage__text">
              L'Académie du Management et de la Vente accompagne les entreprises
              dans la montée en compétences de leurs{" "}
              <strong>managers, commerciaux et équipes supports</strong>, du
              niveau débutant au niveau confirmé.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 4. EXPERTISE ── */}
      <section className="acad-expertise">
        <Container>
          <div className="acad-split">
            {/* Visuel */}
            <div className="acad-split__visual">
              <div className="acad-split__images">
                <img
                  src="/assets/images/pexels-photo-3184465.jpeg"
                  alt="Formation management"
                  className="acad-split__img"
                  loading="lazy"
                />
                <img
                  src="/assets/images/pexels-photo-5915194.jpeg"
                  alt="Formation commerciale"
                  className="acad-split__img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Texte */}
            <div className="acad-split__text">
              <span className="acad-section-eyebrow">Méthode DISC FLOW®</span>
              <h2 className="acad-section-title">
                Notre <em>Expertise</em>
              </h2>
              <p className="acad-split__desc">
                La méthode DISC est un outil de référence pour développer un
                management plus efficace, une communication adaptée et une
                performance collective durable.
              </p>

              <div className="acad-values">
                {expertiseValues.map((v, i) => (
                  <div key={i} className="acad-value">
                    <div className="acad-value__icon">
                      <i className={v.icon} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="acad-value__title">{v.title}</div>
                      <div className="acad-value__desc">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="acad-disc-mention">
                <i className="fas fa-shield-alt" aria-hidden="true" />
                Profils DISC FLOW® sous licence
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 5. PARCOURS ── */}
      <section className="acad-parcours">
        <Container>
          <div className="acad-parcours__header">
            <span className="acad-section-eyebrow">Nos programmes</span>
            <h2 className="acad-section-title">
              Des Parcours <em>Sur Mesure</em>
            </h2>
            <p className="acad-parcours__subtitle">
              Formations entièrement modulables, combinables et construites
              selon vos enjeux, votre niveau et vos objectifs.
            </p>
          </div>

          {/* 3 features */}
          <div className="acad-features">
            {parcoursFeatures.map((f, i) => (
              <div key={i} className="acad-feature">
                <div className="acad-feature__icon">
                  <i className={f.icon} aria-hidden="true" />
                </div>
                <div className="acad-feature__title">{f.title}</div>
                <p className="acad-feature__desc">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* 3 cards audience */}
          <div className="acad-audience">
            {audienceCards.map((card, i) => (
              <div key={i} className="acad-audience-card">
                <div className="acad-audience-card__header">
                  <i className={card.icon} aria-hidden="true" />
                  <h4>{card.title}</h4>
                </div>
                <div className="acad-audience-card__body">
                  <ul>
                    {card.items.map((item, j) => (
                      <li key={j}>
                        <i className="fas fa-check" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. CLIENTS ── */}
      <section className="acad-clients">
        <Container>
          <div className="acad-clients__header">
            <span className="acad-section-eyebrow">Références</span>
            <h2 className="acad-section-title">
              Ils Nous Font <em>Confiance</em>
            </h2>
          </div>
          <div className="acad-logos">
            {logos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Logo Client ${i + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </Container>
      </section>

    </>
  );
}
