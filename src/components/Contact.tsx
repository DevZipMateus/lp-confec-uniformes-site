
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
    <section id="contato" className="lp-section bg-white">
      <div className="lp-container">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <span className="inline-block bg-lp-royal/10 text-lp-royal font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Entre em Contato
          </span>
          <h2 className="lp-heading max-w-3xl mx-auto">
            Vamos criar os uniformes 
            <span className="text-lp-royal"> perfeitos</span> para sua empresa
          </h2>
          <p className="lp-subheading max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato conosco e receba 
            um orçamento personalizado para seus uniformes corporativos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair font-bold text-2xl text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nossa equipe está pronta para atender você da melhor forma possível. 
                Escolha a forma de contato que preferir e fale conosco agora mesmo.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group">
                  {info.action ? (
                    <a
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : '_self'}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="lp-card block hover:bg-gradient-to-br hover:from-lp-royal/5 hover:to-lp-blue/5"
                    >
                      <div className="bg-lp-royal/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-lp-royal/20 transition-colors">
                        <info.icon className="h-6 w-6 text-lp-royal" />
                      </div>
                      
                      <h4 className="font-playfair font-bold text-lg text-gray-900 mb-2">
                        {info.title}
                      </h4>
                      
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </a>
                  ) : (
                    <div className="lp-card">
                      <div className="bg-lp-royal/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <info.icon className="h-6 w-6 text-lp-royal" />
                      </div>
                      
                      <h4 className="font-playfair font-bold text-lg text-gray-900 mb-2">
                        {info.title}
                      </h4>
                      
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mapa Placeholder */}
            <div className="bg-gradient-to-br from-lp-royal/10 to-lp-blue/10 rounded-2xl p-8 text-center">
              <MapPin className="h-12 w-12 text-lp-royal mx-auto mb-4" />
              <h4 className="font-playfair font-bold text-lg text-gray-900 mb-2">
                Nossa Localização
              </h4>
              <p className="text-gray-600 mb-4">
                Rua Jornalista Calil Simão, 291<br />
                Curitiba/PR - CEP: 81.935-304
              </p>
              <a
                href="https://maps.google.com/?q=Rua+Jornalista+Calil+Simão,+291,+Curitiba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lp-royal font-semibold hover:text-lp-dark transition-colors"
              >
                Ver no Google Maps
                <MapPin className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100">
            <h3 className="font-playfair font-bold text-2xl text-gray-900 mb-6">
              Solicite seu Orçamento
            </h3>
            <p className="text-gray-600 mb-8">
              Preencha o formulário abaixo e entraremos em contato para apresentar 
              a melhor proposta para seus uniformes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lp-royal focus:border-transparent transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lp-royal focus:border-transparent transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lp-royal focus:border-transparent transition-colors"
                    placeholder="(41) 99999-9999"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lp-royal focus:border-transparent transition-colors"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lp-royal focus:border-transparent transition-colors resize-none"
                  placeholder="Conte-nos sobre suas necessidades de uniformes: quantidade, tamanhos, cores, prazos, etc."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full lp-button-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
