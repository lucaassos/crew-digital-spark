
import { CheckCircle, Target, Users, Zap } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "50+", label: "Projetos Entregues" },
    { number: "3+", label: "Anos de Experiência" },
    { number: "100%", label: "Clientes Satisfeitos" },
    { number: "24/7", label: "Suporte Técnico" }
  ];

  const values = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Cada projeto é desenvolvido com foco em gerar resultados concretos para o seu negócio."
    },
    {
      icon: Users,
      title: "Trabalho em Equipe",
      description: "Nossa crew trabalha de forma integrada para entregar as melhores soluções."
    },
    {
      icon: Zap,
      title: "Inovação Constante",
      description: "Sempre atualizados com as últimas tecnologias e tendências do mercado."
    },
    {
      icon: CheckCircle,
      title: "Qualidade Garantida",
      description: "Comprometidos com a excelência em cada detalhe dos nossos projetos."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-gray-50 to-crew-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre a <span className="text-crew-blue-600">Crew!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma equipe apaixonada por tecnologia e inovação, dedicada a transformar ideias em soluções digitais de impacto.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl md:text-4xl font-bold text-crew-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa História
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A Crew! nasceu da paixão por criar soluções digitais que realmente fazem a diferença. 
                Combinamos criatividade, tecnologia e estratégia para entregar resultados excepcionais.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipe multidisciplinar trabalha em sinergia para oferecer desde desenvolvimento 
                de inteligência artificial até estratégias completas de marketing digital, sempre com 
                foco na experiência do usuário e no sucesso do cliente.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-crew-blue-50 mb-4">
                    <value.icon className="text-crew-blue-600 w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
