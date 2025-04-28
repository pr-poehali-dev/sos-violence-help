import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";
import { Card, CardContent } from "./card";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import { QuoteIcon } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Благодаря ресурсам с этой платформы я смогла значительно повысить качество помощи, которую оказываю своим клиентам. Особенно ценны юридические материалы.",
      name: "Елена Михайлова",
      role: "Психолог, Центр кризисной помощи",
      avatar: "ЕМ"
    },
    {
      quote: "Форум стал для меня местом, где я могу обсудить сложные случаи с коллегами и получить профессиональную поддержку. Это бесценно в нашей работе.",
      name: "Александр Петров",
      role: "Социальный работник",
      avatar: "АП"
    },
    {
      quote: "Как юрист, я высоко ценю актуальность и полноту правовой информации на платформе. Это помогает мне оказывать более эффективную поддержку жертвам насилия.",
      name: "Мария Соколова",
      role: "Юрист, правозащитная организация",
      avatar: "МС"
    },
    {
      quote: "Волонтерская программа дала мне возможность применить свои навыки там, где они действительно нужны. Обучение было профессиональным и всесторонним.",
      name: "Дмитрий Волков",
      role: "Волонтер, психологическая поддержка",
      avatar: "ДВ"
    }
  ];

  return (
    <section id="отзывы" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Отзывы специалистов</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Узнайте, как наши ресурсы помогают специалистам улучшать качество помощи жертвам насилия.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-4">
                  <Card className="border-none shadow-md h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <QuoteIcon className="h-8 w-8 text-secondary mb-4" />
                      <p className="text-gray-700 mb-6 flex-1">"{testimonial.quote}"</p>
                      <div className="flex items-center mt-auto">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-primary text-white">
                            {testimonial.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="mr-2 static transform-none" />
              <CarouselNext className="ml-2 static transform-none" />
            </div>
          </Carousel>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col md:flex-row items-center justify-center p-6 bg-white rounded-lg shadow-md">
            <p className="text-lg font-semibold text-primary mr-0 md:mr-8 mb-4 md:mb-0">
              Готовы помогать вместе с нами?
            </p>
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-md font-medium">
              Присоединиться сейчас
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;