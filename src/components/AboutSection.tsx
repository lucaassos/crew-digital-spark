
import { Target, Users, Lightbulb, Heart } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Foco no Cliente",
      description: "Cada projeto é único. Desenvolvemos soluções sob medida que se adaptam perfeitamente às suas necessidades específicas."
    },
    {
      icon: Lightbulb,
      title: "Inovação Constante",
      description: "Estamos sempre explorando novas tecnologias e abordagens para entregar resultados extraordinários."
    },
    {
      icon: Users,
      title: "Parceria Verdadeira",
      description: "Mais do que prestadores de serviço, somos parceiros na jornada de transformação digital do seu negócio."
    },
    {
      icon: Heart,
      title: "Paixão pelo Digital",
      description: "Fazemos o que amamos: criar experiências digitais que realmente fazem a diferença na vida das pessoas."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre a <span className="text-crew-blue-400">Crew!</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Somos uma agência digital que acredita no poder da personalização. Cada cliente tem necessidades únicas, 
            e é exatamente isso que nos motiva a criar soluções sob medida que realmente fazem a diferença.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Nossa <span className="text-crew-orange-500">Filosofia</span>
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Acreditamos que cada negócio é único e merece soluções igualmente únicas. Por isso, nosso processo 
              começa sempre com uma análise profunda das suas necessidades específicas.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Não oferecemos pacotes prontos - criamos estratégias e soluções completamente personalizadas, 
              desde inteligência artificial sob medida até campanhas de marketing direcionadas.
            </p>
            <div className="flex items-center space-x-4 p-6 bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-crew-blue-600 to-crew-orange-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">100% Personalizado</h4>
                <p className="text-gray-300">Cada projeto é único, assim como seu negócio</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-crew-blue-600 to-crew-orange-500 rounded-3xl p-8 text-white">
              <div className="flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-4">Nosso Compromisso</h4>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Análise detalhada das suas necessidades
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Soluções 100% sob medida
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Acompanhamento personalizado
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Resultados que fazem diferença
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-crew-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 futuristic-hover"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-crew-blue-600/20 to-crew-orange-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="text-crew-blue-400 w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-crew-blue-400 transition-colors duration-300">
                {value.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
