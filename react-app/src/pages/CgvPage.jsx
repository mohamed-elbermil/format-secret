import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/layout/Container'
import Breadcrumb from '../components/ui/Breadcrumb'
import useScrollToTop from '../hooks/useScrollToTop'
import '../assets/css/components/legal.css'

const IconArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)

const IconShoppingBag = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
)

const articles = [
  { id: 'art1',  label: 'Art. 1 – Désignation et champ d\'application' },
  { id: 'art2',  label: 'Art. 2 – Objet' },
  { id: 'art3',  label: 'Art. 3 – Devis et attestations' },
  { id: 'art4',  label: 'Art. 4 – Prix et paiement' },
  { id: 'art5',  label: 'Art. 5 – Prise en charge OPCO' },
  { id: 'art6',  label: 'Art. 6 – Annulation et report' },
  { id: 'art7',  label: 'Art. 7 – Programme des formations' },
  { id: 'art8',  label: 'Art. 8 – Propriété intellectuelle' },
  { id: 'art9',  label: 'Art. 9 – Informatique et libertés' },
  { id: 'art10', label: 'Art. 10 – Sécurité' },
  { id: 'art11', label: 'Art. 11 – Formation continue' },
  { id: 'art12', label: 'Art. 12 – Loi applicable' },
]

