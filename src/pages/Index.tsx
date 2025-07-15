
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden max-w-full">
      {/* Cabeçalho fixo */}
      <Header />
      
      {/* Seções principais */}
      <main className="overflow-x-hidden max-w-full">
        <Hero />
        <About />
        <Services />
        <Products />
        <Contact />
      </main>
      
      {/* Rodapé */}
      <Footer />
      
      {/* Botão flutuante do WhatsApp */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
