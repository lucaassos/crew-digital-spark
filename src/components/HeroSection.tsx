
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5548991329330', '_blank');
  };

  return (
    <section id="inicio" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-crew-blue-400 to-crew-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-crew-orange-400 to-crew-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-crew-orange-500 mr-2 animate-float glow-effect" size={32} />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-crew-blue-600 via-crew-blue-700 to-crew-orange-500 bg-clip-text text-transparent glow-effect">
              Crew!
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformamos ideias em <span className="text-crew-blue-400 font-semibold glow-effect">realidade digital</span>. 
            Somos especialistas em IA, Social Media, Desenvolvimento Web e Marketing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection('servicos')}
              size="lg"
              className="bg-gradient-to-r from-crew-blue-600 to-crew-blue-700 hover:from-crew-blue-700 hover:to-crew-blue-800 text-white px-8 py-4 text-lg futuristic-hover"
            >
              Nossos Serviços
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button
              onClick={openWhatsApp}
              variant="outline"
              size="lg"
              className="border-crew-blue-600 text-crew-blue-400 hover:bg-crew-blue-900 px-8 py-4 text-lg futuristic-hover"
            >
              Fale Conosco
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-float futuristic-hover" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700">
                <div className="text-2xl font-bold text-crew-blue-400 glow-effect">IA</div>
                <div className="text-sm text-gray-300">Inteligência Artificial</div>
              </div>
            </div>
            
            <div className="animate-float futuristic-hover" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700">
                <div className="text-2xl font-bold text-crew-orange-500 glow-effect">Social</div>
                <div className="text-sm text-gray-300">Media</div>
              </div>
            </div>
            
            <div className="animate-float futuristic-hover" style={{ animationDelay: '0.6s' }}>
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700">
                <div className="text-2xl font-bold text-crew-blue-400 glow-effect">Sites</div>
                <div className="text-sm text-gray-300">Desenvolvimento</div>
              </div>
            </div>
            
            <div className="animate-float futuristic-hover" style={{ animationDelay: '0.8s' }}>
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700">
                <div className="text-2xl font-bold text-crew-blue-400 glow-effect">Marketing</div>
                <div className="text-sm text-gray-300">Digital</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
