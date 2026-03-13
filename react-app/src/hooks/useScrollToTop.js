import { useEffect } from 'react';

/**
 * Hook personnalisé pour réinitialiser le scroll en haut de page au chargement
 * Résout le problème de scroll persistant lors de la navigation entre pages
 */
const useScrollToTop = () => {
  useEffect(() => {
    // Force le scroll en haut de page immédiatement
    window.scrollTo(0, 0);
    
    // Alternative plus robuste pour certains navigateurs
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);
};

export default useScrollToTop;
