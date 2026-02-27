import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from '../components/layout/Container'
import ServiceCard from '../components/cards/ServiceCard'
import AdvantageCard from '../components/cards/AdvantageCard'
import FigureCard from '../components/cards/FigureCard'
import ContactSection from '../components/sections/ContactSection'
import { services } from '../data/services'
import { advantages } from '../data/advantages'
import { keyFigures } from '../data/figures'

export default function HomePage() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash === '#contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.hash])

  return (
    <>
      <section className="hero hero-index">
        <Container className='index'>
          <div className="hero-content">
            <h1>FORMASECRET,<br />Votre succès, c'est notre secret !</h1>
            <p>Organisme de formation expert en efficacité professionnelle, management et vente</p>
            <div className="cta-buttons">
              <Link to="/formations" className="cta-button-picto"><i class="fa-solid fa-arrow-right"></i>Découvrir nos formations</Link>
            </div>
            <span className="recommend"><i class="fa-solid fa-star"></i>98% de nos .. recommendent nos formation</span><br />
            <img src="/assets/images/hero-people.png" alt="people" />
          </div>
          
        </Container>
      </section>

      <section className="services">
        <Container>
          <h2>Nos Services</h2>
          <div className="services-grid">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </Container>
      </section>

      <section className="key-advantages">
        <Container>
          <h2>Nos Avantages Clés</h2>
          <div className="advantages-grid">
            {advantages.map((a, i) => (
              <AdvantageCard key={i} {...a} />
            ))}
          </div>
        </Container>
      </section>

      <section className="certification">
        <Container>
          <h2>Notre Certification</h2>
          <div className="qualiopi-content">
            <div className="qualiopi-logo">
              <a href="https://certifopac.fr/qualiopi/certification/verification/?siren=911922540" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/logo-qualiopi-valide-400x179.png" alt="Logo Certification Qualiopi" />
              </a>
            </div>
            <div className="qualiopi-info">
              <h3>Certification Qualiopi</h3>
              <p>FormaSecret est fière d'être certifiée Qualiopi. Cette certification atteste de la qualité du processus mis en œuvre par les prestataires d'actions concourant au développement des compétences et permet une plus grande lisibilité de l'offre de formation auprès des entreprises et des usagers.</p>
              <ul>
                <li>Gage de qualité des processus de formation</li>
                <li>Reconnaissance officielle de notre professionnalisme</li>
                <li>Assurance d'un suivi rigoureux et d'une amélioration continue</li>
              </ul>
              <p className="verify-link">
                <a href="https://certifopac.fr/qualiopi/certification/verification/?siren=911922540" target="_blank" rel="noopener noreferrer">Vérifier notre certification Qualiopi</a>
              </p>
            </div>
          </div>
          <div className="qualiopi-content">
            <div className="qualiopi-logo">
              <a href="https://sofo-insights.com/produits/certification-de-formateur-disc-flow" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/DISC-Flow-Logo.png" alt="Logo Certification DISC FLOW" />
              </a>
            </div>
            <div className="qualiopi-info">
              <h3>Certification DISC FLOW®</h3>
              <p>Formation certifiante pour développer la connaissance de soi, renforcer la performance individuelle et collective.</p>
              <p className="verify-link">
                <a href="https://sofo-insights.com/produits/certification-de-formateur-disc-flow" target="_blank" rel="noopener noreferrer">En savoir plus</a>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="trusted-by">
        <Container>
          <h2>Ils nous font confiance</h2>
          <div className="logo-slider">
            {[
              { img: 'weishaupt.PNG', h3: 'Weishaupt', p: 'Mme Loddo est une consultante énergique et passionnée par son travail. Elle a su adapter sa mission à nos besoins, et nos collaborateurs qu\'elle a pu accompagner ont tous apprécié ses interventions. Je recommande !', author: 'Jérôme HOEFLER, Directeur du Service Clients WEISHAUPT' },
              { img: 'simonetti.PNG', h3: 'Menuiserie Simonetti', p: 'Dynamique, motivée, toujours de bonne humeur. Quel que soit le travail confié, il est fait avec rigueur et rapidité. Une vraie capacité à comprendre très rapidement les besoins et les process.', author: 'Olivier DUTOUR, Dirigeant Menuiserie SIMONETTI' },
              { img: 'ladapt.jpg', h3: 'LADAPT', p: 'Stéphanie Loddo excelle en assistanat et formation qualifiante. Efficace et adaptable, elle répond aux besoins des clients avec professionnalisme dans divers domaines administratifs.', author: 'Damien Verrecchia, Adjoint de direction et responsable du pôle Formation Ladapt Rhône' },
            ].map((slide, i) => (
              <div key={i} className="logo-slide">
                <img src={`/assets/images/${slide.img}`} alt={`Logo ${slide.h3}`} />
                <h3>{slide.h3}</h3>
                <p>{slide.p}<br /><br /><b>{slide.author}</b></p>
              </div>
            ))}
          </div>
          <div className="cta-container">
            <Link to="/a-propos" className="cta-button">Découvrir FormaSecret</Link>
          </div>
        </Container>
      </section>

      <section className="key-figures">
        <Container>
          <h2>NOS CHIFFRES CLÉS</h2>
          <div className="figures-grid">
            {keyFigures.map((f, i) => (
              <FigureCard key={i} {...f} />
            ))}
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  )
}
