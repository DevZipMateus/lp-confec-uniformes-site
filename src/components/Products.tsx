import React from 'react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Eye } from 'lucide-react';

const Products = () => {
  const handleWhatsAppClick = (productName: string) => {
    const phoneNumber = '5541995668454';
    const message = `Olá! Gostaria de saber o preço do produto: ${productName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const products = [
    {
      id: 1,
      name: 'Blusas de moleton com capuz',
      image: '/lovable-uploads/0e0ae92fd979b3444734a78915c9253e.jpg',
    },
    {
      id: 2,
      name: 'Blusas de moleton sem capuz',
      image: '/lovable-uploads/23f64cc4dcf825d3313f48f5988ad76a.jpg',
    },
    {
      id: 3,
      name: 'Calças de moleton',
      image: '/lovable-uploads/3642a917d5de91def4d94c33481f6435.jpg',
    },
    {
      id: 4,
      name: 'Blusas de moleton sem capuz',
      image: '/lovable-uploads/39b9de3e4b6bfe97095658b8fed779ab.jpg',
    },
    {
      id: 5,
      name: 'Uniforme escolar',
      image: '/lovable-uploads/3ca07a4f3886ea792bd66ff7ec3aae7b.jpg',
    },
    {
      id: 6,
      name: 'Camisas polo',
      image: '/lovable-uploads/597ca98e9a2b11fe9831391c28a09acb.jpg',
    },
    {
      id: 7,
      name: 'Camisas polo',
      image: '/lovable-uploads/5d3505b49f7a8adac61508c45a81e5dc.jpg',
    },
    {
      id: 8,
      name: 'Camisa lisa',
      image: '/lovable-uploads/710f236a0faf8ebcc88cac28223445e4.jpg',
    },
    {
      id: 9,
      name: 'Moletom sem capuz',
      image: '/lovable-uploads/72269d388c765c0a4673bf6985e2131a.jpg',
    },
    {
      id: 10,
      name: 'Calças moleton',
      image: '/lovable-uploads/7fb1c2bd2cd0dc16041fa687cf82ba62.jpg',
    },
    {
      id: 11,
      name: 'Camisas lisas',
      image: '/lovable-uploads/84741a7171e73b93547d34143d09f1a7.jpg',
    },
    {
      id: 12,
      name: 'Moletons com capuz',
      image: '/lovable-uploads/88bf48c8102520c89917a0b894070b43.jpg',
    }
  ];

  return (
    <section id="produtos" className="lp-section bg-gray-50">
      <div className="lp-container">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="lp-heading">Nossos Produtos</h2>
          <p className="lp-subheading max-w-3xl mx-auto mobile-contrast">
            Confira nossa linha completa de uniformes e produtos personalizados, 
            desenvolvidos com qualidade superior e design moderno para atender 
            todas as necessidades da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="lp-image-responsive group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-2 sm:p-3 md:p-4">
                <h3 className="font-inter font-semibold text-gray-900 text-center text-xs sm:text-sm md:text-base leading-tight mobile-contrast">
                  {product.name}
                </h3>
              </CardContent>
              <CardFooter className="p-2 sm:p-3 md:p-4 pt-0">
                <Button
                  onClick={() => handleWhatsAppClick(product.name)}
                  className="w-full lp-button-primary flex items-center justify-center gap-1 sm:gap-2 text-xs mobile-button"
                >
                  <Eye size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">Ver Preço</span>
                  <span className="sm:hidden">Preço</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8 md:mt-12">
          <p className="text-gray-600 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base mobile-contrast">
            Não encontrou o que procura? Entre em contato conosco para produtos personalizados!
          </p>
          <Button
            onClick={() => handleWhatsAppClick('Produto Personalizado')}
            variant="outline"
            className="lp-button-secondary mobile-button"
          >
            <span className="hidden sm:inline">Solicitar Produto Personalizado</span>
            <span className="sm:hidden">Produto Personalizado</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
