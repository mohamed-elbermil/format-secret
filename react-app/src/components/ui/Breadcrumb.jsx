import React from "react";
import { Link } from "react-router-dom";
import "@/assets/css/components/breadcrumb.css";

const IconSep = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

/**
 * Fil d'Ariane réutilisable.
 * @param {Array} items — [{ label, href }] — le dernier item est la page courante (sans href)
 */
export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="bc" aria-label="Fil d'Ariane">
      <ol className="bc__list">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="bc__item">
              {!isLast ? (
                <>
                  <Link to={item.href} className="bc__link">{item.label}</Link>
                  <span className="bc__sep" aria-hidden="true"><IconSep /></span>
                </>
              ) : (
                <span className="bc__current" aria-current="page">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
