import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Dashboard Analytics',
    description: 'Sistema de análisis de datos con visualizaciones interactivas, gráficos en tiempo real y reportes personalizables. Desarrollado con Vue.js y consumo de APIs REST.',
    image: '/project-1.jpg',
    technologies: ['Vue.js', 'Chart.js', 'Sass', 'APIs REST'],
    demoUrl: '#',
    repoUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Plataforma Educativa',
    description: 'Sistema de gestión del aprendizaje (LMS) con seguimiento de progreso, cursos interactivos y evaluaciones en línea. Integración con Moodle.',
    image: '/project-2.jpg',
    technologies: ['Vue.js', 'Laravel', 'PostgreSQL', 'Moodle API'],
    demoUrl: '#',
    repoUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Sistema ERP',
    description: 'Sistema de planificación de recursos empresariales con módulos de inventario, ventas, clientes y reportes. Arquitectura SPA modular.',
    image: '/project-3.jpg',
    technologies: ['JavaScript ES6+', 'Bootstrap', 'PHP', 'MySQL'],
    demoUrl: '#',
    repoUrl: '#',
    featured: false
  },
  {
    id: 4,
    title: 'App Responsive',
    description: 'Aplicación web progresiva (PWA) con diseño responsive optimizado para dispositivos móviles y tablets. Interfaz moderna y accesible.',
    image: '/project-4.jpg',
    technologies: ['React', 'PWA', 'Tailwind CSS', 'Node.js'],
    demoUrl: '#',
    repoUrl: '#',
    featured: false
  }
];

export function Projects() {
  return (
    <section id="proyectos" className="py-20 lg:py-32 bg-muted/30">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Portafolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Proyectos Destacados
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en desarrollo frontend 
            y arquitectura de aplicaciones web.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group rounded-xl bg-card border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Featured badge */}
                {project.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    Destacado
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.repoUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
