
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-black text-white/80">
      <div className="minimal-container">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center space-x-8">
            <a href="https://www.instagram.com/juniormarabaoficial" className="text-white/60 hover:text-maraba-gold transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          
          <Separator className="bg-white/10" />
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-maraba-gold transition-colors">
              Termos de uso
            </a>
            <span className="text-white/20">|</span>
            <a href="#" className="text-white/60 hover:text-maraba-gold transition-colors">
              Política de privacidade
            </a>
          </div>
          
          <p className="text-sm text-white/40">
            © {currentYear} Marabá Transformação • Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
