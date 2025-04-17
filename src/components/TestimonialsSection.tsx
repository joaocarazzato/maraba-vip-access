
import React from 'react';
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import JuniorMarabaWhite from '@/assets/junior_maraba_white.jpg';
import JuniorMarabaColor from '@/assets/junior_maraba_color.jpg';

const VideoTestimonial = ({ videoId, thumbnail }: { videoId?: string, thumbnail: string }) => {
  const [showVideo, setShowVideo] = React.useState(false);

  return (
    <div className="luxury-card bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all duration-300 h-full">
      <AspectRatio ratio={4/5} className="w-full overflow-hidden group cursor-pointer">
        {!showVideo ? (
          <>
            <div 
              className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300 z-10"
              onClick={() => videoId && setShowVideo(true)}
            >
              <div className="h-16 w-16 rounded-full bg-maraba-gold/90 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <Play className="h-6 w-6 text-black" fill="black" />
              </div>
            </div>
            <img 
              src={thumbnail}
              alt="Depoimento em vídeo" 
              className="w-full h-full object-cover"
            />
          </>
        ) : (
          <iframe
            className="w-full h-full absolute inset-0"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </AspectRatio>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      videoId: "vkEoOK5WOlg",
      thumbnail: "https://img.youtube.com/vi/vkEoOK5WOlg/maxresdefault.jpg"
    },
    {
      videoId: "URjNc0i6XqU",
      thumbnail: "https://img.youtube.com/vi/URjNc0i6XqU/maxresdefault.jpg"
    },
    {
      videoId: "mp932C6QW_8",
      thumbnail: "https://img.youtube.com/vi/mp932C6QW_8/maxresdefault.jpg"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-maraba-dark-purple to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('@/assets/junior_maraba_white.jpg')] bg-cover bg-center opacity-5 z-0"></div>
      
      <div className="minimal-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1 bg-white/5 backdrop-blur-sm rounded-sm border border-white/10 text-white/70 font-medium text-xs uppercase tracking-widest mb-6">
            Resultados reais
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Gigantes <span className="text-maraba-gold">transformados</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
              <VideoTestimonial thumbnail={testimonial.thumbnail} videoId={testimonial.videoId} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
