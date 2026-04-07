import React, { useState } from "react";
import FormationModal from "../components/formations/FormationModal";
import FormationsHero from "../components/sections/FormationsHero";
import FormationsCatalogue from "../components/sections/FormationsCatalogue";
import SurMesureSection from "../components/sections/SurMesureSection";
import ModalitesSection from "../components/sections/ModalitesSection";
import KeyFiguresSection from "../components/sections/KeyFiguresSection";
import FAQSection from "../components/sections/FAQSection";
import LeadMagnet from "../components/marketing/LeadMagnet";
import useScrollToTop from "../hooks/useScrollToTop";

export default function FormationsPage() {
  const [modalFormationKey, setModalFormationKey] = useState(null);

  useScrollToTop();

  return (
    <>
      <FormationsHero />

      <FormationsCatalogue onOpenModal={setModalFormationKey} />

      <SurMesureSection />

      <ModalitesSection />

      <KeyFiguresSection />

      <FAQSection />


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
