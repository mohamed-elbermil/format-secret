import React from 'react'

export default function FormationDetailFinancement({ financementTitle, financementContent }) {
  if (!financementTitle && !financementContent) return null
  return (
    <section className="formation-ref-financement">
      <div className="container">
        <h2>{financementTitle}</h2>
        {financementContent && (
          <div className="formation-ref-financement-content" dangerouslySetInnerHTML={{ __html: financementContent }} />
        )}
      </div>
    </section>
  )
}
