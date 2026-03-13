import React, { useState } from 'react';
import Container from '../layout/Container';
import '../../styles/FormationsPage.css';

// Alternative à EmailJS - Solution Resend
const LeadMagnetResend = ({ 
  title = "Besoin de plus de détails ?",
  subtitle = "Recevez notre plaquette complète 2026 directement par email : programmes détaillés, tarifs et modalités de financement.",
  buttonText = "Envoyer",
  placeholder = "Votre adresse email",
  successMessage = "C'est parti !",
  successSubtext = "Vérifiez votre boîte mail.",
  icon = "fa-download",
  pdfUrl = "/plaquette-2026.pdf"
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [submitError, setSubmitError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = async (email) => {
    try {
      const pdfLink = `${window.location.origin}${pdfUrl}`;
      console.log('📧 Envoi via Resend API à:', email);
      console.log('📎 Lien PDF:', pdfLink);
      
      // Utiliser une fonction Edge ou API Route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: email,
          subject: 'Votre plaquette FormaSecret 2026',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #0066cc;">🎓 FormaSecret</h2>
              <p>Bonjour ${email},</p>
              <p>Merci pour votre intérêt ! Voici votre plaquette complète.</p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="${pdfLink}" 
                   target="_blank"
                   style="background: #0066cc; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                  📥 Télécharger la plaquette PDF
                </a>
              </div>
              <p style="color: #666; font-size: 12px;">
                Lien direct : <a href="${pdfLink}">${pdfLink}</a>
              </p>
            </div>
          `
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('✅ Email envoyé avec succès:', result);
      return result;
    } catch (error) {
      console.error('❌ Erreur envoi email:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError('Veuillez entrer une adresse email valide');
      return;
    }
    
    setEmailError('');
    setSubmitError('');
    setIsSubmitting(true);

    try {
      await sendEmail(email);
      setIsSubmitted(true);
      console.log('Email envoyé avec succès à:', email);
    } catch (error) {
      setSubmitError('Une erreur est survenue. Veuillez réessayer.');
      console.error('Erreur envoi email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setIsSubmitted(false);
    setEmailError('');
    setSubmitError('');
  };

  if (isSubmitted) {
    return (
      <section className="lead-magnet-section">
        <Container>
          <div className="lead-magnet-content">
            <div className="success-content">
              <div className="success-icon">
                <i className={`fas ${icon}`}></i>
              </div>
              <h3>{successMessage}</h3>
              <p>{successSubtext}</p>
              <button 
                onClick={resetForm}
                className="cta-button-picto secondary"
                style={{ marginTop: '1rem' }}
              >
                <span>Envoyer à un autre email</span>
                <i className="fas fa-redo button-icon"></i>
              </button>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="lead-magnet-section">
      <Container>
        <div className="lead-magnet-content">
          <div className="lead-magnet-text">
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>
          <form onSubmit={handleSubmit} className="lead-magnet-form">
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError('');
                }}
                placeholder={placeholder}
                className={`email-input ${emailError ? 'error' : ''}`}
                disabled={isSubmitting}
                required
              />
              {emailError && <span className="error-message">{emailError}</span>}
              {submitError && <span className="error-message">{submitError}</span>}
            </div>
            <button 
              type="submit" 
              className="cta-button-picto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span>Envoi en cours...</span>
                  <i className="fas fa-spinner fa-spin button-icon"></i>
                </>
              ) : (
                <>
                  <span>{buttonText}</span>
                  <i className="fas fa-arrow-right button-icon"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default LeadMagnetResend;
