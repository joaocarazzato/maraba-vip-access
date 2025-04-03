
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Target, ArrowUp, Lightbulb, Brain, Heart } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
}) => {
  return (
    <Card className="border-maraba-purple/30 bg-white/5 backdrop-blur-sm hover:shadow-lg hover:shadow-maraba-purple/10 transition-all duration-300 h-full">
      <CardContent className="p-6 space-y-4">
        <div className="mb-4 text-maraba-light-purple">
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-semibold text-maraba-light-purple">{title}</h3>
        <p className="text-white/80">{description}</p>
      </CardContent>
    </Card>
  );
};

const BenefitItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start gap-3 animate-fade-in">
      <div className="mt-1 text-maraba-gold">
        <CheckCircle2 className="h-6 w-6" />
      </div>
      <p className="text-white/90 text-lg">{children}</p>
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
      title: "As doze camadas do "EU"",
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
    <section className="relative py-16 md:py-24 overflow-hidden bg-maraba-dark-purple">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop')] bg-cover bg-center opacity-5 z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            <span className="text-maraba-gold">🎯</span> O que você vai vivenciar neste encontro privado
          </h2>
          <p className="text-white/80 text-lg">
            Uma experiência transformadora que irá desbloquear seu próximo nível de crescimento pessoal e prosperidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
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
        
        <div className="relative py-12 px-4 md:px-8 bg-gradient-to-r from-maraba-purple/20 to-maraba-dark-purple/40 backdrop-blur-sm rounded-xl border border-maraba-purple/20 max-w-4xl mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-maraba-dark-purple px-6 py-2 rounded-full border border-maraba-gold/40">
            <h3 className="text-xl font-bold text-maraba-gold">Ao final da Sala VIP, você terá:</h3>
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
