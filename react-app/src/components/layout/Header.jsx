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
        <NavLinks className="mobile-nav-links" onLinkClick={closeMenu} />
      </div>
    </>
  )
}
