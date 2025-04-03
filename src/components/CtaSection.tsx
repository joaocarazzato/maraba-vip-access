
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-maraba-purple to-maraba-dark-purple opacity-80 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621322800607-8c38375eef04?auto=format&fit=crop')] bg-cover bg-center opacity-20 z-[-1]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white animate-fade-in">
            Pronto para entrar na <span className="gold-shine">Sala VIP</span>?
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20 space-y-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <p className="text-xl text-white/90">
              As vagas são limitadas. Esse conteúdo não estará disponível publicamente.
            </p>
            
            <div className="flex flex-col space-y-4">
              <p className="text-white text-xl">
                Garanta seu acesso por <span className="text-maraba-gold font-bold text-2xl">R$ 97,00</span> e prepare-se para a virada.
              </p>
              
              <Button className="mx-auto bg-gradient-gold hover:bg-maraba-gold text-maraba-dark-purple font-bold text-lg px-8 py-6 transition-all duration-300 hover:shadow-lg hover:shadow-maraba-gold/30 group">
                QUERO ENTRAR NA SALA VIP
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <p className="text-white/70 text-sm">
              Vagas extremamente limitadas • Garantia de satisfação de 7 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
