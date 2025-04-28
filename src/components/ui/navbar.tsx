import { useState } from "react";
import { Button } from "./button";
import { Menu, X, Heart } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Heart className="h-6 w-6 text-secondary mr-2" />
          <span className="text-xl font-bold">SOS</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#о-нас" className="hover:text-secondary transition-colors">О нас</a>
          <a href="#особенности" className="hover:text-secondary transition-colors">Особенности</a>
          <a href="#как-помочь" className="hover:text-secondary transition-colors">Как помочь</a>
          <a href="#ресурсы" className="hover:text-secondary transition-colors">Ресурсы</a>
          <a href="#отзывы" className="hover:text-secondary transition-colors">Отзывы</a>
        </div>

        {/* CTA Button */}
        <Button className="hidden md:block bg-secondary text-secondary-foreground hover:bg-secondary/90">
          Поддержать
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary text-primary-foreground py-4 px-6 absolute w-full shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#о-нас" 
              className="hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </a>
            <a 
              href="#особенности" 
              className="hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Особенности
            </a>
            <a 
              href="#как-помочь" 
              className="hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Как помочь
            </a>
            <a 
              href="#ресурсы" 
              className="hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Ресурсы
            </a>
            <a 
              href="#отзывы" 
              className="hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </a>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full">
              Поддержать
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;