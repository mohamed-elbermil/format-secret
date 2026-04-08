import React from 'react'
import Container from '../components/layout/Container'
import useScrollToTop from '../hooks/useScrollToTop'
import Breadcrumb from '../components/ui/Breadcrumb'

export default function CguPage() {
  useScrollToTop();
  return (
    <>
      <div className="bc-banner">
        <Container>
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "CGU" }]} />
        </Container>
      </div>
      <section style={{ padding: '4rem 0' }}>
        <Container>
          <h2>Conditions Générales d'Utilisation</h2>
          <p>Le contenu des CGU sera ajouté ici. Vous pouvez copier le texte depuis votre fichier cgu.html existant.</p>
        </Container>
      </section>
    </>
  )
}
