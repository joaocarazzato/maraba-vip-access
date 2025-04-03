
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowRight, Lock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop')] bg-cover bg-center opacity-10 z-[-1]"></div>
      
      <div className="minimal-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-3/5 space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-maraba-gold mb-4">
              <Lock className="h-4 w-4" />
              <p className="uppercase tracking-widest text-xs font-medium">Evento exclusivo</p>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              ENTRE PARA A <br /><span className="gold-shine">SALA VIP</span>
            </h1>
            
            <div className="gold-border">
              <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl pb-6">
                Aprenda a criar transformação real e duradoura em você e nas pessoas ao seu redor com uma nova visão sobre prosperidade.
              </p>
            </div>
            
            <p className="text-white/70 italic text-lg">
              Descubra por que algumas pessoas prosperam… e outras não — e desbloqueie o seu próximo nível.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
              <div className="flex flex-col items-center bg-white/5 backdrop-blur-sm p-4 rounded-sm">
                <div className="text-maraba-gold text-xl">📅</div>
                <p className="text-white/80 text-sm mt-2">Em breve</p>
              </div>
              <div className="flex flex-col items-center bg-white/5 backdrop-blur-sm p-4 rounded-sm">
                <div className="text-maraba-gold text-xl">⏰</div>
                <p className="text-white/80 text-sm mt-2">90 minutos</p>
              </div>
              <div className="flex flex-col items-center bg-white/5 backdrop-blur-sm p-4 rounded-sm">
                <div className="text-maraba-gold text-xl">🌐</div>
                <p className="text-white/80 text-sm mt-2">Ao vivo e online</p>
              </div>
              <div className="flex flex-col items-center bg-white/5 backdrop-blur-sm p-4 rounded-sm">
                <div className="text-maraba-gold text-xl">💰</div>
                <p className="text-white/80 text-sm mt-2">R$ 97,00</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <Card className="luxury-card bg-black/40 backdrop-blur-md border-white/10">
              <div className="p-8 space-y-6">
                <h3 className="text-center text-xl font-light text-white mb-8">Garanta sua vaga agora</h3>
                <form className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Seu nome completo" 
                      className="luxury-input"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Seu melhor e-mail" 
                      className="luxury-input"
                    />
                  </div>
                  <Button className="w-full bg-gradient-gold hover:opacity-90 text-black font-medium tracking-wider py-6 rounded-sm transition-all duration-300 shadow-gold group">
                    <span>GARANTIR MINHA VAGA</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
                <p className="text-white/50 text-xs text-center mt-6">
                  Vagas limitadas para este evento exclusivo.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
