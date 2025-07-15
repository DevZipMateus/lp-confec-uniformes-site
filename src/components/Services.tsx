
import React from 'react';
import { Shirt, Scissors, Palette, Truck, CheckCircle, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: 'Uniformes Corporativos',
      description: 'Criação de uniformes personalizados para empresas, com foco em conforto e durabilidade.',
      features: ['Tecidos de qualidade', 'Design personalizado', 'Tamanhos variados']
    },
    {
      icon: Scissors,
      title: 'Confecção Sob Medida',
      description: 'Serviços de alfaiataria para uniformes que se ajustam perfeitamente ao seu corpo.',
      features: ['Medidas precisas', 'Ajustes inclusos', 'Acabamento profissional']
    },
    {
      icon: Palette,
      title: 'Personalização',
      description: 'Bordados, estampas e aplicações que destacam a identidade visual da sua empresa.',
      features: ['Bordados premium', 'Logotipos aplicados', 'Cores personalizadas']
    },
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description: 'Entregamos seus uniformes com agilidade, respeitando prazos e mantendo a qualidade.',
      features: ['Prazos cumpridos', 'Entrega em Curitiba', 'Acompanhamento do pedido']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consulta',
      description: 'Conversamos sobre suas necessidades e apresentamos as melhores opções.'
    },
    {
      step: '02',
      title: 'Orçamento',
      description: 'Elaboramos um orçamento detalhado e transparente para seu projeto.'
    },
    {
      step: '03',
      title: 'Produção',
      description: 'Iniciamos a confecção com materiais de qualidade e acabamento impecável.'
    },
    {
      step: '04',
      title: 'Entrega',
      description: 'Entregamos seus uniformes prontos, dentro do prazo combinado.'
    }
  ];

  return (
    <section id="servicos" className="lp-section bg-gradient-to-br from-gray-50 to-white">
      <div className="lp-container">
        {/* Header da Seção */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-lp-royal/10 text-lp-royal font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
            Nossos Serviços
          </span>
          <h2 className="lp-heading max-w-3xl mx-auto">
            Soluções completas em 
            <span className="text-lp-royal"> uniformes corporativos</span>
          </h2>
          <p className="lp-subheading max-w-2xl mx-auto">
            Oferecemos desde a criação até a entrega de uniformes personalizados, 
            sempre priorizando qualidade, conforto e a identidade da sua empresa.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="responsive-grid-4 mb-16 sm:mb-20">
          {services.map((service, index) => (
            <div key={index} className="lp-card text-center group">
              <div className="bg-gradient-to-br from-lp-royal to-lp-blue w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              
              <h3 className="font-playfair font-bold text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {service.description}
              </p>
              
              <ul className="space-y-1 sm:space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-lp-royal mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Processo de Trabalho */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-gray-900 mb-3 sm:mb-4">
              Como trabalhamos
            </h3>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Nosso processo é transparente e focado em entregar exatamente o que você precisa
            </p>
          </div>

          <div className="responsive-grid-4">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 sm:mb-6">
                  <div className="bg-gradient-to-br from-lp-royal to-lp-blue w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <span className="font-playfair font-bold text-lg sm:text-xl text-white">
                      {step.step}
                    </span>
                  </div>
                  
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-6 sm:top-8 left-12 sm:left-16 w-full h-0.5 bg-gradient-to-r from-lp-royal/30 to-transparent"></div>
                  )}
                </div>
                
                <h4 className="font-playfair font-bold text-base sm:text-lg text-gray-900 mb-2 sm:mb-3">
                  {step.title}
                </h4>
                
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-lp-royal to-lp-blue rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <h3 className="font-playfair font-bold text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
              Entre em contato conosco e receba um orçamento personalizado para seus uniformes corporativos
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) {
                  const headerHeight = 80;
                  const elementPosition = element.offsetTop - headerHeight;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-white text-lp-royal font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
            >
              Solicitar Orçamento Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
