import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id='about' className="relative min-h-screen flex items-start justify-center overflow-hidden" style={{ backgroundColor: '#01031c' }}>
      {/* Right Spline (3/5 width) */}
      <div className="absolute inset-y-0 right-0 flex items-center justify-end pointer-events-none z-0 w-3/5">
        <Spline scene="https://prod.spline.design/tseagYYtOW41hKoM/scene.splinecode" />
      </div>
      {/* Hero Content positioned on left side */}
      <div className="relative z-10 flex flex-col items-center md:items-start justify-center w-full max-w-7xl mx-auto px-4 md:px-6 pt-20 md:pt-3 min-h-screen md:ml-[90px]">
        <div className="w-full md:w-2/5 lg:w-2/5 xl:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="bg-white/0 rounded-3xl border border-white/0 p-8 md:p-12 w-full shadow-2xl">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              Full Stack Developer
            </p>
            <h1 className="font-space-grotesk font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-glow">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {"<"}
                Thushanth
                {"/>"}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Passionate about clean code, innovative solutions, and user-centric design.
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-12">
                <Button 
                onClick={() => window.location.href = '#projects'}
                size="lg" 
                className="bg-primary text-black border-2 border-primary px-8 py-3 text-lg font-medium transition-all duration-300 hover:text-white hover-glow"
                >
                View My Work
                </Button>
              <Button 
                onClick={() => window.location.href = '#contact'}
                variant="outline" 
                size="lg"
                className="bg-primary-foreground hover:bg-primary-foreground hover:text-white border-2 border-primary hover:border-primary text-primary px-8 py-3 text-lg font-medium hover-glow transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start space-x-6">
              <a href="https://github.com/thusykanna" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/20 hover:bg-primary hover:text-primary-foreground text-muted-foreground hover:border-primary transition-all duration-300 hover:scale-110 hover-glow">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/thushanth-uthayarajan/" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/20 hover:bg-primary hover:text-primary-foreground text-muted-foreground hover:border-primary transition-all duration-300 hover:scale-110 hover-glow">
                <Linkedin size={24} />
              </a>
              <a href="mailto:thushanth.22@cse.mrt.ac.lk"
                className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/20 hover:bg-primary hover:text-primary-foreground text-muted-foreground hover:border-primary transition-all duration-300 hover:scale-110 hover-glow">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
