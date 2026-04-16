import React from 'react'

export default function FormationDetailPrerequisites({ prerequisitesTitle, prerequisitesList }) {
  if (!prerequisitesList?.length) return null
  return (
    <section className="fd-prereqs">
      <div className="container">
        <div className="fd-section-header">
          <span className="fd-section-eyebrow">Avant de commencer</span>
          {prerequisitesTitle ? (
            <h2 className="fd-section-title" dangerouslySetInnerHTML={{ __html: prerequisitesTitle }} />
          ) : (
            <h2 className="fd-section-title">Les <em>pré-requis</em></h2>
          )}
        </div>
        <ul className="fd-prereqs__list">
          {prerequisitesList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
