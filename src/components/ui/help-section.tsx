import { Button } from "./button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { Card, CardContent } from "./card";
import { Banknote, UserPlus, HandHeart, Lightbulb, PenTool } from "lucide-react";

const HelpSection = () => {
  return (
    <section id="как-помочь" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как помочь</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Ваша поддержка имеет огромное значение для нашей работы. 
            Есть несколько способов, которыми вы можете помочь нам помогать другим.
          </p>
        </div>

        <Tabs defaultValue="donate" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-primary/20 mb-8">
            <TabsTrigger 
              value="donate" 
              className="data-[state=active]:bg-secondary data-[state=active]:text-black py-3 text-lg"
            >
              Пожертвовать
            </TabsTrigger>
            <TabsTrigger 
              value="volunteer" 
              className="data-[state=active]:bg-secondary data-[state=active]:text-black py-3 text-lg"
            >
              Волонтерство
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="donate" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Пожертвования помогают" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Ваши пожертвования меняют жизни</h3>
                <p className="mb-6 opacity-90">
                  Каждое пожертвование помогает нам развивать ресурсы для специалистов, 
                  обеспечивать доступ к образовательным материалам и поддерживать работу форума.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Banknote className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <p>100% ваших средств идут на прямую помощь и развитие платформы</p>
                  </div>
                  <div className="flex items-start">
                    <HandHeart className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <p>Регулярные отчеты о том, как используются средства</p>
                  </div>
                  <div className="flex items-start">
                    <Lightbulb className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <p>Возможность выбрать конкретное направление для поддержки</p>
                  </div>
                </div>
                
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-3 w-full md:w-auto">
                  Сделать пожертвование
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="volunteer" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Волонтеры за работой" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Станьте волонтером</h3>
                <p className="mb-6 opacity-90">
                  Мы всегда ищем профессионалов, готовых поделиться своим опытом, 
                  временем и знаниями для поддержки нашей миссии.
                </p>
                
                <div className="space-y-6 mb-8">
                  <Card className="bg-primary/20 border-none">
                    <CardContent className="p-4 flex items-start">
                      <UserPlus className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Присоединитесь к команде</h4>
                        <p className="opacity-90 text-sm">Станьте частью сообщества экспертов, помогающих жертвам насилия</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-primary/20 border-none">
                    <CardContent className="p-4 flex items-start">
                      <PenTool className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Делитесь экспертизой</h4>
                        <p className="opacity-90 text-sm">Пишите статьи, проводите вебинары или консультируйте коллег</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-3 w-full md:w-auto">
                  Стать волонтером
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HelpSection;