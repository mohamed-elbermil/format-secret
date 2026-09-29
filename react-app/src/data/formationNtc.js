/**
 * Données des formations NTC.
 * Structure calquée sur la page de référence : même champs pour toutes les formations,
 * seuls les textes changent d'une page à l'autre.
 */

export const formationNtcData = [
  {
    id: 'ntc-1',
    slug: 'negociateur-technico-commercial-1',
    pdf: '/assets/pdf/Titre-pro-NTC.pdf',
    // Carte (grille formations)
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Négociateur technico-commercial en réunion client',
    label: 'FORMATION CERTIFIANTE',
    title: 'NTC - Négociateur Technico Commercial',
    infoItems: [
      'Alternance (contrat d\'apprentissage) : 12 mois',
      '525h en centre + 1 295h en entreprise',
    ],
    // Hero
    heroTitle: 'Devenez Négociateur Technico-Commercial',
    heroSubtitle: 'Élaborez votre stratégie de prospection et négociez des solutions technico-commerciales',
    heroCtaText: 'Je m\'inscris à cette formation',
    heroImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=960',
    // Intro (tags + titre + description)
    tags: ['12 mois en alternance', '1 820 heures au total', '525h en centre + 1 295h en entreprise'],
    introTitle: 'Titre professionnel <br><span>Négociateur technico-commercial</span>',
    introDescription: 'Le Négociateur technico-commercial élabore une stratégie de prospection et la met en œuvre, puis négocie une solution technique et commerciale pour consolider l\'expérience client.',
    // Objectifs (4 cartes)
    objectives: [
      { icon: 'fas fa-bullseye', text: 'Élaborer une stratégie de prospection et la mettre en œuvre' },
      { icon: 'fas fa-handshake', text: 'Négocier une solution technique et commerciale et consolider l\'expérience client' },
      { icon: 'fas fa-diagram-project', text: 'Concevoir et organiser un plan d\'actions commerciales' },
      { icon: 'fas fa-users', text: 'Optimiser la gestion de la relation client' },
    ],
    // Définition du métier
    definitionTitle: "Qu'est-ce qu'un <br><strong>négociateur technico-commercial ?</strong>",
    definitionText: 'Le négociateur technico-commercial assure une veille commerciale, conçoit et organise un plan d\'actions commerciales, prospecte un secteur défini et analyse ses performances pour mettre en œuvre des actions correctives. Il représente l\'entreprise, conçoit des propositions technico-commerciales, négocie et optimise la gestion de la relation client.',
    // Missions (9 cartes numérotées, issues des 2 modules du titre)
    missionsTitle: "Quelles sont les missions d'un <br /><strong>négociateur technico-commercial ?</strong>",
    missions: [
      { number: 1, title: 'Assurer une veille commerciale', description: 'Mener une veille informationnelle et commerciale continue sur son marché, ses concurrents et ses clients.' },
      { number: 2, title: 'Concevoir un plan d\'actions', description: 'Concevoir et organiser un plan d\'actions commerciales adapté aux objectifs de l\'entreprise.' },
      { number: 3, title: 'Prospecter un secteur défini', description: 'Mettre en œuvre des techniques de prospection multicanale sur un secteur ou une clientèle ciblée.' },
      { number: 4, title: 'Analyser ses performances', description: 'Analyser les résultats de son activité, piloter la performance et mettre en œuvre des actions correctives.' },
      { number: 5, title: 'Représenter l\'entreprise', description: 'Représenter l\'entreprise et valoriser son image auprès des clients et partenaires.' },
      { number: 6, title: 'Concevoir une offre technico-commerciale', description: 'Élaborer des propositions techniques et commerciales adaptées aux besoins du client.' },
      { number: 7, title: 'Négocier une solution', description: 'Argumenter, traiter les objections et conclure la vente grâce aux techniques de négociation et de closing.' },
      { number: 8, title: 'Réaliser le bilan', description: 'Réaliser le bilan de son activité, l\'ajuster et en rendre compte à sa hiérarchie.' },
      { number: 9, title: 'Optimiser la relation client', description: 'Assurer le suivi et la fidélisation de la clientèle pour développer le portefeuille.' },
    ],
    // Programme (2 modules de compétences)
    programTitle: 'Le programme de <br><strong>la formation</strong>',
    programColumns: [
      [
        'Veille informationnelle et commerciale',
        'Élaboration du plan d\'actions commerciales',
        'Techniques de prospection multicanale',
        'Analyse des résultats et pilotage de la performance',
        'Mise en œuvre d\'actions correctives',
      ],
      [
        'Argumentation et valorisation de l\'offre',
        'Élaboration de propositions techniques et commerciales',
        'Techniques de négociation et de closing',
        'Suivi et fidélisation de la clientèle',
        'Reporting et ajustement de l\'activité commerciale',
      ],
    ],
    prerequisitesTitle: 'Les <strong>pré-requis</strong> ?',
    prerequisitesList: [
      'Niveau bac professionnel commercial ou titre professionnel de niveau 4 (Attaché commercial ou Commercial) ou équivalent',
      'Au moins 6 mois d\'expérience dans le métier',
      'Permis de conduire B (véhicule léger) recommandé pour l\'exercice du métier et pour la période en entreprise',
    ],
    // Débouchés
    debouchesTitle: 'Débouchés',
    debouchesContent: '<p>Cette formation vous ouvre les portes de multiples métiers dans le commerce et la vente technico-commerciale, en B2B comme en B2C.</p>',
    debouchesList: ['Technico-commercial', 'Responsable grands comptes', 'Responsable d\'affaires', 'Key account manager', 'Chargé clientèle B2B', 'Chargé d\'affaires B', 'Chargé de développement commercial', 'Commercial B2B', 'Business developer', 'Sales account executive'],
    // Financement
    financementTitle: 'Financement',
    financementContent: '<p>Cette formation est dispensée en alternance dans le cadre d\'un contrat d\'apprentissage : elle est prise en charge par l\'OPCO de l\'entreprise d\'accueil, sans coût pour l\'apprenti. Nos équipes vous accompagnent dans vos démarches.</p>',
    financementItems: [
      { icon: 'fas fa-user-graduate', title: 'Contrat d\'apprentissage', description: 'Formation rémunérée, prise en charge intégralement par l\'OPCO.' },
      { icon: 'fas fa-id-card', title: 'CPF', description: 'Mobilisable selon votre situation professionnelle.' },
      { icon: 'fas fa-briefcase', title: 'France Travail', description: 'Dispositifs d\'accompagnement selon votre situation.' },
    ],
    // Pied de page formation
    footerLinks: [
      { label: 'En savoir plus', path: '/formations' },
      { label: 'Mentions légales', path: '/cgu' },
      { label: 'Politique de confidentialité', path: '/cgv' },
    ],
    certification: 'Titre professionnel de niveau 5 (Bac+2) — RNCP 39063 enregistré le 10/06/2024',
  },
  {
    id: 'ntc-2',
    slug: 'assistant-direction',
    pdf: '/assets/pdf/Titre-pro-Assistant-Direction.pdf',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Assistant de direction organisant l\'agenda de son équipe de direction',
    label: 'FORMATION CERTIFIANTE',
    title: 'Assistant de direction',
    infoItems: ['Formation initiale : 5 mois', '600h en centre + 210h en stage'],
    heroTitle: 'Devenez Assistant de direction',
    heroSubtitle: 'Le collaborateur de confiance qui organise et pilote l\'activité de l\'équipe de direction',
    heroCtaText: 'Je m\'inscris à cette formation',
    heroImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=960',
    tags: ['810 heures au total', '600h en centre + 210h en stage', 'Formation initiale'],
    introTitle: 'Titre professionnel <br><span>Assistant de direction</span>',
    introDescription: 'L\'assistant de direction assure les fonctions de support administratif et organisationnel de l\'équipe de direction et organise et suit les projets et dossiers spécifiques qui lui sont confiés, en français comme en anglais.',
    objectives: [
      { icon: 'fas fa-briefcase', text: 'Assurer les fonctions de support administratif et organisationnel à l\'équipe de direction' },
      { icon: 'fas fa-diagram-project', text: 'Organiser et suivre les projets et dossiers spécifiques de l\'équipe de direction' },
      { icon: 'fas fa-chart-line', text: 'Concevoir des outils de pilotage et présenter des informations chiffrées de gestion' },
      { icon: 'fas fa-magnifying-glass', text: 'Conduire une veille informationnelle et diffuser le contenu' },
    ],
    definitionTitle: "Qu'est-ce qu'un <br><strong>assistant de direction ?</strong>",
    definitionText: "L'assistant de direction organise et suit les activités de l'équipe de direction en français et en anglais, conçoit des outils de pilotage, optimise les processus administratifs et assure l'interface orale et écrite avec les interlocuteurs internes et externes. Il conduit également une veille informationnelle, coordonne des projets, organise des événements et met en œuvre des actions de communication.",
    missionsTitle: "Quelles sont les missions d'un <br /><strong>assistant de direction ?</strong>",
    missions: [
      { number: 1, title: 'Organiser l\'activité de la direction', description: 'Organiser et suivre les activités de l\'équipe de direction (agendas, réunions, déplacements) en français et en anglais.' },
      { number: 2, title: 'Piloter par les chiffres', description: 'Concevoir des outils de pilotage et présenter des informations chiffrées de gestion.' },
      { number: 3, title: 'Optimiser les processus', description: 'Optimiser les processus administratifs et l\'organisation documentaire.' },
      { number: 4, title: 'Assurer l\'interface', description: 'Assurer l\'interface orale et écrite avec les interlocuteurs internes et externes, en français et en anglais.' },
      { number: 5, title: 'Assurer une veille', description: 'Conduire une veille informationnelle et diffuser le contenu utile à l\'équipe de direction.' },
      { number: 6, title: 'Piloter un projet', description: 'Préparer, coordonner et suivre un projet de bout en bout.' },
      { number: 7, title: 'Organiser un événement', description: 'Organiser un événement pour l\'entreprise ou pour l\'équipe de direction.' },
      { number: 8, title: 'Communiquer', description: 'Mettre en œuvre une action de communication en français et en anglais.' },
    ],
    programTitle: 'Le programme de <br><strong>la formation</strong>',
    programColumns: [
      [
        'Gestion des agendas, réunions et déplacements',
        'Organisation administrative et documentaire',
        'Tableaux de bord et reporting',
        'Outils bureautiques (Word, Excel, PowerPoint, Outlook, Teams)',
        'Communication professionnelle en français et en anglais',
        'Utilisation de l\'IA générative et d\'outils numériques pour optimiser les tâches',
      ],
      [
        'Gestion de projets',
        'Organisation d\'événements',
        'Préparation de supports de communication',
        'Recherche et diffusion d\'informations',
        'Coordination des équipes et d\'un projet',
        'Utilisation de l\'IA générative pour produire comptes rendus, synthèses et présentations',
      ],
    ],
    prerequisitesTitle: 'Les <strong>pré-requis</strong> ?',
    prerequisitesList: [
      'Niveau Bac ou équivalent',
      'Maîtrise du français écrit et oral',
      'Intérêt pour les fonctions administratives et le travail en équipe',
    ],
    debouchesTitle: 'Débouchés',
    debouchesContent: '<p>Cette formation prépare à des fonctions d\'assistanat de direction polyvalentes, au plus près des équipes dirigeantes.</p>',
    debouchesList: ['Assistant.e de direction', 'Office manager', 'Assistant.e de direction polyvalent.e', 'Assistant.e administratif.ve de direction'],
    financementTitle: 'Financement',
    financementContent: '<p>Cette formation en initiale peut être financée via le CPF, France Travail ou un financement individuel/entreprise. Nos équipes vous accompagnent dans le montage de votre dossier.</p>',
    financementItems: [
      { icon: 'fas fa-id-card', title: 'CPF', description: 'Mobilisable selon votre situation professionnelle.' },
      { icon: 'fas fa-briefcase', title: 'France Travail', description: 'Aide individuelle à la formation selon votre situation.' },
      { icon: 'fas fa-hand-holding-usd', title: 'Financement individuel / entreprise', description: 'Prise en charge possible par votre employeur.' },
    ],
    footerLinks: [
      { label: 'En savoir plus', path: '/formations' },
      { label: 'Mentions légales', path: '/cgu' },
      { label: 'Politique de confidentialité', path: '/cgv' },
    ],
    certification: 'Titre professionnel de niveau 5 (Bac+2) — RNCP 38667 enregistré le 29/07/2024',
  },
  {
    id: 'ntc-3',
    slug: 'rpms',
    pdf: '/assets/pdf/Titre-pro-RPMS.pdf',
    image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Responsable de petite ou moyenne structure en réunion avec son équipe',
    label: 'FORMATION CERTIFIANTE',
    title: 'RPMS - Responsable de Petite ou Moyenne Structure',
    infoItems: ['Alternance (contrat d\'apprentissage) : 12 mois', '525h en centre + 1 082h en entreprise'],
    heroTitle: 'Devenez Responsable de Petite ou Moyenne Structure',
    heroSubtitle: 'Dirigez une structure avec une équipe et pilotez son activité au quotidien',
    heroCtaText: 'Je m\'inscris à cette formation',
    heroImage: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=960',
    tags: ['12 mois en alternance', '1 607 heures au total', '525h en centre + 1 082h en entreprise'],
    introTitle: 'Titre professionnel <br><span>Responsable de petite ou moyenne structure</span>',
    introDescription: 'Le Responsable de petite ou moyenne structure dirige une structure avec une équipe, met en œuvre son objet social et établit et présente son rapport d\'activité, tous secteurs confondus (bâtiment, industrie, services).',
    objectives: [
      { icon: 'fas fa-user-tie', text: 'Diriger une structure avec une équipe' },
      { icon: 'fas fa-diagram-project', text: 'Mettre en œuvre l\'objet social de la structure' },
      { icon: 'fas fa-file-lines', text: 'Établir et présenter un rapport d\'activité de la structure' },
      { icon: 'fas fa-users', text: 'Manager et animer une équipe au quotidien' },
    ],
    definitionTitle: "Qu'est-ce qu'un <br><strong>responsable de petite ou moyenne structure ?</strong>",
    definitionText: "Le responsable de petite ou moyenne structure dirige une entité (entreprise, agence, unité, association...) avec une équipe. Il développe une vision systémique de sa structure dans son environnement, adapte son offre à la demande, organise la production et rend compte de son activité en analysant le bilan et le compte de résultat.",
    missionsTitle: "Quelles sont les missions d'un <br /><strong>responsable de petite ou moyenne structure ?</strong>",
    missions: [
      { number: 1, title: 'Développer une vision systémique', description: 'Analyser la structure dans son environnement pour orienter ses décisions stratégiques.' },
      { number: 2, title: 'Inscrire la structure dans son territoire', description: 'Développer les relations avec les partenaires, réseaux et acteurs du territoire.' },
      { number: 3, title: 'Manager une équipe', description: 'Manager et animer une équipe au quotidien pour atteindre les objectifs fixés.' },
      { number: 4, title: 'Adapter l\'offre', description: 'Adapter l\'offre de la structure à la demande du marché ou des bénéficiaires.' },
      { number: 5, title: 'Diffuser l\'offre', description: 'Organiser et développer la diffusion de l\'offre de la structure.' },
      { number: 6, title: 'Organiser la production', description: 'Organiser la production de biens ou de services de la structure.' },
      { number: 7, title: 'Analyser le bilan', description: 'Analyser le bilan de la structure pour évaluer sa situation financière.' },
      { number: 8, title: 'Analyser le compte de résultat', description: 'Analyser le compte de résultat pour piloter la rentabilité de la structure.' },
      { number: 9, title: 'Rédiger le rapport d\'activité', description: 'Rédiger et présenter le rapport d\'activité de la structure devant les instances concernées.' },
    ],
    programTitle: 'Le programme de <br><strong>la formation</strong>',
    programColumns: [
      [
        'Développer une vision systémique de la structure dans son environnement',
        'Inscrire la structure dans son territoire',
        'Manager et animer une équipe',
      ],
      [
        'Adapter l\'offre de la structure à la demande',
        'Organiser et développer la diffusion de l\'offre',
        'Organiser la production',
      ],
      [
        'Analyser le bilan de la structure',
        'Analyser le compte de résultat de la structure',
        'Rédiger le rapport d\'activité de la structure',
      ],
    ],
    prerequisitesTitle: 'Les <strong>pré-requis</strong> ?',
    prerequisitesList: [
      'Niveau terminale ou équivalent, avec une expérience professionnelle d\'environ 6 mois (connaissance de l\'entreprise et de son fonctionnement, tous secteurs : bâtiment, industrie ou services)',
      'Au moins 6 mois d\'expérience dans le métier',
      'Permis de conduire B (véhicule léger) recommandé pour l\'exercice du métier et pour la période en entreprise',
    ],
    debouchesTitle: 'Débouchés',
    debouchesContent: '<p>Cette formation ouvre la voie à des fonctions de direction et de management dans tous types de structures : entreprises, associations, agences ou unités.</p>',
    debouchesList: ['Délégué général, de proximité, d\'agence ou d\'unité', 'Responsable de centre de profit, de site, de centre ou d\'établissement', 'Manager, Chef, Responsable', 'Directeur adjoint, Directeur délégué'],
    financementTitle: 'Financement',
    financementContent: '<p>Cette formation est dispensée en alternance dans le cadre d\'un contrat d\'apprentissage : elle est prise en charge par l\'OPCO de l\'entreprise d\'accueil, sans coût pour l\'apprenti. Nos équipes vous accompagnent dans vos démarches.</p>',
    financementItems: [
      { icon: 'fas fa-user-graduate', title: 'Contrat d\'apprentissage', description: 'Formation rémunérée, prise en charge intégralement par l\'OPCO.' },
      { icon: 'fas fa-id-card', title: 'CPF', description: 'Mobilisable selon votre situation professionnelle.' },
      { icon: 'fas fa-briefcase', title: 'France Travail', description: 'Dispositifs d\'accompagnement selon votre situation.' },
    ],
    footerLinks: [
      { label: 'En savoir plus', path: '/formations' },
      { label: 'Mentions légales', path: '/cgu' },
      { label: 'Politique de confidentialité', path: '/cgv' },
    ],
    certification: 'Titre professionnel de niveau 5 (Bac+2) — RNCP 38575 enregistré le 08/02/2024',
  },
]

export function getFormationNtcById(id) {
  return formationNtcData.find((f) => f.id === id)
}

export function getFormationNtcBySlug(slug) {
  return formationNtcData.find((f) => f.slug === slug)
}

export const ntcBlocksList = formationNtcData.map((f) => ({
  id: f.id,
  slug: f.slug,
  image: f.image,
  imageAlt: f.imageAlt,
  label: f.label,
  title: f.title,
  infoItems: f.infoItems,
}))
