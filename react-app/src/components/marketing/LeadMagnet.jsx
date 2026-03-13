import React, { useState } from 'react';
import Container from '../layout/Container';
import '../../styles/FormationsPage.css';

const LeadMagnet = ({ 
  title = "Besoin de plus de détails ?",
  subtitle = "Recevez notre plaquette complète 2026 directement par email : programmes détaillés, tarifs et modalités de financement.",
  onSubmit = (email) => console.log('Email submitted:', email),
  buttonText = "Envoyer",
  placeholder = "Votre adresse email",
  successMessage = "C'est parti !",
  successSubtext = "Vérifiez votre boîte mail.",
  icon = "fa-download"
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  // Validation d'email simple
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Gestion de la soumission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError('Veuillez entrer une adresse email valide');
      return;
    }
    
    setEmailError('');
    setIsSubmitted(true);
    
    // Appeler la fonction onSubmit passée en props
    onSubmit(email);
    
    // Simuler l'envoi (à remplacer par votre API)
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 5000);
  };

  // Gestion du changement d'email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  return (
    <section className="lead-magnet-section">
      <Container>
        <div className="lead-magnet-content">
          <div className="lead-magnet-text">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          
          <div className="lead-magnet-form">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="email-form">
                <div className="input-group">
                  <div className="input-wrapper">
                    <i className={`fas ${icon} input-icon`}></i>
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder={placeholder}
                      className={`email-input ${emailError ? 'error' : ''}`}
                      required
                    />
                  </div>
                  {emailError && <span className="error-message">{emailError}</span>}
                </div>
                <button type="submit" className="cta-button-picto">
                  <span>{buttonText}</span>
                  <i className="fas fa-arrow-right button-icon"></i>
                </button>
              </form>
            ) : (
              <div className="success-message">
                <div className="success-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3>{successMessage}</h3>
                <p>{successSubtext}</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LeadMagnet;
