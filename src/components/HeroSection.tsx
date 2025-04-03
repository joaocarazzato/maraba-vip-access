
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Lock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-maraba-dark-purple to-black opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop')] bg-cover bg-center opacity-20 z-[-1]"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in">
            <div className="flex items-center gap-2 text-maraba-light-purple">
              <Lock className="h-5 w-5" />
              <p className="font-semibold">Uma masterclass para líderes, empreendedores e buscadores de propósito.</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              ENTRE PARA A <span className="gold-shine">SALA VIP</span> COM MARABÁ
            </h1>
            
            <p className="text-lg md:text-xl text-white/90">
              Aprenda a criar transformação real e duradoura em você e nas pessoas ao seu redor com uma nova visão sobre prosperidade.
            </p>
            
            <p className="text-white/80 italic text-lg">
              Descubra por que algumas pessoas prosperam… e outras não — e desbloqueie o seu próximo nível.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <div className="bg-maraba-purple rounded-full w-6 h-6 flex items-center justify-center text-white">✓</div>
                <p className="text-white">Reserve seu lugar</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-maraba-purple rounded-full w-6 h-6 flex items-center justify-center text-white">📅</div>
                <p className="text-white">Data: Em breve</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-maraba-purple rounded-full w-6 h-6 flex items-center justify-center text-white">⏰</div>
                <p className="text-white">Duração: Cerca de 90 minutos</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-maraba-purple rounded-full w-6 h-6 flex items-center justify-center text-white">🌐</div>
                <p className="text-white">Ao vivo e online</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-maraba-purple rounded-full w-6 h-6 flex items-center justify-center text-white">💰</div>
                <p className="text-white">Investimento: R$ 97,00</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-center text-2xl font-semibold text-white mb-6">Garanta sua vaga agora</h3>
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Seu nome completo" 
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Seu melhor e-mail" 
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <Button className="w-full bg-gradient-gold hover:bg-maraba-gold text-maraba-dark-purple font-bold transition-all duration-300 hover:shadow-lg hover:shadow-maraba-gold/20">
                    GARANTIR MINHA VAGA
                  </Button>
                </form>
                <p className="text-white/70 text-sm text-center mt-4">
                  Vagas limitadas para este evento exclusivo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
