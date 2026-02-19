# Guide : Pages génériques pour formations NTC

## 📋 Vue d'ensemble

Cette solution permet d'afficher une **page générique unique** pour toutes les formations NTC, avec un contenu dynamique basé sur l'URL.

## 🏗️ Architecture

### 1. **Données centralisées** (`src/data/formationNtc.js`)

Toutes les formations sont stockées dans un tableau `formationNtcData`. Chaque formation a :
- `id` : identifiant unique (ex: `'ntc-1'`)
- `slug` : URL-friendly (ex: `'negociateur-technico-commercial-1'`)
- Contenu : titre, description, objectifs, programme, etc.

**Avantage** : Une seule source de vérité, facile à maintenir.

### 2. **Composant carte cliquable** (`FormationBlockCard.jsx`)

La carte est maintenant enveloppée dans un `<Link>` qui redirige vers `/formation-ntc/:slug`.

**Exemple d'utilisation** :
```jsx
<FormationBlockCard 
  id="ntc-1"
  slug="negociateur-technico-commercial-1"
  image="/assets/images/formation-ntc.jpg"
  title="NTC - Négociateur Technico Commercial"
  // ... autres props
/>
```

### 3. **Page générique** (`FormationNtcPage.jsx`)

La page utilise `useParams()` pour récupérer le `slug` depuis l'URL, puis charge les données correspondantes.

**Route** : `/formation-ntc/:slug`

**Structure** :
- Hero avec titre dynamique
- Image principale
- Informations (durée, modalités)
- Description
- Objectifs (grille)
- Programme (liste numérotée)
- Certification
- CTA (Contact + Retour formations)

### 4. **Routage** (`App.jsx`)

Route dynamique ajoutée :
```jsx
<Route path="/formation-ntc/:slug" element={<FormationNtcPage />} />
```

## 🚀 Utilisation

### Ajouter une nouvelle formation

1. **Ouvrir** `src/data/formationNtc.js`
2. **Ajouter** un nouvel objet dans `formationNtcData` :

```javascript
{
  id: 'ntc-4',
  slug: 'ma-nouvelle-formation',
  image: '/assets/images/nouvelle-formation.jpg',
  title: 'Ma Nouvelle Formation',
  subtitle: 'Description courte',
  // ... autres champs
}
```

3. **La carte apparaîtra automatiquement** dans la grille sur `/formations`
4. **La page détaillée sera accessible** via `/formation-ntc/ma-nouvelle-formation`

### Modifier le contenu d'une formation

1. **Ouvrir** `src/data/formationNtc.js`
2. **Modifier** l'objet correspondant
3. **Les changements apparaîtront** automatiquement sur la carte ET la page détaillée

## 📐 Structure des données

```typescript
{
  id: string,              // Identifiant unique
  slug: string,            // URL-friendly (pas d'espaces, accents, etc.)
  image: string,           // Chemin vers l'image
  imageAlt: string,        // Texte alternatif
  label: string,           // Label (ex: "LOREM IPSUM")
  title: string,           // Titre principal
  subtitle?: string,       // Sous-titre (optionnel)
  infoItems: string[],     // Liste d'informations (durée, modalités)
  description: string,    // HTML de la description
  objectives?: string[],   // Liste des objectifs
  program?: Array<{       // Programme (optionnel)
    title: string,
    content: string
  }>,
  certification?: string   // Texte de certification
}
```

## 🎨 Personnalisation

### Modifier le design de la page

Les styles sont dans `assets/styles.css` avec les classes :
- `.formation-detail-*` : Sections de la page
- `.formation-objective-card` : Cartes d'objectifs
- `.formation-program-item` : Items du programme
- `.certification-box` : Boîte de certification

### Ajouter une nouvelle section

1. **Ajouter** la section dans `FormationNtcPage.jsx`
2. **Ajouter** le champ correspondant dans les données
3. **Créer** les styles CSS si nécessaire

## ✅ Avantages de cette approche

- ✅ **Zéro duplication** : Une seule page React pour toutes les formations
- ✅ **Maintenable** : Modifier les données = mise à jour automatique partout
- ✅ **Scalable** : Ajouter une formation = ajouter un objet dans le tableau
- ✅ **SEO-friendly** : URLs avec slugs (`/formation-ntc/mon-slug`)
- ✅ **Type-safe** : Structure de données claire et documentée
- ✅ **Réutilisable** : Même pattern pour d'autres types de formations

## 🔄 Workflow typique

1. **Création** : Ajouter une formation dans `formationNtcData`
2. **Affichage** : La carte apparaît automatiquement dans la grille
3. **Navigation** : Clic sur la carte → redirection vers la page détaillée
4. **Contenu** : La page charge les données via le slug de l'URL
5. **Modification** : Modifier les données → mise à jour automatique

## 📝 Exemple complet

```javascript
// Dans formationNtc.js
{
  id: 'ntc-4',
  slug: 'formation-avancee',
  title: 'Formation Avancée',
  // ...
}

// La carte sera accessible via :
<FormationBlockCard {...formation} />

// La page détaillée sera accessible via :
http://localhost:5173/formation-ntc/formation-avancee
```
