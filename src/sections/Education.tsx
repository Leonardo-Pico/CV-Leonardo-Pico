import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'Ingeniero de Sistemas',
    institution: 'Universidad de Boyacá',
    period: 'Febrero 2011 - Diciembre 2015',
    description: 'Formación integral en ingeniería de software, bases de datos, redes y sistemas de información.',
    icon: GraduationCap
  }
];

const certifications = [
  {
    id: 1,
    title: 'Master en JavaScript',
    institution: 'Udemy',
    description: 'JavaScript, jQuery, Angular',
    period: 'Febrero 2020 - Marzo 2020',
    icon: BookOpen
  },
  {
    id: 2,
    title: 'Diseño Web Profesional',
    institution: 'Udemy',
    description: 'HTML, CSS y JavaScript avanzado',
    period: 'Enero 2020 - Febrero 2020',
    icon: BookOpen
  },
  {
    id: 3,
    title: 'Formador de Formadores',
    institution: 'Universidad Nacional Abierta y a Distancia - UNAD',
    description: 'E-Mediador en Ambientes Virtuales de Aprendizaje (AVA)',
    period: 'Febrero 2017 - Marzo 2017',
    icon: Award
  }
];

const teaching = [
  {
    id: 1,
    role: 'Docente en Formación STEAM',
    institution: 'Fundación Santillana Colombia',
    period: 'Septiembre 2025 - Presente',
    description: 'Formación en ciencia, tecnología, ingeniería, arte y matemáticas para estudiantes.'
  },
  {
    id: 2,
    role: 'Desarrollador Full Stack e Instructor',
    institution: 'Servicio Nacional de Aprendizaje - SENA',
    period: 'Febrero 2019 - Diciembre 2024',
    description: 'Desarrollo de aplicaciones y formación de aprendices en tecnologías web.'
  },
  {
    id: 3,
    role: 'Docente en Formación TIC',
    institution: 'CITED - Corporación Integral Tecnodigital',
    period: 'Abril 2017 - Julio 2018',
    description: 'Enseñanza de tecnologías de información y comunicación.'
  }
];

export function Education() {
  return (
    <section id="educacion" className="py-20 lg:py-32 bg-muted/30">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Formación</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Educación y Certificaciones
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                Educación Formal
              </h3>
              <div className="space-y-4">
                {education.map((item) => (
                  <div 
                    key={item.id}
                    className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">{item.degree}</h4>
                        <p className="text-blue-600 font-medium">{item.institution}</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </div>
                        <p className="text-sm text-muted-foreground mt-3">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-blue-600" />
                Certificaciones
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div 
                    key={cert.id}
                    className="p-5 rounded-xl bg-muted/50 border border-border hover:border-blue-200 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <cert.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{cert.title}</h4>
                        <p className="text-sm text-blue-600">{cert.institution}</p>
                        <p className="text-sm text-muted-foreground">{cert.description}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                          <Calendar className="w-3 h-3" />
                          {cert.period}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Teaching Experience */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Experiencia Docente
            </h3>
            <div className="space-y-4">
              {teaching.map((item) => (
                <div 
                  key={item.id}
                  className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                      Docencia
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground">{item.role}</h4>
                  <p className="text-blue-600 font-medium">{item.institution}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <Calendar className="w-4 h-4" />
                    {item.period}
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Teaching Stats */}
        <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <h4 className="text-2xl font-bold mb-4 text-center">Impacto en Formación</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-blue-200">Estudiantes formados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm text-blue-200">Años docentes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm text-blue-200">Cursos impartidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">3</div>
              <div className="text-sm text-blue-200">Instituciones</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
