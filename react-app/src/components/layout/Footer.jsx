import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import { navLinks } from '../../data/navigation'
import { contactInfo } from '../../data/contactInfo'
import { socialLinks } from '../../data/socialLinks'

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/assets/images/Formasecret-nouveau-logo.png" alt="FormaSecret Logo" />
            <p>Formasecret, votre succès, c'est notre secret !</p>
          </div>
          <div className="footer-links">
            <h4>Liens rapides</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.path}>
                  {link.isHash || link.path.includes('#') ? (
                    <a href={link.path.startsWith('/') ? link.path : `/${link.path}`}>{link.label}</a>
                  ) : (
                    <Link to={link.path}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-legal">
            <h4>Informations légales</h4>
            <ul>
              <li><Link to="/cgu">Conditions Générales d'Utilisation</Link></li>
              <li><Link to="/cgv">Conditions Générales de Vente</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contactez-nous</h4>
              <p>
              <i className="fas fa-phone" />
              <a href={`tel:${contactInfo.phone}`}>
                {contactInfo.phone}
              </a>
            </p>
            <p>
              <i className="fas fa-envelope" />
              <a href={`mailto:${contactInfo.email}`}>
                {contactInfo.email}
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 FormaSecret. Tous droits réservés.<br />Création par <a href="https://netfactory.fr" target="_blank" rel="noopener noreferrer">NetFactory</a></p>
          <div className="footer-social">
            {socialLinks.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
