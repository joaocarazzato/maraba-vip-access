
import React from 'react';

const InstructorProfile = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop')] bg-cover bg-center opacity-5 z-0"></div>
      
      <div className="minimal-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-2/5 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-gold rounded-full blur-md opacity-50"></div>
              <div className="relative rounded-full overflow-hidden border border-maraba-gold aspect-square max-w-md mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop" 
                  alt="Júnior Marabá" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-3/5 space-y-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="inline-block px-4 py-1 bg-white/5 backdrop-blur-sm rounded-sm border border-white/10 text-white/70 font-medium text-xs uppercase tracking-widest">
              Conheça seu instrutor
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white gold-border pb-4">
              Júnior <span className="text-maraba-gold">Marabá</span>
            </h2>
            
            <div className="space-y-6 text-white/80">
              <p className="text-xl font-light leading-relaxed">
                Mentor de transformação pessoal, Marabá já ajudou milhares de pessoas a prosperarem em diferentes áreas da vida, incluindo atletas olímpicos, empresários e líderes de grandes comunidades.
              </p>
              <p className="text-xl font-light leading-relaxed">
                Com uma história real de superação – da roça na Bahia às maiores cidades do Brasil – ele criou um método único de desenvolvimento que une espiritualidade, neurociência, performance e sensibilidade humana.
              </p>
            </div>
            
            <div className="pt-8 flex flex-wrap gap-0.5">
              <div className="luxury-card bg-black/30 backdrop-blur-sm p-6 flex-1">
                <span className="block text-3xl font-bold text-maraba-gold">1000+</span>
                <span className="text-sm text-white/60 uppercase tracking-wider">Vidas transformadas</span>
              </div>
              <div className="luxury-card bg-black/30 backdrop-blur-sm p-6 flex-1">
                <span className="block text-3xl font-bold text-maraba-gold">10+</span>
                <span className="text-sm text-white/60 uppercase tracking-wider">Anos de experiência</span>
              </div>
              <div className="luxury-card bg-black/30 backdrop-blur-sm p-6 flex-1">
                <span className="block text-3xl font-bold text-maraba-gold">12</span>
                <span className="text-sm text-white/60 uppercase tracking-wider">Camadas do EU mapeadas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;
