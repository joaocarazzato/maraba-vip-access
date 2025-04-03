
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const InstructorProfile = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-maraba-dark-purple to-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop')] bg-cover bg-center opacity-10 z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-2/5 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-gold rounded-full blur-md opacity-70"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-maraba-gold aspect-square max-w-md mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop" 
                  alt="Júnior Marabá" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-3/5 space-y-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="inline-block px-4 py-1 bg-maraba-purple/20 backdrop-blur-sm rounded-full border border-maraba-purple/40 text-maraba-light-purple font-semibold">
              Conheça seu instrutor
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Júnior <span className="gold-shine">Marabá</span>
            </h2>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6 text-white/90 space-y-4">
                <p className="text-lg">
                  Mentor de transformação pessoal, Marabá já ajudou milhares de pessoas a prosperarem em diferentes áreas da vida, incluindo atletas olímpicos, empresários e líderes de grandes comunidades.
                </p>
                <p className="text-lg">
                  Com uma história real de superação – da roça na Bahia às maiores cidades do Brasil – ele criou um método único de desenvolvimento que une espiritualidade, neurociência, performance e sensibilidade humana.
                </p>
              </CardContent>
            </Card>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <div className="bg-maraba-purple/20 backdrop-blur-sm rounded-lg border border-maraba-purple/30 px-4 py-2 text-white">
                <span className="block text-2xl font-bold">1000+</span>
                <span className="text-sm text-white/70">Vidas transformadas</span>
              </div>
              <div className="bg-maraba-purple/20 backdrop-blur-sm rounded-lg border border-maraba-purple/30 px-4 py-2 text-white">
                <span className="block text-2xl font-bold">10+</span>
                <span className="text-sm text-white/70">Anos de experiência</span>
              </div>
              <div className="bg-maraba-purple/20 backdrop-blur-sm rounded-lg border border-maraba-purple/30 px-4 py-2 text-white">
                <span className="block text-2xl font-bold">12</span>
                <span className="text-sm text-white/70">Camadas do EU mapeadas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;
