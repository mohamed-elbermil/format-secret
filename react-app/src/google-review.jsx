import React, { useState, useEffect, useCallback } from "react";
import "@/assets/css/components/google-reviews.css";

/* ── Icône SVG Google "G" officielle ── */
const GoogleIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-label="Google" role="img">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    <path fill="none" d="M0 0h48v48H0z"/>
  </svg>
);

/* ── Données des avis FormaSecret ── */
const REVIEWS = [
  {
    author: "Aubert Charlene",
    rating: 5,
    date: "il y a 3 semaines",
    text: "Stephanie est une formatrice exceptionnelle. Grâce à sa patience, sa pédagogie et ses astuces mémo-techniques vraiment efficaces, elle m'a complètement réconcilié avec Excel ! Elle prend le temps d'expliquer, de revenir sur les points difficiles, et rend chaque session agréable et productive.",
  },
  {
    author: "Arnaud Poidevin",
    rating: 5,
    date: "il y a 2 semaines",
    text: "Nous avons particulièrement apprécié la qualité de l'accueil, ainsi que le professionnalisme et la disponibilité de Stéphanie. Le lieu, les équipements et l'ensemble des services proposés sont parfaitement adaptés.",
  },
  {
    author: "Sabri Atigui",
    rating: 5,
    date: "il y a 3 mois",
    text: "Nous avons eu l'occasion de faire 2 formations avec Stéphanie qui est très pro, qui s'adapte à chacun d'entre nous et qui rend la formation agréable pour tous. Je recommande +++",
  },
  {
    author: "Wilfried Calais",
    rating: 5,
    date: "il y a 3 mois",
    text: "Excellentes prestations. Un suivi sans failles de toute l'équipe : sérieux, qualité et réactivité. Un grand merci pour votre accompagnement et votre bonne humeur quotidienne.",
  },
  {
    author: "Franck PASQUIER",
    rating: 5,
    date: "il y a 2 ans",
    text: "Je recommande les services de FORMASECRET pour le sérieux, le professionnalisme et la bienveillance de Stéphanie. Elle prend le temps de comprendre chaque situation pour y répondre au mieux. Ne changez rien.",
  },
  {
    author: "Viviane Maleron",
    rating: 5,
    date: "il y a 2 ans",
    text: "Je remercie Mme Loddo et son équipe pour leurs réactivités et leurs professionnalismes sur les missions que nous leur confions régulièrement : administratif, les formations ou réponse à appel d'offre BTP et Architecture.",
  },
  {
    author: "Jérôme Perrot-Minnot",
    rating: 5,
    date: "il y a 2 ans",
    text: "Une équipe d'expertes en gestion administrative !! Professionnelles, assidues, qui tiennent leurs engagements, à l'écoute... Je vous recommande FORMASECRET sans hésitation.",
  },
  {
    author: "Sab",
    rating: 5,
    date: "il y a 3 mois",
    text: "Une formation adaptée, dispensée par une formatrice à l'écoute. Merci à vous Stéphanie.",
  },
  {
    author: "sunita Lesnier",
    rating: 5,
    date: "il y a 5 ans",
    text: "Formatrice au top !!! Stéphanie est très professionnelle et s'investit à fond pour que les apprenants atteignent leurs objectifs.",
  },
  {
    author: "Smail Azouzi",
    rating: 5,
    date: "il y a 2 ans",
    text: "J'ai récemment fait appel à Format Secret et j'ai été extrêmement satisfait du service fourni. L'équipe est très réactive et compétente.",
  },
  {
    author: "BERNARD SCHOUWEY",
    rating: 5,
    date: "il y a 2 ans",
    text: "Bonne expérience. Relation récente qui ne demande qu'à être développée. Une entreprise avec une très grande rigueur, c'est ce que je recherche.",
  },
  {
    author: "James-Michel Jancu",
    rating: 5,
    date: "il y a 2 semaines",
    text: "Une formation 👍 dans un cadre accueillant chez Formasecret. Nos sincères félicitations et remerciements. I-Bau Architecteurs.",
  },
  {
    author: "Charlotte Quessada",
    rating: 5,
    date: "il y a 2 semaines",
    text: "Centre de formation accueillant. Je recommande.",
  },
  {
    author: "SERIZIAT BEATRICE",
    rating: 5,
    date: "il y a 2 semaines",
    text: "Très bel accueil dans un espace adapté et confortable !",
  },
  {
    author: "Nicolas GRATIER",
    rating: 5,
    date: "il y a 2 semaines",
    text: "Merci pour ce lieu de formation et cet accueil.",
  },
];

