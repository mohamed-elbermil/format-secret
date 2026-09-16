const STORAGE_KEY = "formasecret_cookie_consent";

const listeners = new Set();
let openRequested = false;

function readConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function notify() {
  const consent = readConsent();
  listeners.forEach((fn) => fn(consent));
}

export function getConsent() {
  return readConsent();
}

export function setConsent(partial) {
  const current = readConsent() || { necessary: true, tiers: false };
  const consent = { ...current, ...partial, updatedAt: new Date().toISOString() };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // stockage indisponible (navigation privée, etc.) : le consentement ne sera pas mémorisé
  }
  notify();
  return consent;
}

export function subscribeConsent(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

// Permet à n'importe quel composant (ex: lien dans les mentions légales)
// de rouvrir le bandeau de préférences sans dépendre d'un état partagé complexe.
export function requestOpenPreferences() {
  openRequested = true;
  notify();
}

export function consumeOpenRequest() {
  const wasRequested = openRequested;
  openRequested = false;
  return wasRequested;
}
