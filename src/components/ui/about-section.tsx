import { Shield, Heart, Book, Handshake, Users } from "lucide-react";
import { Card, CardContent } from "./card";

const AboutSection = () => {
  const values = [
    {
      icon: <Shield className="h-10 w-10 text-secondary" />,
      title: "Честность",
      description: "Мы всегда прозрачны в своей деятельности и стремимся предоставлять достоверную информацию."
    },
    {
      icon: <Heart className="h-10 w-10 text-secondary" />,
      title: "Конфиденциальность",
      description: "Уважаем приватность и безопасность всех, кто обращается за помощью или оказывает поддержку."
    },
    {
      icon: <Book className="h-10 w-10 text-secondary" />,
      title: "Опыт",
      description: "Наша команда объединяет профессионалов с многолетним опытом работы с жертвами насилия."
    },
    {
      icon: <Handshake className="h-10 w-10 text-secondary" />,
      title: "Сотрудничество",
      description: "Мы верим в силу сообщества и объединяем усилия с другими организациями."
    },
    {
      icon: <Users className="h-10 w-10 text-secondary" />,
      title: "Поддержка",
      description: "Каждый человек заслуживает заботы и профессиональной помощи в трудной ситуации."
    }
  ];

  return (
    <section id="о-нас" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">О нас</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Наша миссия — создать безопасную и надежную платформу для специалистов, 
            которые каждый день помогают жертвам насилия. Мы стремимся объединить ресурсы, 
            знания и опыт, чтобы сделать эту помощь более эффективной.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.slice(0, 3).map((value, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {values.slice(3, 5).map((value, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;