import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Events from '@/components/Events';
import Contact from '@/components/Contact';
import FloatingLines from '@/components/FloatingLines';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingLines />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Events />
        <Contact />
      </main>
      <footer className="py-8 border-t border-border/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Made with ❤️ by {"<"}Thushanth {"/>"} 
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;