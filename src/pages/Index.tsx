
import React from 'react';
import HeroSection from '@/components/HeroSection';
import VipRoomFeatures from '@/components/VipRoomFeatures';
import InstructorProfile from '@/components/InstructorProfile';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection backgroundImage="/lovable-uploads/ec3ba5bb-4f89-4d16-a35d-a31365547330.png" />
      <VipRoomFeatures />
      <InstructorProfile />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
