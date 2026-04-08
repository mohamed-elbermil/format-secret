import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getFormationNtcBySlug, getFormationNtcById } from '../data/formationNtc'
import useScrollToTop from '../hooks/useScrollToTop'
import FormationDetailHero from '../components/formation-detail/FormationDetailHero'
import FormationDetailIntro from '../components/formation-detail/FormationDetailIntro'
import FormationDetailObjectives from '../components/formation-detail/FormationDetailObjectives'
import FormationDetailDefinition from '../components/formation-detail/FormationDetailDefinition'
import FormationDetailMissions from '../components/formation-detail/FormationDetailMissions'
import FormationDetailProgram from '../components/formation-detail/FormationDetailProgram'
import FormationDetailPrerequisites from '../components/formation-detail/FormationDetailPrerequisites'
import FormationDetailDebouches from '../components/formation-detail/FormationDetailDebouches'
import FormationDetailFinancement from '../components/formation-detail/FormationDetailFinancement'
import FormationDetailTestimonials from '../components/formation-detail/FormationDetailTestimonials'
import FormationDetailFooter from '../components/formation-detail/FormationDetailFooter'

/**
 * Page générique calquée sur la maquette de référence.
 * Même structure pour toutes les formations NTC, seuls les textes (données) changent.
 */
export default function FormationNtcPage() {
  const { slug } = useParams()
  
  // Réinitialiser le scroll en haut de page au chargement
  useScrollToTop();
  
  const formation = slug
    ? getFormationNtcBySlug(slug) || getFormationNtcById(slug)
    : null

  if (!formation) {
    return <Navigate to="/formations" replace />
  }

  return (
    <>
      <FormationDetailHero
        heroTitle={formation.heroTitle}
        heroSubtitle={formation.heroSubtitle}
        heroCtaText={formation.heroCtaText}
        heroImage={formation.heroImage || formation.image}
        heroImageAlt={formation.imageAlt}
      />

      <FormationDetailIntro
        tags={formation.tags}
        introTitle={formation.introTitle}
        introDescription={formation.introDescription}
      />

      <FormationDetailObjectives objectives={formation.objectives} />

      <FormationDetailDefinition
        definitionTitle={formation.definitionTitle}
        definitionText={formation.definitionText}
      />

      <FormationDetailMissions
        missionsTitle={formation.missionsTitle}
        missions={formation.missions}
      />

      <FormationDetailProgram
        programTitle={formation.programTitle}
        programColumns={formation.programColumns}
      />

      <FormationDetailPrerequisites
        prerequisitesTitle={formation.prerequisitesTitle}
        prerequisitesList={formation.prerequisitesList}
      />

      <FormationDetailDebouches
        debouchesTitle={formation.debouchesTitle}
        debouchesContent={formation.debouchesContent}
        debouchesList={formation.debouchesList}
        debouchesCards={formation.debouchesCards}
      />

      <FormationDetailFinancement
        financementTitle={formation.financementTitle}
        financementContent={formation.financementContent}
        financementItems={formation.financementItems}
      />

      <FormationDetailTestimonials
        testimonialsTitle={formation.testimonialsTitle}
        testimonials={formation.testimonials}
      />

      <FormationDetailFooter footerLinks={formation.footerLinks} />

    </>
  )
}
