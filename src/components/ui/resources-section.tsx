import { Button } from "./button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { 
  FileText, 
  Download, 
  Brain, 
  BookOpen, 
  UserPlus, 
  ClipboardList 
} from "lucide-react";

const ResourcesSection = () => {
  return (
    <section id="ресурсы" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Ресурсы</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Мы собрали и структурировали информацию, которая поможет вам более 
            эффективно оказывать помощь жертвам насилия.
          </p>
        </div>

        <Tabs defaultValue="laws" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 bg-muted">
            <TabsTrigger 
              value="laws" 
              className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 text-lg"
            >
              Законодательство
            </TabsTrigger>
            <TabsTrigger 
              value="psychology" 
              className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 text-lg"
            >
              Психологическая помощь
            </TabsTrigger>
            <TabsTrigger 
              value="volunteer" 
              className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 text-lg"
            >
              Волонтерство
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="laws" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Законодательная база</h3>
                <p className="mb-6 text-gray-700">
                  Ознакомьтесь с действующим законодательством в области защиты прав жертв насилия, 
                  правовыми механизмами и процедурами оказания помощи.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                    <FileText className="h-6 w-6 text-primary mr-3" />
                    <span className="flex-1">Уголовное законодательство</span>
                    <Button variant="ghost" size="sm" className="group-hover:bg-secondary group-hover:text-secondary-foreground">
                      <Download className="h-4 w-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                  
                  <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                    <FileText className="h-6 w-6 text-primary mr-3" />
                    <span className="flex-1">Защита детей от насилия</span>
                    <Button variant="ghost" size="sm" className="group-hover:bg-secondary group-hover:text-secondary-foreground">
                      <Download className="h-4 w-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                  
                  <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                    <FileText className="h-6 w-6 text-primary mr-3" />
                    <span className="flex-1">Домашнее насилие</span>
                    <Button variant="ghost" size="sm" className="group-hover:bg-secondary group-hover:text-secondary-foreground">
                      <Download className="h-4 w-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-primary">Руководство для специалистов</h4>
                <p className="mb-6 text-gray-700">
                  Полное руководство по правовым аспектам работы с жертвами насилия, включая:
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-secondary h-2 w-2 rounded-full mt-2 mr-3"></div>
                    <span>Алгоритмы действий при выявлении насилия</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary h-2 w-2 rounded-full mt-2 mr-3"></div>
                    <span>Процедуры обращения в правоохранительные органы</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary h-2 w-2 rounded-full mt-2 mr-3"></div>
                    <span>Образцы документов и заявлений</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary h-2 w-2 rounded-full mt-2 mr-3"></div>
                    <span>Контакты экстренных служб и организаций</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Скачать полное руководство
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="psychology" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Методы психологической помощи</h3>
                <p className="mb-6 text-gray-700">
                  Изучите проверенные подходы к психологической поддержке жертв насилия и научитесь 
                  применять их в своей практике.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <Brain className="h-6 w-6 text-secondary mr-3" />
                      <h4 className="font-semibold text-primary">Травма-ориентированная терапия</h4>
                    </div>
                    <p className="text-gray-600 text-sm ml-9">
                      Подходы, фокусирующиеся на преодолении психологических травм, связанных с насилием.
                    </p>
                  </div>
                  
                  <div className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <BookOpen className="h-6 w-6 text-secondary mr-3" />
                      <h4 className="font-semibold text-primary">Исследования и публикации</h4>
                    </div>
                    <p className="text-gray-600 text-sm ml-9">
                      Научные статьи и исследования о воздействии насилия и эффективных методах помощи.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg flex flex-col h-full">
                <h4 className="text-xl font-semibold mb-4 text-primary">Образовательные материалы</h4>
                <p className="mb-6 text-gray-700">
                  Доступ к вебинарам, курсам и учебным материалам по психологической поддержке:
                </p>
                
                <div className="flex-1 space-y-4 mb-6">
                  <div className="bg-white p-4 rounded-md shadow-sm flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium text-primary">Основы кризисного консультирования</h5>
                      <p className="text-sm text-gray-600">Курс из 5 уроков с практическими упражнениями</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-md shadow-sm flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium text-primary">Работа с ПТСР у жертв насилия</h5>
                      <p className="text-sm text-gray-600">Интерактивный вебинар с сертификацией</p>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">
                  Получить доступ к материалам
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="volunteer" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Как стать волонтером</h3>
                <p className="mb-6 text-gray-700">
                  Пошаговое руководство для тех, кто хочет присоединиться к команде волонтеров 
                  и помогать жертвам насилия.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Заполните анкету</h4>
                      <p className="text-gray-600 text-sm">
                        Расскажите о себе, своем опыте и навыках, которыми вы готовы делиться.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Пройдите обучение</h4>
                      <p className="text-gray-600 text-sm">
                        Участвуйте в ориентационной программе для новых волонтеров.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Начните помогать</h4>
                      <p className="text-gray-600 text-sm">
                        Выберите направление работы, соответствующее вашим навыкам и интересам.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary text-white p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <UserPlus className="h-8 w-8 text-secondary mr-4" />
                  <h4 className="text-xl font-semibold">Требования к волонтерам</h4>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <ClipboardList className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                    <span>Профессиональное образование или опыт в соответствующей области</span>
                  </li>
                  <li className="flex items-start">
                    <ClipboardList className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                    <span>Возможность уделять не менее 4 часов в неделю волонтерской работе</span>
                  </li>
                  <li className="flex items-start">
                    <ClipboardList className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                    <span>Соблюдение конфиденциальности и этических принципов</span>
                  </li>
                  <li className="flex items-start">
                    <ClipboardList className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                    <span>Желание развиваться и учиться новому</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Подать заявку на волонтерство
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResourcesSection;