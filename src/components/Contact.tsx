
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefones',
      details: ['(41) 99566-8454', '(41) 3585-2549'],
      action: 'tel:+5541995668454'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['lpcomercialconfec@gmail.com'],
      action: 'mailto:lpcomercialconfec@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      details: ['Rua Jornalista Calil Simão, 291', 'Curitiba/PR - CEP: 81.935-304'],
      action: 'https://maps.google.com/?q=Rua+Jornalista+Calil+Simão,+291,+Curitiba'
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
            Estamos prontos para atender você. Entre em contato conosco e receba 
            um orçamento personalizado para seus uniformes corporativos.
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
                    <a
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : '_self'}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 block"
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
                    </a>
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

          {/* Formulário de Contato */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h3 className="font-playfair font-bold text-2xl text-gray-900 mb-2">
              Solicite seu Orçamento
            </h3>
            <p className="text-gray-600 mb-8">
              Preencha o formulário abaixo e entraremos em contato para apresentar 
              a melhor proposta para seus uniformes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lp-royal focus:border-transparent transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lp-royal focus:border-transparent transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lp-royal focus:border-transparent transition-colors"
                    placeholder="(41) 99999-9999"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lp-royal focus:border-transparent transition-colors"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lp-royal focus:border-transparent transition-colors resize-none"
                  placeholder="Conte-nos sobre suas necessidades de uniformes: quantidade, tamanhos, cores, prazos, etc."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-lp-royal hover:bg-lp-dark text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
