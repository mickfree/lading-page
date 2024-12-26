import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import ContactSection from './components/ContactSection/ContactSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import ServicesList from './components/ServiceList/ServiceList';
import DistributorsSection from './components/DistributorsSection/DistributorsSection';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ContactSection />
      <Navbar />
      <Slider />
      <ServicesSection />
      <ServicesList />
      <DistributorsSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
