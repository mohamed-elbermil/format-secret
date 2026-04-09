import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import useScrollToTop from "../hooks/useScrollToTop";
import Breadcrumb from "../components/ui/Breadcrumb";
import "@/assets/css/components/apropos.css";

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

const statistics = [
  {
    number: "25+",
    label: "Ans d'expérience",
    desc: "Au service de l'excellence",
  },
  { number: "8", label: "Formations certifiées", desc: "Programmes Qualiopi" },
  { number: "98%", label: "Satisfaction client", desc: "Témoignages vérifiés" },
];

const missionValues = [
  {
    icon: "fas fa-star",
    title: "Excellence",
    desc: "Des formations de haute qualité, conçues par des experts pour garantir des résultats tangibles.",
  },
  {
    icon: "fas fa-users",
    title: "Humain",
    desc: "Une approche centrée sur l'humain, où chaque apprenant est au cœur de notre démarche pédagogique.",
  },
  {
    icon: "fas fa-lightbulb",
    title: "Innovation",
    desc: "Des méthodes modernes et adaptées aux enjeux actuels des entreprises et des professionnels.",
  },
];

const visionValues = [
  {
    icon: "fas fa-globe",
    title: "Impact",
    desc: "Former pour transformer les carrières et booster la performance des entreprises.",
  },
  {
    icon: "fas fa-award",
    title: "Qualité",
    desc: "Maintenir notre certification Qualiopi comme gage de notre engagement envers l'excellence.",
  },
  {
    icon: "fas fa-rocket",
    title: "Croissance",
    desc: "Accompagner chaque professionnel dans son développement pour un avenir réussi.",
  },
];

export default function AProposPage() {
  useScrollToTop();

  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="ap-hero" aria-label="À propos de FormaSecret">
        <div className="ap-hero__bg" aria-hidden="true">
          <div className="ap-hero__dots" />
          <div className="ap-hero__glow" />
          <div className="ap-hero__glow-2" />
        </div>

        <div className="ap-hero__inner container">
          {/* Texte */}
          <div className="ap-hero__text">
            <Breadcrumb
              items={[{ label: "Accueil", href: "/" }, { label: "À Propos" }]}
            />
            <p className="ap-hero__eyebrow">
              <span className="ap-hero__eyebrow-dot" aria-hidden="true" />
              Organisme de formation certifié Qualiopi
            </p>

            <h1 className="ap-hero__title">
              L'Excellence
              <br />
              <em>au service de votre réussite</em>
            </h1>

            <div className="ap-hero__divider" aria-hidden="true" />

            <p className="ap-hero__subtitle">
              Plus de 25 ans d'expertise au service de votre développement
              professionnel. FormaSecret transforme les compétences en
              performance, avec une approche innovante et profondément humaine.
            </p>

            <Link to="/#contact" className="ap-hero__cta">
              Nous contacter
              <IconArrow />
            </Link>
          </div>

          {/* Photo fondatrice */}
          <div className="ap-hero__visual" aria-hidden="true">
            <img
              src="/assets/images/loddo.jpg"
              alt="Stéphanie Loddo, fondatrice de FormaSecret"
              className="ap-hero__img"
              loading="eager"
            />
            <div className="ap-hero__badge">
              <span className="ap-hero__badge-number">25+</span>
              <span className="ap-hero__badge-label">ans d'expertise</span>
            </div>
          </div>
        </div>

        <div className="ap-hero__wave" aria-hidden="true">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z"
              fill="var(--clr-cream)"
            />
          </svg>
        </div>
      </section>

      {/* ── 2. ENGAGEMENT ── */}
      <section className="ap-engage">
        <Container>
          <div className="ap-engage__inner">
            <span className="ap-eyebrow">Notre engagement</span>
            <h2 className="ap-title">
              Des formations <em>qui transforment</em>
            </h2>
            <p className="ap-engage__text">
              Chez FormaSecret, nous nous engageons à fournir des{" "}
              <strong>
                formations innovantes, durables et centrées sur vos besoins
              </strong>
              . Notre mission est de vous accompagner dans l'acquisition de
              compétences qui transforment véritablement votre pratique
              professionnelle et boostent votre carrière.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 3. STATISTIQUES ── */}
      <section className="ap-stats">
        <Container>
          <div className="ap-stats__grid">
            {statistics.map((s, i) => (
              <div key={i} className="ap-stat">
                <div className="ap-stat__number">{s.number}</div>
                <div className="ap-stat__label">{s.label}</div>
                <div className="ap-stat__desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 4. MISSION ── */}
      <section className="ap-mission">
        <Container>
          <div className="ap-split">
            {/* Images */}
            <div className="ap-split__images">
              <img
                src="/assets/images/pexels-photo-2977547.jpeg"
                alt="Formation professionnelle FormaSecret"
                className="ap-split__img"
                loading="lazy"
              />
              <img
                src="/assets/images/pexels-photo-3184465.jpeg"
                alt="Apprenants en formation"
                className="ap-split__img"
                loading="lazy"
              />
            </div>

            {/* Texte */}
            <div className="ap-split__text">
              <span className="ap-eyebrow">Notre raison d'être</span>
              <h2 className="ap-title">
                Notre <em>Mission</em>
              </h2>
              <p className="ap-split__desc">
                FormaSecret a pour mission de transformer les potentiels en
                performances. Nous concevons des parcours de formation qui
                allient exigence, méthode et humanité pour garantir des
                résultats concrets et durables.
              </p>
              <div className="ap-values">
                {missionValues.map((v, i) => (
                  <div key={i} className="ap-value">
                    <div className="ap-value__icon">
                      <i className={v.icon} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="ap-value__title">{v.title}</div>
                      <div className="ap-value__desc">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 5. VISION ── */}
      <section className="ap-vision">
        <Container>
          <div className="ap-split">
            {/* Texte */}
            <div className="ap-split__text">
              <span className="ap-eyebrow">Notre ambition</span>
              <h2 className="ap-title">
                Notre <em>Vision</em>
              </h2>
              <p className="ap-split__desc">
                Nous visionnons un avenir où chaque professionnel a accès à des
                formations de qualité qui lui permettent de s'épanouir et de
                contribuer activement à la réussite de son entreprise.
              </p>
              <div className="ap-values">
                {visionValues.map((v, i) => (
                  <div key={i} className="ap-value">
                    <div className="ap-value__icon">
                      <i className={v.icon} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="ap-value__title">{v.title}</div>
                      <div className="ap-value__desc">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/formations" className="ap-vision__cta">
                Découvrir nos formations
                <IconArrow />
              </Link>
            </div>

            {/* Image */}
            <div>
              <img
                src="/assets/images/pexels-photo-5915194.jpeg"
                alt="Vision FormaSecret - professionnelle en formation"
                className="ap-vision__img"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
