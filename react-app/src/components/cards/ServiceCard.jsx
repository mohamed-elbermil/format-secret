import React from 'react'

export default function ServiceCard({ image, alt, title, description }) {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={image} alt={alt} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
