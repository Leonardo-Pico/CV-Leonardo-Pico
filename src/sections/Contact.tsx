import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Download } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'epicocabra@gmail.com',
    href: 'mailto:epicocabra@gmail.com'
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+57 312 345 6789',
    href: 'tel:+573123456789'
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Colombia',
    href: '#'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Edward Leonardo Pico Cabra',
    href: 'https://linkedin.com/in/edward-leonardo-pico-cabra-615b9b133/'
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-background">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Contacto</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Hablemos
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? 
            Estoy disponible para nuevas oportunidades y proyectos freelance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-blue-300 hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <item.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Redes Sociales</h3>
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com/in/edward-leonardo-pico-cabra-615b9b133/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-gray-800 text-white flex items-center justify-center hover:bg-gray-900 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Download CV */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white">
              <h3 className="text-lg font-bold mb-2">¿Quieres conocer más?</h3>
              <p className="text-sm text-blue-200 mb-4">
                Descarga mi CV completo con toda mi experiencia y formación.
              </p>
              <a href="/CV-Leonardo-Pico.pdf" download>
                <Button 
                  variant="secondary" 
                  className="w-full bg-white text-blue-700 hover:bg-blue-50"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Descargar CV
                </Button>
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="p-6 lg:p-8 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">Envíame un mensaje</h3>
            
            {submitted ? (
              <div className="p-6 rounded-lg bg-green-50 border border-green-200 text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-green-800 mb-2">¡Mensaje enviado!</h4>
                <p className="text-green-700">Gracias por contactarme. Te responderé pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nombre
                    </label>
                    <Input 
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Asunto
                  </label>
                  <Input 
                    type="text"
                    placeholder="¿De qué se trata?"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea 
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
