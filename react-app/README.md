# FormaSecret – Exemple React (migration progressive)

Ce dossier contient un **exemple minimal** en React pour illustrer la migration : une section (blocs formation NTC) transformée en composant réutilisable.

## Lancer l’exemple

```bash
cd react-app
npm install
npm run dev
```

Ouvrir l’URL affichée (souvent `http://localhost:5173`). Vous devez voir les 3 cartes formation NTC, stylées avec le CSS du projet parent.

## Structure

- `src/components/cards/FormationBlockCard.jsx` – composant carte (équivalent du HTML répété 3 fois).
- `src/data/formationBlocks.js` – données des blocs (une source, N affichages).
- `src/pages/FormationsBlocksExample.jsx` – page qui affiche la section en utilisant le composant.

Les styles viennent de `../assets/styles.css` (alias `@assets` dans `vite.config.js`). Les images sont servies depuis le dossier parent (`publicDir: '..'`).

## Suite

Voir **MIGRATION-REACT.md** à la racine du projet pour le plan complet et les prochaines étapes (Layout, Header, Footer, autres pages).
