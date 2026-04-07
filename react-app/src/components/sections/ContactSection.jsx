import React, { useState } from "react";
import { contactInfo } from "../../data/contactInfo";
import { socialLinks } from "../../data/socialLinks";
import emailjs from "@emailjs/browser";
import "@/assets/css/components/contact.css";

/* ── Icônes SVG ── */
const IconPhone = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
  </svg>
)
const IconMail = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)
const IconClock = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)
const IconCheck = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const IconAlert = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)
const IconSend = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

/* Icônes réseaux sociaux via Font Awesome (déjà chargé dans le projet) */
const socialIconClass = {
  Facebook: 'fab fa-facebook',
  LinkedIn: 'fab fa-linkedin',
  YouTube:  'fab fa-youtube',
  Instagram: 'fab fa-instagram',
}

export default function ContactSection() {
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  /* Suivi focus pour floating labels */
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => setFocused((prev) => ({ ...prev, [field]: true }));
  const handleBlur  = (field) => setFocused((prev) => ({ ...prev, [field]: false }));

  /* Label flotte si focus OU valeur non vide */
  const isFloating = (field) => focused[field] || formData[field] !== "";

  /* ── Logique EmailJS inchangée ── */
  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("Variables EmailJS manquantes. Vérifiez votre fichier .env");
        setStatus("error");
        return;
      }

      emailjs.init(publicKey);

      const response = await emailjs.send(serviceId, templateId, {
        from_name:  formData.name,
        from_email: formData.email,
        subject:    formData.subject,
        message:    formData.message,
        to_email:   contactInfo.email,
      });

      if (response.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(null), 5000);
      } else {
        throw new Error("Échec de l'envoi");
      }
    } catch (error) {
      console.error("Erreur EmailJS:", error);
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="ctc-section" aria-labelledby="ctc-title">
      <div className="container">
        <div className="ctc-grid">

          {/* ══ Colonne gauche — Infos ══ */}
          <div className="ctc-info">
            <div className="ctc-info__inner">
              <p className="ctc-info__eyebrow">Restons en contact</p>

              <h2 id="ctc-title" className="ctc-info__title">
                Parlons de<br /><em>votre projet</em>
              </h2>

              <div className="ctc-info__divider" aria-hidden="true" />

              <p className="ctc-info__subtitle">
                Remplissez le formulaire et nous vous recontactons sous 24h
                pour étudier votre besoin et vous proposer la formation adaptée.
              </p>

              <div className="ctc-info__items">
                <div className="ctc-info__item">
                  <div className="ctc-info__item-icon"><IconPhone /></div>
                  <div>
                    <span className="ctc-info__item-label">Téléphone</span>
                    <a href={`tel:${contactInfo.phone}`} className="ctc-info__item-value">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="ctc-info__item">
                  <div className="ctc-info__item-icon"><IconMail /></div>
                  <div>
                    <span className="ctc-info__item-label">Email</span>
                    <a href={`mailto:${contactInfo.email}`} className="ctc-info__item-value">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="ctc-info__item">
                  <div className="ctc-info__item-icon"><IconClock /></div>
                  <div>
                    <span className="ctc-info__item-label">Horaires</span>
                    <span className="ctc-info__item-value">{contactInfo.hours}</span>
                  </div>
                </div>
              </div>

              <div className="ctc-info__social">
                {socialLinks.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ctc-info__social-link"
                    aria-label={s.label}
                  >
                    <i className={socialIconClass[s.label] || s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ══ Colonne droite — Formulaire ══ */}
          <div className="ctc-form-wrap">
            <h3 className="ctc-form__title">Envoyez-nous un message</h3>
            <p className="ctc-form__subtitle">Réponse garantie sous 24h ouvrées.</p>

            <form onSubmit={sendEmail}>

              {/* Ligne 1 : Nom + Email */}
              <div className="ctc-form__row">
                {/* Nom */}
                <div className="ctc-field">
                  <input
                    className="ctc-field__input"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    required
                  />
                  <label
                    className={`ctc-field__label${isFloating('name') ? ' ctc-field__label--float' : ''}`}
                    htmlFor="name"
                  >
                    Votre nom *
                  </label>
                </div>

                {/* Email */}
                <div className="ctc-field">
                  <input
                    className="ctc-field__input"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    required
                  />
                  <label
                    className={`ctc-field__label${isFloating('email') ? ' ctc-field__label--float' : ''}`}
                    htmlFor="email"
                  >
                    Votre email *
                  </label>
                </div>
              </div>

              {/* Sujet */}
              <div className="ctc-form__row ctc-form__row--full">
                <div className="ctc-field">
                  <input
                    className="ctc-field__input"
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={() => handleBlur('subject')}
                    required
                  />
                  <label
                    className={`ctc-field__label${isFloating('subject') ? ' ctc-field__label--float' : ''}`}
                    htmlFor="subject"
                  >
                    Sujet *
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="ctc-form__row ctc-form__row--full">
                <div className="ctc-field ctc-field--textarea">
                  <textarea
                    className="ctc-field__textarea"
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    required
                  />
                  <label
                    className={`ctc-field__label${isFloating('message') ? ' ctc-field__label--float' : ''}`}
                    htmlFor="message"
                  >
                    Votre message *
                  </label>
                </div>
              </div>

              {/* Bouton + feedbacks */}
              <div className="ctc-form__footer">
                <button
                  type="submit"
                  className="ctc-submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <span className="ctc-spinner" aria-hidden="true" />
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      <IconSend />
                      Envoyer le message
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="ctc-success" role="alert">
                    <span className="ctc-success__icon" aria-hidden="true">
                      <IconCheck />
                    </span>
                    <div className="ctc-success__text">
                      <strong>Message envoyé avec succès !</strong>
                      Nous vous répondrons dans les plus brefs délais.
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="ctc-error" role="alert">
                    <IconAlert />
                    Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
                  </div>
                )}

                <p className="ctc-form__rgpd">
                  En soumettant ce formulaire, vous acceptez que vos données soient
                  utilisées uniquement pour répondre à votre demande.
                </p>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
