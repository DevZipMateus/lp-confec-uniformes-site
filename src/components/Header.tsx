
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '5541995668454';
    const message = 'Olá! Gostaria de solicitar um orçamento para uniformes corporativos da LP Confecções.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Início', href: 'inicio' },
    { label: 'Sobre', href: 'sobre' },
    { label: 'Serviços', href: 'servicos' },
    { label: 'Produtos', href: 'produtos' },
    { label: 'Contato', href: 'contato' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <nav className="lp-container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="/lovable-uploads/e90ad97c-8d16-4408-af62-dc008654f6b3.png" 
              alt="LP Confecções - Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="font-playfair font-bold text-lg sm:text-xl text-gray-900">LP Confecções</h1>
              <p className="text-xs sm:text-sm text-lp-gray font-medium">Uniformes que refletem sua empresa</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="font-inter font-medium text-gray-700 hover:text-lp-royal transition-colors duration-200 relative group text-sm xl:text-base"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lp-royal transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="lp-button-primary"
            >
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu mobile"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <div className="py-3 sm:py-4 space-y-1 sm:space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 sm:py-3 font-inter font-medium text-gray-700 hover:text-lp-royal hover:bg-gray-50 transition-colors text-sm sm:text-base"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <button
                  onClick={handleWhatsAppClick}
                  className="lp-button-primary w-full text-center"
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
