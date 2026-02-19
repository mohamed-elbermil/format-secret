import React from 'react'
import { Link } from 'react-router-dom'

export default function FormationDetailFooter({ footerLinks }) {
  return (
    <footer className="formation-ref-footer">
      <div className="container">
        <div className="formation-ref-footer-inner">
          <div className="formation-ref-footer-links">
            {footerLinks?.map((link, i) => (
              <Link key={i} to={link.path}>{link.label}</Link>
            ))}
          </div>
          <div className="formation-ref-footer-contact">
            <Link to="/#contact">Nous contacter</Link>
            <a href="tel:0458280429">Appelez-nous</a>
            <a href="mailto:contact@formasecret.fr">Écrivez-nous</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
