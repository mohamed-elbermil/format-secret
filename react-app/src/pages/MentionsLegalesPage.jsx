import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import Breadcrumb from "../components/ui/Breadcrumb";
import useScrollToTop from "../hooks/useScrollToTop";
import useCookieConsent from "../hooks/useCookieConsent";
import "../assets/css/components/legal.css";

const IconArrowLeft = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const IconScale = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3L3 9l1.5 9L12 21l7.5-3L21 9z" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <path d="M3 9h18" />
  </svg>
);

const articles = [
  { id: "art1", label: "Art. 1 – Éditeur du site" },
  { id: "art2", label: "Art. 2 – Directeur de publication" },
  { id: "art3", label: "Art. 3 – Hébergement" },
  { id: "art4", label: "Art. 4 – Propriété intellectuelle" },
  { id: "art5", label: "Art. 5 – Liens hypertextes" },
  { id: "art6", label: "Art. 6 – Données personnelles" },
  { id: "cookies", label: "Art. 7 – Cookies" },
  { id: "art8", label: "Art. 8 – Crédits" },
  { id: "art9", label: "Art. 9 – Droit applicable" },
];

export default function MentionsLegalesPage() {
  useScrollToTop();
  const { openPreferences } = useCookieConsent();

  return (
    <>
      <div className="legal-banner">
        <Container>
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Mentions légales" },
            ]}
          />
          <span className="legal-banner__badge">
            <IconScale />
            Document légal
          </span>
          <h1 className="legal-banner__title">Mentions légales</h1>
          <p className="legal-banner__subtitle">
            Dernière mise à jour : Avril 2026 &nbsp;·&nbsp; Site
            https://formasecret.fr/
          </p>
        </Container>
      </div>

      <section className="legal-body">
        <Container>
          <Link to="/" className="legal-back-btn">
            <IconArrowLeft />
            Retour à l'accueil
          </Link>

          <div className="legal-layout">
            <aside aria-label="Sommaire">
              <nav className="legal-toc">
                <p className="legal-toc__title">Sommaire</p>
                <ul className="legal-toc__list">
                  {articles.map((a) => (
                    <li key={a.id}>
                      <a href={`#${a.id}`} className="legal-toc__link">
                        {a.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="legal-content">
              <article className="legal-article" id="art1">
                <span className="legal-article__num">Article 1</span>
                <h2 className="legal-article__title">Éditeur du site</h2>
                <p>
                  Conformément aux dispositions de l'article 6 de la loi n°
                  2004-575 du 21 juin 2004 pour la confiance dans l'économie
                  numérique, il est précisé aux utilisateurs du site{" "}
                  <strong>https://formasecret.fr/</strong> l'identité des
                  différents intervenants dans le cadre de sa réalisation et
                  de son suivi.
                </p>
                <div className="legal-info-box">
                  <p>
                    <strong>Raison sociale :</strong> FormaSecret
                  </p>
                  <p>
                    <strong>Forme juridique :</strong> SARL
                  </p>
                  <p>
                    <strong>Adresse :</strong> 140 rue Emile Zola –
                    Décines-Charpieu, 69150
                  </p>
                  <p>
                    <strong>SIRET :</strong> 91192254000016
                  </p>
                  <p>
                    <strong>Téléphone :</strong> 06 51 77 14 70
                  </p>
                  <p>
                    <strong>E-mail :</strong> stephanie@formasecret.fr
                  </p>
                </div>
              </article>

              <article className="legal-article" id="art2">
                <span className="legal-article__num">Article 2</span>
                <h2 className="legal-article__title">
                  Directeur de publication
                </h2>
                <p>
                  Le directeur de la publication du site est{" "}
                  <strong>Stéphanie LODDO</strong>, représentante légale de{" "}
                  <strong>FormaSecret</strong>. Elle peut être contactée à
                  l'adresse <strong>stephanie@formasecret.fr</strong>.
                </p>
              </article>

              <article className="legal-article" id="art3">
                <span className="legal-article__num">Article 3</span>
                <h2 className="legal-article__title">Hébergement</h2>
                <p>Le site est hébergé par :</p>
                <div className="legal-info-box">
                  <p>
                    <strong>Hébergeur :</strong> OVH SAS
                  </p>
                  <p>
                    <strong>Adresse :</strong> 140 Quai du Sartel, 59100
                    Roubaix, France
                  </p>
                  <p>
                    <strong>Site web :</strong> www.ovhcloud.com
                  </p>
                </div>
              </article>

              <article className="legal-article" id="art4">
                <span className="legal-article__num">Article 4</span>
                <h2 className="legal-article__title">
                  Propriété intellectuelle
                </h2>
                <p>
                  L'ensemble des éléments constituant le site — marques,
                  logos, textes, images, graphismes, vidéos et bases de
                  données — est la propriété exclusive de{" "}
                  <strong>FormaSecret</strong>, sauf mention contraire, et est
                  protégé par les dispositions du Code de la propriété
                  intellectuelle.
                </p>
                <p>
                  Toute reproduction, représentation, modification,
                  publication ou adaptation de tout ou partie des éléments du
                  site, quel que soit le moyen ou le procédé utilisé, est
                  interdite sans l'autorisation écrite préalable de{" "}
                  <strong>FormaSecret</strong>.
                </p>
              </article>

              <article className="legal-article" id="art5">
                <span className="legal-article__num">Article 5</span>
                <h2 className="legal-article__title">Liens hypertextes</h2>
                <p>
                  Le site peut contenir des liens hypertextes renvoyant vers
                  d'autres sites (Google Maps, YouTube, etc.).{" "}
                  <strong>FormaSecret</strong> n'exerce aucun contrôle sur ces
                  sites tiers et décline toute responsabilité quant à leur
                  contenu ou à leurs pratiques en matière de données
                  personnelles.
                </p>
              </article>

              <article className="legal-article" id="art6">
                <span className="legal-article__num">Article 6</span>
                <h2 className="legal-article__title">Données personnelles</h2>
                <p>
                  FormaSecret traite des données personnelles pour deux
                  finalités distinctes : répondre aux demandes adressées via
                  le formulaire de contact ou le téléchargement de documents
                  (base légale : intérêt légitime à répondre à une demande
                  entrante ; conservation 12 mois à compter du traitement de
                  la demande), et gérer administrativement et
                  pédagogiquement le dossier des stagiaires inscrits (base
                  légale : exécution du contrat de formation ; conservation
                  pendant la durée nécessaire à cette gestion, augmentée des
                  durées légales applicables en matière comptable et de
                  justification auprès des financeurs et organismes de
                  contrôle).
                </p>
                <p>
                  Ces données sont accessibles aux personnes habilitées de
                  FormaSecret et, selon le cas, transmises aux destinataires
                  nécessaires au traitement (prestataires techniques,
                  financeurs de la formation, certificateur du titre
                  professionnel), dans la limite de ce qui est utile à leur
                  mission. Elles ne sont utilisées à des fins de prospection
                  commerciale qu'avec le consentement exprès de la personne
                  concernée, qui peut être retiré à tout moment. Pour le
                  détail de chaque traitement, voir les{" "}
                  <a href="/cgu#art6">CGU</a> et les{" "}
                  <a href="/cgv#art8">CGV</a>.
                </p>
                <p>
                  Conformément au Règlement Général sur la Protection des
                  Données (RGPD – UE 2016/679) et à la loi Informatique et
                  Libertés du 6 janvier 1978 modifiée, l'Utilisateur dispose
                  d'un droit d'accès, de rectification, d'effacement,
                  d'opposition et de portabilité sur les données le
                  concernant.
                </p>
                <p>
                  Ces droits peuvent être exercés par e-mail à{" "}
                  <strong>stephanie@formasecret.fr</strong> ou par courrier à{" "}
                  <strong>140 rue Emile Zola – Décines-Charpieu, 69150</strong>
                  . Une réclamation peut également être adressée à la CNIL
                  (<em>www.cnil.fr</em>).
                </p>
              </article>

              <article className="legal-article" id="cookies">
                <span className="legal-article__num">Article 7</span>
                <h2 className="legal-article__title">Cookies</h2>
                <p>
                  Le site n'utilise aucun cookie publicitaire ni outil de
                  mesure d'audience. Seuls des cookies strictement
                  nécessaires au fonctionnement du site sont déposés
                  automatiquement (ils ne peuvent pas être désactivés).
                </p>
                <p>
                  Certains contenus intégrés (vidéo YouTube, carte Google
                  Maps) sont fournis par des services tiers susceptibles de
                  déposer leurs propres cookies. Ces contenus ne sont chargés
                  qu'après votre consentement explicite, recueilli via le
                  bandeau affiché lors de votre première visite.
                </p>
                <p>
                  Vous pouvez à tout moment modifier votre choix concernant
                  ces contenus tiers en cliquant sur le bouton ci-dessous.
                </p>
                <button
                  type="button"
                  className="legal-back-btn"
                  style={{ marginBottom: 0 }}
                  onClick={openPreferences}
                >
                  Gérer mes préférences de cookies
                </button>
              </article>

              <article className="legal-article" id="art8">
                <span className="legal-article__num">Article 8</span>
                <h2 className="legal-article__title">Crédits</h2>
                <p>
                  <strong>Crédits photos :</strong> Pexels
                </p>
                <p>
                  <strong>Conception et développement :</strong> Agence{" "}
                  <a
                    href="https://soblim.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Soblim
                  </a>
                </p>
              </article>

              <article className="legal-article" id="art9">
                <span className="legal-article__num">Article 9</span>
                <h2 className="legal-article__title">
                  Droit applicable et litiges
                </h2>
                <p>
                  Les présentes mentions légales sont soumises au droit
                  français. En cas de litige, et à défaut de résolution
                  amiable, les tribunaux français du ressort du siège de{" "}
                  <strong>FormaSecret</strong> seront seuls compétents.
                </p>
              </article>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
