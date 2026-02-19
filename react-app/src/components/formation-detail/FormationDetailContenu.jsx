import React from 'react'

export default function FormationDetailContenu({ contenuTitle, contenuBlocs }) {
  if (!contenuBlocs?.length) return null
  return (
    <section className="formation-ref-contenu">
      <div className="container">
        <h2>{contenuTitle}</h2>
        <div className="formation-ref-contenu-blocs">
          {contenuBlocs.map((bloc, i) => (
            <div key={i} className="formation-ref-contenu-bloc">
              <h3>{bloc.title}</h3>
              <ul>
                {bloc.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
