
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5548991329330', '_blank');
  };

  return (
    <header className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/cfacdff0-ba60-4695-8117-893ff0b07d88.png" 
              alt="Crew!" 
              className="h-10 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-crew-blue-600 transition-colors duration-200 futuristic-hover px-2 py-1 rounded"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-crew-blue-600 transition-colors duration-200 futuristic-hover px-2 py-1 rounded"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-crew-blue-600 transition-colors duration-200 futuristic-hover px-2 py-1 rounded"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-crew-blue-600 transition-colors duration-200 futuristic-hover px-2 py-1 rounded"
            >
              Contato
            </button>
          </nav>

          <div className="hidden md:flex">
            <Button 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-crew-blue-600 to-crew-blue-700 hover:from-crew-blue-700 hover:to-crew-blue-800 text-white futuristic-hover"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-white/90 backdrop-blur-sm rounded-lg mt-2">
            <div className="flex flex-col space-y-2 p-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-crew-blue-600 py-2 text-left futuristic-hover px-2 rounded"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-gray-700 hover:text-crew-blue-600 py-2 text-left futuristic-hover px-2 rounded"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-crew-blue-600 py-2 text-left futuristic-hover px-2 rounded"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-crew-blue-600 py-2 text-left futuristic-hover px-2 rounded"
              >
                Contato
              </button>
              <Button 
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-crew-blue-600 to-crew-blue-700 text-white mt-2 futuristic-hover"
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
