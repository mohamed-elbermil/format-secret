import React from 'react'
import { qualiopiCommon } from '../../data/qualiopiCommon'
import '@/assets/css/components/formation-detail-qualiopi.css'

function QualiopiCard({ icon, title, children }) {
  return (
    <div className="fd-qual-card">
      <div className="fd-qual-card__icon" aria-hidden="true">
        <i className={icon} />
      </div>
      <h3 className="fd-qual-card__title">{title}</h3>
      <div className="fd-qual-card__body">{children}</div>
    </div>
  )
}

export default function FormationDetailQualiopi({ formation }) {
  if (!formation) return null

  const {
    title,
    intituleExact,
    rncpCode,
    rncpNiveau,
    rncpDateEnregistrement,
    rncpDateValidite,
    rncpUrl,
    nbBlocs,
    tarif,
    datesSession,
    datesExamen,
    infoItems,
    prerequisitesList,
    financementContent,
    tauxObtention,
    tauxObtentionPublication,
    debouchesList,
  } = formation

  const c = qualiopiCommon

  return (
    <section className="fd-qual" aria-label="Informations clés et indicateurs Qualiopi">
      <div className="container">
        <div className="fd-section-header">
          <span className="fd-section-eyebrow">Qualiopi &amp; indicateurs qualité</span>
          <h2 className="fd-section-title">
            Les <em>informations clés</em> du titre
          </h2>
        </div>

        <div className="fd-qual__grid">
          <QualiopiCard icon="fas fa-certificate" title="Identité &amp; certification">
            <p><strong>{title}</strong></p>
            <ul>
              {rncpCode && <li>RNCP {rncpCode} — {rncpNiveau}</li>}
              <li>Certificateur : {c.certificateur}</li>
              {rncpDateEnregistrement && <li>Enregistré le {rncpDateEnregistrement}</li>}
              {rncpDateValidite && <li>Valable jusqu'au {rncpDateValidite}</li>}
              {nbBlocs && <li>{nbBlocs} bloc{nbBlocs > 1 ? 's' : ''} de compétences (CCP), validables séparément</li>}
            </ul>
            {rncpUrl && (
              <a href={rncpUrl} target="_blank" rel="noopener noreferrer" className="fd-qual-card__link">
                Vérifier la fiche sur France Compétences
              </a>
            )}
          </QualiopiCard>

          <QualiopiCard icon="fas fa-user-check" title="Public, prérequis &amp; admission">
            {prerequisitesList?.length > 0 && (
              <ul>
                {prerequisitesList.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            )}
            <p>{c.positionnement}</p>
            <p><strong>Délai d'accès :</strong> {c.delaiAcces}</p>
          </QualiopiCard>

          <QualiopiCard icon="fas fa-map-marker-alt" title="Durée, rythme, lieu &amp; pédagogie">
            {infoItems?.length > 0 && (
              <ul>
                {infoItems.map((it, i) => <li key={i}>{it}</li>)}
              </ul>
            )}
            <ul>
              <li>Lieu : {c.lieu}</li>
              <li>{c.effectifMax}</li>
            </ul>
            <ul>
              {c.modalitesPedagogiques.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </QualiopiCard>

          <QualiopiCard icon="fas fa-calendar-check" title="Inscription, dates &amp; tarif">
            <ul>
              {datesSession && <li>Session : {datesSession}</li>}
              {datesExamen && <li>Dates d'examen : {datesExamen}</li>}
              {tarif && <li>Tarif : {tarif}</li>}
            </ul>
            {financementContent && (
              <div dangerouslySetInnerHTML={{ __html: financementContent }} />
            )}
            <p className="fd-qual-card__caveat">{c.financementCaveat}</p>
          </QualiopiCard>

          <QualiopiCard icon="fas fa-clipboard-check" title="Évaluation &amp; certification">
            <ul>
              {c.evaluation.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
            <p>Session d'examen organisée par FormaSecret, dans le respect des modalités de certification du titre professionnel {intituleExact || title}.</p>
            <p>En cas de validation partielle, seul(s) le ou les blocs de compétences (CCP) validés sont acquis : ils restent valables et peuvent être complétés lors d'une session ultérieure pour obtenir le titre complet.</p>
          </QualiopiCard>

          <QualiopiCard icon="fas fa-chart-simple" title="Taux d'obtention &amp; résultats">
            {tauxObtention ? (
              <p>{tauxObtention}</p>
            ) : (
              <p>Première session : taux d'obtention FormaSecret non encore disponible. Publication prévue {tauxObtentionPublication || 'après la première session d\'examen'}.</p>
            )}
            {debouchesList?.length > 0 && (
              <p>Débouchés : {debouchesList.slice(0, 4).join(', ')}{debouchesList.length > 4 ? '…' : ''}</p>
            )}
            <p>{c.suitesDeParcours}</p>
          </QualiopiCard>

          <QualiopiCard icon="fas fa-universal-access" title="Accessibilité">
            <p>{c.accessibiliteHandicap}</p>
            <p>
              Contact : <a href={`tel:${c.contact.phone.replace(/\s/g, '')}`}>{c.contact.phone}</a>
              {' '}·{' '}
              <a href={`mailto:${c.contact.email}`}>{c.contact.email}</a>
            </p>
          </QualiopiCard>
        </div>
      </div>
    </section>
  )
}
