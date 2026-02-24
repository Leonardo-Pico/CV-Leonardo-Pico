import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
