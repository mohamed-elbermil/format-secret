import React from 'react'
import Container from '../components/layout/Container'
import useScrollToTop from '../hooks/useScrollToTop'

export default function CguPage() {
  // Réinitialiser le scroll en haut de page au chargement
  useScrollToTop();
  return (
    <section className="histoire-fondation" style={{ paddingTop: '120px' }}>
      <Container>
        <h2>Conditions Générales d'Utilisation</h2>
        <p>Le contenu des CGU sera ajouté ici. Vous pouvez copier le texte depuis votre fichier cgu.html existant.</p>
      </Container>
    </section>
  )
}
