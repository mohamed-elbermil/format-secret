import React from 'react'

export default function FormationDetailProgram({ programTitle, programColumns }) {
  if (!programColumns?.length) return null
  return (
    <section className="formation-ref-program ">
      <div className="container card-formation">
      <h2 dangerouslySetInnerHTML={{ __html: programTitle }} />
        <div className="next">
        <div className="formation-ref-program-columns">
          {programColumns.map((column, colIndex) => (
            <ul key={colIndex} className="formation-ref-program-list">
              {column.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
        <div className="shape"></div>

        </div>
      </div>
    </section>
  )
}
