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
import heroPeople from '../assets/images/hero-people.png'
import imgAnalyse from '../assets/images/pexels-photo-2977547.jpeg'
import imgProjet from '../assets/images/pexels-photo-5915194.jpeg'
import imgParcours from '../assets/images/pexels-photo-3184465.jpeg'
import imgFinancement from '../assets/images/pexels-photo-8062280.jpeg'

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
              <p class="hidden">Votre réussite commence ici !</p>
            </div>
            <span className="recommend"><i class="fa-solid fa-star"></i>98% de nos apprenants recommandent nos formations</span>
            <img src={heroPeople} alt="Apprenants et formateurs" />
          </div>
          
        </Container>
      </section>

      <section className="services">
        <Container>
          <h2><span className="title-style">Nos services de </span>formation professionnelle certifiante</h2>
          <div className="services-grid">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </Container>
      </section>
      <section className="presentation">
        <Container>
          <h3><span className="title-style">Qui sommes </span>nous ?</h3>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/xiUDHScv1QY?si=6UO6GMfZRvFF41J3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Container>
      </section>
      
      <section className="orientation">
        <Container>
          <h2><span className="title-style">Faire un </span>bilan d’orientation</h2>
          <p className="orientation-subtitle">Gratuit et sans engagement</p>
          <div className="orientation-images">
            <img src={imgAnalyse} alt="Analyse de votre parcours" />
            <img src={imgProjet} alt="Définition de votre projet" />
            <img src={imgParcours} alt="Présentation de parcours personnalisés" />
          </div>
          <div className="orientation-steps">
            <div className="orientation-step">
              <div className="orientation-step-title">1. Analyse de votre parcours</div>
              <div className="orientation-step-time"><i className="fa-regular fa-clock"></i> 10 min</div>
            </div>
            <div className="orientation-step">
              <div className="orientation-step-title">2. Définition de votre projet</div>
              <div className="orientation-step-time"><i className="fa-regular fa-clock"></i> 5 min</div>
            </div>
            <div className="orientation-step">
              <div className="orientation-step-title">3. Présentation du/des parcours personnalisé(s)</div>
              <div className="orientation-step-time"><i className="fa-regular fa-clock"></i> 10 min</div>
            </div>
          </div>
          <div className="orientation-cta">
            <Link to="/#contact" className="cta-button-picto-2"><i className="fa-solid fa-calendar-check"></i>Je prends rendez-vous</Link>
          </div>
        </Container>
      </section>

      <section className="key-advantages">
        <Container>
          <div className="key-advantages__wrap">
            <div className="key-advantages__content">
              <h2><span className='title-style '>Nos avantages</span> clés</h2>
              <p>Des formations concrètes, animées par des experts, pour développer des compétences utiles et immédiatement applicables.</p>
              <Link to="/#contact" className="key-advantages__cta">
                <span>En savoir plus</span>
                <span className="key-advantages__cta-icon"><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            </div>
            <div className="advantages-grid">
              {advantages.map((a, i) => (
                <AdvantageCard key={i} {...a} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="certification">
        <Container>
          <h2><span className="title-style">Notre</span> Certification</h2>
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
          <h2><span className="title-style">Ils nous font</span> confiance</h2>
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
          <div className="key-figures-panel">
            <div className="key-figures-header">
              <p className="key-figures-eyebrow">Des résultats, rien que des résultats.</p>
              <h2>Nos chiffres clés</h2>
            </div>
            <div className="figures-grid">
            {keyFigures.map((f, i) => (
              <FigureCard key={i} {...f} />
            ))}
            </div>
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  )
}