/* ── Initiales de repli ── */
function getInitials(name = "") {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

/* ── Étoiles ── */
function StarRating({ rating }) {
  return (
    <div className="review-card__stars" aria-label={`${rating} étoiles sur 5`}>
      {"★".repeat(rating)}{"☆".repeat(5 - rating)}
    </div>
  );
}

/* ── Card individuelle ── */
function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="review-card__stripe" aria-hidden="true" />
      <div className="review-card__body">
        {/* Auteur */}
        <div className="review-card__author">
          <div className="review-card__avatar-initials" aria-hidden="true">
            {getInitials(review.author)}
          </div>
          <div className="review-card__author-info">
            <div className="review-card__name">{review.author}</div>
            <div className="review-card__date">{review.date}</div>
          </div>
          <GoogleIcon size={20} />
        </div>

        {/* Étoiles */}
        <StarRating rating={review.rating} />

        {/* Texte */}
        {review.text && (
          <p className="review-card__text">{review.text}</p>
        )}
      </div>
    </article>
  );
}

/* ── Hook : nombre de cartes visibles selon la largeur ── */
function useCardsPerPage() {
  const [cpp, setCpp] = useState(3);
  useEffect(() => {
    const update = () => setCpp(window.innerWidth <= 768 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cpp;
}

/* ── Carousel ── */
function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const cardsPerPage = useCardsPerPage();
  const total = REVIEWS.length;
  const maxIndex = total - cardsPerPage;

  const prev = useCallback(() => setIndex(i => Math.max(0, i - cardsPerPage)), [cardsPerPage]);
  const next = useCallback(() => setIndex(i => Math.min(maxIndex, i + cardsPerPage)), [cardsPerPage, maxIndex]);

  /* Reset index si cardsPerPage change */
  useEffect(() => { setIndex(0); }, [cardsPerPage]);

  /* Auto-avance toutes les 5 s */
  useEffect(() => {
    const t = setInterval(() => {
      setIndex(i => (i + cardsPerPage > maxIndex ? 0 : i + cardsPerPage));
    }, 5000);
    return () => clearInterval(t);
  }, [cardsPerPage, maxIndex]);

  const dots = Math.ceil(total / cardsPerPage);
  const activeDot = Math.floor(index / cardsPerPage);
  const slideWidth = 100 / cardsPerPage;

  return (
    <div className="reviews-carousel">
      {/* Piste */}
      <div className="reviews-carousel__track-wrap">
        <div
          className="reviews-carousel__track"
          style={{ transform: `translateX(-${index * slideWidth}%)` }}
        >
          {REVIEWS.map((review, i) => (
            <div
              className="reviews-carousel__slide"
              style={{ flex: `0 0 ${slideWidth}%` }}
              key={i}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      {/* Contrôles */}
      <div className="reviews-carousel__controls">
        <button
          className="reviews-carousel__btn"
          onClick={prev}
          disabled={index === 0}
          aria-label="Avis précédents"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        <div className="reviews-carousel__dots" role="tablist">
          {Array.from({ length: dots }).map((_, d) => (
            <button
              key={d}
              className={`reviews-carousel__dot${d === activeDot ? " reviews-carousel__dot--active" : ""}`}
              onClick={() => setIndex(d * cardsPerPage)}
              aria-label={`Page ${d + 1}`}
              role="tab"
              aria-selected={d === activeDot}
            />
          ))}
        </div>

        <button
          className="reviews-carousel__btn"
          onClick={next}
          disabled={index >= maxIndex}
          aria-label="Avis suivants"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>
  );
}

/* ── Composant principal ── */
export default function GoogleReviews() {
  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <div className="container">

        {/* En-tête */}
        <div className="reviews-header">
          <p className="reviews-header__eyebrow">
            <GoogleIcon size={14} />
            Avis Google vérifiés
          </p>
          <h2 id="reviews-title" className="reviews-header__title">
            Ils nous font <em>confiance</em>
          </h2>

          <div className="reviews-header__score">
            <span className="reviews-header__score-number">5.0</span>
            <div className="reviews-header__score-right">
              <span className="reviews-header__stars">★★★★★</span>
              <span className="reviews-header__count">16 avis Google</span>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <ReviewsCarousel />

        {/* CTA */}
        <div className="reviews-cta">
          <a
            href="https://www.google.com/maps/place/FORMASECRET"
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-cta__link"
          >
            Voir tous nos avis sur Google
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
