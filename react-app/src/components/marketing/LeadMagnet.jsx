import React, { useState } from 'react';
import Container from '../layout/Container';
import emailjs from '@emailjs/browser';
import '../../styles/FormationsPage.css';
import '../../styles/LeadMagnet.css';

// Configuration EmailJS - Utiliser le même service que le formulaire de contact
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_w1lw4hj',  // Service qui fonctionne pour le contact
  TEMPLATE_ID: 'template_uas40aq',  // Template pour la plaquette PDF
  PUBLIC_KEY: 'AV-lC8dyv1w1WXQRp'  // Clé publique mise à jour
};

const LeadMagnet = ({ 
  title = "Besoin de plus de détails ?",
  subtitle = "Recevez notre plaquette complète 2026 directement par email : programmes détaillés, tarifs et modalités de financement.",
  buttonText = "Envoyer",
  placeholder = "Votre adresse email",
  successMessage = "C'est parti !",
  successSubtext = "Vérifiez votre boîte mail.",
  icon = "fa-download",
  pdfUrl = "/plaquette-2026.pdf" // PDF dans le dossier public
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
      // Construire l'URL complète du PDF
      // Gestion automatique des environnements
      const isDevelopment = window.location.hostname === 'localhost';
      const isStaging = window.location.hostname.includes('staging') || window.location.hostname.includes('dev');
      
      // URL de base selon l'environnement
      const baseUrl = isDevelopment 
        ? 'http://localhost:5174'  // localhost pour le développement
        : isStaging
        ? window.location.origin  // URL de staging
        : window.location.origin;  // URL de production
      
      const pdfLink = `${baseUrl}${pdfUrl}`;
      console.log(' Envoi email à:', email);
      console.log(' Mode développement:', isDevelopment);
      console.log(' Lien PDF:', pdfLink);
      
      const templateParams = {
        name: email,  // Utilise la variable que le template attend
        message: `Merci pour votre intérêt ! Voici votre plaquette complète.\n\nLien PDF : ${pdfLink}`,
        time: new Date().toLocaleString('fr-FR'),
        to_email: email,
        pdf_link: pdfLink,
        reply_to: 'contact@formasecret.fr'
      };

      console.log(' TemplateParams envoyés à EmailJS:', templateParams);
      console.log(' Service ID:', EMAILJS_CONFIG.SERVICE_ID);
      console.log(' Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);
      console.log('🔗 Lien PDF complet:', pdfLink);
      console.log('🌐 Base URL:', baseUrl);
      console.log('📁 PDF URL:', pdfUrl);
      
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('✅ Email envoyé avec succès:', response.status);
      return response;
    } catch (error) {
      console.error('❌ Erreur EmailJS:', error);
      console.error('❌ Status:', error.status);
      console.error('❌ Text:', error.text);
      console.error('❌ Message:', error.message);
      console.error('❌ Service ID:', EMAILJS_CONFIG.SERVICE_ID);
      console.error('❌ Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation email
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

export default LeadMagnet;
