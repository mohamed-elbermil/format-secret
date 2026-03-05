import React, { useState } from 'react'
import Container from '../layout/Container'

const faqItems = [
  { q: 'Quelles sont les modalités de formation ?', a: 'Nous proposons des formations en présentiel. Nos formations peuvent être individuelles ou en groupe, selon vos besoins.' },
  { q: "Comment financer ma formation ?", a: 'Si votre entreprise compte moins de 50 salariés, vous avez la possibilité de solliciter un financement auprès de votre OPCO (Opérateur de Compétences) grâce à notre certification Qualiopi.' },
  { q: "Quelle est la durée moyenne d'une formation ?", a: "La durée varie selon le type de formation, allant d'une journée à plusieurs jours. Nous adaptons la durée en fonction de vos objectifs et disponibilités." },
  { q: 'Comment sont évalués les acquis ?', a: 'Nous utilisons diverses méthodes d\'évaluation, incluant des exercices pratiques, des mises en situation, et des tests de connaissances, pour assurer que les objectifs d\'apprentissage sont atteints.'},
  { q: 'Puis-je personnaliser mon programme de formation ?', a: "Oui, toutes nos formations sont personnalisables. FormaSecret s'adapte aux besoins et attentes de chaque entreprise afin de répondre au mieux à votre demande." },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="global-faq">
      <Container>
        <h2>Les questions de nos apprenants</h2>
        <div className="global-faq-grid">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <button
                key={item.q}
                type="button"
                className={`global-faq-item ${isOpen ? 'is-open' : ''}`}
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                <div className="global-faq-top">
                  <span className="global-faq-question">{item.q}</span>
                  <span className="global-faq-icon" aria-hidden="true">
                    {isOpen ? '−' : '＋'}
                  </span>
                </div>
                <p className={`global-faq-answer ${isOpen ? 'is-open' : ''}`}>{item.a}</p>
              </button>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

