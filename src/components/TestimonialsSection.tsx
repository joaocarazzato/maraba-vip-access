
import React from 'react';
import { Quote } from "lucide-react";

const TestimonialCard = ({ name, role, location, content }: {
  name: string;
  role: string;
  location: string;
  content: string;
}) => {
  return (
    <div className="luxury-card bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all duration-300 p-8 h-full">
      <div className="text-maraba-gold opacity-40 mb-6">
        <Quote className="h-8 w-8" />
      </div>
      <p className="text-white/80 italic leading-relaxed mb-8">"{content}"</p>
      <div className="pt-6 border-t border-white/10">
        <h4 className="font-medium text-white text-lg">{name}</h4>
        <p className="text-white/60 text-sm">{role} • {location}</p>
      </div>
    </div>
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
    <section className="py-20 md:py-28 bg-gradient-to-b from-maraba-dark-purple to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop')] bg-cover bg-center opacity-5 z-0"></div>
      
      <div className="minimal-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1 bg-white/5 backdrop-blur-sm rounded-sm border border-white/10 text-white/70 font-medium text-xs uppercase tracking-widest mb-6">
            Resultados reais
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            O que as pessoas estão <span className="text-maraba-gold">dizendo</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
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
