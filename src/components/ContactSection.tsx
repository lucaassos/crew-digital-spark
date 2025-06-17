
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Instagram } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Meu nome é ${formData.name}.

Email: ${formData.email}
${formData.phone ? `Telefone: ${formData.phone}` : ''}

Mensagem: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/5548991329330?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecionando para o WhatsApp! Aguarde nosso contato.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5548991329330', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/usecrewdigital', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-white/50 to-slate-100/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 glow-effect">
            Entre em <span className="text-crew-blue-600">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para transformar sua ideia em realidade? Vamos conversar sobre seu projeto!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fale com Nossa Crew!
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Estamos aqui para ajudar você a alcançar seus objetivos digitais. 
                Entre em contato e vamos discutir como podemos impulsionar seu negócio.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 futuristic-hover p-2 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-crew-blue-50 rounded-xl flex items-center justify-center">
                  <Mail className="text-crew-blue-600 w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">lucas@crewagencia.com</div>
                  <div className="text-gray-600">larissa@crewagencia.com</div>
                </div>
              </div>

              <div 
                className="flex items-center space-x-4 futuristic-hover p-2 rounded-lg cursor-pointer"
                onClick={openWhatsApp}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-crew-orange-50 rounded-xl flex items-center justify-center">
                  <Phone className="text-crew-orange-500 w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">WhatsApp</div>
                  <div className="text-gray-600">(48) 99132-9330</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 futuristic-hover p-2 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-crew-blue-50 rounded-xl flex items-center justify-center">
                  <MapPin className="text-crew-blue-600 w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Localização</div>
                  <div className="text-gray-600">Florianópolis, SC</div>
                </div>
              </div>

              <div 
                className="flex items-center space-x-4 futuristic-hover p-2 rounded-lg cursor-pointer"
                onClick={openInstagram}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                  <Instagram className="text-purple-600 w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Instagram</div>
                  <div className="text-gray-600">@usecrewdigital</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-crew-blue-50 to-crew-orange-50 rounded-2xl p-6 futuristic-hover">
              <h4 className="font-bold text-gray-900 mb-2">Horário de Atendimento</h4>
              <p className="text-gray-600">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 14h
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 futuristic-hover">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/50"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/50"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/50"
                  placeholder="(48) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white/50"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-crew-blue-600 to-crew-blue-700 hover:from-crew-blue-700 hover:to-crew-blue-800 text-white py-3 futuristic-hover"
                size="lg"
              >
                Enviar via WhatsApp
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
