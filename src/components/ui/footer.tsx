import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo-b.svg" alt="Логотип SOS" className="h-8 w-8" />
              <span className="font-bold text-xl">SOS Жертвы Насилия</span>
            </div>
            <p className="mb-4 text-primary-foreground/80">
              Центр ресурсов для специалистов, помогающих жертвам насилия
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link to="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link to="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Законодательство
                </Link>
              </li>
              <li>
                <Link to="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Психологическая помощь
                </Link>
              </li>
              <li>
                <Link to="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Форум специалистов
                </Link>
              </li>
              <li>
                <Link to="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  База НПО
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">О нас</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Наша миссия
                </Link>
              </li>
              <li>
                <Link to="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Команда
                </Link>
              </li>
              <li>
                <Link to="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Партнеры
                </Link>
              </li>
              <li>
                <Link to="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Годовые отчеты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/70">
                info@sos-victims.org
              </li>
              <li className="text-primary-foreground/70">
                +7 (800) 123-45-67
              </li>
              <li>
                <Link to="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Обратная связь
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} SOS Жертвы Насилия. Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="#" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="#" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                Правила пользования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;