/**
 * Informations communes aux 3 titres professionnels (NTC, RPMS, Assistant de direction),
 * identiques dans les 3 référentiels PDF FormaSecret : lieu, méthodes pédagogiques,
 * modalités d'évaluation, accessibilité, positionnement, délai d'accès.
 * Source : plaquettes "Titre professionnel" FormaSecret + francecompetences.fr
 */
export const qualiopiCommon = {
  certificateur: 'Ministère du Travail',
  lieu: '140 rue Émile Zola, 69150 Décines-Charpieu',
  effectifMax: '12 stagiaires maximum par session',

  modalitesPedagogiques: [
    'Pédagogie active et participative alternant apports théoriques, études de cas, mises en situation et projets',
    'Supports de formation remis à chaque participant',
    'Matériel et outils numériques mis à disposition',
    'Accompagnement individualisé par un formateur expert du domaine',
  ],

  evaluation: [
    'Évaluations en cours de formation et mises en situation',
    'Constitution d\'un dossier professionnel et présentation orale devant un jury',
    'Certification du ou des modules de compétences (CCP) ou du titre complet',
    'Délivrance du titre professionnel par le Ministère du Travail',
  ],

  positionnement: 'Votre candidature est étudiée sur dossier, puis un entretien de positionnement avec notre équipe pédagogique permet de vérifier l\'adéquation entre votre profil, les prérequis du titre et votre projet professionnel.',

  delaiAcces: 'Nous consulter. Entrée possible jusqu\'à la date de démarrage de la session, dans la limite des places disponibles.',

  accessibiliteHandicap: 'Nos formations sont accessibles aux personnes en situation de handicap. Notre référent handicap étudie avec vous, en amont de l\'entrée en formation, les adaptations pédagogiques, matérielles ou d\'accès aux locaux nécessaires.',

  financementCaveat: 'Financements présentés sous réserve d\'éligibilité de votre situation et de validation par l\'organisme financeur.',

  suitesDeParcours: 'Ce titre peut ouvrir vers une poursuite d\'études à un niveau supérieur ou vers une spécialisation professionnelle, selon votre projet et votre expérience.',

  contact: {
    phone: '04 58 28 04 29',
    email: 'contact@formasecret.fr',
  },
}
