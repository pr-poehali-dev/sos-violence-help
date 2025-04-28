import { Card, CardContent } from "./card";
import { Button } from "./button";
import { FileText, Brain, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const ResourcesSection = () => {
  const resources = [
    {
      category: "laws",
      icon: <FileText className="h-10 w-10 text-secondary" />,
      title: "Законодательная база",
      items: [
        { title: "Законы о домашнем насилии", description: "Обзор основных правовых норм и механизмов защиты", link: "#" },
        { title: "Права жертв", description: "Подробное руководство по правам пострадавших от насилия", link: "#" },
        { title: "Юридическая помощь", description: "Как правильно оформить заявление и получить защиту", link: "#" }
      ]
    },
    {
      category: "psychology",
      icon: <Brain className="h-10 w-10 text-secondary" />,
      title: "Методы психологической помощи",
      items: [
        { title: "Травма-ориентированная терапия", description: "Эффективные методики работы с травмой", link: "#" },
        { title: "Кризисное вмешательство", description: "Протоколы помощи в острой ситуации", link: "#" },
        { title: "Групповая терапия", description: "Организация и проведение групп поддержки", link: "#" }
      ]
    },
    {
      category: "volunteer",
      icon: <Users className="h-10 w-10 text-secondary" />,
      title: "Как стать волонтером",
      items: [
        { title: "Требования к волонтерам", description: "Необходимые навыки и подготовка", link: "#" },
        { title: "Обучение", description: "Программы подготовки волонтеров для работы с жертвами насилия", link: "#" },
        { title: "Супервизия", description: "Поддержка и профилактика выгорания для волонтеров", link: "#" }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted" id="resources">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши ресурсы</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Доступ к профессиональным материалам, которые помогут вам эффективно поддерживать жертв насилия.
          </p>
        </div>

        <Tabs defaultValue="laws" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="laws" className="text-base">Законодательство</TabsTrigger>
            <TabsTrigger value="psychology" className="text-base">Психологическая помощь</TabsTrigger>
            <TabsTrigger value="volunteer" className="text-base">Волонтерство</TabsTrigger>
          </TabsList>

          {resources.map((resource) => (
            <TabsContent key={resource.category} value={resource.category} className="animate-fade-in">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-white p-4 rounded-full mr-4">
                  {resource.icon}
                </div>
                <h3 className="text-2xl font-bold">{resource.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resource.items.map((item, idx) => (
                  <Card key={idx} className="border-2 hover:border-secondary transition-all">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <Button variant="link" className="text-primary p-0">
                        Подробнее →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Показать все материалы
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ResourcesSection;