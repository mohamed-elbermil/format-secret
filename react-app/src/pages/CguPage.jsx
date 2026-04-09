import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import Breadcrumb from "../components/ui/Breadcrumb";
import useScrollToTop from "../hooks/useScrollToTop";
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
  { id: "art1", label: "Art. 1 – Objet" },
  { id: "art2", label: "Art. 2 – Mentions légales" },
  { id: "art3", label: "Art. 3 – Définitions" },
  { id: "art4", label: "Art. 4 – Accès aux services" },
  { id: "art5", label: "Art. 5 – Propriété intellectuelle" },
  { id: "art6", label: "Art. 6 – Données personnelles" },
  { id: "art7", label: "Art. 7 – Responsabilité" },
  { id: "art8", label: "Art. 8 – Liens hypertextes" },
  { id: "art9", label: "Art. 9 – Évolution du contrat" },
  { id: "art10", label: "Art. 10 – Durée" },
  { id: "art11", label: "Art. 11 – Droit applicable" },
  { id: "art12", label: "Art. 12 – Publication utilisateur" },
];

export default function CguPage() {
  useScrollToTop();

  return (
    <>
      {/* ── Bandeau hero ── */}
      <div className="legal-banner">
        <Container>
          <Breadcrumb
            items={[{ label: "Accueil", href: "/" }, { label: "CGU" }]}
          />
          <span className="legal-banner__badge">
            <IconScale />
            Document légal
          </span>
          <h1 className="legal-banner__title">
            Conditions Générales d'Utilisation
          </h1>
          <p className="legal-banner__subtitle">
            Dernière mise à jour : Avril 2026 &nbsp;·&nbsp; Version en vigueur
            sur le site https://formasecret.fr/
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

            {/* Contenu */}
            <div className="legal-content">
              {/* Art. 1 */}
              <article className="legal-article" id="art1">
                <span className="legal-article__num">Article 1</span>
                <h2 className="legal-article__title">Objet</h2>
                <p>
                  Les présentes Conditions Générales d'Utilisation (ci-après «
                  CGU ») ont pour objet l'encadrement juridique des modalités de
                  mise à disposition des services du site internet{" "}
                  <strong>https://formasecret.fr/</strong> et leur utilisation
                  par l'Utilisateur.
                </p>
                <p>
                  Tout accès et/ou utilisation du site suppose l'acceptation
                  sans réserve et le respect intégral de l'ensemble des
                  présentes CGU par l'Utilisateur. En cas de non-acceptation de
                  tout ou partie des CGU, l'Utilisateur doit renoncer à tout
                  accès au site.
                </p>
                <p>
                  <strong>FormaSecret</strong> se réserve le droit de modifier
                  unilatéralement et à tout moment le contenu des présentes CGU,
                  les modifications prenant effet dès leur mise en ligne.
                </p>
              </article>

              {/* Art. 2 */}
              <article className="legal-article" id="art2">
                <span className="legal-article__num">Article 2</span>
                <h2 className="legal-article__title">Mentions légales</h2>
                <p>
                  Le site <strong>https://formasecret.fr/</strong> est édité par
                  :
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
                    <strong>Directeur de la publication :</strong> Stéphanie
                    LODDO
                  </p>
                  <p>
                    <strong>Téléphone :</strong> 06 51 77 14 70
                  </p>
                  <p>
                    <strong>E-mail :</strong> stephanie@formasecret.fr
                  </p>
                </div>
                <p>
                  <strong>Crédits photos :</strong> Pexels
                </p>
                <p>
                  <strong>Hébergeur :</strong> OVH, 140 Quai du Sartel, 59100
                  Roubaix
                </p>
              </article>

              {/* Art. 3 */}
              <article className="legal-article" id="art3">
                <span className="legal-article__num">Article 3</span>
                <h2 className="legal-article__title">Définitions</h2>
                <p>
                  Pour l'application des présentes CGU, les termes suivants
                  doivent être entendus comme suit :
                </p>
                <ul>
                  <li>
                    <strong>« Utilisateur »</strong> : toute personne physique
                    ou morale qui accède au site et utilise les services mis à
                    disposition, qu'elle soit ou non cliente.
                  </li>
                  <li>
                    <strong>« Contenu utilisateur »</strong> : données de toute
                    nature transmises par l'Utilisateur au site (formulaire,
                    message, fichier, etc.).
                  </li>
                  <li>
                    <strong>« Services »</strong> : l'ensemble des
                    fonctionnalités et ressources accessibles sur le site,
                    notamment le catalogue de formations et les informations de
                    contact.
                  </li>
                  <li>
                    <strong>« Site »</strong> : le site internet accessible à
                    l'adresse <strong>www.formasecret.fr</strong>.
                  </li>
                </ul>
              </article>

              {/* Art. 4 */}
              <article className="legal-article" id="art4">
                <span className="legal-article__num">Article 4</span>
                <h2 className="legal-article__title">Accès aux services</h2>
                <p>
                  Le site permet à l'Utilisateur d'accéder gratuitement au
                  catalogue de formations et aux informations présentées. Les
                  frais d'accès à Internet et de matériel informatique restent à
                  la charge exclusive de l'Utilisateur.
                </p>
                <p>
                  <strong>FormaSecret</strong> met en œuvre tous les moyens
                  raisonnables à sa disposition pour assurer un accès de qualité
                  au site, mais n'est tenue à aucune obligation de résultat à ce
                  titre.
                </p>
                <p>
                  L'accès au site peut être interrompu sans préavis pour des
                  raisons de maintenance, de mise à jour ou en cas de
                  circonstances indépendantes de la volonté de l'éditeur (force
                  majeure, défaillance technique d'un tiers, etc.). Pour toute
                  question, l'Utilisateur peut contacter le service à l'adresse{" "}
                  <strong>stephanie@formasecret.fr</strong>.
                </p>
              </article>

              {/* Art. 5 */}
              <article className="legal-article" id="art5">
                <span className="legal-article__num">Article 5</span>
                <h2 className="legal-article__title">
                  Propriété intellectuelle
                </h2>
                <p>
                  L'ensemble des éléments constituant le site — marques, logos,
                  textes, images, graphismes, sons, vidéos, logiciels et bases
                  de données — est protégé par les dispositions du Code de la
                  propriété intellectuelle.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication,
                  transmission ou dénaturation de ces éléments, totale ou
                  partielle, est strictement interdite sans l'autorisation
                  préalable et écrite de <strong>FormaSecret</strong>.
                </p>
                <p>
                  L'Utilisateur est seul responsable des contenus qu'il transmet
                  via le site. Il s'engage à ne pas transmettre de contenu
                  contraire à l'ordre public, aux bonnes mœurs ou susceptible de
                  porter atteinte aux droits de tiers.
                  <strong>FormaSecret</strong> se réserve le droit de supprimer
                  ou modifier tout contenu utilisateur sans justification
                  préalable.
                </p>
              </article>

              {/* Art. 6 */}
              <article className="legal-article" id="art6">
                <span className="legal-article__num">Article 6</span>
                <h2 className="legal-article__title">Données personnelles</h2>
                <p>
                  <strong>FormaSecret</strong> s'engage à assurer la protection,
                  la confidentialité et la sécurité des données personnelles
                  collectées sur le site, conformément à la loi n° 78-17 du 6
                  janvier 1978 relative à l'informatique, aux fichiers et aux
                  libertés, modifiée par la loi du 6 août 2004, ainsi qu'au
                  Règlement Général sur la Protection des Données (RGPD – UE
                  2016/679).
                </p>
                <p>
                  Les données collectées sont utilisées exclusivement dans le
                  but de traiter les demandes de l'Utilisateur et, le cas
                  échéant, à des fins de prospection commerciale.
                </p>
                <p>
                  Conformément à la réglementation, l'Utilisateur dispose des
                  droits suivants sur ses données :
                </p>
                <ul>
                  <li>
                    <strong>Droit d'accès</strong> : obtenir une copie des
                    données détenues.
                  </li>
                  <li>
                    <strong>Droit de rectification</strong> : faire corriger des
                    données inexactes.
                  </li>
                  <li>
                    <strong>Droit à l'effacement</strong> : demander la
                    suppression des données.
                  </li>
                  <li>
                    <strong>Droit d'opposition</strong> : s'opposer au
                    traitement à des fins commerciales.
                  </li>
                  <li>
                    <strong>Droit à la portabilité</strong> : recevoir ses
                    données dans un format structuré.
                  </li>
                </ul>
                <p>
                  Ces droits peuvent être exercés par courrier électronique à{" "}
                  <strong>stephanie@formasecret.fr</strong>, ou par voie postale
                  à l'adresse{" "}
                  <strong>140 rue Emile Zola – Décines-Charpieu, 69150</strong>.
                </p>
                <p>
                  L'Utilisateur peut également adresser une réclamation à la
                  Commission Nationale de l'Informatique et des Libertés (CNIL)
                  via le site <em>www.cnil.fr</em>.
                </p>
              </article>

              {/* Art. 7 */}
              <article className="legal-article" id="art7">
                <span className="legal-article__num">Article 7</span>
                <h2 className="legal-article__title">
                  Responsabilité et force majeure
                </h2>
                <p>
                  Les informations diffusées sur le site sont présentées à titre
                  indicatif et général. Malgré les efforts déployés pour
                  garantir leur exactitude, <strong>FormaSecret</strong> ne
                  saurait en garantir l'exhaustivité, l'exactitude ou
                  l'adéquation à un besoin particulier.
                </p>
                <p>
                  L'Utilisateur est seul responsable de l'usage qu'il fait des
                  informations disponibles sur le site.{" "}
                  <strong>FormaSecret</strong> ne pourra être tenue responsable
                  de tout dommage direct ou indirect résultant de l'utilisation
                  du site.
                </p>
                <p>
                  La responsabilité de <strong>FormaSecret</strong> ne pourra
                  être engagée en cas de force majeure, définie comme tout
                  événement imprévisible, irrésistible et extérieur (catastrophe
                  naturelle, acte de malveillance, panne réseau, etc.).
                </p>
              </article>

              {/* Art. 8 */}
              <article className="legal-article" id="art8">
                <span className="legal-article__num">Article 8</span>
                <h2 className="legal-article__title">Liens hypertextes</h2>
                <p>
                  Le site peut contenir des liens vers des sites internet tiers.{" "}
                  <strong>FormaSecret</strong> n'exerce aucun contrôle sur ces
                  sites et décline toute responsabilité quant à leur contenu,
                  leurs pratiques en matière de confidentialité ou leur
                  disponibilité.
                </p>
                <p>
                  L'Utilisateur ne peut créer de lien hypertexte pointant vers
                  le site sans l'autorisation préalable et écrite de{" "}
                  <strong>FormaSecret</strong>.
                </p>
              </article>

              {/* Art. 9 */}
              <article className="legal-article" id="art9">
                <span className="legal-article__num">Article 9</span>
                <h2 className="legal-article__title">Évolution du contrat</h2>
                <p>
                  <strong>FormaSecret</strong> se réserve le droit de modifier
                  les présentes CGU à tout moment et sans préavis. Les nouvelles
                  CGU s'appliquent dès leur publication en ligne. L'Utilisateur
                  est invité à les consulter régulièrement. Toute utilisation du
                  site postérieure à une modification vaut acceptation des
                  nouvelles conditions.
                </p>
              </article>

              {/* Art. 10 */}
              <article className="legal-article" id="art10">
                <span className="legal-article__num">Article 10</span>
                <h2 className="legal-article__title">Durée</h2>
                <p>
                  Le présent contrat est conclu pour une durée indéterminée. Il
                  prend effet à compter de l'utilisation du service par
                  l'Utilisateur.
                </p>
              </article>

              {/* Art. 11 */}
              <article className="legal-article" id="art11">
                <span className="legal-article__num">Article 11</span>
                <h2 className="legal-article__title">
                  Droit applicable et juridiction compétente
                </h2>
                <p>
                  Les présentes CGU sont régies par la législation française. En
                  cas de litige relatif à leur interprétation ou à leur
                  exécution, les parties s'engagent à rechercher une solution
                  amiable avant toute action judiciaire.
                </p>
                <p>
                  À défaut d'accord amiable, les tribunaux français seront seuls
                  compétents pour connaître du litige, et notamment le tribunal
                  du ressort du siège de <strong>FormaSecret</strong>.
                </p>
              </article>

              {/* Art. 12 */}
              <article className="legal-article" id="art12">
                <span className="legal-article__num">Article 12</span>
                <h2 className="legal-article__title">
                  Publication par l'Utilisateur
                </h2>
                <p>
                  Le site n'autorise pas la publication de commentaires, d'avis
                  ou d'œuvres personnelles par les Utilisateurs. Aucun espace
                  public n'est ouvert à la contribution des visiteurs.
                </p>
                <p>
                  Toute demande ou prise de contact s'effectue exclusivement via
                  les formulaires et coordonnées officiels mis à disposition sur
                  le site.
                </p>
              </article>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
