import { useEffect, useState } from "react";
import {
  getConsent,
  setConsent,
  subscribeConsent,
  requestOpenPreferences,
} from "../lib/cookieConsent";

export default function useCookieConsent() {
  const [consent, setConsentState] = useState(() => getConsent());

  useEffect(() => subscribeConsent(setConsentState), []);

  return {
    consent,
    hasChosen: consent !== null,
    acceptAll: () => setConsent({ necessary: true, tiers: true }),
    refuseAll: () => setConsent({ necessary: true, tiers: false }),
    savePreferences: (prefs) => setConsent({ necessary: true, ...prefs }),
    openPreferences: requestOpenPreferences,
  };
}
