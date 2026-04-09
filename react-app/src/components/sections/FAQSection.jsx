import React, { useState, useRef, useEffect } from "react";
import Container from "../layout/Container";
import "@/assets/css/components/faq.css";

const IconChevron = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const faqs = [
  {
    q: "Comment financer une formation FormaSecret ?",
    a: "FormaSecret est certifié Qualiopi. Cette certification ouvre l'accès à différents dispositifs de financement de la formation professionnelle continue. Nos équipes vous accompagnent dans vos démarches.",
  },
  {
    q: "Quelle est la durée moyenne d'une formation ?",
    a: "Nos programmes vont d'une demi-journée (3h30) à plusieurs jours selon les thématiques et vos objectifs. Chaque formation sur mesure est calibrée lors de l'audit initial pour s'adapter à votre contrainte de temps.",
  },
  {
    q: "Est-il possible de former plusieurs collaborateurs en même temps ?",
    a: "Absolument. Nos formations intra-entreprise sont conçues pour des groupes de 1 à 15 personnes. Nous nous déplaçons dans vos locaux ou proposons un format en visioconférence selon vos besoins.",
  },
  {
    q: "Comment se déroule l'audit préalable ?",
    a: "L'audit préalable est un entretien de 45 à 60 minutes (en présentiel ou en visio) avec votre référent FormaSecret. Nous analysons vos enjeux métier, les compétences à développer et les contraintes organisationnelles pour concevoir un programme parfaitement adapté.",
  },
  {
    q: "Proposez-vous un suivi post-formation ?",
    a: "Oui. Chaque formation intègre un bilan à 3 mois : un entretien individuel ou collectif pour mesurer l'ancrage des acquis, identifier les points de vigilance et, si nécessaire, proposer un complément de formation ciblé.",
  },
  {
    q: "Vos formateurs interviennent-ils partout en France ?",
    a: "Nos formateurs se déplacent sur l'ensemble du territoire national. Les formations peuvent également se tenir en distanciel, via Teams ou Zoom, avec les mêmes standards pédagogiques qu'en présentiel.",
  },
];

function FaqItem({ item, index, isOpen, onToggle }) {
  const panelRef = useRef(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    if (isOpen) {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } else {
      panel.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <div className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
      <button
        className="faq-item__trigger"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
        id={`faq-btn-${index}`}
      >
        <span className="faq-item__question">{item.q}</span>
        <span className="faq-item__icon" aria-hidden="true">
          <IconChevron />
        </span>
      </button>

      <div
        ref={panelRef}
        id={`faq-panel-${index}`}
        className="faq-item__panel"
        role="region"
        aria-labelledby={`faq-btn-${index}`}
      >
        <p className="faq-item__answer">{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <Container>
        <div className="faq-header">
          <p className="faq-header__eyebrow">
            <span className="faq-header__eyebrow-line" aria-hidden="true" />
            Foire aux questions
            <span className="faq-header__eyebrow-line" aria-hidden="true" />
          </p>
          <h2 id="faq-title" className="faq-header__title">
            Vos questions,
            <br />
            <em>nos réponses</em>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={toggle}
            />
          ))}
        </div>

        <div className="faq-footer">
          <p className="faq-footer__text">
            Une question qui n'est pas listée ici ?
          </p>
          <a href="/#contact" className="faq-footer__link">
            Contactez-nous directement
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
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}
