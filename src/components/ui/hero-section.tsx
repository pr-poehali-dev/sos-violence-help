import { Button } from "./button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Эффект градиента и наложения для изображения */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80"></div>
      
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1920&auto=format')" }}
      ></div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            SOS Жертвы Насилия: Центр ресурсов для специалистов
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-primary-foreground/90">
            Мы помогаем специалистам поддерживать жертв насилия, предоставляя знания, 
            ресурсы и возможность объединиться.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="font-semibold">
              Присоединиться к нам
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;