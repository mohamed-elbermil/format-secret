import React from 'react'
import '@/assets/css/components/formation-detail-pdf.css'

const IconDownload = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

export default function FormationDetailPdf({ pdf, title }) {
  if (!pdf) return null
  return (
    <section className="fd-pdf" aria-label="Fiche programme à télécharger">
      <div className="container">
        <div className="fd-pdf__card">
          <div className="fd-pdf__icon" aria-hidden="true">
            <i className="fas fa-file-pdf" />
          </div>
          <div className="fd-pdf__text">
            <span className="fd-pdf__eyebrow">Fiche programme</span>
            <h2 className="fd-pdf__title">Retrouvez l&apos;essentiel en un document</h2>
            <p className="fd-pdf__desc">
              Objectifs, modules, durée, prérequis, débouchés et modalités
              d&apos;évaluation : téléchargez la fiche récapitulative du titre.
            </p>
          </div>
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="fd-pdf__btn"
            aria-label={`Télécharger la fiche PDF${title ? ` – ${title}` : ''}`}
          >
            <IconDownload />
            Télécharger le PDF
          </a>
        </div>
      </div>
    </section>
  )
}
