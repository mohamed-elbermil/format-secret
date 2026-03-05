import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import NavLinks from './NavLinks'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((o) => !o)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header>
      {/* <!-- ① BARRE DE RÉASSURANCE – sticky, au-dessus de la navbar --> */}
  <div class="reassurance-bar" role="region" aria-label="Informations de confiance">
    <ul class="bar-items">

      <li class="bar-item">
        <span class="badge-qualiopi">
          <span class="bar-icon">🏅</span>
          <span class="bar-text">Certifié Qualiopi</span>
        </span>
      </li>

      <li class="bar-item">
        <span class="bar-icon">💳</span>
        <span class="bar-text">Financement <strong>OPCO</strong> accepté</span>
      </li>

      <li class="bar-item">
        <span class="bar-icon">⭐</span>
        <span class="bar-text"><strong>98%</strong> de satisfaction stagiaires</span>
      </li>

    </ul>
  </div>
        <Container>
          <div className="logo">
            <Link to="/">
              <img src="/assets/images/Formasecret-nouveau-logo.png" alt="FormaSecret Logo" />
            </Link>
          </div>
          <nav>
            <NavLinks onLinkClick={closeMenu} />
            <div
              className={`burger-menu ${menuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
              role="button"
              tabIndex={0}
              aria-label="Menu"
            >
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
            </div>
          </nav>
        </Container>
      </header>

      <div className={`fullscreen-menu ${menuOpen ? 'active' : ''}`}>
        <button
          type="button"
          className="fullscreen-close"
          onClick={closeMenu}
          aria-label="Fermer le menu"
        >
          <span aria-hidden="true">×</span>
        </button>
        <NavLinks className="mobile-nav-links" onLinkClick={closeMenu} />
      </div>
    </>
  )
}
