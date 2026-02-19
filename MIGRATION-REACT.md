# Guide de migration progressive : HTML/CSS → React

Ce document décrit une approche **étape par étape** pour refactoriser le site FormaSecret vers React, sans tout casser et en gardant le site actuel fonctionnel pendant la transition.

---

## 1. Analyse de la structure actuelle

### Fichiers du projet
| Fichier | Rôle |
|--------|------|
| `index.html` | Accueil |
| `formations.html` | Page formations (liste, modal, blocs NTC) |
| `a-propos.html` | À propos, histoire, approche |
| `academie.html` | Académie |
| `cgu.html` / `cgv.html` | Pages légales |
| `assets/styles.css` | Tous les styles (~2800+ lignes) |
| `assets/script.js` | Burger menu, animation chiffres, formulaire contact |

### Problèmes identifiés (duplication)
- **Header + nav** : copié à l’identique dans chaque page (≈ 30 lignes × 5+ pages).
- **Menu mobile (fullscreen)** : même liste de liens dupliquée.
- **Footer** : même structure et liens sur toutes les pages (≈ 40 lignes × 5+ pages).
- **Section Contact** : formulaire + infos contact répétés (index, formations, etc.).
- **Blocs de formation NTC** : 3 cartes quasi identiques (≈ 35 lignes × 3).
- **Cartes de services / avantages / modalités** : même pattern (image/icône + titre + texte).
- **Meta tags, scripts (gtag, recaptcha, sweetalert)** : répétés dans chaque `<head>`.

### Logique JavaScript actuelle
- **script.js** : burger menu, animation IntersectionObserver pour les chiffres, soumission formulaire contact (fetch + SweetAlert).
- **formations.html** : script inline avec objet `formations`, modal, gestion calendrier/iframe.

---

## 2. Parties à transformer en composants React

### Composants de layout (priorité haute)
| Composant | Source actuelle | Props / remarques |
|-----------|-----------------|-------------------|
| `Layout` | Structure commune de chaque page | `children`, optionnel `title`, `description` pour le SEO |
| `Header` | `<header>` + logo + nav | — |
| `NavLinks` | Liste des liens de navigation | `className` pour nav desktop vs fullscreen |
| `Footer` | `<footer>` entier | — |
| `Container` | `<div class="container">` | `children` |

### Composants de section (priorité haute)
| Composant | Source actuelle | Props |
|-----------|-----------------|--------|
| `ContactSection` | Section `#contact` (titre, infos, formulaire) | — |
| `ContactForm` | Formulaire seul | onSubmit, id pour recaptcha |

### Composants “carte” réutilisables (priorité haute)
| Composant | Source actuelle | Props |
|-----------|-----------------|--------|
| `FormationBlockCard` | Un bloc NTC (image + label + titre + infos) | `image`, `label`, `title`, `infoItems[]` |
| `ServiceCard` | Carte service (image + titre + description) | `image`, `title`, `description` |
| `AdvantageCard` | Carte avantage (icône + titre + texte) | `icon`, `title`, `description` |
| `ModaliteItem` | Item modalités (icône + titre + texte) | `icon`, `title`, `description` |
| `FigureCard` | Chiffre clé (icône + label + nombre + texte) | `icon`, `label`, `value`, `suffix`, `description` |

### Composants spécifiques aux pages (priorité moyenne)
| Composant | Source | Remarques |
|-----------|--------|-----------|
| `Hero` | Section hero (accueil / formations / a-propos) | Variantes via props : `title`, `subtitle`, `cta`, `variant` |
| `FormationModal` | Modal formation + calendrier | État ouvert/fermé, données formation, PDF, iframe |
| `FormationCategory` | Catégorie + liste de formations cliquables | Données formations, callback pour ouvrir modal |

### Données à centraliser
- **Navigation** : liste des liens (label, href).
- **Formations** : l’objet `formations` actuel (titres, descriptions, PDF, calendrier).
- **Réseaux sociaux** : liens + aria-labels.
- **Contact** : téléphone, email, horaires.

---

## 3. Arborescence de projet React proposée

