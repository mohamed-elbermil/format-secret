import React from 'react'

export default function FormationDetailIntro({ introTitle, introDescription }) {
  if (!introTitle && !introDescription) return null
  return (
    <section className="fd-objectives" style={{ background: '#fff', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="fd-section-header">
          {introTitle && (
            <h2
              className="fd-section-title"
              dangerouslySetInnerHTML={{ __html: introTitle }}
            />
          )}
          {introDescription && (
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: '#4a5568',
              maxWidth: '680px',
              margin: '1rem auto 0',
            }}>
              {introDescription}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
