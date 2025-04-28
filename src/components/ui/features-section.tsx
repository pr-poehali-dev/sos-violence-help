import { 
  MessageSquare, 
  Scale, 
  Book, 
  Building, 
  Heart 
} from "lucide-react";
import { Button } from "./button";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ключевые особенности</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы предоставляем широкий спектр услуг и ресурсов для помощи специалистам,
            работающим с жертвами насилия.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <FeatureCard 
            icon={<MessageSquare size={24} />}
            title="Форум экспертов"
            description="Общайтесь с коллегами, делитесь знаниями и обсуждайте лучшие практики в безопасном пространстве."
          />
          
          <FeatureCard 
            icon={<Scale size={24} />}
            title="Законодательная основа"
            description="Будьте в курсе всех важных законов и правовых норм, защищающих права жертв насилия."
          />
          
          <FeatureCard 
            icon={<Book size={24} />}
            title="Профессиональные материалы"
            description="Доступ к статьям, исследованиям и учебным пособиям от ведущих экспертов в области."
          />
          
          <FeatureCard 
            icon={<Building size={24} />}
            title="База данных НПО"
            description="Найдите надежные организации, которые помогают жертвам насилия в вашем регионе."
          />
          
          <FeatureCard 
            icon={<Heart size={24} />}
            title="Присоединяйтесь"
            description="Помогите нам пожертвованием или станьте волонтером нашей организации."
            hasButton
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  hasButton?: boolean;
}

const FeatureCard = ({ icon, title, description, hasButton }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-start">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      {hasButton && (
        <Button variant="outline" className="mt-2">
          Узнать больше
        </Button>
      )}
    </div>
  );
};

export default FeaturesSection;