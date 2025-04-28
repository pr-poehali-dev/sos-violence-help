import { Card, CardContent } from "./card";
import { Button } from "./button";
import { DollarSign, HandHeart } from "lucide-react";

const HelpSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground" id="help">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как помочь</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-primary-foreground/90">
            Ваша поддержка помогает нам расширять наши ресурсы и оказывать более эффективную помощь жертвам насилия.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Пожертвования */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm animate-fade-in">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-secondary/20 p-5 rounded-full mb-6">
                  <DollarSign className="h-12 w-12 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Пожертвовать</h3>
                <p className="mb-6">
                  Ваши пожертвования помогают нам создавать новые образовательные материалы, 
                  проводить тренинги для специалистов и расширять нашу базу ресурсов.
                </p>
                <ul className="mb-6 text-left">
                  <li className="flex items-start mb-2">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Финансирование исследований о методах помощи</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Создание новых учебных материалов</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Поддержка работы платформы и форума</span>
                  </li>
                </ul>
                <Button variant="secondary" size="lg" className="w-full">
                  Сделать пожертвование
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Волонтерство */}
          <Card className="bg-white/10 border-0 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-secondary/20 p-5 rounded-full mb-6">
                  <HandHeart className="h-12 w-12 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Волонтерство</h3>
                <p className="mb-6">
                  Станьте частью нашей команды волонтеров и внесите свой вклад в помощь 
                  жертвам насилия, используя свои навыки и опыт.
                </p>
                <ul className="mb-6 text-left">
                  <li className="flex items-start mb-2">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Участие в разработке материалов</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Модерация форума экспертов</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Помощь в организации мероприятий</span>
                  </li>
                </ul>
                <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white/10">
                  Стать волонтером
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;