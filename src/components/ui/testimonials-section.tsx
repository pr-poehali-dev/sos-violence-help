import { Card, CardContent } from "./card";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Отзывы специалистов</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Что говорят о нашей платформе специалисты, которые уже пользуются нашими ресурсами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <TestimonialCard
            name="Елена Смирнова"
            role="Психолог кризисного центра"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&auto=format&q=60"
            quote="Ресурсы этой платформы стали для меня настоящим спасением в работе. Здесь я нашла актуальные методики и поддержку коллег."
          />

          <TestimonialCard
            name="Михаил Петров"
            role="Юрист правозащитной организации"
            image="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&auto=format&q=60"
            quote="Благодаря форуму и базе законов я всегда в курсе изменений в законодательстве и могу эффективнее помогать своим клиентам."
          />

          <TestimonialCard
            name="Анна Козлова"
            role="Социальный работник"
            image="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&auto=format&q=60"
            quote="Объединение специалистов разного профиля на одной платформе помогает нам комплексно решать сложные ситуации наших подопечных."
          />
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const TestimonialCard = ({ name, role, image, quote }: TestimonialCardProps) => {
  return (
    <Card className="hover-scale bg-white">
      <CardContent className="p-6">
        <div className="mb-4">
          <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/30">
            <path d="M14.0153 0C16.2624 0 18.1652 0.75193 19.7235 2.2558C21.2819 3.75966 22.0611 5.78034 22.0611 8.31782C22.0611 11.4274 20.738 14.4332 18.0917 17.3351C15.4455 20.237 12.1521 22.3351 8.21152 23.6294L7 20.8053C9.89541 19.7489 12.082 18.1564 13.5598 16.0279C15.0376 13.8993 15.6212 11.5427 15.3104 8.95799C14.3429 9.24434 13.3371 9.38752 12.2929 9.38752C10.2448 9.38752 8.52063 8.71692 7.1204 7.37573C5.72018 6.03453 5.02007 4.35635 5.02007 2.34118C5.02007 1.68989 5.10953 1.07926 5.28847 0.509281C5.46741 0.169761 5.60066 0 5.68826 0C6.05789 0 7.27447 0.339508 9.33799 1.01853C11.4015 1.69754 13.0339 1.94907 14.0153 0Z" fill="currentColor" />
            <path d="M34.2388 0C36.4859 0 38.3887 0.75193 39.947 2.2558C41.5053 3.75966 42.2846 5.78034 42.2846 8.31782C42.2846 11.4274 40.9614 14.4332 38.3152 17.3351C35.669 20.237 32.3755 22.3351 28.435 23.6294L27.2235 20.8053C30.1189 19.7489 32.3055 18.1564 33.7833 16.0279C35.2611 13.8993 35.8447 11.5427 35.5339 8.95799C34.5663 9.24434 33.5606 9.38752 32.5164 9.38752C30.4683 9.38752 28.7441 8.71692 27.3439 7.37573C25.9437 6.03453 25.2435 4.35635 25.2435 2.34118C25.2435 1.68989 25.333 1.07926 25.5119 0.509281C25.6909 0.169761 25.8241 0 25.9117 0C26.2814 0 27.498 0.339508 29.5615 1.01853C31.625 1.69754 33.2573 1.94907 34.2388 0Z" fill="currentColor" />
          </svg>
        </div>
        <p className="mb-6 text-muted-foreground italic">{quote}</p>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialsSection;