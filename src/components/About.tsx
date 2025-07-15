
import React from 'react';
import { Heart, Target, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Paixão pelo que fazemos',
      description: 'Nossa empresa nasceu do sonho de criar roupas que combinem estilo e conforto para o dia a dia profissional.'
    },
    {
      icon: Target,
      title: 'Foco na qualidade',
      description: 'Cuidamos de cada detalhe, desde a escolha dos tecidos até o acabamento final, garantindo durabilidade.'
    },
    {
      icon: Award,
      title: 'Experiência comprovada',
      description: 'Anos de experiência no setor nos permitem entregar uniformes que atendem às necessidades específicas.'
    },
    {
      icon: Users,
      title: 'Compromisso com você',
      description: 'Nossa missão é criar uniformes que te ajudem a se sentir bem e ser mais produtivo no seu dia a dia.'
    }
  ];

  return (
    <section id="sobre" className="lp-section bg-white">
      <div className="lp-container">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Conteúdo Textual */}
          <div className="responsive-spacing">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <span className="inline-block bg-lp-royal/10 text-lp-royal font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
                  Sobre a LP Confecções
                </span>
                <h2 className="lp-heading">
                  Tradição e inovação em 
                  <span className="text-lp-royal"> uniformes corporativos</span>
                </h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                <p>
                  A nossa empresa de confecção nasceu do sonho de criar roupas que combinem 
                  estilo e conforto. Com anos de experiência no setor, cuidamos de cada detalhe, 
                  desde a escolha dos tecidos até o acabamento final.
                </p>
                
                <p>
                  Isso garante que nossas roupas sejam duráveis e confortáveis. Nossa missão é 
                  criar uniformes que não apenas sejam confortáveis, mas também te ajudem a se 
                  sentir bem e a ser mais produtivo no seu dia a dia.
                </p>
                
                <p className="font-semibold text-lp-royal">
                  Afinal, são os uniformes que acabamos usando na maior parte do nosso dia. 
                  Conte conosco para criar uniformes que atendam às suas necessidades!
                </p>
              </div>
            </div>

            {/* Estatísticas */}
            <div className="responsive-grid-2">
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-lp-royal/5 to-lp-blue/5 rounded-xl">
                <div className="font-playfair font-bold text-2xl sm:text-3xl text-lp-royal mb-1 sm:mb-2">100+</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">Clientes Satisfeitos</div>
              </div>
              
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-lp-royal/5 to-lp-blue/5 rounded-xl">
                <div className="font-playfair font-bold text-2xl sm:text-3xl text-lp-royal mb-1 sm:mb-2">10+</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* Grid de Valores */}
          <div className="responsive-grid-2">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="lp-card group hover:bg-gradient-to-br hover:from-lp-royal/5 hover:to-lp-blue/5"
              >
                <div className="bg-lp-royal/10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-lp-royal/20 transition-colors">
                  <value.icon className="h-6 w-6 sm:h-7 sm:w-7 text-lp-royal" />
                </div>
                
                <h3 className="font-playfair font-bold text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
