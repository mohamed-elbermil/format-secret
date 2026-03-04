import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Styles du projet parent (dossier format-secret-v2/assets)
import '../src/assets/css/styles.css'
import '../src/assets/css/base/reset.css'
import '../src/assets/css/abstracts/variables.css'

const rootEl = document.getElementById('root')
if (!rootEl) {
  console.error('Élément #root introuvable. Vérifiez que index.html contient <div id="root"></div>')
} else {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
