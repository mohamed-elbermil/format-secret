import React from 'react'

export default function FormationDetailDefinition({ definitionTitle, definitionText }) {
  if (!definitionTitle && !definitionText) return null
  return (
    <section className="fd-definition">
      <div className="container">
        <div className="fd-definition__inner">
          <div className="fd-definition__text">
            {definitionTitle && (
              <h2
                className="fd-definition__title"
                dangerouslySetInnerHTML={{ __html: definitionTitle }}
              />
            )}
            {definitionText && (
              <p className="fd-definition__body">{definitionText}</p>
            )}
          </div>
          <div className="fd-definition__deco" aria-hidden="true">
            <div className="fd-definition__deco-circle">
              <i className="fas fa-graduation-cap" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
