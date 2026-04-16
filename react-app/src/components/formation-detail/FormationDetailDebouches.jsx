import React from 'react'

export default function FormationDetailDebouches({ debouchesTitle, debouchesContent, debouchesList, debouchesCards }) {
  if (!debouchesTitle && !debouchesContent && !debouchesList?.length && !debouchesCards?.length) return null
  return (
    <section className="fd-debouches">
      <div className="container">
        <div className="fd-section-header">
          <span className="fd-section-eyebrow">Perspectives professionnelles</span>
          <h2 className="fd-section-title">
            {debouchesTitle || <><em>Débouchés</em> & opportunités</>}
          </h2>
        </div>

        {debouchesContent && (
          <div
            className="fd-debouches__intro"
            dangerouslySetInnerHTML={{ __html: debouchesContent }}
          />
        )}

        {debouchesCards?.length ? (
          <div className="fd-debouches__grid">
            {debouchesCards.map((c, i) => (
              <div key={i} className="fd-debouche-card">
                {c.icon && (
                  <div className="fd-debouche-card__icon">
                    <i className={c.icon} aria-hidden="true" />
                  </div>
                )}
                <div>
                  {c.title && <h3>{c.title}</h3>}
                  {c.text && <p>{c.text}</p>}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {debouchesList?.length > 0 && (
          <ul className="fd-debouches__list">
            {debouchesList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
