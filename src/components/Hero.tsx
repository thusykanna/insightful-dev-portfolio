import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D on the right, full height */}
      <div className="absolute inset-0 right-0 flex justify-end pointer-events-none z-0">
        <div className="w-full md:w-3/5 h-full flex items-center justify-end">
          <Spline scene="https://prod.spline.design/tseagYYtOW41hKoM/scene.splinecode" />
        </div>
      </div>
      {/* Hero Content overlapped on left, moved further left */}
      <div className="relative z-10 flex flex-col items-center md:items-start justify-center w-full max-w-5xl mx-auto px-6 md:pl-0 md:pr-32">
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="bg-white/0 rounded-3xl border border-white/0 p-8 md:p-12 w-full shadow-2xl">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              Full Stack Developer
            </p>
            <h1 className="font-space-grotesk font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-glow">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Thushanth
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              I create exceptional digital experiences with modern technologies. 
              Passionate about clean code, innovative solutions, and user-centric design.
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-12">
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

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start space-x-6">
              <a href="https://github.com/thusykanna" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover-glow">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/thushanth-uthayarajan/" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover-glow">
                <Linkedin size={24} />
              </a>
              <a href="mailto:thushanth.22@cse.mrt.ac.lk"
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover-glow">
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
