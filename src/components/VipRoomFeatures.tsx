
import React from 'react';
import { Target, Lightbulb, ArrowUp, Brain, Heart } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
}) => {
  return (
    <div className="luxury-card bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 p-8 h-full">
      <div className="mb-6 text-maraba-gold">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-medium text-white mb-4 gold-border pb-4">{title}</h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </div>
  );
};

const BenefitItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start gap-4 animate-fade-in py-3 border-b border-white/10">
      <div className="mt-1 text-maraba-gold">
        <div className="h-6 w-6 rounded-full border border-maraba-gold flex items-center justify-center">✓</div>
      </div>
      <p className="text-white/90 text-lg font-light">{children}</p>
    </div>
  );
};

const VipRoomFeatures = () => {
  const features = [
    {
      icon: Target,
      title: "Por que umas pessoas prosperam e outras não?",
      description: "Entenda como sua mentalidade, suas crenças e o ambiente em que você vive determinam seus resultados – e como mudar isso."
    },
    {
      icon: Lightbulb,
      title: "Como identificar e romper com os ciclos de autossabotagem",
      description: "Você pode estar se esforçando, mas rodando em círculos. Descubra como reencontrar o sentido da sua jornada e alinhar-se com seu propósito real."
    },
    {
      icon: ArrowUp,
      title: "As doze camadas do 'EU'",
      description: "Um mapa que mostra o nível de desenvolvimento pessoal em que você está e o que precisa ser feito para subir de nível."
    },
    {
      icon: Brain,
      title: "Equilíbrio, clareza e poder pessoal",
      description: "Prosperidade sem vazio existencial: como alinhar dinheiro, missão e espiritualidade para uma vida que realmente vale a pena."
    },
    {
      icon: Heart,
      title: "Corpo, mente e espírito",
      description: "Alta performance sem burnout: descubra como integrar todas as dimensões do seu ser para um sucesso sustentável."
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-maraba-dark-purple">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/dcf79be8-9b44-42a8-a570-3c2dd13a9dca.png')] bg-cover bg-center opacity-20 z-0"></div>
      
      <div className="minimal-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1 bg-white/5 backdrop-blur-sm rounded-sm border border-white/10 text-maraba-gold font-medium text-xs uppercase tracking-widest mb-6">
            O que você vai vivenciar
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            O conteúdo da <span className="text-maraba-gold">Sala VIP</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
              <FeatureCard 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            </div>
          ))}
        </div>
        
        <div className="relative py-16 px-8 bg-black/30 backdrop-blur-sm max-w-4xl mx-auto mt-24 luxury-card">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-black px-8 py-3 border border-white/10 rounded-sm whitespace-nowrap">
              <h3 className="text-xl font-medium text-maraba-gold">Ao final da Sala VIP, você terá:</h3>
            </div>
          </div>
          
          <div className="space-y-4 mt-8">
            <BenefitItem>
              Clareza sobre o que tem travado sua prosperidade até aqui.
            </BenefitItem>
            <BenefitItem>
              Um mapa prático para evoluir pessoal, profissional e espiritualmente.
            </BenefitItem>
            <BenefitItem>
              Ferramentas práticas para aplicar no seu dia a dia.
            </BenefitItem>
            <BenefitItem>
              Acesso à visão de mundo que grandes empresários estão buscando.
            </BenefitItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VipRoomFeatures;
