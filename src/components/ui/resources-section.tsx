import { FileText, Brain, Users } from "lucide-react";
import { Button } from "./button";

const ResourcesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ресурсы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы собрали ценные материалы, которые помогут вам в работе с жертвами насилия.
            Все ресурсы регулярно обновляются и проверяются экспертами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ResourceCard 
            icon={<FileText size={24} />}
            title="Законы и нормативные акты"
            description="Актуальная база законов, разделенная по темам, с удобными PDF-руководствами для скачивания."
            buttonText="Изучить законы"
          />
          
          <ResourceCard 
            icon={<Brain size={24} />}
            title="Методы психологической помощи"
            description="Доказанные методы, исследования и лучшие практики психологической поддержки жертв насилия."
            buttonText="Методические материалы"
          />
          
          <ResourceCard 
            icon={<Users size={24} />}
            title="Как стать волонтером"
            description="Пошаговое руководство, требования и рекомендации для тех, кто хочет помогать жертвам насилия."
            buttonText="Узнать больше"
          />
        </div>
      </div>
    </section>
  );
};

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

const ResourceCard = ({ icon, title, description, buttonText }: ResourceCardProps) => {
  return (
    <div className="bg-muted rounded-lg p-6 flex flex-col h-full">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
      <Button variant="outline" className="mt-auto">
        {buttonText}
      </Button>
    </div>
  );
};

export default ResourcesSection;