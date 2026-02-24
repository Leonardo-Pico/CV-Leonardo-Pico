import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    title: 'Frontend Core',
    skills: [
      { name: 'Vue.js', level: 95 },
      { name: 'JavaScript ES6+', level: 95 },
      { name: 'HTML5 & CSS3', level: 98 },
      { name: 'Sass / SCSS', level: 90 },
      { name: 'React (en curso)', level: 70 }
    ]
  },
  {
    title: 'Frameworks & Librerías',
    skills: [
      { name: 'Bootstrap', level: 92 },
      { name: 'jQuery', level: 88 },
      { name: 'Pug / Jade', level: 85 },
      { name: 'WordPress', level: 80 },
      { name: 'Tailwind CSS', level: 85 }
    ]
  },
  {
    title: 'Herramientas & Diseño',
    skills: [
      { name: 'Figma', level: 90 },
      { name: 'Adobe XD', level: 88 },
      { name: 'Git / GitHub', level: 85 },
      { name: 'Moodle', level: 82 },
      { name: 'Articulate', level: 78 }
    ]
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Consumo APIs REST', level: 92 },
      { name: 'PHP', level: 75 },
      { name: 'Laravel', level: 70 },
      { name: 'Node.js', level: 65 },
      { name: 'PostgreSQL', level: 70 }
    ]
  }
];

const additionalSkills = [
  'Arquitectura SPA',
  'Maquetación Responsive',
  'Mobile-First Design',
  'Optimización de Rendimiento',
  'Modularización de Código',
  'Integración UI/UX',
  'Metodologías Ágiles',
  'Control de Versiones',
  'Documentación Técnica',
  'Formación de Equipos'
];

export function Skills() {
  return (
    <section id="habilidades" className="py-20 lg:py-32 bg-background">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Competencias</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Habilidades Técnicas
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="p-6 lg:p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-bold">
                  {categoryIndex + 1}
                </span>
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 p-6 lg:p-8 rounded-xl bg-muted/50 border border-border">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Conocimientos Adicionales
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-background border border-border rounded-full text-sm text-foreground hover:border-blue-300 hover:shadow-sm transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
