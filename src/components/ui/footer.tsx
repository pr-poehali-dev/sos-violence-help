import { Link } from "react-router-dom";
import { Separator } from "./separator";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo-b.svg" alt="Логотип SOS" className="h-8 w-8" />
              <span className="font-bold text-xl">SOS Жертвы Насилия</span>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Надежная платформа для специалистов, помогающих жертвам насилия.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground hover:text-secondary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Ресурсы
                </Link>
              </li>
              <li>
                <Link to="/forum" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Форум экспертов
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Юридическая информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Политика cookie
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Отказ от ответственности
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-secondary" />
                <span className="text-primary-foreground/80">
                  info@sos-violence.org
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-secondary" />
                <span className="text-primary-foreground/80">
                  +7 (800) 123-45-67
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/70 mb-4 md:mb-0">
            &copy; {currentYear} SOS Жертвы Насилия. Все права защищены.
          </p>
          <p className="text-sm text-primary-foreground/70">
            Разработано с ❤️ для помощи специалистам и жертвам насилия
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;