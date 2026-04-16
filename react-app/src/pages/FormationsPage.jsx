import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormationModal from "../components/formations/FormationModal";
import FormationsHero from "../components/sections/FormationsHero";
import FormationsCatalogue from "../components/sections/FormationsCatalogue";
import DomainesSection from "../components/sections/DomainesSection";
import SurMesureSection from "../components/sections/SurMesureSection";
import ModalitesSection from "../components/sections/ModalitesSection";
import KeyFiguresSection from "../components/sections/KeyFiguresSection";
import FAQSection from "../components/sections/FAQSection";
import LeadMagnet from "../components/marketing/LeadMagnet";
import useScrollToTop from "../hooks/useScrollToTop";
import "@/assets/css/components/titres-pro.css";

export default function FormationsPage() {
  const [modalFormationKey, setModalFormationKey] = useState(null);

  useScrollToTop();

  return (
    <>
      <FormationsHero />

      <FormationsCatalogue onOpenModal={setModalFormationKey} />

      <DomainesSection />

      <SurMesureSection />

      <ModalitesSection />

      <KeyFiguresSection />

      <FAQSection />


      {/* ── Teaser Titres Professionnels ── */}
      <section className="tp-teaser" aria-label="Titres Professionnels">
        <div className="container">
          <div className="tp-teaser__inner">
            <div>
              <p className="tp-teaser__eyebrow">Aller plus loin</p>
              <h2 className="tp-teaser__title">
                Vous visez un<br />
                <em>titre professionnel ?</em>
              </h2>
              <ul className="tp-teaser__list">
                <li>Négociateur Technico-Commercial — 12 mois en alternance</li>
                <li>Responsable Petite et Moyenne Structure — 12 mois en alternance</li>
                <li>Assistant de Direction — 810h en formation initiale</li>
              </ul>
            </div>
            <Link to="/titres-professionnels" className="tp-teaser__cta">
              Découvrir les titres pro
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Lead Magnet - CRO Optimized */}
      <LeadMagnet 
        title="Besoin de plus de détails ?"
        subtitle="Recevez notre plaquette complète 2026 directement par email : programmes détaillés, tarifs et modalités de financement."
        buttonText="Envoyer"
        placeholder="Votre adresse email"
        successMessage="C'est parti !"
        successSubtext="Vérifiez votre boîte mail."
        icon="fa-download"
        pdfUrl="/plaquette-2026.pdf"
      />

      {/* Modal */}
      <FormationModal
        formationKey={modalFormationKey}
        onClose={() => setModalFormationKey(null)}
      />
    </>
  );
}
