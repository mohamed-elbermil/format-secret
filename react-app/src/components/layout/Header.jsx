import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/navigation'
import '@/assets/css/components/header.css'

// Liens principaux (sans le lien hash #contact, qui devient le bouton CTA)
const mainNavLinks = navLinks.filter((link) => !link.isHash && !link.path.includes('#'))

// Icônes SVG pour la barre de réassurance
const IconMedal = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
)

const IconCard = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
)

const IconStar = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const IconArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const reassuranceItems = [
  {
    id: 'qualiopi',
    Icon: IconMedal,
    content: (
      <>Certifié <strong>Qualiopi</strong></>
    ),
  },
  {
    id: 'satisfaction',
    Icon: IconStar,
    content: (
      <><strong>98%</strong> de satisfaction stagiaires</>
    ),
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Détection du scroll pour shadow + collapse de la barre de réassurance
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fermeture du menu au changement de route
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Blocage du scroll body quand le drawer est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <>
      {/* ── Header principal (fixed, pleine largeur) ── */}
      <header className={`hdr-root${scrolled ? ' hdr-root--scrolled' : ''}`}>

        {/* Barre de réassurance (se replie au scroll) */}
        <div className="hdr-reassurance" role="region" aria-label="Informations de confiance">
          <ul className="hdr-bar-items">
            {reassuranceItems.map(({ id, Icon, content }) => (
              <li key={id} className="hdr-bar-item">
                <Icon />
                <span>{content}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Barre de navigation */}
        <div className="hdr-nav-bar">
          <div className="hdr-container">

            {/* Logo */}
            <Link to="/" className="hdr-logo" aria-label="FormaSecret – Retour à l'accueil">
              <img src="/assets/images/Formasecret-nouveau-logo.png" alt="FormaSecret" />
            </Link>

            {/* Navigation desktop */}
            <nav className="hdr-nav" aria-label="Navigation principale">
              <ul className="hdr-nav-list">
                {mainNavLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`hdr-nav-link${isActive(link.path) ? ' hdr-nav-link--active' : ''}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA "Nous contacter" */}
            <a href="/#contact" className="hdr-cta">
              Nous contacter
              <IconArrow />
            </a>

            {/* Burger mobile */}
            <button
              type="button"
              className={`hdr-burger${menuOpen ? ' hdr-burger--open' : ''}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
              aria-controls="hdr-drawer"
            >
              <span className="hdr-burger-line" aria-hidden="true" />
              <span className="hdr-burger-line" aria-hidden="true" />
              <span className="hdr-burger-line" aria-hidden="true" />
            </button>

          </div>
        </div>
      </header>

      {/* ── Drawer navigation mobile ── */}
      <nav
        id="hdr-drawer"
        className={`hdr-drawer${menuOpen ? ' hdr-drawer--open' : ''}`}
        aria-label="Navigation mobile"
        aria-hidden={!menuOpen}
      >
        <ul className="hdr-drawer-list">
          {mainNavLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`hdr-drawer-link${isActive(link.path) ? ' hdr-drawer-link--active' : ''}`}
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/#contact"
              className="hdr-drawer-cta"
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              Nous contacter
            </a>
          </li>
        </ul>
      </nav>

      {/* ── Overlay (fond sombre derrière le drawer) ── */}
      {menuOpen && (
        <div
          className="hdr-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
