import React from 'react'
import { Link } from 'react-router-dom'

export default function FormationDetailFooter({ footerLinks }) {
  return (
    <footer className="fd-footer">
      <div className="container">
        <div className="fd-footer__inner">
          <div className="fd-footer__links">
            {footerLinks?.map((link, i) => (
              <Link key={i} to={link.path}>{link.label}</Link>
            ))}
            <Link to="/titres-professionnels">← Tous les titres pro</Link>
          </div>
          <div className="fd-footer__contact">
            <a href="/#contact">Nous contacter</a>
            <a href="tel:0458280429">04 58 28 04 29</a>
            <a href="mailto:contact@formasecret.fr">contact@formasecret.fr</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
