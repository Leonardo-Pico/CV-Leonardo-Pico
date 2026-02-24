import { Linkedin, Mail, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Contacto', href: '#contacto' }
];

const technologies = [
  'Vue.js', 'JavaScript', 'TypeScript', 'React', 'Sass', 'Tailwind CSS'
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="section-padding max-w-7xl mx-auto py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="text-2xl font-bold">
              Leonardo<span className="text-blue-400"> Pico</span>
            </a>
            <p className="mt-4 text-background/70 max-w-md leading-relaxed">
              Frontend Developer Senior especializado en Vue.js y arquitectura SPA. 
              Más de 10 años creando experiencias web excepcionales.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a 
                href="https://linkedin.com/in/edward-leonardo-pico-cabra-615b9b133/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/*<a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>*/}
              <a 
                href="mailto:epicocabra@gmail.com"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-background/70 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Tecnologías</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 text-sm bg-background/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60 text-center sm:text-left">
              © {currentYear} Leonardo Pico. Todos los derechos reservados.
            </p>
            <p className="text-sm text-background/60 flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> en Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
