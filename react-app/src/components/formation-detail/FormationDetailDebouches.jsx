import React from 'react'

export default function FormationDetailDebouches({ debouchesTitle, debouchesContent, debouchesList, debouchesCards }) {
  if (!debouchesTitle && !debouchesContent && !debouchesList?.length && !debouchesCards?.length) return null
  return (
    <section className="formation-ref-debouches">
      <div className="container">
        <h2>{debouchesTitle}</h2>
        {debouchesContent && (
          <div className="formation-ref-debouches-content" dangerouslySetInnerHTML={{ __html: debouchesContent }} />
        )}
        {debouchesCards?.length ? (
          <div className="debouches-grid">
            {debouchesCards.map((c, i) => (
              <div key={i} className="debouche-card">
                {c.icon && <div className="debouche-icon"><i className={c.icon} /></div>}
                <div className="debouche-content">
                  {c.title && <h3>{c.title}</h3>}
                  {c.text && <p>{c.text}</p>}
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {debouchesList?.length > 0 && (
          <ul className="formation-ref-debouches-list with-icons">
            {debouchesList.map((item, i) => (
              <li key={i}><i className="fas fa-check-circle" aria-hidden="true" /> <span>{item}</span></li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
