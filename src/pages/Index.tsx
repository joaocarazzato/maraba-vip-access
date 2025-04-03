
import React from 'react';
import HeroSection from '@/components/HeroSection';
import VipRoomFeatures from '@/components/VipRoomFeatures';
import InstructorProfile from '@/components/InstructorProfile';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-maraba-dark-purple">
      <HeroSection />
      <VipRoomFeatures />
      <InstructorProfile />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
