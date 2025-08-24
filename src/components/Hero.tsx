import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background - Spline iframe */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://app.spline.design/community/file/2d006c9e-5bc5-42cd-9eac-88e751a2774a"
          className="w-full h-full border-none"
          style={{ pointerEvents: 'none' }}
          title="3D Background Animation"
        />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12">
          <div className="fade-in">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              Full Stack Developer
            </p>
            <h1 className="font-space-grotesk font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-glow">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Alex
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              I create exceptional digital experiences with modern technologies. 
              Passionate about clean code, innovative solutions, and user-centric design.
            </p>
          </div>

          <div className="fade-in fade-in-delay-1 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium hover-glow"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/20 hover:border-primary/50 hover:bg-primary/10 px-8 py-3 text-lg font-medium"
            >
              Get In Touch
            </Button>
          </div>

          <div className="fade-in fade-in-delay-2 flex items-center justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover-glow"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover-glow"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover-glow"
              aria-label="Send Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in fade-in-delay-3">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;