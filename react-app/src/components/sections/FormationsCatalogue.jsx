import React, { useState, useMemo } from "react";
import { formations, formationCategories } from "../../data/formations";
import "@/assets/css/components/formations-catalogue.css";

/* ============================================================
   MÉTADONNÉES COMPLÉMENTAIRES
   (durée + description courte non-HTML par formation)
   ============================================================ */
/* ============================================================
   IMAGES PAR FORMATION
   (toutes disponibles dans /public/assets/images/)
   ============================================================ */
const formationImages = {
  formation3: "/assets/images/pexels-photo-2977547.jpeg", // Coach debout, tableau blanc → pratiques managériales
  formation8: "/assets/images/pexels-photo-5915194.jpeg", // Femme organisée, documents → gestion du temps
  formation15: "/assets/images/pexels-photo-3184465.jpeg", // Réunion, accord → réinventez vos réunions
  formation7:
    "https://images.pexels.com/photos/3810796/pexels-photo-3810796.jpeg?auto=compress&cs=tinysrgb&w=800", // Équipe en workshop → prise de parole
  formation16:
    "https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&w=800", // Professionnelle souriante → accueil
  formation14:
    "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800", // Mains sur clavier → écrits professionnels
  formation5:
    "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800", // Équipe commerciale → techniques de vente
  formation6: "/assets/images/rpms.jpg", // Homme serein, café → préparer sa retraite
  formation20: "/assets/images/pexels-photo-8062280.jpeg", // Femme au bureau → gestes et postures
  formation21:
    "https://images.pexels.com/photos/8942495/pexels-photo-8942495.jpeg?auto=compress&cs=tinysrgb&w=800", // Ambulancier croix rouge → SST
  formation22:
    "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800", // Médecin stéthoscope → MAC SST
  formation23:
    "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800", // Interface IA / chatbot lumineux → Osez l'IA Générative
};

const formationMeta = {
  formation3: {
    duration: "2 jours",
    modality: "Présentiel",
    desc: "Développez votre leadership, mobilisez vos équipes et maîtrisez les techniques d'évaluation et de délégation.",
  },
  formation8: {
    duration: "2 jours",
    modality: "Présentiel",
    desc: "Apprenez à identifier les activités chronophages, à fixer vos priorités et à utiliser des outils de planification efficaces.",
  },
  formation15: {
    duration: "2 jours",
    modality: "Présentiel",
    desc: "Transformez vos réunions en moments productifs : organisation, animation et méthodes collaboratives.",
  },
  formation7: {
    duration: "2 jours",
    modality: "Présentiel",
    desc: "Gagnez en aisance à l'oral, apprivoisez le trac et rendez vos discours captivants face à tout type d'audience.",
  },
  formation16: {
    duration: "2 jours",
    modality: "Présentiel",
    desc: "Maîtrisez les règles d'or de l'accueil de qualité et les techniques de communication téléphonique professionnelle.",
  },
  formation14: {
    duration: "2 jours",
    modality: "Présentiel",
    desc: "Rédigez des textes clairs et percutants : prise de notes, structuration, vocabulaire précis pour convaincre.",
  },
  formation5: {
    duration: "2 jours",
    modality: "Présentiel",
    desc: "De l'accueil client à la conclusion : maîtrisez les techniques de vente et boostez votre performance commerciale.",
  },
  formation6: {
    duration: "2 jours",
    modality: "Présentiel",
    desc: "Gérez le changement, maintenez votre bien-être et préparez sereinement cette nouvelle étape de vie.",
  },
  formation20: {
    duration: "2 jours",
    modality: "Présentiel",
    desc: "Adoptez les bonnes postures et techniques ergonomiques pour préserver votre santé et prévenir les TMS.",
  },
  formation21: {
    duration: "2 jours",
    modality: "Présentiel",
    desc: "Devenez acteur de la sécurité : apprenez à intervenir, prodiguer les premiers secours et alerter efficacement.",
  },
  formation22: {
    duration: "2 jours",
    modality: "Présentiel",
    desc: "Actualisez votre certification SST : révisez les gestes qui sauvent et renforcez votre rôle en prévention.",
  },
  formation23: {
    duration: "2 jour",
    modality: "Présentiel",
    desc: "Intégrez l'IA générative dans votre quotidien professionnel : prompting, automatisation et outils IA pour gagner en productivité.",
  },
};

/* ============================================================
   CATÉGORIES avec id court, couleur badge, label court filtre
   ============================================================ */
const CATS = [
  { id: "all", label: "Toutes", color: null },
  { id: "management", label: "Management", color: "#1B2F4E" },
  { id: "communication", label: "Communication", color: "#2D6A4F" },
  { id: "commercial", label: "Commercial", color: "#C8922A" },
  { id: "developpement", label: "Dév. Personnel", color: "#6B3FA0" },
  { id: "securite", label: "Sécurité", color: "#9B2335" },
  { id: "numerique", label: "Numérique & IA", color: "#0D7C8F" },
];

/* Mapping index de formationCategories → id court */
const catIndexToId = [
  "management",
  "communication",
  "commercial",
  "developpement",
  "securite",
  "numerique",
];

