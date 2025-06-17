
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/cfacdff0-ba60-4695-8117-893ff0b07d88.png" 
                alt="Crew!" 
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transformamos ideias em realidade digital. Especializados em IA, Social Media, 
              Desenvolvimento Web, Branding e Marketing Digital.
            </p>
            <div className="flex items-center text-gray-300">
              <span>Feito com</span>
              <Heart className="mx-2 w-4 h-4 text-red-500 fill-current" />
              <span>pela Crew!</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Inteligência Artificial</li>
              <li>Social Media</li>
              <li>Desenvolvimento Web</li>
              <li>Criação de Marcas</li>
              <li>Marketing Digital</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>contato@crew.com.br</li>
              <li>(11) 9999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Crew! Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
