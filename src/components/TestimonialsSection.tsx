
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialCard = ({ name, role, location, content }: {
  name: string;
  role: string;
  location: string;
  content: string;
}) => {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:shadow-lg hover:shadow-maraba-purple/10 transition-all duration-300 h-full">
      <CardContent className="p-6 space-y-4 relative">
        <div className="absolute top-4 right-4 text-maraba-gold opacity-40">
          <Quote className="h-12 w-12" />
        </div>
        <p className="text-white/80 italic relative z-10">"{content}"</p>
        <div className="pt-4 border-t border-white/10">
          <h4 className="font-semibold text-maraba-light-purple">{name}</h4>
          <p className="text-white/60 text-sm">{role} • {location}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana Luiza Santos",
      role: "CEO, TechStart",
      location: "São Paulo",
      content: "A Sala VIP com Marabá foi um divisor de águas na minha jornada empresarial. Descobri bloqueios que nem sabia que tinha e agora estou operando em um novo nível de clareza."
    },
    {
      name: "Roberto Mendes",
      role: "Empresário",
      location: "Rio de Janeiro",
      content: "Depois de 15 anos empreendendo, achei que já sabia tudo. A visão do Marabá sobre as camadas do EU me mostrou exatamente o que estava faltando para o próximo salto."
    },
    {
      name: "Carla Oliveira",
      role: "Líder de Comunidade",
      location: "Belo Horizonte",
      content: "A forma como Marabá conecta espiritualidade e resultados tangíveis é impressionante. Não é apenas teoria, são ferramentas práticas que funcionam."
    },
    {
      name: "Paulo Ribeiro",
      role: "Atleta Profissional",
      location: "Curitiba",
      content: "Encontrei o equilíbrio que procurava entre performance e propósito. O mapa das 12 camadas me deu uma visão clara do meu desenvolvimento pessoal."
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black to-maraba-dark-purple relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop')] bg-cover bg-center opacity-5 z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Depoimentos de quem já vivenciou esse conteúdo <span className="text-maraba-gold">transformador</span>
          </h2>
          <p className="text-white/80 text-lg">
            Histórias reais de pessoas que desbloquearam seu próximo nível
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                location={testimonial.location}
                content={testimonial.content}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
