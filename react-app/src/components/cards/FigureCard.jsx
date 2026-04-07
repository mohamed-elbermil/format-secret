import React from 'react'
import { useCountUp } from '../../hooks/useCountUp'

/* ── Icônes SVG par figure ── */
const icons = {
  participants: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  satisfaction: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  donneurs: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
}

export default function FigureCard({ id, value, prefix = '', suffix = '', label, description }) {
  const { count, ref } = useCountUp(value, 2200)

  return (
    <div className="kf-figure">
      {/* Icône */}
      <div className="kf-figure__icon" aria-hidden="true">
        {icons[id] ?? icons.participants}
      </div>

      {/* Grand chiffre animé */}
      <div
        className="kf-figure__number"
        ref={ref}
        aria-live="polite"
        aria-label={`${prefix}${count}${suffix}`}
      >
        {prefix && <span className="kf-figure__prefix">{prefix}</span>}
        {count}
        {suffix && <span className="kf-figure__suffix">{suffix}</span>}
      </div>

      {/* Label */}
      <p className="kf-figure__label">{label}</p>

      {/* Description */}
      <p className="kf-figure__desc">{description}</p>
    </div>
  )
}
