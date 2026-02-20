import React from 'react'

export default function FormationDetailPrerequisites({ prerequisitesTitle, prerequisitesList }) {
  if (!prerequisitesList?.length) return null
  return (
    <section className="formation-ref-prerequis">
      <div className="container">
        {prerequisitesTitle ? <h2 dangerouslySetInnerHTML={{ __html: prerequisitesTitle }} /> : null}
        <div className="prerequis-box">
          <ul className="prerequis-list">
            {prerequisitesList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
