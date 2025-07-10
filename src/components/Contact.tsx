
import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const phoneNumber = '5541995668454';
  const message = 'Olá! Gostaria de solicitar um orçamento para uniformes corporativos da LP Confecções.';
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefones',
      details: ['(41) 99566-8454', '(41) 3585-2549'],
      action: handleWhatsAppClick
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['lpcomercialconfec@gmail.com'],
      action: handleWhatsAppClick
    },
    {
      icon: MapPin,
      title: 'Endereço',
      details: ['Rua Jornalista Calil Simão, 291', 'Curitiba/PR - CEP: 81.935-304'],
      action: () => window.open('https://maps.google.com/?q=Rua+Jornalista+Calil+Simão,+291,+Curitiba', '_blank', 'noopener,noreferrer')
    },
    {
      icon: Clock,
      title: 'Horário',
      details: ['Segunda à Sexta: 8h às 18h', 'Sábado: 8h às 12h'],
      action: null
    }
  ];

  return (
    <section id="contato" className="lp-section bg-gray-50">
      <div className="lp-container">
        {/* Header da Seção */}
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato conosco pelo WhatsApp 
            e receba um orçamento personalizado para seus uniformes corporativos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            {/* Cards de Contato */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="group">
                  {info.action ? (
                    <button
                      onClick={info.action}
                      className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 block w-full text-left"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-lp-royal/10 w-10 h-10 rounded-lg flex items-center justify-center">
                          <info.icon className="h-5 w-5 text-lp-royal" />
                        </div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex}>{detail}</p>
                        ))}
                      </div>
                    </button>
                  ) : (
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-lp-royal/10 w-10 h-10 rounded-lg flex items-center justify-center">
                          <info.icon className="h-5 w-5 text-lp-royal" />
                        </div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex}>{detail}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-lp-royal/10 w-10 h-10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-lp-royal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Nossa Localização</h4>
                    <p className="text-sm text-gray-600">Rua Jornalista Calil Simão, 291, Curitiba/PR</p>
                  </div>
                </div>
              </div>
              <div className="h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.7234567890123!2d-49.26891852456789!3d-25.461234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4b8b8b8b8b8%3A0x1234567890abcdef!2sRua%20Jornalista%20Calil%20Sim%C3%A3o%2C%20291%20-%20Curitiba%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização LP Confecções"
                />
              </div>
            </div>
          </div>

          {/* Chamada para WhatsApp */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="text-center">
              <div className="bg-green-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-green-600" />
              </div>
              
              <h3 className="font-playfair font-bold text-2xl text-gray-900 mb-2">
                Fale Conosco no WhatsApp
              </h3>
              <p className="text-gray-600 mb-8">
                Converse diretamente conosco pelo WhatsApp e receba seu orçamento 
                personalizado de forma rápida e prática.
              </p>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-3 mb-6 text-lg"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Iniciar Conversa no WhatsApp</span>
              </button>

              <div className="space-y-4 text-sm text-gray-600">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">📱 Nosso número:</h4>
                  <p className="text-lg font-medium text-gray-900">(41) 99566-8454</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">⏰ Atendimento:</h4>
                  <p>Segunda à Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>

                <div className="bg-lp-royal/5 rounded-lg p-4 border border-lp-royal/20">
                  <h4 className="font-semibold text-lp-royal mb-2">💡 Dica:</h4>
                  <p className="text-gray-700">
                    Para um atendimento mais rápido, nos conte sobre suas necessidades: 
                    quantidade de uniformes, tamanhos, cores e prazo desejado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
