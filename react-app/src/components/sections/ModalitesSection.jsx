import React from "react";
import Container from "../layout/Container";
import "@/assets/css/components/modalites.css";

/* ── Icônes SVG ── */
const IconGroupe = () => (
  <svg
    width="28"
    height="28"
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

const IconIndividuelle = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
    <path d="M12 14v7" />
    <path d="M9 17h6" />
  </svg>
);

const IconNationale = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const modalites = [
  {
    Icon: IconGroupe,
    accentColor: "#1B2F4E",
    label: "En groupe",
    title: "Formation inter-entreprises",
    desc: "Rejoignez une session avec des participants d'autres organisations. Idéal pour croiser les regards, partager les bonnes pratiques et enrichir l'expérience collective.",
    details: [
      "Sessions planifiées sur le calendrier annuel",
      "6 à 12 participants par session",
      "Financement professionnel facilité",
    ],
  },
  {
    Icon: IconIndividuelle,
    accentColor: "#C8922A",
    label: "Individuelle",
    title: "Coaching personnalisé",
    desc: "Un accompagnement 100% dédié, ajusté à votre rythme, à vos contraintes et à vos objectifs précis. La solution la plus flexible et la plus percutante.",
    details: [
      "Programme entièrement sur mesure",
      "Dates choisies selon vos disponibilités",
      "Suivi personnalisé à 3 mois",
    ],
  },
  {
    Icon: IconNationale,
    accentColor: "#2D6A4F",
    label: "Nationale",
    title: "Formation intra-entreprise",
    desc: "Nous nous déplaçons dans vos locaux, partout en France. Un programme conçu pour vos équipes, dans votre environnement de travail.",
    details: [
      "Déplacement sur tout le territoire",
      "Formation sur site ou en distanciel",
      "Tarif groupe avantageux",
    ],
  },
];

const IconCheck = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function ModalitesSection() {
  return (
    <section className="mod-section" aria-labelledby="mod-title">
      <Container>
        <div className="mod-header">
          <p className="mod-header__eyebrow">
            <span className="mod-header__eyebrow-line" aria-hidden="true" />
            Modalités
            <span className="mod-header__eyebrow-line" aria-hidden="true" />
          </p>
          <h2 id="mod-title" className="mod-header__title">
            Une formation adaptée
            <br />
            <em>à votre situation</em>
          </h2>
          <p className="mod-header__sub">
            Quel que soit votre contexte - individuel, équipe ou national - nous
            avons la formule qui correspond à vos besoins et à votre budget.
          </p>
        </div>

        <div className="mod-grid">
          {modalites.map(
            ({ Icon, accentColor, label, title, desc, details }, i) => (
              <article
                key={i}
                className="mod-card"
                style={{ "--mod-accent": accentColor }}
              >
                <div className="mod-card__top">
                  <div className="mod-card__icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <span className="mod-card__label">{label}</span>
                </div>

                <div className="mod-card__stripe" aria-hidden="true" />

                <h3 className="mod-card__title">{title}</h3>
                <p className="mod-card__desc">{desc}</p>

                <ul
                  className="mod-card__list"
                  aria-label={`Détails — ${title}`}
                >
                  {details.map((d, j) => (
                    <li key={j} className="mod-card__list-item">
                      <span className="mod-card__list-icon" aria-hidden="true">
                        <IconCheck />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>

                <a href="/#contact" className="mod-card__link">
                  En savoir plus
                  <svg
                    width="14"
                    height="14"
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
                </a>
              </article>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