```
format-secret-v2/
├── public/                    # Ancien "racine" du site
│   ├── assets/
│   │   ├── images/
│   │   ├── pdf/
│   │   └── styles.css         # À terme : découper en modules ou garder global
│   ├── contact.php            # Reste côté serveur
│   └── index.html             # Template minimal (point d’entrée React)
│
├── src/
│   ├── index.jsx              # Point d’entrée React
│   ├── App.jsx                # Routes + Layout global
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── NavLinks.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Container.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── ContactSection.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   └── Hero.jsx
│   │   │
│   │   ├── cards/
│   │   │   ├── FormationBlockCard.jsx   ← Exemple concret ci‑dessous
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── AdvantageCard.jsx
│   │   │   ├── ModaliteItem.jsx
│   │   │   └── FigureCard.jsx
│   │   │
│   │   └── formations/
│   │       ├── FormationModal.jsx
│   │       └── FormationCategory.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── FormationsPage.jsx
│   │   ├── AProposPage.jsx
│   │   ├── AcademiePage.jsx
│   │   ├── CguPage.jsx
│   │   └── CgvPage.jsx
│   │
│   ├── data/
│   │   ├── navigation.js
│   │   ├── formations.js      # Objet formations actuel
│   │   ├── socialLinks.js
│   │   └── contactInfo.js
│   │
│   └── hooks/                 # Optionnel au début
│       └── useContactForm.js
│
├── package.json
├── vite.config.js             # Ou create-react-app
└── MIGRATION-REACT.md         # Ce fichier
```

**Remarques**
- Garder `assets/styles.css` au début : l’importer dans `src/index.jsx` pour ne pas tout réécrire en CSS modules d’un coup.
- Les pages légales (CGU/CGV) peuvent rester en HTML statique au début, ou être converties en une page React qui charge le contenu si besoin.

---

## 4. Plan de migration étape par étape

### Phase 0 : Préparation (sans casser l’existant)
1. Créer un projet React (Vite recommandé) **à côté** ou **dans** le projet actuel (ex. dossier `src/` + `package.json` à la racine).
2. Configurer le build pour que le bundle soit généré vers un dossier (ex. `dist/`) que vous pourrez déployer comme le site actuel.
3. Importer le CSS actuel dans l’entrée React pour réutiliser tous les styles.

### Phase 1 : Layout et navigation
1. Extraire les liens de navigation dans `data/navigation.js`.
2. Créer `Header`, `NavLinks`, `Footer`, `Container`, puis `Layout` qui les utilise.
3. Dans `App.jsx`, utiliser `Layout` + une seule page (ex. Accueil) qui affiche encore du contenu statique copié depuis `index.html`.
4. Vérifier que le menu burger et le style fonctionnent (réutiliser la logique actuelle du `script.js` dans un `useEffect` ou un petit hook si besoin).

### Phase 2 : Une page complète en composants
1. Choisir **une** page (ex. Accueil).
2. Remplacer chaque section par un composant (Hero, Services avec `ServiceCard`, Avantages avec `AdvantageCard`, Chiffres clés avec `FigureCard`, Contact, etc.).
3. Introduire les données (tableaux) dans `data/` et les passer en props.
4. Garder le formulaire contact avec la même action (contact.php) et la même logique (recaptcha, fetch, SweetAlert) dans un composant `ContactForm`.

### Phase 3 : Page Formations
1. Créer `FormationBlockCard` et l’utiliser avec une liste de formations NTC (données en `data/`).
2. Créer `FormationModal` et y déplacer la logique du modal actuel (état ouvert/fermé, titre, description, PDF, calendrier).
3. Centraliser l’objet `formations` dans `data/formations.js` et l’utiliser dans la page + le modal.
4. Conserver le même comportement (clic sur une formation → ouvrir modal, etc.).

### Phase 4 : Autres pages et fin de migration
1. Créer les pages À propos, Académie, CGU, CGV en composants/pages React.
2. Ajouter le routage (React Router) : une URL = une page.
3. Remplacer les anciens `.html` par une configuration serveur qui renvoie vers `index.html` pour toutes les routes (SPA).
4. Une fois tout migré, supprimer les anciens fichiers HTML (ou les garder en secours).

### Règle d’or
- **Une chose à la fois** : un composant ou une page par étape.
- **Toujours garder le site actuel déployable** jusqu’à ce que la version React soit validée (ex. build de la SPA dans un sous-dossier ou sur un sous-domaine).

