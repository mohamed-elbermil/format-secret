import React from 'react'

export default function FormationDetailDefinition({ definitionTitle, definitionText }) {
  if (!definitionTitle && !definitionText) return null
  return (
    <section className="formation-ref-definition">
      <div className="container">
        <h2 dangerouslySetInnerHTML={{ __html: definitionTitle }} />
        <p>{definitionText}</p>
      </div>
    </section>
  )
}
