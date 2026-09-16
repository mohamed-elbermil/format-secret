import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCookieConsent from "../../hooks/useCookieConsent";
import {
  getConsent,
  subscribeConsent,
  consumeOpenRequest,
} from "../../lib/cookieConsent";
import "@/assets/css/components/cookie-consent.css";

const IconCookie = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
    <circle cx="8.5" cy="12.5" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="12.5" cy="16.5" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="15" cy="10.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export default function CookieConsent() {
  const { consent, hasChosen, acceptAll, refuseAll, savePreferences } =
    useCookieConsent();
  const [open, setOpen] = useState(!hasChosen);
  const [customize, setCustomize] = useState(false);
  const [tiersDraft, setTiersDraft] = useState(Boolean(consent?.tiers));

  useEffect(() => {
    return subscribeConsent(() => {
      if (consumeOpenRequest()) {
        setTiersDraft(Boolean(getConsent()?.tiers));
        setCustomize(true);
        setOpen(true);
      }
    });
  }, []);

  if (!open) {
    return (
      <button
        type="button"
        className="cookie-fab"
        onClick={() => {
          setTiersDraft(Boolean(consent?.tiers));
          setCustomize(true);
          setOpen(true);
        }}
        aria-label="Gérer mes préférences de cookies"
        title="Gérer mes préférences de cookies"
      >
        <IconCookie />
      </button>
    );
  }

  return (
    <div className="cookie-banner" role="dialog" aria-modal="false" aria-label="Gestion des cookies">
      <div className="cookie-banner__inner">
        <div className="cookie-banner__icon">
          <IconCookie />
        </div>
        <div className="cookie-banner__body">
          <p className="cookie-banner__title">Respect de votre vie privée</p>
          <p className="cookie-banner__text">
            Nous utilisons des cookies strictement nécessaires au
            fonctionnement du site. Avec votre accord, certains contenus
            tiers (vidéo YouTube, carte Google Maps) peuvent également être
            affichés. Consultez nos{" "}
            <Link to="/mentions-legales#cookies">mentions légales</Link>{" "}
            pour en savoir plus.
          </p>

          {customize && (
            <div className="cookie-banner__prefs">
              <label className="cookie-pref">
                <input type="checkbox" checked disabled />
                <span>
                  <strong>Cookies nécessaires</strong> — toujours actifs
                  (fonctionnement du site)
                </span>
              </label>
              <label className="cookie-pref">
                <input
                  type="checkbox"
                  checked={tiersDraft}
                  onChange={(e) => setTiersDraft(e.target.checked)}
                />
                <span>
                  <strong>Contenus tiers</strong> — vidéo YouTube, carte
                  Google Maps
                </span>
              </label>
            </div>
          )}

          <div className="cookie-banner__actions">
            {customize ? (
              <button
                type="button"
                className="cookie-btn cookie-btn--primary"
                onClick={() => {
                  savePreferences({ tiers: tiersDraft });
                  setOpen(false);
                }}
              >
                Enregistrer mes choix
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="cookie-btn cookie-btn--primary"
                  onClick={() => {
                    acceptAll();
                    setOpen(false);
                  }}
                >
                  Tout accepter
                </button>
                <button
                  type="button"
                  className="cookie-btn cookie-btn--ghost"
                  onClick={() => {
                    refuseAll();
                    setOpen(false);
                  }}
                >
                  Tout refuser
                </button>
                <button
                  type="button"
                  className="cookie-btn cookie-btn--link"
                  onClick={() => setCustomize(true)}
                >
                  Personnaliser
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
