import { Card, CardContent } from "./card";
import { Shield, Lock, BookOpen, Users, HeartHandshake } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Shield className="h-10 w-10 text-secondary" />,
      title: "Честность",
      description: "Мы предоставляем точную и проверенную информацию, основанную на фактах и исследованиях."
    },
    {
      icon: <Lock className="h-10 w-10 text-secondary" />,
      title: "Конфиденциальность",
      description: "Мы гарантируем конфиденциальность и безопасность всех наших пользователей."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-secondary" />,
      title: "Опыт",
      description: "Наши материалы и ресурсы подготовлены опытными специалистами в области помощи жертвам насилия."
    },
    {
      icon: <Users className="h-10 w-10 text-secondary" />,
      title: "Сотрудничество",
      description: "Мы верим в силу коллективной работы и обмена знаниями между специалистами."
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-secondary" />,
      title: "Поддержка",
      description: "Мы обеспечиваем постоянную поддержку для всех, кто стремится помогать жертвам насилия."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">О нас</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Наша миссия — создать безопасную и надежную платформу для специалистов, 
            которые помогают жертвам насилия. Мы объединяем знания, ресурсы и людей, 
            чтобы сделать эту помощь более эффективной.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.slice(0, 3).map((value, index) => (
            <Card key={index} className="border-2 border-muted hover:border-secondary/50 transition-colors animate-scale-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {values.slice(3, 5).map((value, index) => (
            <Card key={index + 3} className="border-2 border-muted hover:border-secondary/50 transition-colors animate-scale-in" style={{ animationDelay: `${0.1 * (index + 3)}s` }}>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;