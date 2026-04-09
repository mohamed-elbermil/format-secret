import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FAQSection from "../sections/FAQSection";
import ContactSection from "../sections/ContactSection";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FAQSection />
      <ContactSection />
      <div className="map-banner">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44524.18391657419!2d4.917739013257356!3d45.77596991170411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c0cae9da36e3%3A0x408ab2ae4bb18b0!2s69150%20D%C3%A9cines-Charpieu!5e0!3m2!1sfr!2sfr!4v1775740267860!5m2!1sfr!2sfr"
          style={{ border: 0, width: '100%', height: 420, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation FormaSecret – Décines-Charpieu"
        />
      </div>
      <Footer />
    </>
  );
}
