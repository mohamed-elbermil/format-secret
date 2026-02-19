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
        <h2>Contactez-nous</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <i className="fas fa-phone" />
              <h3>Téléphone</h3>
              <p>{contactInfo.phone}</p>
            </div>
            <div className="info-card">
              <i className="fas fa-envelope" />
              <h3>Email</h3>
              <p>{contactInfo.email}</p>
            </div>
            <div className="info-card">
              <i className="fas fa-clock" />
              <h3>Horaires</h3>
              <p>{contactInfo.hours}</p>
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
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required />
              </div>
              <input type="hidden" name="g-recaptcha-response" />
              <button type="submit" className="submit-btn" disabled={status === 'loading'}>
                {status === 'loading' ? 'Envoi…' : 'Envoyer'}
              </button>
              {status === 'success' && <p className="form-success">Message envoyé avec succès.</p>}
              {status === 'error' && <p className="form-error">Une erreur est survenue. Réessayez.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
