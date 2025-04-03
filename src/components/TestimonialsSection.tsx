
import React from 'react';
import { Play } from "lucide-react";

const VideoTestimonial = ({ name, role, location }: {
  name: string;
  role: string;
  location: string;
}) => {
  return (
    <div className="luxury-card bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all duration-300 h-full flex flex-col">
      <div className="relative aspect-video w-full overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
          <div className="h-16 w-16 rounded-full bg-maraba-gold/90 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
            <Play className="h-6 w-6 text-black" fill="black" />
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop"
          alt={`Depoimento de ${name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
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
      location: "São Paulo"
    },
    {
      name: "Roberto Mendes",
      role: "Empresário",
      location: "Rio de Janeiro"
    },
    {
      name: "Carla Oliveira",
      role: "Líder de Comunidade",
      location: "Belo Horizonte"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-maraba-dark-purple to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop')] bg-cover bg-center opacity-5 z-0"></div>
      
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
              <VideoTestimonial
                name={testimonial.name}
                role={testimonial.role}
                location={testimonial.location}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
