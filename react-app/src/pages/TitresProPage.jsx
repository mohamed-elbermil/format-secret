import React from "react";
import { Link } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";
import Container from "../components/layout/Container";
import "@/assets/css/components/titres-pro.css";

/* ── Icônes ── */
const IconSep = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconClock = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

/* ── Données des 3 titres professionnels ── */
const TITRES = [
  {
    slug: "negociateur-technico-commercial-1",
    type: "alternance",
    typeLabel: "Alternance",
    label: "Titre Professionnel – Niveau 5 (Bac+2)",
    title: "Négociateur Technico-Commercial",
    duration: "12 mois",
    image: "/assets/images/negociateur-technico-commercial.png",
    desc: "Maîtrisez l'art de la vente technique : prospection, négociation, gestion de portefeuille client. Un titre reconnu par l'État pour construire une carrière commerciale solide.",
  },
  {
    slug: "rpms",
    type: "alternance",
    typeLabel: "Alternance",
    label: "Titre Professionnel – Niveau 5 (Bac+2)",
    title: "Responsable Petite et Moyenne Structure",
    duration: "12 mois",
    image: "/assets/images/rpms.png",
    desc: "Développez une vision globale de la gestion d'entreprise : pilotage opérationnel, management d'équipe, gestion commerciale et administrative d'une structure.",
  },
  {
    slug: "assistant-direction",
    type: "initiale",
    typeLabel: "Formation initiale",
    label: "Titre Professionnel – Niveau 5 (Bac+2)",
    title: "Assistant de Direction",
    duration: "810h totales",
    image: "/assets/images/assistant-de-direction.png",
    desc: "Devenez le bras droit indispensable d'un dirigeant : organisation, communication, gestion de projet et coordination administrative au plus haut niveau.",
  },
];

/* ── Composant carte ── */
function TitreCard({ titre }) {
  return (
    <Link to={`/formation-ntc/${titre.slug}`} className="tp-card">
      <div className="tp-card__visual">
        <img src={titre.image} alt={titre.title} className="tp-card__img" loading="lazy" />
        <div className="tp-card__visual-overlay" aria-hidden="true" />
        <span className={`tp-type-tag tp-type-tag--${titre.type} tp-card__badge`}>
          {titre.typeLabel}
        </span>
        <span className="tp-card__duration">
          <IconClock /> {titre.duration}
        </span>
      </div>

      <div className="tp-card__body">
        <p className="tp-card__label">{titre.label}</p>
        <h3 className="tp-card__title">{titre.title}</h3>
        <p className="tp-card__desc">{titre.desc}</p>
        <span className="tp-card__cta">
          Découvrir la formation <IconArrow />
        </span>
      </div>
    </Link>
  );
}

/* ── Page principale ── */
export default function TitresProPage() {
  useScrollToTop();

  const alternance = TITRES.filter((t) => t.type === "alternance");
  const initiale = TITRES.filter((t) => t.type === "initiale");

  return (
    <>
      {/* ── HERO ── */}
      <section className="tp-hero" aria-label="Titres professionnels FormaSecret">
        <div className="tp-hero__bg" aria-hidden="true">
          <img src="/assets/images/pexels-photo-2977547.jpeg" alt="" loading="eager" />
        </div>

        <div className="tp-hero__inner container">
          <nav className="tp-hero__breadcrumb" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <span className="tp-hero__breadcrumb-sep"><IconSep /></span>
            <span aria-current="page">Titres Professionnels</span>
          </nav>

          <p className="tp-hero__eyebrow">
            <span aria-hidden="true">●</span>
            Certifié Qualiopi · Reconnus par l'État
          </p>

          <h1 className="tp-hero__title">
            Titres<br />
            <em>Professionnels</em>
          </h1>

          <div className="tp-hero__divider" aria-hidden="true" />

          <p className="tp-hero__subtitle">
            Des parcours longs certifiants (Bac+2) pour construire une véritable
            expertise professionnelle — en alternance ou en formation initiale.
          </p>

          <div className="tp-hero__ctas">
            <a href="/#contact" className="tp-hero__btn tp-hero__btn--primary">
              Nous contacter <IconArrow />
            </a>
            <Link to="/formations" className="tp-hero__btn tp-hero__btn--secondary">
              Voir les formations courtes
            </Link>
          </div>
        </div>

        <div className="tp-hero__wave" aria-hidden="true">
          <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,50 L0,50 Z" fill="#fff" />
          </svg>
        </div>
      </section>

      {/* ── EN ALTERNANCE ── */}
      <section className="tp-section">
        <Container>
          <div className="tp-section__header">
            <span className="tp-section__eyebrow">Parcours en entreprise</span>
            <h2 className="tp-section__title">
              En <em>Alternance</em>
            </h2>
            <p className="tp-section__desc">
              Combinez théorie et pratique en entreprise sur 12 mois. Idéal pour
              acquérir de l'expérience tout en obtenant un titre reconnu.
            </p>
          </div>

          <div className="tp-grid tp-grid--2">
            {alternance.map((t) => (
              <TitreCard key={t.slug} titre={t} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── EN INITIALE ── */}
      <section className="tp-section tp-section--alt">
        <Container>
          <div className="tp-section__header">
            <span className="tp-section__eyebrow">Parcours intensif</span>
            <h2 className="tp-section__title">
              Formation <em>Initiale</em>
            </h2>
            <p className="tp-section__desc">
              Un parcours intensif de 810h pour une montée en compétences
              complète, sans contrainte d'employeur.
            </p>
          </div>

          <div className="tp-grid tp-grid--1">
            {initiale.map((t) => (
              <TitreCard key={t.slug} titre={t} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="tp-cta-section">
        <Container>
          <h2 className="tp-cta-section__title">
            Prêt à franchir <em>le cap ?</em>
          </h2>
          <p className="tp-cta-section__text">
            Notre équipe vous accompagne dans le choix du titre adapté à
            votre profil, votre projet et vos possibilités de financement.
          </p>
          <a href="/#contact" className="tp-cta-section__btn">
            Parler à un conseiller <IconArrow />
          </a>
        </Container>
      </section>
    </>
  );
}
