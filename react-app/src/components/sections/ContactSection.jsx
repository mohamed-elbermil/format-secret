import React, { useState } from "react";
import { contactInfo } from "../../data/contactInfo";
import { socialLinks } from "../../data/socialLinks";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Récupération des variables d'environnement
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Validation des variables d'environnement
      if (!serviceId || !templateId || !publicKey) {
        console.error(
          "Variables EmailJS manquantes. Vérifiez votre fichier .env",
        );
        setStatus("error");
        return;
      }

      // Initialisation d'EmailJS
      emailjs.init(publicKey);

      // Envoi de l'email
      const response = await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: contactInfo.email,
      });

      if (response.status === 200) {
        setStatus("success");
        // Réinitialisation du formulaire
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Masquer le message de succès après 5 secondes
        setTimeout(() => setStatus(null), 5000);
      } else {
        throw new Error("Échec de l'envoi");
      }
    } catch (error) {
      console.error("Erreur EmailJS:", error);
      setStatus("error");

      // Masquer le message d'erreur après 5 secondes
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-header">
              <p className="contact-eyebrow">Informations de contact</p>
              <h2>Parlons de votre projet</h2>
              <p className="contact-subtitle">
                Remplissez le formulaire et nous reviendrons vers vous sous 24
                heures pour étudier votre besoin.
              </p>
            </div>
            <div className="contact-info-items">
              <div className="info-card">
                <i className="fas fa-phone" />
                <div>
                  <h3>Téléphone</h3>
                  <a href={`tel:${contactInfo.phone}`} className="list-link">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              <div className="info-card">
                <i className="fas fa-envelope" />
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${contactInfo.email}`} className="list-link">
                    {contactInfo.email}
                  </a>
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
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form">
            <h3>Envoyez-nous un message</h3>
            <form onSubmit={sendEmail}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="contact-form-footer">
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <span className="loading-spinner"></span>
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer"
                  )}
                </button>

                {/* Messages de retour utilisateur */}
                {status === "success" && (
                  <div className="form-success">
                    <i className="fas fa-check-circle"></i>
                    Message envoyé avec succès ! Nous vous répondrons dans les
                    plus brefs délais.
                  </div>
                )}
                {status === "error" && (
                  <div className="form-error">
                    <i className="fas fa-exclamation-circle"></i>
                    Une erreur est survenue. Veuillez réessayer ou nous
                    contacter directement.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
