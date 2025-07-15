
import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-lp-dark text-white">
      <div className="lp-container">
        {/* Conteúdo Principal do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-12 sm:py-16">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img 
                src="/lovable-uploads/e90ad97c-8d16-4408-af62-dc008654f6b3.png" 
                alt="LP Confecções - Logo" 
                className="h-8 sm:h-10 md:h-12 w-auto filter brightness-0 invert"
              />
              <div>
                <h3 className="font-playfair font-bold text-xl sm:text-2xl">LP Confecções</h3>
                <p className="text-gray-400 font-medium text-sm sm:text-base">Uniformes que refletem sua empresa</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md text-sm sm:text-base">
              Especialistas em confecção de uniformes corporativos em Curitiba. 
              Combinamos tradição, qualidade e inovação para criar uniformes que 
              valorizam sua marca e garantem conforto para sua equipe.
            </p>

            <div className="responsive-flex">
              <button
                onClick={handleWhatsAppClick}
                className="bg-lp-royal/20 hover:bg-lp-royal/30 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors flex items-center space-x-2 text-xs sm:text-sm"
              >
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>(41) 99566-8454</span>
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="bg-lp-royal/20 hover:bg-lp-royal/30 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors flex items-center space-x-2 text-xs sm:text-sm"
              >
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Email</span>
              </button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="font-playfair font-bold text-base sm:text-lg">Links Rápidos</h4>
            <nav className="space-y-2 sm:space-y-3">
              {['Início', 'Sobre', 'Serviços', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-gray-300 hover:text-white transition-colors text-left text-sm sm:text-base"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="font-playfair font-bold text-base sm:text-lg">Contato</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-lp-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Rua Jornalista Calil Simão, 291<br />
                    Curitiba/PR - CEP: 81.935-304
                  </p>
                </div>
              </div>
              
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 sm:space-x-3 text-left hover:text-green-400 transition-colors"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-lp-blue flex-shrink-0" />
                <div className="text-gray-300 text-xs sm:text-sm">
                  <p>(41) 99566-8454</p>
                  <p>(41) 3585-2549</p>
                </div>
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 sm:space-x-3 text-left hover:text-green-400 transition-colors"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-lp-blue flex-shrink-0" />
                <p className="text-gray-300 text-xs sm:text-sm break-all">lpcomercialconfec@gmail.com</p>
              </button>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-700"></div>

        {/* Copyright */}
        <div className="py-6 sm:py-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {currentYear} LP Comercial de Confecções LTDA. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-1 text-gray-400 text-xs sm:text-sm">
              <span>Feito com</span>
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 fill-current" />
              <span>em Curitiba/PR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
