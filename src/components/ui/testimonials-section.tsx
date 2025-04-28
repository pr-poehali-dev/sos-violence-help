import { Card, CardContent } from "./card";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Платформа SOS стала незаменимым ресурсом в моей работе психолога. Здесь я нахожу актуальные материалы и могу обсудить сложные случаи с коллегами.",
      author: "Марина Л.",
      role: "Клинический психолог",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      initials: "МЛ"
    },
    {
      quote: "Как юрист, работающий с жертвами домашнего насилия, я ценю точность и актуальность правовой информации на платформе. Это помогает мне быть более эффективным в своей работе.",
      author: "Алексей В.",
      role: "Юрист, НКО «Правовая помощь»",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      initials: "АВ"
    },
    {
      quote: "Ресурсы платформы помогли нашей организации разработать более эффективные протоколы помощи. Форум экспертов — это бесценное пространство для обмена опытом.",
      author: "Елена М.",
      role: "Директор центра помощи",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      initials: "ЕМ"
    }
  ];

  const partners = [
    { name: "Центр психологической поддержки", logo: "/placeholder.svg" },
    { name: "Фонд правовой помощи", logo: "/placeholder.svg" },
    { name: "Ассоциация психологов", logo: "/placeholder.svg" },
    { name: "Министерство социальной защиты", logo: "/placeholder.svg" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы специалистов</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Что говорят о нас профессионалы, которые ежедневно используют нашу платформу в своей работе.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-muted hover:border-secondary/50 transition-colors animate-scale-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="text-3xl text-primary mb-4">"</div>
                  <p className="text-muted-foreground mb-6 flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback className="bg-primary text-primary-foreground">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-16 max-w-4xl mx-auto" />

        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-4">Наши партнеры</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы сотрудничаем с ведущими организациями, чтобы обеспечить высокое качество наших ресурсов.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="text-center opacity-70 hover:opacity-100 transition-opacity">
              <img src={partner.logo} alt={partner.name} className="h-16 w-auto mb-2 mx-auto grayscale hover:grayscale-0 transition-all" />
              <p className="text-sm font-medium">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;