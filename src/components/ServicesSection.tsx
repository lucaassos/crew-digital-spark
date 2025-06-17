
import { Brain, Users, Code, Palette, TrendingUp } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "Desenvolvemos soluções de IA personalizadas para automatizar processos e otimizar resultados do seu negócio.",
      color: "crew-blue-600",
      bgColor: "crew-blue-50"
    },
    {
      icon: Users,
      title: "Social Media",
      description: "Gestão completa das suas redes sociais com estratégias que engajam e convertem sua audiência.",
      color: "crew-orange-500",
      bgColor: "crew-orange-50"
    },
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Sites modernos, responsivos e otimizados que representam perfeitamente sua marca no digital.",
      color: "crew-blue-600",
      bgColor: "crew-blue-50"
    },
    {
      icon: Palette,
      title: "Criação de Marcas",
      description: "Desenvolvemos identidades visuais únicas que comunicam os valores e personalidade da sua empresa.",
      color: "crew-orange-500",
      bgColor: "crew-orange-50"
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description: "Estratégias completas de marketing digital para aumentar sua visibilidade e gerar mais conversões.",
      color: "crew-blue-600",
      bgColor: "crew-blue-50"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-crew-blue-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para levar seu negócio ao próximo nível no mundo digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${service.bgColor} to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${service.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`text-${service.color} w-8 h-8`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-crew-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
