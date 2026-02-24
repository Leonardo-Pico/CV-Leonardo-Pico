import { Code2, Palette, GraduationCap, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Desarrollo Frontend',
    description: 'Especialista en Vue.js, JavaScript ES6+, arquitectura SPA y consumo de APIs REST.'
  },
  {
    icon: Palette,
    title: 'Diseño UI/UX',
    description: 'Integración de interfaces desde Figma y Adobe XD con enfoque mobile-first.'
  },
  {
    icon: GraduationCap,
    title: 'Formación Docente',
    description: 'Experiencia como instructor en formación tecnológica, impulsando competencias digitales y programación.'
  },
  {
    icon: Users,
    title: 'Liderazgo Técnico',
    description: 'Capacidad para modularizar código, optimizar rendimiento y guiar equipos.'
  }
];

export function About() {
  return (
    <section id="sobre-mi" className="py-20 lg:py-32 bg-background">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Perfil Profesional</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Sobre Mí
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Description */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ingeniero de Sistemas con más de <strong className="text-foreground">10 años de experiencia</strong> en desarrollo 
              frontend, especializado en la creación de aplicaciones web escalables y de alto rendimiento.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tengo amplia <strong className="text-foreground"> experiencia estructurando código modular</strong>, 
              optimizando rendimiento y construyendo interfaces profesionales desde diseños en Figma y Adobe XD.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Como <strong className="text-foreground">formador con experiencia docente</strong> combino habilidades técnicas sólidas con capacidad de comunicación y transferencia de conocimiento.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Proyectos completados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-muted-foreground mt-1">Años enseñando</div>
              </div>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
