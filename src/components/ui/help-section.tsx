import { DollarSign, HandHeart } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

const HelpSection = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Как помочь</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Вы можете внести свой вклад в нашу миссию различными способами. 
            Каждый вклад имеет значение и помогает нам поддерживать работу платформы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <DollarSign size={20} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Пожертвовать</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-muted-foreground">
                Ваши пожертвования помогают нам развивать платформу, проводить обучающие 
                мероприятия и предоставлять качественные ресурсы специалистам.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-6">
                <Button variant="outline" className="hover:bg-primary/5">300₽</Button>
                <Button variant="outline" className="hover:bg-primary/5">500₽</Button>
                <Button variant="outline" className="hover:bg-primary/5">1000₽</Button>
              </div>
              <Button className="w-full" variant="secondary">
                Пожертвовать
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <HandHeart size={20} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Волонтерство</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-muted-foreground">
                Станьте частью нашей команды волонтеров. Мы предлагаем различные 
                возможности для участия в зависимости от ваших навыков и доступного времени.
              </p>
              <ul className="list-disc pl-5 mb-6 text-muted-foreground">
                <li>Модерация форума</li>
                <li>Перевод материалов</li>
                <li>Организация мероприятий</li>
              </ul>
              <Button className="w-full">
                Стать волонтером
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;