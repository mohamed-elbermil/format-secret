import React, { useState } from 'react'
import Container from '../layout/Container'

const faqItems = [
  { q: 'Comment financer ma formation ?', a: 'Plusieurs dispositifs de financement existent selon votre situation (entreprise, salarié, demandeur d’emploi). Nous vous accompagnons pour identifier la meilleure solution.' },
  { q: "Quelles sont les conditions d'accès aux formations ?", a: 'Les prérequis varient selon les programmes. Nous vérifions votre niveau et vos objectifs avant toute inscription.' },
  { q: "Combien de temps prend l'admission à une formation ?", a: "Après votre demande, nous revenons vers vous sous quelques jours pour valider votre projet et planifier la formation." },
  { q: 'Dans combien de temps aurai-je accès à ma formation ?', a: 'Une fois la prise en charge validée, nous convenons ensemble des dates de démarrage en fonction de vos disponibilités.' },
  { q: 'Quel est le matériel nécessaire pour suivre la formation ?', a: "Un ordinateur, une connexion internet stable et, selon les modules, quelques outils bureautiques standards suffisent." },
  { q: 'Quels sont les diplômes ou certifications proposés ?', a: "Nos formations visent principalement le développement de compétences opérationnelles, certaines donnant accès à des certifications reconnues." },
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

