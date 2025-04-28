import { Card, CardContent } from "./card";
import { MessageCircle, Book, FileText, Building, Heart } from "lucide-react";
import { Button } from "./button";

const FeaturesSection = () => {
  const features = [
    {
      icon: <MessageCircle className="h-12 w-12 text-primary" />,
      title: "Форум экспертов",
      description: "Общайтесь с коллегами, делитесь знаниями и обсуждайте лучшие практики."
    },
    {
      icon: <Book className="h-12 w-12 text-primary" />,
      title: "Законодательная основа",
      description: "Будьте в курсе всех важных законов и правовых норм."
    },
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Профессиональные материалы",
      description: "Доступ к статьям, исследованиям и учебным пособиям."
    },
    {
      icon: <Building className="h-12 w-12 text-primary" />,
      title: "База данных НПО",
      description: "Найдите надежные организации, которые помогают жертвам насилия."
    },
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Присоединяйтесь к нам",
      description: "Помогите нам пожертвованием или станьте волонтером."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ключевые особенности</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Наша платформа предоставляет все необходимые инструменты для эффективной помощи жертвам насилия.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="bg-primary/5 p-5 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
          {features.slice(3, 5).map((feature, index) => (
            <div key={index + 3} className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: `${0.1 * (index + 3)}s` }}>
              <div className="bg-primary/5 p-5 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="secondary" size="lg">
            Исследовать все ресурсы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;