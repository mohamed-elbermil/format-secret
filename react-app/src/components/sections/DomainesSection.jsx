import React from "react";
import Container from "../layout/Container";
import "@/assets/css/components/domaines.css";

/* ── Icônes SVG ── */
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

const IconRH = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconDisc = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a10 10 0 0 1 0 20" />
    <path d="M2 12h20" />
    <path d="M12 2c-2.76 4-2.76 16 0 20" />
  </svg>
);

const IconQvt = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const IconBureautique = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <path d="M7 8h4M7 11h3" />
    <path d="M15 8c1.5 0 2.5 1 2.5 2s-1 2-2.5 2c1.5 0 2.5 1 2.5 2" />
  </svg>
);

const IconProject = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <path d="M17.5 14v3m0 3v.01" />
    <path d="M14 17.5h3m3 0h.01" />
  </svg>
);

const domaines = [
  {
    Icon: IconRH,
    label: "Ingénierie RH",
    title: "Recrutement & IA",
    items: [
      "Recrutement efficace et structuré",
      "Conduite d'entretiens professionnels",
      "IA comme levier d'efficacité RH",
      "Sourcing et marque employeur",
    ],
  },
  {
    Icon: IconDisc,
    label: "Méthode DISC",
    title: "Comportements & Performance",
    items: [
      "Mieux se connaître pour mieux manager",
      "Adapter sa communication et sa vente",
      "Renforcer la cohésion d'équipe",
      "Désamorcer les conflits relationnels",
    ],
  },
  {
    Icon: IconQvt,
    label: "QVT & Soft Skills",
    title: "Bien-être & Résilience",
    items: [
      "Prévention du stress et du burn-out",
      "Gestion de la charge mentale",
      "Développer sa résilience professionnelle",
      "Intelligence émotionnelle au travail",
    ],
  },
  {
    Icon: IconProject,
    label: "Pilotage",
    title: "Gestion de projet",
    items: [
      "Piloter un projet de A à Z",
      "Gestion multi-projets et priorisation",
      "Outils et méthodes agiles",
      "Suivi budgétaire et reporting",
    ],
  },
  {
    Icon: IconBureautique,
    label: "Bureautique & IA",
    title: "Outils du futur",
    items: [
      "Maîtriser Excel, Word et PowerPoint",
      "Utiliser l'IA pour gagner en productivité",
      "Automatiser les tâches répétitives",
      "Prompting et outils IA au quotidien",
    ],
  },
];

export default function DomainesSection() {
  return (
    <section className="dom-section" aria-labelledby="dom-title">
      <Container>
        {/* ── En-tête ── */}
        <div className="dom-header">
          <span className="dom-header__badge">Expertise sur mesure</span>
          <h2 id="dom-title" className="dom-header__title">
            Au-delà du catalogue,
            <br />
            {/* <em>votre besoin devient notre programme</em> */}
          </h2>
          <p className="dom-header__intro">
            Fort de son expertise terrain, FormaSecret est en mesure de déployer
            rapidement des programmes de formation sur les thématiques suivantes
            - conçus spécifiquement pour répondre aux enjeux de votre
            organisation.
          </p>
        </div>

        {/* ── Grille des domaines ── */}
        <div className="dom-grid">
          {domaines.map(({ Icon, label, title, items }, i) => (
            <div key={i} className="dom-card">
              <div className="dom-card__head">
                <div className="dom-card__icon">
                  <Icon />
                </div>
                <div>
                  <span className="dom-card__label">{label}</span>
                  <h3 className="dom-card__title">{title}</h3>
                </div>
              </div>
              <ul className="dom-card__list">
                {items.map((item, j) => (
                  <li key={j} className="dom-card__item">
                    <span className="dom-card__dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="dom-footer">
          <p className="dom-footer__text">
            Chaque programme est co-construit avec vous : objectifs, durée,
            modalités et indicateurs de réussite sont définis ensemble, avant
            même le début de la formation.
          </p>
          <a href="/#contact" className="dom-footer__cta">
            Discutons de votre besoin spécifique
            <IconArrow />
          </a>
        </div>
      </Container>
    </section>
  );
}
