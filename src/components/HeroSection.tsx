
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-crew-blue-50 via-white to-crew-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-crew-orange-500 mr-2 animate-float" size={32} />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-crew-blue-600 via-crew-blue-700 to-crew-orange-500 bg-clip-text text-transparent">
              Crew!
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformamos ideias em <span className="text-crew-blue-600 font-semibold">realidade digital</span>. 
            Somos especialistas em IA, Social Media, Desenvolvimento Web, Branding e Marketing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection('servicos')}
              size="lg"
              className="bg-gradient-to-r from-crew-blue-600 to-crew-blue-700 hover:from-crew-blue-700 hover:to-crew-blue-800 text-white px-8 py-4 text-lg"
            >
              Nossos Serviços
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button
              onClick={() => scrollToSection('contato')}
              variant="outline"
              size="lg"
              className="border-crew-blue-600 text-crew-blue-600 hover:bg-crew-blue-50 px-8 py-4 text-lg"
            >
              Fale Conosco
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div className="animate-float" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-2xl font-bold text-crew-blue-600">IA</div>
                <div className="text-sm text-gray-600">Inteligência Artificial</div>
              </div>
            </div>
            
            <div className="animate-float" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-2xl font-bold text-crew-orange-500">Social</div>
                <div className="text-sm text-gray-600">Media</div>
              </div>
            </div>
            
            <div className="animate-float" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-2xl font-bold text-crew-blue-600">Sites</div>
                <div className="text-sm text-gray-600">Desenvolvimento</div>
              </div>
            </div>
            
            <div className="animate-float" style={{ animationDelay: '0.8s' }}>
              <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-2xl font-bold text-crew-orange-500">Marcas</div>
                <div className="text-sm text-gray-600">Branding</div>
              </div>
            </div>
            
            <div className="animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-2xl font-bold text-crew-blue-600">Marketing</div>
                <div className="text-sm text-gray-600">Digital</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
