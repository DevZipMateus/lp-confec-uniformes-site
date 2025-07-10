
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-lp-dark text-white">
      <div className="lp-container">
        {/* Conteúdo Principal do Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/e90ad97c-8d16-4408-af62-dc008654f6b3.png" 
                alt="LP Confecções - Logo" 
                className="h-12 w-auto filter brightness-0 invert"
              />
              <div>
                <h3 className="font-playfair font-bold text-2xl">LP Confecções</h3>
                <p className="text-gray-400 font-medium">Uniformes que refletem sua empresa</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Especialistas em confecção de uniformes corporativos em Curitiba. 
              Combinamos tradição, qualidade e inovação para criar uniformes que 
              valorizam sua marca e garantem conforto para sua equipe.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+5541995668454"
                className="bg-lp-royal/20 hover:bg-lp-royal/30 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>(41) 99566-8454</span>
              </a>
              
              <a
                href="mailto:lpcomercialconfec@gmail.com"
                className="bg-lp-royal/20 hover:bg-lp-royal/30 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-6">
            <h4 className="font-playfair font-bold text-lg">Links Rápidos</h4>
            <nav className="space-y-3">
              {['Início', 'Sobre', 'Serviços', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-gray-300 hover:text-white transition-colors text-left"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-6">
            <h4 className="font-playfair font-bold text-lg">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-lp-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Rua Jornalista Calil Simão, 291<br />
                    Curitiba/PR - CEP: 81.935-304
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-lp-blue flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>(41) 99566-8454</p>
                  <p>(41) 3585-2549</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-lp-blue flex-shrink-0" />
                <p className="text-gray-300 text-sm">lpcomercialconfec@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-700"></div>

        {/* Copyright */}
        <div className="py-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} LP Comercial de Confecções LTDA. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>em Curitiba/PR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
