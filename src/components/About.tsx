
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo Textual */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-lp-royal/10 text-lp-royal font-semibold px-4 py-2 rounded-full text-sm mb-4">
                  Sobre a LP Confecções
                </span>
                <h2 className="lp-heading">
                  Tradição e inovação em 
                  <span className="text-lp-royal"> uniformes corporativos</span>
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
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
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-lp-royal/5 to-lp-blue/5 rounded-xl">
                <div className="font-playfair font-bold text-3xl text-lp-royal mb-2">100+</div>
                <div className="text-gray-600 font-medium">Clientes Satisfeitos</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-lp-royal/5 to-lp-blue/5 rounded-xl">
                <div className="font-playfair font-bold text-3xl text-lp-royal mb-2">10+</div>
                <div className="text-gray-600 font-medium">Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* Grid de Valores */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="lp-card group hover:bg-gradient-to-br hover:from-lp-royal/5 hover:to-lp-blue/5"
              >
                <div className="bg-lp-royal/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-lp-royal/20 transition-colors">
                  <value.icon className="h-7 w-7 text-lp-royal" />
                </div>
                
                <h3 className="font-playfair font-bold text-xl text-gray-900 mb-3">
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
