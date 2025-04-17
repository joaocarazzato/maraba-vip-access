
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Lock, Calendar, Clock, DollarSign } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const HeroSection = () => {
  return (
    <section 
      className="py-20 md:py-28 relative"
      style={{
        backgroundImage: "url('/lovable-uploads/4188948e-6999-4ac7-8692-a27e626d45e5.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
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
          
          <div className="w-full lg:w-2/5">
            <Card className="bg-black/40 border-white/10 shadow-lg rounded-xl overflow-hidden relative backdrop-blur-md animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="p-8 space-y-6 relative z-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="h-0.5 w-6 bg-gradient-to-r from-maraba-gold to-maraba-light-gold rounded-full"></div>
                  <h3 className="text-center text-xl font-semibold text-white">Reserve sua vaga</h3>
                  <div className="h-0.5 w-6 bg-gradient-to-r from-maraba-light-gold to-maraba-gold rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-lg border border-white/10 transition-all duration-300 hover:border-maraba-gold/30 text-left w-full">
                        <Calendar className="text-maraba-gold h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <p className="text-white/60 text-sm uppercase tracking-wide">Data</p>
                          <p className="text-white text-lg font-medium">06 de Maio</p>
                        </div>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="bg-black/90 border-maraba-gold/20 text-white p-4">
                      <p className="text-sm">Segunda-feira, 22 de Abril de 2025</p>
                    </PopoverContent>
                  </Popover>
                  
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-lg border border-white/10 transition-all duration-300 hover:border-maraba-gold/30 text-left w-full">
                        <Clock className="text-maraba-gold h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <p className="text-white/60 text-sm uppercase tracking-wide">Horário</p>
                          <p className="text-white text-lg font-medium">20:00</p>
                        </div>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="bg-black/90 border-maraba-gold/20 text-white p-4">
                      <p className="text-sm">Início às 20:00 (horário de Brasília)</p>
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="mt-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 p-6 rounded-lg border border-white/10 transition-all duration-300 hover:border-maraba-gold/30 w-full">
                        <DollarSign className="text-maraba-gold h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                        <div className="text-center">
                          <p className="text-white/60 text-sm uppercase tracking-wide">Investimento</p>
                          <p className="text-white text-3xl font-semibold">R$ 97,00</p>
                        </div>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="bg-black/90 border-maraba-gold/20 text-white p-4">
                      <p className="text-sm">Pagamento único - Acesso imediato</p>
                    </PopoverContent>
                  </Popover>
                </div>

                <Button 
                  className="w-full py-6 mt-4 text-black font-bold tracking-wider rounded-lg group relative overflow-hidden"
                  onClick={() => window.open('https://chk.eduzz.com/D0RAJJ719Y', '_blank', 'noopener,noreferrer')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-maraba-gold to-maraba-light-gold"></div>
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
