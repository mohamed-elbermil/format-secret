import React from 'react'
import Header from './Header'
import Footer from './Footer'
import FAQSection from '../sections/FAQSection'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FAQSection />
      <div className="map-banner">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.360852514307!2d4.957709899999999!3d45.763957999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1b4e323ca65%3A0xe04edf5081197452!2sFORMASECRET!5e0!3m2!1sfr!2sfr!4v1772185195842!5m2!1sfr!2sfr"
          style={{ border: 0, width: '100%', height: 420, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation FormaSecret"
        />
      </div>
      <Footer />
    </>
  )
}
