import React from 'react'

export default function FormationDetailDebouches({ debouchesTitle, debouchesContent, debouchesList }) {
  if (!debouchesTitle && !debouchesContent && !debouchesList?.length) return null
  return (
    <section className="formation-ref-debouches">
      <div className="container">
        <h2>{debouchesTitle}</h2>
        {debouchesContent && (
          <div className="formation-ref-debouches-content" dangerouslySetInnerHTML={{ __html: debouchesContent }} />
        )}
        {debouchesList?.length > 0 && (
          <ul className="formation-ref-debouches-list">
            {debouchesList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
