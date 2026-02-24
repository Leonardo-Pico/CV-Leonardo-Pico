import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Desarrollador Full Stack',
    company: 'INNOVATIVE EDUCATION - SERVICES AND SOLUTIONS S.A.S',
    location: 'Colombia',
    period: 'Septiembre 2025',
    duration: '6 meses',
    description: 'Responsable de la implementación de estrategias formativas en programación, promoviendo la participación equitativa y el fortalecimiento de habilidades tecnológicas en niñas, niños y jóvenes. Trabajo ejecutado con autonomía técnica y profesional, garantizando el cumplimiento de los lineamientos metodológicos y los objetivos del proyecto.',
    technologies: [],
    current: true
  },  
  {
    id: 2,
    role: 'Desarrollador Full Stack',
    company: 'Servicio Nacional de Aprendizaje - SENA',
    location: 'Colombia',
    period: 'Febrero 2019 - Diciembre 2024',
    duration: '5 años 10 meses',
    description: 'Desarrollo de aplicaciones web educativas y plataformas de gestión del aprendizaje. Implementación de arquitecturas SPA con Vue.js, consumo de APIs REST y maquetación responsive.',
    technologies: [],
    current: false
  },
  {
    id: 3,
    role: 'Desarrollador Full Stack',
    company: 'INNOVATIVE EDUCATION - SERVICES AND SOLUTIONS S.A.S',
    location: 'Colombia',
    period: 'Septiembre 2022 - Noviembre 2023',
    duration: '1 año 3 meses',
    description: 'Desarrollo de soluciones educativas digitales, plataformas e-learning y sistemas de gestión académica. Integración de tecnologías frontend modernas.',
    technologies: [],
    current: false
  },
  {
    id: 4,
    role: 'Desarrollador de Aplicaciones',
    company: 'OFFICE TECH',
    location: 'Colombia',
    period: 'Junio 2017 - Diciembre 2018',
    duration: '1 año 7 meses',
    description: 'Desarrollo de aplicaciones web empresariales, optimización de rendimiento frontend y creación de interfaces de usuario intuitivas.',
    technologies: [],
    current: false
  },
  {
    id: 5,
    role: 'Docente en Formación TIC',
    company: 'CITED - CORPORACIÓN INTEGRAL TECNODIGITAL',
    location: 'Colombia',
    period: 'Abril 2017 - Julio 2018',
    duration: '1 año 4 meses',
    description: 'Formación de estudiantes en tecnologías de la información y comunicación, programación web y desarrollo de software.',
    technologies: [],
    current: false
  }
];

export function Experience() {
  return (
    <section id="experiencia" className="py-20 lg:py-32 bg-muted/30">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Trayectoria</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Experiencia Laboral
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-background md:-translate-x-1/2 z-10 mt-1.5" />
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}>
                  <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
                    {/* Header */}
                    <div className={`flex flex-wrap items-center gap-2 mb-3 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      {exp.current && (
                        <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                          Actual
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <div className={`flex items-center gap-2 mb-3 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <Briefcase className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-foreground">{exp.company}</span>
                    </div>
                    
                    <div className={`flex items-center gap-1 text-sm text-muted-foreground mb-4 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
