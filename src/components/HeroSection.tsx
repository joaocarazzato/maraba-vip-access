
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Lock, Calendar, Clock, DollarSign } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('@/assets/junior_maraba_white.jpg')] bg-cover bg-center opacity-10 z-[-1]"></div>
      
      <div className="minimal-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-3/5 space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-maraba-gold mb-4">
              <Lock className="h-4 w-4" />
              <p className="uppercase tracking-widest text-xs font-medium">Evento exclusivo</p>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Por que algumas pessoas prosperam... <br /><span className="gold-shine">e outras não</span>?
            </h1>
            
            <div className="gold-border">
              <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl pb-6">
                Aprenda a criar transformação real e duradoura em você e nas pessoas ao seu redor com uma nova visão sobre prosperidade.
              </p>
            </div>
            
            <p className="text-white/70 italic text-lg">
              Entre para a sala VIP — e desbloqueie o seu próximo nível.
            </p>
          </div>
          
          <div className="w-full lg:w-2/5 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <Card className="relative luxury-card backdrop-blur-xl border-white/10 shadow-2xl overflow-hidden">
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="p-8 space-y-8 relative z-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="h-1 w-8 bg-gradient-gold rounded-full"></div>
                  <h3 className="text-center text-2xl font-semibold text-white">Reserve sua vaga</h3>
                  <div className="h-1 w-8 bg-gradient-gold rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group flex items-center gap-3 bg-black/20 hover:bg-black/30 p-6 rounded-lg border border-white/5 transition-all duration-300 hover:border-maraba-gold/50">
                    <Calendar className="text-maraba-gold h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-white/60 text-sm uppercase tracking-wide">Data</p>
                      <p className="text-white text-lg font-medium">22 de Abril</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-center gap-3 bg-black/20 hover:bg-black/30 p-6 rounded-lg border border-white/5 transition-all duration-300 hover:border-maraba-gold/50">
                    <Clock className="text-maraba-gold h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-white/60 text-sm uppercase tracking-wide">Horário</p>
                      <p className="text-white text-lg font-medium">20:00</p>
                    </div>
                  </div>
                </div>

                <div className="group flex items-center justify-center gap-3 bg-black/20 hover:bg-black/30 p-8 rounded-lg border border-white/5 transition-all duration-300 hover:border-maraba-gold/50">
                  <DollarSign className="text-maraba-gold h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-center">
                    <p className="text-white/60 text-sm uppercase tracking-wide">Investimento</p>
                    <p className="text-white text-3xl font-semibold">R$ 97,00</p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-gold hover:opacity-90 text-black font-bold tracking-wider py-7 rounded-lg transition-all duration-300 shadow-xl group text-lg relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    GARANTIR MINHA VAGA
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                </Button>
                
                <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
                  <Lock className="h-4 w-4" />
                  <p>Vagas limitadas para este evento exclusivo</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
