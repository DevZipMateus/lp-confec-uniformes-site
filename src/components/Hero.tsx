
import React from 'react';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '5541995668454';
    const message = 'Olá! Gostaria de solicitar um orçamento para uniformes corporativos da LP Confecções.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="inicio" className="pt-20 lp-section bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="lp-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Principal */}
          <div className="space-y-8 fade-in">
            <div className="space-y-6">
              <h1 className="font-playfair font-bold text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight">
                Uniformes que 
                <span className="text-lp-royal"> refletem</span> sua empresa
              </h1>
              <p className="lp-subheading max-w-xl">
                Especialistas em confecção de uniformes personalizados em Curitiba. 
                Combinamos estilo, conforto e durabilidade para criar uniformes que 
                valorizam sua marca e garantem o bem-estar da sua equipe.
              </p>
            </div>

            {/* Features destacadas */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white/60 rounded-lg p-4">
                <div className="bg-lp-royal/10 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-lp-royal" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">Qualidade</p>
                  <p className="text-xs text-gray-600">Tecidos premium</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/60 rounded-lg p-4">
                <div className="bg-lp-royal/10 p-2 rounded-lg">
                  <Star className="h-5 w-5 text-lp-royal" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">Experiência</p>
                  <p className="text-xs text-gray-600">Anos no mercado</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white/60 rounded-lg p-4">
                <div className="bg-lp-royal/10 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-lp-royal" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">Agilidade</p>
                  <p className="text-xs text-gray-600">Entregas rápidas</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="lp-button-primary flex items-center justify-center space-x-2 group"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={() => scrollToSection('sobre')}
                className="lp-button-secondary"
              >
                Conhecer Mais
              </button>
            </div>

            {/* Informações de contato rápidas */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4 border-t border-gray-200">
              <div>
                <p className="font-semibold text-gray-900">Telefone</p>
                <p className="text-lp-gray">(41) 99566-8454</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">WhatsApp</p>
                <p className="text-lp-gray">(41) 3585-2549</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-lp-gray">lpcomercialconfec@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Imagem/Visual */}
          <div className="relative slide-up">
            <div className="relative">
              {/* Placeholder para imagem de uniformes - usando gradiente elegante */}
              <div className="bg-gradient-to-br from-lp-royal to-lp-blue rounded-3xl h-96 lg:h-[500px] flex items-center justify-center shadow-2xl">
                <div className="text-center text-white p-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                    <img 
                      src="/lovable-uploads/e90ad97c-8d16-4408-af62-dc008654f6b3.png" 
                      alt="LP Confecções - Uniformes de qualidade" 
                      className="h-32 w-auto mx-auto mb-4 filter brightness-0 invert"
                    />
                    <h3 className="font-playfair font-bold text-2xl mb-2">LP Confecções</h3>
                    <p className="text-lg font-medium">Uniformes que refletem sua empresa</p>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <Star className="h-8 w-8 text-yellow-400" fill="currentColor" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-lp-royal rounded-full p-4 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
