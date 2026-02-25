import React from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../../data/navigation'

/**
 * Liens de navigation. Utilisé dans le header (desktop) et le menu fullscreen (mobile).
 * Si le path contient # (ex. /#contact), on utilise une balise <a> pour le scroll.
 */
export default function NavLinks({ className = 'nav-links', onLinkClick }) {
  return (
    <ul className={className}>
      {navLinks.map((link) => {
        const isHashLink = link.isHash || link.path.includes('#')
        if (isHashLink) {
          const href = link.path.startsWith('/') ? link.path : `/${link.path}`
          return (
            <li key={link.path}>
              <a href={href} onClick={onLinkClick} className='contact'>{link.label}</a>
            </li>
          )
        }
        return (
          <li key={link.path}>
            <Link to={link.path} onClick={onLinkClick}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}
