import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Contacto', href: '#contacto' }
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a 
              href="#inicio" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
              className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Leonardo<span className="text-blue-600"> Pico</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    activeSection === item.href.slice(1)
                      ? 'bg-blue-600 text-white'
                      : isScrolled
                        ? 'text-foreground hover:bg-muted'
                        : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => handleNavClick('#contacto')}
              >
                Contrátame
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div 
          className={`absolute top-16 left-0 right-0 bg-white border-b border-border shadow-lg transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="section-padding py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'bg-blue-600 text-white'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => handleNavClick('#contacto')}
              >
                Contrátame
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
