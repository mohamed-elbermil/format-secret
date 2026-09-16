import React from "react";
import useCookieConsent from "../../hooks/useCookieConsent";
import "@/assets/css/components/consent-gate.css";

/**
 * Empêche le chargement d'un contenu tiers (iframe YouTube, Google Maps...)
 * tant que l'utilisateur n'a pas donné son consentement via le bandeau cookies.
 */
export default function ConsentGate({ label, className = "", children }) {
  const { consent, hasChosen, savePreferences } = useCookieConsent();
  const allowed = hasChosen && consent?.tiers;

  if (allowed) return children;

  return (
    <div className={`consent-gate ${className}`.trim()}>
      <p className="consent-gate__text">
        Ce contenu ({label}) nécessite l'acceptation des cookies tiers.
      </p>
      <button
        type="button"
        className="consent-gate__btn"
        onClick={() => savePreferences({ tiers: true })}
      >
        Autoriser et afficher
      </button>
    </div>
  );
}
