import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-maraba-dark-purple z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621322800607-8c38375eef04?auto=format&fit=crop')] bg-cover bg-center opacity-10 z-[-1]"></div>
      
      <div className="minimal-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
            Pronto para entrar na <span className="gold-shine">Sala VIP</span>?
          </h2>
          
          <div className="luxury-card bg-black/50 backdrop-blur-lg p-12 space-y-8 animate-fade-in shadow-gold" style={{animationDelay: "0.2s"}}>
            <p className="text-xl text-white/90 font-light">
              As vagas são limitadas. Esse conteúdo não estará disponível publicamente.
            </p>
            
            <div className="flex flex-col space-y-8">
              <p className="text-white text-2xl font-light">
                Garanta seu acesso por <span className="text-maraba-gold font-bold text-3xl">R$ 97,00</span>
              </p>
              
              <Button 
                className="mx-auto bg-gradient-gold hover:opacity-90 text-black font-medium tracking-wider px-10 py-7 rounded-sm transition-all duration-300 shadow-gold group text-xl"
                onClick={() => window.open('https://chk.eduzz.com/D0RAJJ719Y', '_blank', 'noopener,noreferrer')}
              >
                QUERO ENTRAR NA SALA VIP
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <p className="text-white/50 text-sm pt-4 border-t border-white/10">
              Vagas extremamente limitadas • Garantia de satisfação de 7 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
