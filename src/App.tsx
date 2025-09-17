import React from 'react';
import EmergencyBanner from './components/EmergencyBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import DoctorIntro from './components/DoctorIntro';
import ServicesOverview from './components/ServicesOverview';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import DetailedServices from './components/DetailedServices';
import FAQs from './components/FAQs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <EmergencyBanner />
      <Header />
      <Hero />
      <DoctorIntro />
      <ServicesOverview />
      <Gallery />
      <AboutUs />
      <DetailedServices />
      <Testimonials />
      <FAQs />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  );
}

export default App;