export default function CgvPage() {
  useScrollToTop()

  return (
    <>
      {/* ── Bandeau hero ── */}
      <div className="legal-banner">
        <Container>
          <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'CGV' }]} />
          <span className="legal-banner__badge">
            <IconShoppingBag />
            Document légal
          </span>
          <h1 className="legal-banner__title">Conditions Générales de Vente</h1>
          <p className="legal-banner__subtitle">
            Dernière mise à jour : Avril 2026 &nbsp;·&nbsp; Applicable à toutes les prestations de formation dispensées par FormaSecret
          </p>
        </Container>
      </div>

      {/* ── Corps ── */}
      <section className="legal-body">
        <Container>
          <Link to="/" className="legal-back-btn">
            <IconArrowLeft />
            Retour à l'accueil
          </Link>

          <div className="legal-layout">

            {/* Sommaire desktop */}
            <aside aria-label="Sommaire">
              <nav className="legal-toc">
                <p className="legal-toc__title">Sommaire</p>
                <ul className="legal-toc__list">
                  {articles.map(a => (
                    <li key={a.id}>
                      <a href={`#${a.id}`} className="legal-toc__link">{a.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Contenu */}
            <div className="legal-content">

              {/* Art. 1 */}
              <article className="legal-article" id="art1">
                <span className="legal-article__num">Article 1</span>
                <h2 className="legal-article__title">Désignation et champ d'application</h2>
                <p>
                  <strong>FormaSecret SARL</strong> est un organisme de formation professionnelle
                  continue, dont le siège social est situé au{' '}
                  <strong>140 rue Emile Zola – Décines-Charpieu, 69150</strong>.
                  SIRET : 91192254000016.
                </p>
                <p>
                  L'organisme dispense des formations intra-entreprises et inter-entreprises,
                  localement et à l'échelle nationale, seul ou en partenariat avec d'autres
                  organismes certifiés.
                </p>
                <div className="legal-info-box">
                  <p><strong>Définitions clés :</strong></p>
                  <p>
                    <strong>Client :</strong> toute personne physique ou morale qui s'inscrit ou
                    commande une prestation de formation auprès de FormaSecret.
                  </p>
                  <p>
                    <strong>Stagiaire :</strong> toute personne physique participant effectivement
                    à la formation.
                  </p>
                  <p>
                    <strong>OPCO :</strong> Opérateur de Compétences, organisme collectant les
                    contributions légales des entreprises au titre de la formation professionnelle.
                  </p>
                </div>
              </article>

              {/* Art. 2 */}
              <article className="legal-article" id="art2">
                <span className="legal-article__num">Article 2</span>
                <h2 className="legal-article__title">Objet</h2>
                <p>
                  Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent
                  l'ensemble des prestations de formation vendues par{' '}
                  <strong>FormaSecret</strong> à ses clients.
                </p>
                <p>
                  Toute commande de formation auprès de <strong>FormaSecret</strong>{' '}
                  implique l'acceptation sans réserve du Client des présentes CGV, qui prévalent
                  sur tout autre document du Client, notamment ses propres conditions générales
                  d'achat.
                </p>
                <p>
                  Ces CGV peuvent être modifiées à tout moment. La version applicable est celle
                  en vigueur à la date de signature du devis ou de la convention de formation.
                </p>
              </article>

              {/* Art. 3 */}
              <article className="legal-article" id="art3">
                <span className="legal-article__num">Article 3</span>
                <h2 className="legal-article__title">Devis et attestations</h2>
                <p>
                  Un devis détaillé est établi pour chaque prestation de formation. Ce devis
                  précise notamment : l'intitulé, les objectifs, la durée, le lieu, les dates,
                  le tarif et les modalités pédagogiques.
                </p>
                <p>
                  Le contrat est formé lorsque le Client retourne à{' '}
                  <strong>FormaSecret</strong> un exemplaire du devis ou de la
                  convention de formation signé(e), daté(e) et, pour les entreprises, revêtu(e)
                  du cachet commercial avec la mention <em>« Bon pour accord »</em>.
                </p>
                <p>
                  À l'issue de la formation, les documents suivants sont remis au Client et/ou
                  au Stagiaire sur demande :
                </p>
                <ul>
                  <li>Attestation d'assiduité et de présence</li>
                  <li>Attestation de fin de formation</li>
                  <li>Feuilles d'émargement (par demi-journée)</li>
                </ul>
                <p>
                  Une convention de formation particulière peut être établie avec un OPCO à la
                  demande du Client.
                </p>
              </article>

              {/* Art. 4 */}
              <article className="legal-article" id="art4">
                <span className="legal-article__num">Article 4</span>
                <h2 className="legal-article__title">Prix et modalités de paiement</h2>
                <p>
                  Les prix sont exprimés en euros hors taxes (HT). Ils sont ceux en vigueur
                  au jour de la signature du devis. <strong>FormaSecret</strong> se
                  réserve le droit de modifier ses tarifs à tout moment, sans que cela affecte
                  les devis déjà acceptés.
                </p>
                <p>
                  Sauf accord contraire formalisé avant le démarrage de la formation, le
                  règlement s'effectue comptant, à réception de la facture émise après réalisation
                  de la prestation. Les modes de paiement acceptés sont :
                </p>
                <ul>
                  <li>Virement bancaire (coordonnées figurant sur la facture)</li>
                  <li>Chèque libellé à l'ordre de <strong>FormaSecret</strong></li>
                </ul>
                <p>
                  Des paiements échelonnés peuvent être accordés de façon exceptionnelle,
                  sous réserve qu'ils soient expressément formalisés avant le début de la
                  formation.
                </p>
                <p>
                  Tout retard de paiement entraîne, de plein droit et sans mise en demeure
                  préalable, l'application de pénalités calculées au taux légal majoré au
                  triple, ainsi qu'une indemnité forfaitaire de recouvrement de{' '}
                  <strong>60 €</strong> conformément à l'article D. 441-5 du Code de commerce.
                  Ces sommes ne sont pas éligibles à un financement OPCO.
                </p>
              </article>

              {/* Art. 5 */}
              <article className="legal-article" id="art5">
                <span className="legal-article__num">Article 5</span>
                <h2 className="legal-article__title">Prise en charge OPCO</h2>
                <p>
                  Il appartient au Client de vérifier l'éligibilité de la formation à un
                  financement OPCO et d'effectuer lui-même les démarches de demande de prise
                  en charge auprès de son OPCO avant le démarrage de la formation.
                </p>
                <p>
                  <strong>Aucune délégation de paiement directe ne sera accordée.</strong>{' '}
                  Le Client règle <strong>FormaSecret</strong> et se fait rembourser
                  ultérieurement par son OPCO.
                </p>
                <p>
                  <strong>FormaSecret</strong> ne peut être tenu responsable
                  des décisions de refus ou de prise en charge partielle prononcées par un OPCO,
                  ni des délais de traitement de leurs dossiers. Dans tous les cas, le Client
                  reste redevable de l'intégralité du montant de la formation.
                </p>
              </article>

              {/* Art. 6 */}
              <article className="legal-article" id="art6">
                <span className="legal-article__num">Article 6</span>
                <h2 className="legal-article__title">Conditions d'annulation et de report</h2>
                <p>
                  <strong>FormaSecret</strong> se réserve le droit d'annuler ou de
                  reporter une session de formation si le nombre de participants est insuffisant
                  pour en assurer la tenue dans des conditions pédagogiques satisfaisantes.
                  Le Client en sera informé dans les meilleurs délais et une nouvelle date lui
                  sera proposée.
                </p>
                <p>
                  En cas d'annulation à l'initiative du Client, les frais suivants sont applicables :
                </p>

                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Délai d'annulation avant la formation</th>
                      <th>Montant dû</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Plus de 31 jours ouvrés</td>
                      <td><strong>50 %</strong> du montant total</td>
                    </tr>
                    <tr>
                      <td>Entre 1 mois et 2 semaines</td>
                      <td><strong>70 %</strong> du montant total</td>
                    </tr>
                    <tr>
                      <td>Moins de 2 semaines</td>
                      <td><strong>100 %</strong> du montant total</td>
                    </tr>
                    <tr>
                      <td>Stage commencé</td>
                      <td><strong>100 %</strong> du montant total</td>
                    </tr>
                  </tbody>
                </table>

                <p>
                  Un <strong>report</strong> de la formation est possible si la demande écrite
                  est adressée à <strong>FormaSecret</strong> au moins{' '}
                  <strong>10 jours ouvrés</strong> avant le début de la session. Le report donne
                  lieu à la programmation d'une nouvelle date dans les meilleurs délais.
                </p>
                <p>
                  En cas de <strong>force majeure</strong> (événement imprévisible, irrésistible
                  et extérieur à la volonté de l'une ou l'autre partie), la session est annulée
                  sans frais et le Client en est informé par e-mail dans les plus brefs délais.
                </p>
              </article>

              {/* Art. 7 */}
              <article className="legal-article" id="art7">
                <span className="legal-article__num">Article 7</span>
                <h2 className="legal-article__title">Programme des formations</h2>
                <p>
                  Les programmes de formation communiqués avant la session ont un caractère
                  indicatif. Le formateur se réserve le droit d'adapter le contenu, le rythme
                  et les méthodes pédagogiques en fonction :
                </p>
                <ul>
                  <li>De l'actualité réglementaire ou sectorielle</li>
                  <li>Du niveau et des besoins spécifiques des participants</li>
                  <li>De la dynamique du groupe</li>
                </ul>
                <p>
                  Ces adaptations ne constituent pas une modification substantielle des
                  prestations et n'ouvrent pas droit à réduction ou remboursement.
                </p>
              </article>

              {/* Art. 8 */}
              <article className="legal-article" id="art8">
                <span className="legal-article__num">Article 8</span>
                <h2 className="legal-article__title">Propriété intellectuelle</h2>
                <p>
                  L'ensemble des supports de formation (présentations, documents, outils,
                  exercices, vidéos, fiches pratiques — quelle qu'en soit la forme : papier,
                  numérique ou électronique) est protégé par la propriété intellectuelle et
                  le droit d'auteur.
                </p>
                <p>
                  Ces supports sont mis à disposition des Stagiaires à des fins exclusivement
                  pédagogiques et personnelles. Toute reproduction, diffusion, revente ou
                  utilisation à des fins commerciales est strictement interdite sans autorisation
                  écrite préalable de <strong>FormaSecret</strong>.
                </p>
                <p>
                  Le Client s'engage notamment à ne pas transmettre, reproduire ou utiliser
                  les supports reçus pour organiser ou animer ses propres formations.
                </p>
              </article>

              {/* Art. 9 */}
              <article className="legal-article" id="art9">
                <span className="legal-article__num">Article 9</span>
                <h2 className="legal-article__title">Informatique et libertés</h2>
                <p>
                  Les données personnelles collectées lors de l'inscription et du suivi des
                  formations font l'objet d'un traitement informatique par{' '}
                  <strong>FormaSecret</strong>, responsable de traitement, aux fins
                  de gestion administrative et de prospection commerciale.
                </p>
                <p>
                  Conformément au RGPD et à la loi Informatique et Libertés du 6 janvier 1978
                  modifiée, les personnes concernées disposent des droits d'accès, de
                  rectification, d'opposition et de suppression de leurs données. Ces droits
                  s'exercent par courrier électronique à{' '}
                  <strong>stephanie@formasecret.fr</strong> ou par voie postale
                  au 140 rue Emile Zola – Décines-Charpieu, 69150.
                </p>
                <p>
                  <strong>FormaSecret</strong> met en œuvre des mesures
                  administratives, physiques et techniques appropriées pour garantir la
                  confidentialité et la sécurité des données personnelles. Aucune divulgation
                  à des tiers n'est effectuée, sauf contrainte légale.
                </p>
              </article>

              {/* Art. 10 */}
              <article className="legal-article" id="art10">
                <span className="legal-article__num">Article 10</span>
                <h2 className="legal-article__title">Prescriptions de sécurité</h2>
                <p>
                  Pour les formations inter-entreprises organisées dans les locaux de{' '}
                  <strong>FormaSecret</strong> ou de tout partenaire, les Stagiaires
                  s'engagent à respecter l'ensemble des prescriptions de sécurité et le
                  règlement intérieur qui leur sont communiqués en début de session.
                </p>
                <p>
                  En cas de non-respect manifeste et répété des règles de sécurité ou de bon
                  comportement, <strong>FormaSecret</strong> se réserve le droit
                  d'exclure le Stagiaire de la formation, sans remboursement ni indemnité.
                </p>
              </article>

              {/* Art. 11 */}
              <article className="legal-article" id="art11">
                <span className="legal-article__num">Article 11</span>
                <h2 className="legal-article__title">Formation professionnelle continue</h2>
                <p>
                  Les formations dispensées par <strong>FormaSecret</strong> sont
                  imputables au titre de la formation professionnelle continue conformément aux
                  dispositions du Code du travail en vigueur. Les attestations nécessaires
                  (conventions, feuilles d'émargement, attestations de fin de formation) sont
                  établies par <strong>FormaSecret</strong> conformément à la
                  réglementation applicable.
                </p>
              </article>

              {/* Art. 12 */}
              <article className="legal-article" id="art12">
                <span className="legal-article__num">Article 12</span>
                <h2 className="legal-article__title">Loi applicable et juridiction compétente</h2>
                <p>
                  Les présentes CGV sont régies et interprétées conformément au droit français.
                  En cas de litige relatif à leur formation, leur interprétation ou leur
                  exécution, les parties s'efforceront de trouver une solution amiable avant
                  tout recours judiciaire.
                </p>
                <p>
                  À défaut de règlement amiable dans un délai de <strong>30 jours</strong> à
                  compter de la notification du différend par écrit, le litige sera soumis à
                  la compétence exclusive du <strong>Tribunal de Commerce de Lyon</strong>,
                  nonobstant pluralité de défendeurs ou appel en garantie.
                </p>
              </article>

            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
