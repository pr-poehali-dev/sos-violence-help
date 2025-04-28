import { MessagesSquare, Scale, FileText, Building2, Heart } from "lucide-react";
import { Button } from "./button";

const FeaturesSection = () => {
  const features = [
    {
      icon: <MessagesSquare className="h-12 w-12 text-secondary" />,
      title: "Форум экспертов",
      description: "Общайтесь с коллегами, делитесь знаниями и обсуждайте лучшие практики."
    },
    {
      icon: <Scale className="h-12 w-12 text-secondary" />,
      title: "Законодательная основа",
      description: "Будьте в курсе всех важных законов и правовых норм."
    },
    {
      icon: <FileText className="h-12 w-12 text-secondary" />,
      title: "Профессиональные материалы",
      description: "Доступ к статьям, исследованиям и учебным пособиям."
    },
    {
      icon: <Building2 className="h-12 w-12 text-secondary" />,
      title: "База данных НПО",
      description: "Найдите надежные организации, которые помогают жертвам насилия."
    },
    {
      icon: <Heart className="h-12 w-12 text-secondary" />,
      title: "Присоединяйтесь",
      description: "Помогите нам пожертвованием или станьте волонтером."
    }
  ];

  return (
    <section id="особенности" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Ключевые особенности</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Мы предоставляем комплексные инструменты и ресурсы для повышения эффективности 
            работы специалистов, помогающих жертвам насилия.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="mb-6 p-4 bg-primary/5 rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
          {features.slice(3, 5).map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="mb-6 p-4 bg-primary/5 rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-3">
            Присоединиться к сообществу
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;