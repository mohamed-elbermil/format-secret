import React from 'react'

export default function AdvantageCard({ icon, title, description }) {
  return (
    <div className="advantage-card">
      <div className="advantage-icon">
        <i className={icon} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
