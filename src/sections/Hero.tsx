import perfil from '../assets/img/perfil.jpg';
import { Button } from '@/components/ui/button';
import { ChevronDown, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/30 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full max-w-7xl mx-auto py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="text-center lg:text-left space-y-6 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Disponible para proyectos
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Edward Leonardo
              <span className="block text-blue-300">Pico Cabra</span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-xl mx-auto lg:mx-0">
              Frontend Developer Senior con más de 10 años de experiencia 
              especializado en arquitectura SPA con Vue.js y JavaScript ES6+
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">

              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 font-semibold"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contactar
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="https://linkedin.com/in/edward-leonardo-pico-cabra-615b9b133/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>*/}
              <a 
                href="mailto:epicocabra@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slideInRight">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-2xl opacity-30" />
              <img 
                src={perfil}
                alt="Leonardo Pico"
                className="relative w-72 h-96 sm:w-80 sm:h-[28rem] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
}
