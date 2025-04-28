import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/logo-b.svg" alt="Логотип SOS" className="h-8 w-8" />
            <span className="font-bold text-xl">SOS Жертвы Насилия</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-secondary transition-colors">Главная</Link>
            <Link to="/about" className="hover:text-secondary transition-colors">О нас</Link>
            <Link to="/resources" className="hover:text-secondary transition-colors">Ресурсы</Link>
            <Link to="/contact" className="hover:text-secondary transition-colors">Контакты</Link>
            <Button variant="secondary" size="sm">
              Помочь
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="text-primary-foreground hover:bg-accent"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3 animate-fade-in">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/resources" 
              className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ресурсы
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Контакты
            </Link>
            <Button variant="secondary" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              Помочь
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;