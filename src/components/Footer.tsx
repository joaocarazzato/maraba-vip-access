
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-maraba-dark-purple text-white/80">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-maraba-gold transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-maraba-gold transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-maraba-gold transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-maraba-gold transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          
          <Separator className="bg-white/10" />
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="hover:text-maraba-gold transition-colors">
              📌 Termos de uso
            </a>
            <span>|</span>
            <a href="#" className="hover:text-maraba-gold transition-colors">
              Política de privacidade
            </a>
          </div>
          
          <p className="text-sm text-white/60">
            © {currentYear} Marabá Transformação • Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
