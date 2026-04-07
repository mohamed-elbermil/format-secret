import React, { useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../components/layout/Container";
import ServicesSection from "../components/sections/ServicesSection";
import AdvantagesSection from "../components/sections/AdvantagesSection";
import KeyFiguresSection from "../components/sections/KeyFiguresSection";
import ContactSection from "../components/sections/ContactSection";
import HeroSection from "../components/sections/HeroSection";
import useScrollToTop from "../hooks/useScrollToTop";
import imgAnalyse from "../assets/images/pexels-photo-2977547.jpeg";
import imgProjet from "../assets/images/pexels-photo-5915194.jpeg";
import imgParcours from "../assets/images/pexels-photo-3184465.jpeg";
import GoogleReviews from "../google-review";
import LeadMagnet from "../components/marketing/LeadMagnet";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "FormaSecret",
  description:
    "Organisme de formation expert en efficacité professionnelle, management et vente",
  url: "https://www.formasecret.fr",
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Certification Qualiopi",
    credentialCategory: "certification",
    recognizedBy: {
      "@type": "Organization",
      name: "Certifopac",
      url: "https://certifopac.fr",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "98",
    bestRating: "5",
  },
};

const orientationSteps = [
  { label: "1. Analyse de votre parcours", duration: "10 min" },
  { label: "2. Définition de votre projet", duration: "5 min" },
  {
    label: "3. Présentation du/des parcours personnalisé(s)",
    duration: "10 min",
  },
];

const orientationImages = [
  { src: imgAnalyse, alt: "Analyse de votre parcours" },
  { src: imgProjet, alt: "Définition de votre projet" },
  { src: imgParcours, alt: "Présentation de parcours personnalisés" },
];

export default function HomePage() {
  const location = useLocation();

  const scrollToContact = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Réinitialiser le scroll en haut de page au chargement
  useScrollToTop();

  useEffect(() => {
    if (location.hash === "#contact") scrollToContact();
  }, [location.hash, scrollToContact]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <HeroSection />

      <ServicesSection />

      <section className="presentation">
        <Container>
          <h3>
            <span className="title-style">{"Qui sommes "}</span>
            {"nous ?"}
          </h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xiUDHScv1QY?si=6UO6GMfZRvFF41J3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Container>
      </section>

      <section className="orientation">
        <Container>
          <h2>
            <span className="title-style">{"Faire un "}</span>
            {"bilan d'orientation"}
          </h2>
          <p className="orientation-subtitle">{"Gratuit et sans engagement"}</p>
          <div className="orientation-images">
            {orientationImages.map(({ src, alt }, i) => (
              <img key={i} src={src} alt={alt} loading="lazy" />
            ))}
          </div>
          <div className="orientation-steps">
            {orientationSteps.map(({ label, duration }, i) => (
              <div key={i} className="orientation-step">
                <div className="orientation-step-title">{label}</div>
                <div className="orientation-step-time">
                  <i className="fa-regular fa-clock"></i> {duration}
                </div>
              </div>
            ))}
          </div>
          <div className="orientation-cta">
            <Link to="/#contact" className="cta-button-picto-2">
              <i className="fa-solid fa-calendar-check"></i>
              {"Je prends rendez-vous"}
            </Link>
          </div>
        </Container>
      </section>

      <AdvantagesSection />

      <section className="certification">
        <Container>
          <h2>
            <span className="title-style">{"Notre"}</span>
            {" Certification"}
          </h2>
          <div className="qualiopi-content">
            <div className="qualiopi-logo">
              <a
                href="https://certifopac.fr/qualiopi/certification/verification/?siren=911922540"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/images/logo-qualiopi-valide-400x179.png"
                  alt="Logo Certification Qualiopi"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="qualiopi-info">
              <h3>{"Certification Qualiopi"}</h3>
              <p>
                {
                  "FormaSecret est fière d'être certifiée Qualiopi. Cette certification atteste de la qualité du processus mis en œuvre..."
                }
              </p>
              <ul>
                <li>{"Gage de qualité des processus de formation"}</li>
                <li>
                  {"Reconnaissance officielle de notre professionnalisme"}
                </li>
                <li>{"Assurance d'un suivi rigoureux"}</li>
              </ul>
              <p className="verify-link">
                <a
                  href="https://certifopac.fr/qualiopi/certification/verification/?siren=911922540"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"Vérifier notre certification"}
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="trusted-by">
        <Container>
          <div className="reviews-section">
            <h2 className="text-3xl font-bold mb-6">
              <span className="title-style text-orange-500">
                {"Ils nous font"}
              </span>
              {" confiance"}
            </h2>
            <div className="reviews-container">
              <GoogleReviews />
            </div>
          </div>
          <div className="cta-container">
            <Link to="/a-propos" className="cta-button">
              {"Découvrir FormaSecret"}
            </Link>
          </div>
        </Container>
      </section>

      <KeyFiguresSection />
      <ContactSection />

      <LeadMagnet
        title="Téléchargez notre catalogue complet"
        subtitle="Recevez toutes nos formations certifiées et nos tarifs préférentiels directement par email."
        buttonText="Télécharger le catalogue"
        placeholder="Votre adresse email"
        successMessage="Catalogue envoyé !"
        successSubtext="Consultez votre boîte mail pour recevoir notre catalogue complet."
        icon="fa-file-pdf"
        pdfUrl="/plaquette-2026.pdf"
      />
    </>
  );
}
