/**
 * Données des formations NTC.
 * Structure calquée sur la page de référence : même champs pour toutes les formations,
 * seuls les textes changent d'une page à l'autre.
 */

export const formationNtcData = [
  {
    id: 'ntc-1',
    slug: 'negociateur-technico-commercial-1',
    // Carte (grille formations)
    image: "/assets/images/negociateur-technico-commercial.png",
    imageAlt: 'Formation NTC - Négociateur Technico Commercial',
    label: 'FORMATION CERTIFIANTE',
    title: 'NTC - Négociateur Technico Commercial',
    infoItems: [
      'En alternance : 12 mois',
      'En formation continue : 525h en centre + 1295h en stage',
    ],
    // Hero
    heroTitle: 'Votre métier d’avenir en tant que Négociateur Technico Commercial ',
    heroSubtitle: 'Commencer votre carrière de Négociateur Technico-Commercial',
    heroCtaText: 'Je m\'inscris à cette formation',
    heroImage: '/assets/images/negociateur-technico-commercial.png',
    // Intro (tags + titre + description)
    tags: ['12 mois en alternance', '750h en formation continue', '740h en centre + 210h en stage'],
    introTitle: 'Titre professionnel <br><span>Négociateur technico-commercial</span>',
    introDescription: 'Le Négociateur technico-commercial assure la gestion de l\'ensemble du processus de vente de biens ou de services, de la prospection à la fidélisation client.',
    // Objectifs (4 cartes)
    objectives: [
      { icon: 'fas fa-bullseye', text: 'Mettre en place des stratégies de prospection et d\'animation commerciale' },
      { icon: 'fas fa-search', text: 'Analyser les besoins clients et proposer des solutions adaptées' },
      { icon: 'fas fa-chart-line', text: 'Développer des compétences en négociation et relation client' },
      { icon: 'fas fa-handshake', text: 'Négocier et conclure des ventes dans le respect des objectifs' },
    ],
    // Définition du métier
    definitionTitle: "Qu'est-ce qu'un <br><strong>négociateur technico-commercial ?</strong>",
    definitionText: 'Le négociateur technico-commercial est un professionnel de la vente qui maîtrise à la fois les aspects techniques des produits ou services qu\'il propose et les techniques de vente. Il prospecte, conseille, négocie et fidélise la clientèle en s\'appuyant sur une connaissance fine du marché et des besoins clients.',
    // Missions (6 cartes numérotées)
    missions: [
      { number: 1, title: 'Prospecter', description: 'Identifier et qualifier des leads, développer un portefeuille clients et générer des opportunités commerciales.' },
      { number: 2, title: 'Négocier', description: 'Conduire les négociations commerciales, préparer les offres et conclure les ventes dans le respect des objectifs.' },
      { number: 3, title: 'Gérer', description: 'Assurer le suivi des commandes, la gestion des litiges et le respect des engagements pris auprès des clients.' },
      { number: 4, title: 'Animer', description: 'Animer des réunions commerciales, présenter l\'offre et accompagner les clients dans leur décision.' },
      { number: 5, title: 'Fidéliser', description: 'Développer la relation client sur le long terme et proposer des solutions adaptées aux évolutions des besoins.' },
      { number: 6, title: 'Analyser', description: 'Analyser les performances commerciales, suivre les indicateurs et contribuer à la stratégie commerciale.' },
    ],
    // Programme (liste en 2 colonnes)
    programTitle: 'Le programme de <br><strong>la formation</strong>',
    programColumns: [
      [
        'Techniques de vente et négociation',
        'Stratégie commerciale',
        'Gestion de la relation client',
        'Marketing digital',
        'Droit commercial',
        'Communication professionnelle',
      ],
      [
        'Prospection et qualification des leads',
        'Argumentation et gestion des objections',
        'Outils CRM et suivi d\'activité',
        'Négociation avancée',
        'Éthique et déontologie commerciale',
        'Projet professionnel et certification',
      ],
    ],
    // Débouchés
    debouchesTitle: 'Débouchés',
    debouchesContent: '<p>Cette formation vous ouvre les portes de multiples métiers dans le commerce et la vente. Les titulaires du titre Négociateur technico-commercial exercent en B to B comme en B to C, dans des secteurs variés.</p>',
    debouchesList: ['Commercial B to B ou B to C', 'Chargé d\'affaires', 'Responsable commercial Junior', 'Account Manager', 'Business Developer'],
    // Financement
    financementTitle: 'Financement',
    financementContent: '<p>Cette formation peut être financée par l\'OPCO de votre entreprise, par Pôle emploi (AIF), par le CPF ou en contrat de professionnalisation / apprentissage. Nos équipes vous accompagnent dans vos démarches.</p>',
    // Contenu (blocs)
    contenuTitle: 'Contenu',
    contenuBlocs: [
      { title: 'BLOC 1', items: ['Prospection et identification des besoins', 'Qualification des leads', 'Préparation de l\'entretien commercial'] },
      { title: 'BLOC 2', items: ['Argumentation et présentation de l\'offre', 'Gestion des objections', 'Techniques de closing'] },
      { title: 'BLOC 3', items: ['Négociation commerciale', 'Suivi de la relation client', 'Fidélisation et développement du portefeuille'] },
      { title: 'BLOC 4', items: ['Pilotage de l\'activité commerciale', 'Outils et indicateurs', 'Certification et mise en situation'] },
    ],
    // Témoignages
    testimonialsTitle: 'Ils nous font confiance',
    testimonials: [
      { name: 'Marie L.', quote: 'Une formation très concrète qui m\'a permis de structurer mon approche commerciale. L\'équipe est à l\'écoute et les mises en situation sont réalistes.', stars: 5 },
      { name: 'Thomas D.', quote: 'Le titre RNCP est un vrai plus sur mon CV. J\'ai trouvé un poste de chargé d\'affaires dès la fin de ma formation.', stars: 5 },
      { name: 'Sophie M.', quote: 'Formation exigeante mais formatrice. Les formateurs connaissent parfaitement le terrain et savent transmettre leur savoir-faire.', stars: 5 },
    ],
    // Pied de page formation
    footerLinks: [
      { label: 'En savoir plus', path: '/formations' },
      { label: 'Mentions légales', path: '/cgu' },
      { label: 'Politique de confidentialité', path: '/cgv' },
    ],
    certification: 'Titre professionnel de niveau 5 (Bac+2) - RNCP 39063',
  },
  {
    id: 'ntc-2',
    slug: 'assistant-direction',
    image: '/assets/images/assistant-de-direction.png',
    imageAlt: 'Formation d\'Assistant de direction',
    label: 'FORMATION CERTIFIANTE',
    title: 'Assistant de direction',
    infoItems: ['En alternance : 12 mois', '740h en centre + 210h en stage'],
    heroTitle: 'Formation d\'Assistant de direction',
    heroSubtitle: 'Développez votre expertise en vente B2B',
    heroCtaText: 'Je me lance dans ma formation',
    heroImage: '/assets/images/assistant-de-direction.png',
    tags: ['FORMATION', 'CERTIFIANTE', 'TITRE RNCP'],
    introTitle: 'Assistant de direction',
    introDescription: 'Un parcours intensif pour maîtriser la vente technique et la négociation en contexte B2B, de la prospection à la fidélisation client.',
    objectives: [
      { icon: 'fas fa-bullseye', text: 'Maîtriser la prospection commerciale B2B' },
      { icon: 'fas fa-search', text: 'Développer votre expertise technique produit' },
      { icon: 'fas fa-chart-line', text: 'Optimiser votre taux de conversion' },
      { icon: 'fas fa-handshake', text: 'Construire un réseau professionnel solide' },
    ],
    definitionTitle: "Qu'est-ce qu'un <br><strong>assistant de direction ?</strong>",
    definitionText: 'Le négociateur technico-commercial B2B accompagne les entreprises dans leurs achats de biens ou de services. Il combine une forte compétence technique sur son offre et des compétences commerciales pour conseiller et convaincre les décideurs.',
    missions: [
      { number: 1, title: 'Prospecter', description: 'Identifier les entreprises cibles et les décideurs, planifier les actions de prospection.' },
      { number: 2, title: 'Négocier', description: 'Préparer et conduire les négociations, construire des offres sur mesure.' },
      { number: 3, title: 'Gérer', description: 'Piloter les contrats et le suivi des commandes, gérer les réclamations.' },
      { number: 4, title: 'Animer', description: 'Animer des présentations produits et des démonstrations auprès des acheteurs.' },
      { number: 5, title: 'Fidéliser', description: 'Développer la relation avec les comptes clés et proposer des solutions évolutives.' },
      { number: 6, title: 'Analyser', description: 'Suivre les indicateurs commerciaux et contribuer au reporting d\'activité.' },
    ],
    programTitle: 'Le programme de <br><strong>la formation</strong>',
    programColumns: [
      ['Prospection B2B', 'Stratégie commerciale', 'Relation client', 'Négociation avancée', 'Droit des contrats', 'Communication'],
      ['Qualification des leads', 'Argumentation technique', 'CRM et pipeline', 'Closing et conclusion', 'Éthique commerciale', 'Certification'],
    ],
    debouchesTitle: 'Débouchés',
    debouchesContent: '<p>Chargé d\'affaires, Commercial B2B, Account Manager, Business Developer, Ingénieur commercial dans tous les secteurs d\'activité.</p>',
    debouchesList: ['Chargé d\'affaires', 'Commercial B2B', 'Account Manager', 'Business Developer'],
    financementTitle: 'Financement',
    financementContent: '<p>Financement possible via OPCO, CPF, contrat de professionnalisation ou apprentissage. Nous vous accompagnons dans vos démarches.</p>',
    contenuTitle: 'Contenu',
    contenuBlocs: [
      { title: 'BLOC 1', items: ['Prospection B2B', 'Identification des décideurs', 'Préparation des entretiens'] },
      { title: 'BLOC 2', items: ['Argumentation technique', 'Gestion des objections', 'Closing'] },
      { title: 'BLOC 3', items: ['Négociation', 'Suivi client', 'Fidélisation'] },
      { title: 'BLOC 4', items: ['Pilotage commercial', 'Certification'] },
    ],
    testimonialsTitle: 'Ils nous font confiance',
    testimonials: [
      { name: 'Pierre K.', quote: 'Formation très professionnelle. J\'ai pu appliquer directement les méthodes en entreprise.', stars: 5 },
      { name: 'Julie R.', quote: 'Un bon équilibre entre théorie et pratique. Les formateurs sont des professionnels du terrain.', stars: 5 },
      { name: 'Nicolas B.', quote: 'Le titre RNCP m\'a ouvert des portes. Je recommande cette formation.', stars: 5 },
    ],
    footerLinks: [
      { label: 'En savoir plus', path: '/formations' },
      { label: 'Mentions légales', path: '/cgu' },
      { label: 'Politique de confidentialité', path: '/cgv' },
    ],
    certification: 'Titre professionnel de niveau 5 (Bac+2) - RNCP 39063',
  },
  {
    id: 'ntc-3',
    slug: 'rpms',
    image: '/assets/images/rpms.png',
    imageAlt: 'Formation NTC - Négociateur Technico Commercial',
    label: 'FORMATION CERTIFIANTE',
    title: 'RPMS',
    infoItems: ['En alternance : 12 mois', 'En formation continue 500h en centre + 175h en stage'],
    heroTitle: 'Formation Négociateur Technico-Commercial - Digital & Vente à distance',
    heroSubtitle: 'Maîtrisez la vente digitale et à distance',
    heroCtaText: 'Je me lance dans ma formation',
    heroImage: '/assets/images/rpms.png',
    tags: ['FORMATION', 'CERTIFIANTE', 'DIGITAL'],
    introTitle: 'RPMS',
    introDescription: 'Une formation adaptée aux enjeux du commerce digital et de la vente à distance : outils, CRM, visioconférence et relation client en remote.',
    objectives: [
      { icon: 'fas fa-laptop', text: 'Maîtriser les outils de vente digitale' },
      { icon: 'fas fa-globe', text: 'Développer votre présence et votre activité en ligne' },
      { icon: 'fas fa-phone-alt', text: 'Optimiser vos entretiens à distance' },
      { icon: 'fas fa-database', text: 'Utiliser les CRM et outils de suivi d\'activité' },
    ],
    definitionTitle: "Qu'est-ce qu'un <br><strong>responsable de petite et moyenne structure ?</strong>",
    definitionText: 'Le négociateur technico-commercial en contexte digital prospecte et vend à distance via le téléphone, la visioconférence et les canaux digitaux. Il s\'appuie sur les CRM et les outils numériques pour piloter son activité et fidéliser ses clients.',
    missions: [
      { number: 1, title: 'Prospecter', description: 'Prospection multicanal (téléphone, email, réseaux), qualification des leads à distance.' },
      { number: 2, title: 'Négocier', description: 'Négociation par visio et téléphone, envoi d\'offres et suivi digital.' },
      { number: 3, title: 'Gérer', description: 'Suivi des dossiers via CRM, gestion des relances et du pipeline.' },
      { number: 4, title: 'Animer', description: 'Présentations à distance, démonstrations produit en visioconférence.' },
      { number: 5, title: 'Fidéliser', description: 'Relation client à distance, newsletters, suivi personnalisé.' },
      { number: 6, title: 'Analyser', description: 'Reporting et tableaux de bord, analyse des performances digitales.' },
    ],
    programTitle: 'Le programme de <br><strong>la formation</strong>',
    programColumns: [
      ['Vente à distance', 'Outils digitaux', 'CRM et pipeline', 'Communication écrite et orale', 'Réseaux sociaux pro', 'Droit et déontologie'],
      ['Prospection téléphonique', 'Visioconférence', 'E-mailing commercial', 'Closing à distance', 'Projet et certification', 'Insertion professionnelle'],
    ],
    debouchesTitle: 'Débouchés',
    debouchesContent: '<p>Commercial sédentaire, Téléconseiller, Chargé de clientèle, Account Manager à distance, Business Developer digital.</p>',
    debouchesList: ['Commercial sédentaire', 'Téléconseiller', 'Chargé de clientèle', 'Account Manager à distance'],
    financementTitle: 'Financement',
    financementContent: '<p>Financement OPCO, CPF, contrat pro ou apprentissage. Accompagnement personnalisé pour monter votre dossier.</p>',
    contenuTitle: 'Contenu',
    contenuBlocs: [
      { title: 'BLOC 1', items: ['Vente à distance', 'Outils et CRM', 'Prospection multicanal'] },
      { title: 'BLOC 2', items: ['Communication à distance', 'Visioconférence', 'E-mailing'] },
      { title: 'BLOC 3', items: ['Négociation et closing', 'Fidélisation', 'Suivi client'] },
      { title: 'BLOC 4', items: ['Pilotage et reporting', 'Certification'] },
    ],
    testimonialsTitle: 'Ils nous font confiance',
    testimonials: [
      { name: 'Laura F.', quote: 'Parfait pour une reconversion vers la vente à distance. Les outils et la méthodologie sont au top.', stars: 5 },
      { name: 'David T.', quote: 'Formation adaptée au télétravail et au commercial remote. Très satisfait du contenu.', stars: 5 },
      { name: 'Emma C.', quote: 'Les formateurs connaissent bien la vente digitale. J\'ai trouvé un poste en full remote.', stars: 5 },
    ],
    footerLinks: [
      { label: 'En savoir plus', path: '/formations' },
      { label: 'Mentions légales', path: '/cgu' },
      { label: 'Politique de confidentialité', path: '/cgv' },
    ],
    certification: 'Titre professionnel de niveau 5 (Bac+2) - RNCP 39063',
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
