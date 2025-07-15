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
    <section id="inicio" className="pt-14 sm:pt-16 md:pt-20 lp-section bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="lp-container">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Conteúdo Principal */}
          <div className="responsive-spacing fade-in order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h1 className="font-playfair font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight mobile-text-adjust">
                Uniformes que 
                <span className="text-lp-royal"> refletem</span> sua empresa
              </h1>
              <p className="lp-subheading max-w-xl mobile-contrast">
                Especialistas em confecção de uniformes personalizados em Curitiba. 
                Combinamos estilo, conforto e durabilidade para criar uniformes que 
                valorizam sua marca e garantem o bem-estar da sua equipe.
              </p>
            </div>

            {/* Features destacadas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              <div className="flex items-center space-x-2 bg-white/60 rounded-lg p-2.5 sm:p-3 md:p-4">
                <div className="bg-lp-royal/10 p-1 sm:p-1.5 md:p-2 rounded-lg flex-shrink-0">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-lp-royal" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-xs sm:text-sm text-gray-900 truncate">Qualidade</p>
                  <p className="text-xs text-gray-600 truncate">Tecidos premium</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 bg-white/60 rounded-lg p-2.5 sm:p-3 md:p-4">
                <div className="bg-lp-royal/10 p-1 sm:p-1.5 md:p-2 rounded-lg flex-shrink-0">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-lp-royal" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-xs sm:text-sm text-gray-900 truncate">Experiência</p>
                  <p className="text-xs text-gray-600 truncate">Anos no mercado</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 bg-white/60 rounded-lg p-2.5 sm:p-3 md:p-4">
                <div className="bg-lp-royal/10 p-1 sm:p-1.5 md:p-2 rounded-lg flex-shrink-0">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-lp-royal" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-xs sm:text-sm text-gray-900 truncate">Agilidade</p>
                  <p className="text-xs text-gray-600 truncate">Entregas rápidas</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="responsive-flex">
              <button
                onClick={handleWhatsAppClick}
                className="lp-button-primary flex items-center justify-center space-x-2 group flex-1 sm:flex-none mobile-button"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={() => scrollToSection('sobre')}
                className="lp-button-secondary flex-1 sm:flex-none mobile-button"
              >
                Conhecer Mais
              </button>
            </div>

            {/* Informações de contato rápidas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-3 sm:pt-4 border-t border-gray-200">
              <div className="text-center sm:text-left">
                <p className="font-semibold text-gray-900 text-xs sm:text-sm">Telefone</p>
                <p className="text-lp-gray text-xs">
                  <span className="sm:hidden">(41) 99566-8454</span>
                  <span className="hidden sm:inline">(41) 99566-8454</span>
                </p>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-semibold text-gray-900 text-xs sm:text-sm">WhatsApp</p>
                <p className="text-lp-gray text-xs">
                  <span className="sm:hidden">(41) 3585-2549</span>
                  <span className="hidden sm:inline">(41) 3585-2549</span>
                </p>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-semibold text-gray-900 text-xs sm:text-sm">Email</p>
                <p className="text-lp-gray text-xs break-all">lpcomercialconfec@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Imagem/Visual */}
          <div className="relative slide-up order-1 lg:order-2">
            <div className="relative">
              {/* Container com logo da LP Confecções */}
              <div className="bg-gradient-to-br from-lp-royal to-lp-blue rounded-xl sm:rounded-2xl md:rounded-3xl h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] flex items-center justify-center shadow-2xl">
                <div className="text-center text-white p-3 sm:p-4 md:p-6 lg:p-8 w-full">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/a-modern-logo-design-for-lp-confeccoes-f_zy6A2gVGRNaFiaxE1M7I4w_zTHQy_m6TkuSqfI9SLuwAg.jpeg" 
                      alt="LP Confecções - Uniformes de qualidade" 
                      className="lp-image-hero max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[350px]"
                    />
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 md:-top-4 md:-right-4 bg-white rounded-full p-1.5 sm:p-2 md:p-4 shadow-lg">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 text-yellow-400" fill="currentColor" />
              </div>
              
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 md:-bottom-4 md:-left-4 bg-lp-royal rounded-full p-1.5 sm:p-2 md:p-4 shadow-lg">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
