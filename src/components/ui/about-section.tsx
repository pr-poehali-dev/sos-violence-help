import { Shield, Heart, Users, LineChart, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

const AboutSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">О нас</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Наша миссия - создать безопасную и надежную платформу для специалистов, 
            которые помогают жертвам насилия во всех его проявлениях.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <Card className="hover-scale">
            <CardHeader className="space-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                <Shield size={24} className="text-primary" />
              </div>
              <CardTitle>Честность</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Мы придерживаемся высоких этических стандартов и прозрачности во всех наших действиях и коммуникациях.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader className="space-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                <Heart size={24} className="text-primary" />
              </div>
              <CardTitle>Конфиденциальность</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Мы обеспечиваем полную защиту данных и уважаем частную жизнь всех, кто обращается за помощью и поддержкой.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader className="space-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                <LineChart size={24} className="text-primary" />
              </div>
              <CardTitle>Экспертиза</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Мы предоставляем только проверенную и актуальную информацию, основанную на научных исследованиях и лучших практиках.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;