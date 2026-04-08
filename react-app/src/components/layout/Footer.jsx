import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import { navLinks } from "../../data/navigation";
import { contactInfo } from "../../data/contactInfo";
import { socialLinks } from "../../data/socialLinks";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="/assets/images/Formasecret-nouveau-logo.png"
              alt="FormaSecret Logo"
            />
            <div className="infos-left">
              <a
                href="https://www.google.com/maps/place/FORMASECRET/@45.763958,4.9577099,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4c1b4e323ca65:0xe04edf5081197452!8m2!3d45.763958!4d4.9577099!16s%2Fg%2F11mvxkpql8?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google map"
                className="list-link"
              >
                <i className="fa-solid fa-location-dot" />
                140 Rue Emile Zola, 69150 Décines-Charpieu
              </a>
              <a href={`tel:${contactInfo.phone}`} className="list-link">
                <i className="fa-solid fa-phone"></i>
                {contactInfo.phone}
              </a>

              <div className="horaires">
                <p>
                  <span>Lun-Ven :</span> 09:00 - 18:00
                </p>
              </div>
              <div>
                <img
                  src="/assets/images/logo-qualiopi-valide-400x179.png"
                  alt="Formation Qualiopi"
                  className="qualiopi"
                />
              </div>
            </div>
          </div>
          <div className="footer-links">
            <h4>Liens rapides</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.path}>
                  {link.isHash || link.path.includes("#") ? (
                    <a
                      href={
                        link.path.startsWith("/") ? link.path : `/${link.path}`
                      }
                      className="list-link"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.path} className="list-link">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link to="/cgu" className="list-link">
                  Conditions Générales d'Utilisation
                </Link>
              </li>
              <li>
                <Link to="/cgv" className="list-link">
                  Conditions Générales de Vente
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Former, accompagner, réussir</h4>
            <p>
              Former aujourd'hui, pour bâtir l'excellence de demain. Nous vous
              proposons une offre de plus de 25 formations riches et adaptée à
              toute structure professionnelle en France.
            </p>
            <a
              href="mailto:contact@formasecret.fr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Envoyer un email"
              className="email-link"
            >
              <i className="fa-solid fa-envelope"></i>
              contact@formasecret.fr
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2025 FormaSecret. Tous droits réservés.
            <br />
            Création par l'agence{" "}
            <a
              href="https://soblim.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="logo-agency"
            >
              <img
                src="/assets/images/soblim-logo.png"
                alt="Logo de l'agence soblim"
              />
            </a>
          </p>
          <div className="footer-social">
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
      </Container>
    </footer>
  );
}
