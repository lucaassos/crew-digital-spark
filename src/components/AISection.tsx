
import { Brain, Zap, Circuit, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AISection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5548991329330', '_blank');
  };

  const features = [
    {
      icon: Brain,
      title: "Análise Inteligente",
      description: "Analisamos profundamente suas necessidades para criar soluções de IA sob medida"
    },
    {
      icon: Zap,
      title: "Automação Personalizada",
      description: "Automatizamos processos específicos do seu negócio com precisão cirúrgica"
    },
    {
      icon: Circuit,
      title: "IA Sob Medida",
      description: "Desenvolvemos inteligências artificiais únicas para resolver seus desafios específicos"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.2),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"7\" cy=\"7\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30">
              <Brain className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Inteligência Artificial
            </span>
            <br />
            <span className="text-white">Sob Medida</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Desenvolvemos soluções de IA personalizadas que se adaptam perfeitamente às necessidades únicas do seu negócio. 
            Cada projeto é uma nova oportunidade de criar algo extraordinário.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-white font-medium">Soluções 100% Personalizadas</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para revolucionar seu negócio com IA?
          </h3>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Cada cliente é único, cada solução é especial. Vamos descobrir juntos como a IA pode transformar sua realidade.
          </p>
          
          <Button
            onClick={openWhatsApp}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full futuristic-hover group"
          >
            Vamos Conversar
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AISection;
