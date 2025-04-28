import { Button } from "./button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
      {/* Background overlay with image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&q=80&w=1920&h=1080&fit=crop"
          alt="Фоновое изображение" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            SOS Жертвы Насилия: <span className="text-secondary">Центр ресурсов для специалистов</span>
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed mb-8 text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Мы помогаем специалистам поддерживать жертв насилия, предоставляя знания, ресурсы и возможность объединиться.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button variant="secondary" size="lg" className="font-semibold">
              Присоединиться к форуму
            </Button>
            <Button variant="outline" size="lg" className="font-semibold text-white border-white hover:bg-white/10">
              Узнать больше <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Stylistic highlight - hand reaching up */}
      <div className="hidden lg:block absolute right-0 bottom-0 translate-y-1/4 translate-x-1/4 z-0 opacity-70">
        <img 
          src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&q=80&w=800&h=1000&fit=crop" 
          alt="Рука, просящая о помощи" 
          className="w-96 h-auto object-cover mix-blend-overlay"
        />
      </div>
    </section>
  );
};

export default HeroSection;