---

## 5. Exemple concret : de la section HTML au composant React

### Avant (HTML répété 3 fois dans `formations.html`)

```html
<div class="formation-block-card">
    <div class="formation-block-image">
        <img src="./assets/images/formation-ntc.jpg" alt="Formation NTC - Négociateur Technico Commercial">
    </div>
    <div class="formation-block-content">
        <p class="formation-block-label">LOREM IPSUM</p>
        <h3 class="formation-block-title">NTC - Négociateur Technico Commercial</h3>
        <div class="formation-block-info">
            <div class="formation-info-item">
                <i class="fas fa-calendar-alt"></i>
                <span>En alternance : 12 mois</span>
            </div>
            <div class="formation-info-item">
                <i class="fas fa-calendar-alt"></i>
                <span>En formation continue : 740h en centre + 210h en stage</span>
            </div>
        </div>
    </div>
</div>
```

### Après : composant React réutilisable

**Fichier : `src/components/cards/FormationBlockCard.jsx`**

```jsx
import React from 'react';

/**
 * Carte bloc formation (ex. NTC).
 * Réutilisable pour toute formation avec image, label, titre et liste d’infos.
 */
export default function FormationBlockCard({ image, imageAlt, label, title, infoItems }) {
  return (
    <div className="formation-block-card">
      <div className="formation-block-image">
        <img src={image} alt={imageAlt ?? title} />
      </div>
      <div className="formation-block-content">
        {label && <p className="formation-block-label">{label}</p>}
        <h3 className="formation-block-title">{title}</h3>
        <div className="formation-block-info">
          {infoItems?.map((text, index) => (
            <div key={index} className="formation-info-item">
              <i className="fas fa-calendar-alt" aria-hidden="true" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

**Utilisation dans la page Formations**

```jsx
import FormationBlockCard from '../components/cards/FormationBlockCard';

const ntcFormation = {
  image: '/assets/images/formation-ntc.jpg',
  imageAlt: 'Formation NTC - Négociateur Technico Commercial',
  label: 'LOREM IPSUM',
  title: 'NTC - Négociateur Technico Commercial',
  infoItems: [
    'En alternance : 12 mois',
    'En formation continue : 740h en centre + 210h en stage',
  ],
};

// Une seule source de données, affichée 3 fois (ou N fois)
const ntcBlocks = [ntcFormation, ntcFormation, ntcFormation];

function FormationsPage() {
  return (
    <section className="formation-blocks">
      <div className="container">
        <div className="formation-blocks-grid">
          {ntcBlocks.map((block, index) => (
            <FormationBlockCard key={index} {...block} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Bénéfices
- **Plus de duplication** : la structure de la carte est définie une seule fois.
- **Données centralisées** : on peut mettre `ntcBlocks` dans `data/formationsNtc.js` et les réutiliser ailleurs (ex. page dédiée NTC).
- **Évolutif** : ajouter une nouvelle carte = ajouter un objet dans le tableau, sans toucher au JSX.
- **Styles inchangés** : les classes CSS restent les mêmes, le fichier `styles.css` actuel continue de s’appliquer.

---

## 6. Prochaine étape recommandée

1. Initialiser le projet React (Vite) dans le repo.
2. Importer `assets/styles.css` dans l’entrée React.
3. Créer `Layout` (Header + Footer + Container) et une page Accueil minimale.
4. Implémenter `FormationBlockCard` comme ci-dessus et l’intégrer dans une page Formations simple.

---

## 7. Exemple livré dans le projet : dossier `react-app/`

Un exemple fonctionnel a été ajouté dans le dossier **`react-app/`** :

- **Lancer** : `cd react-app && npm install && npm run dev`
- **Contenu** : la section « Blocs Formation NTC » en React (composant `FormationBlockCard` + données dans `data/formationBlocks.js`).
- Le CSS du site actuel est réutilisé via l’alias `@assets` (fichier `assets/styles.css`).

Vous pouvez comparer le rendu avec la page `formations.html` et réutiliser ce pattern pour les autres sections.

Si vous le souhaitez, on peut détailler la **Phase 0** (création du projet Vite + structure des dossiers) ou la **Phase 1** (Layout + Header + Footer) fichier par fichier dans le repo.
