import React from 'react'

export default function FormationDetailProgram({ programTitle, programColumns }) {
  if (!programColumns?.length) return null
  return (
    <section className="fd-program">
      <div className="container">
        <div className="fd-section-header">
          <span className="fd-section-eyebrow">Contenu pédagogique</span>
          {programTitle ? (
            <h2 className="fd-section-title" dangerouslySetInnerHTML={{ __html: programTitle }} />
          ) : (
            <h2 className="fd-section-title">Le <em>programme</em></h2>
          )}
        </div>
        <div className="fd-program__card">
          {programColumns.map((column, colIndex) => (
            <div key={colIndex}>
              <p className="fd-program__col-title">Module {colIndex + 1}</p>
              <ul className="fd-program__list">
                {column.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
