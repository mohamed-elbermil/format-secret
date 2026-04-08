import React from 'react'
import Container from '../components/layout/Container'
import Breadcrumb from '../components/ui/Breadcrumb'

export default function CgvPage() {
  return (
    <>
      <div className="bc-banner">
        <Container>
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "CGV" }]} />
        </Container>
      </div>
      <section style={{ padding: '4rem 0' }}>
        <Container>
          <h2>Conditions Générales de Vente</h2>
          <p>Le contenu des CGV sera ajouté ici. Vous pouvez copier le texte depuis votre fichier cgv.html existant.</p>
        </Container>
      </section>
    </>
  )
}
