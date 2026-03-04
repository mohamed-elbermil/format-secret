import React, { useState } from 'react'
import { contactInfo } from '../../data/contactInfo'
import { socialLinks } from '../../data/socialLinks'

export default function ContactSection() {
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    setStatus('loading')
    fetch(form.action || '/contact.php', { method: 'POST', body: formData })
      .then((r) => r.json())
      .then((data) => {
        setStatus(data.status === 'success' ? 'success' : 'error')
        if (data.status === 'success') form.reset()
      })
      .catch(() => setStatus('error'))
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-header">
              <p className="contact-eyebrow">Informations de contact</p>
              <h2>Parlons de votre projet</h2>
              <p className="contact-subtitle">
                Remplissez le formulaire et nous reviendrons vers vous sous 24 heures pour étudier votre besoin.
              </p>
            </div>
            <div className="contact-info-items">
              <div className="info-card">
                <i className="fas fa-phone" />
                <div>
                  <h3>Téléphone</h3>
                  <a href={`tel:${contactInfo.phone}`} className="list-link">{contactInfo.phone}</a>
                </div>
              </div>
              <div className="info-card">
                <i className="fas fa-envelope" />
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${contactInfo.email}`} className="list-link">{contactInfo.email}</a>
                </div>
              </div>
              <div className="info-card">
                <i className="fas fa-clock" />
                <div>
                  <h3>Horaires</h3>
                  <p>{contactInfo.hours}</p>
                </div>
              </div>
            </div>
            <div className="social-media">
              {socialLinks.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form">
            <h3>Envoyez-nous un message</h3>
            <form action="contact.php" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required />
                </div>
              </div>
              <input type="hidden" name="g-recaptcha-response" />
              <div className="contact-form-footer">
                <button type="submit" className="submit-btn" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Envoi…' : 'Envoyer'}
                </button>
                {status === 'success' && <p className="form-success">Message envoyé avec succès.</p>}
                {status === 'error' && <p className="form-error">Une erreur est survenue. Réessayez.</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