/* Construit la liste plate de toutes les formations avec catégorie */
const buildAllFormations = () => {
  const list = [];
  formationCategories.forEach((cat, idx) => {
    const catId = catIndexToId[idx];
    const catInfo = CATS.find((c) => c.id === catId);
    cat.items.forEach((item) => {
      const formation = formations[item.key];
      const meta = formationMeta[item.key] || {};
      if (!formation) return;
      list.push({
        key: item.key,
        catId,
        catLabel: catInfo?.label || cat.title,
        catColor: catInfo?.color || "#1B2F4E",
        catFullLabel: cat.title,
        title: formation.title,
        pdf: formation.pdf,
        desc: meta.desc || "",
        duration: meta.duration || "",
        modality: meta.modality || "Présentiel",
      });
    });
  });
  return list;
};

const ALL_FORMATIONS = buildAllFormations();

/* ============================================================
   ICÔNES SVG PAR CATÉGORIE
   ============================================================ */
const CatIcon = ({ catId, size = 44 }) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (catId) {
    case "management":
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "communication":
      return (
        <svg {...props}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "commercial":
      return (
        <svg {...props}>
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="16" />
        </svg>
      );
    case "developpement":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      );
    case "securite":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    case "numerique":
      return (
        <svg {...props}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="M7 8h2M7 11h2M11 8c1 0 2 .5 2 1.5S12 11 11 11c1 0 2 .5 2 1.5S12 14 11 14" />
          <circle cx="17" cy="9" r="1.5" fill="currentColor" stroke="none" />
          <path d="M15.5 11.5c0 1 .7 2 1.5 2s1.5-1 1.5-2" />
        </svg>
      );
    default:
      return null;
  }
};

/* ── Icônes actions ── */
const IconArrow = () => (
  <svg
    width="13"
    height="13"
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
const IconClock = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconMap = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconDownload = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

/* ============================================================
   COMPOSANT PRINCIPAL
   ============================================================ */
export default function FormationsCatalogue({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = useMemo(() => {
    if (activeFilter === "all") return ALL_FORMATIONS;
    return ALL_FORMATIONS.filter((f) => f.catId === activeFilter);
  }, [activeFilter]);

  /* Comptage par catégorie pour les badges */
  const counts = useMemo(() => {
    const map = { all: ALL_FORMATIONS.length };
    ALL_FORMATIONS.forEach((f) => {
      map[f.catId] = (map[f.catId] || 0) + 1;
    });
    return map;
  }, []);

  return (
    <section
      className="fcat-section"
      id="catalogue"
      aria-labelledby="fcat-title"
    >
      <div className="container">
        {/* ── En-tête ── */}
        <div className="fcat-header">
          <p className="fcat-header__eyebrow">Notre catalogue</p>
          <h2 id="fcat-title" className="fcat-header__title">
            {/* {filtered.length} formation{filtered.length > 1 ? "s" : ""}{" "}
            <em>disponible{filtered.length > 1 ? "s" : ""}</em> */}
            Découvrez nos formations
          </h2>
          <p className="fcat-header__count">Toutes certifiées Qualiopi</p>
        </div>

        {/* ── Barre de filtres sticky ── */}
        <div
          className="fcat-filters-wrap"
          role="group"
          aria-label="Filtrer par catégorie"
        >
          <div className="fcat-filters container">
            {CATS.map((cat) => (
              <button
                key={cat.id}
                className={`fcat-filter-btn${activeFilter === cat.id ? " fcat-filter-btn--active" : ""}`}
                onClick={() => setActiveFilter(cat.id)}
                aria-pressed={activeFilter === cat.id}
              >
                {cat.label}
                <span
                  className="fcat-filter-badge"
                  aria-label={`${counts[cat.id] || 0} formations`}
                >
                  {counts[cat.id] || 0}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Grille de cards ── */}
        <div className="fcat-grid" role="list">
          {filtered.length === 0 ? (
            <div className="fcat-empty" role="listitem">
              Aucune formation dans cette catégorie pour le moment.
            </div>
          ) : (
            filtered.map((formation) => (
              <article
                key={formation.key}
                className="fcat-card"
                data-cat={formation.catId}
                role="listitem"
                tabIndex={0}
                onClick={() => onOpenModal(formation.key)}
                onKeyDown={(e) =>
                  e.key === "Enter" && onOpenModal(formation.key)
                }
                aria-label={`Formation : ${formation.title}`}
              >
                {/* Zone visuelle */}
                <div className="fcat-card__visual">
                  {formationImages[formation.key] && (
                    <img
                      src={formationImages[formation.key]}
                      alt=""
                      className="fcat-card__bg-img"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  )}
                  <div
                    className="fcat-card__visual-overlay"
                    aria-hidden="true"
                  />
                  <span className="fcat-card__badge">{formation.catLabel}</span>
                  <div className="fcat-card__icon">
                    <CatIcon catId={formation.catId} size={40} />
                  </div>
                </div>

                {/* Corps */}
                <div className="fcat-card__body">
                  <h3 className="fcat-card__title">{formation.title}</h3>
                  <p className="fcat-card__desc">{formation.desc}</p>

                  {/* Méta */}
                  <div className="fcat-card__meta">
                    <span className="fcat-card__meta-item">
                      <IconClock /> {formation.duration}
                    </span>
                    <span className="fcat-card__meta-item">
                      <IconMap /> {formation.modality}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="fcat-card__actions">
                    <button
                      className="fcat-card__cta"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenModal(formation.key);
                      }}
                      aria-label={`En savoir plus sur ${formation.title}`}
                    >
                      En savoir plus <IconArrow />
                    </button>
                    <a
                      href={formation.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fcat-card__pdf"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Télécharger le programme PDF de ${formation.title}`}
                    >
                      <IconDownload /> Programme PDF
                    </a>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
