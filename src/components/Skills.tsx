import { 
  Code2, 
  Database, 
  Smartphone, 
  Palette,
  Server,
  Globe,
  Cpu,
  FileCode2,
  Layers,
  Monitor
} from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: FileCode2, category: 'Frontend' },
    { name: 'Java', icon: Cpu, category: 'Programming' },
    { name: 'Spring Boot', icon: Server, category: 'Backend' },
    { name: 'JavaScript', icon: Code2, category: 'Programming' },
    { name: 'Python', icon: Server, category: 'Backend' },
    { name: 'C++', icon: Monitor, category: 'Programming' },
    { name: 'MongoDB', icon: Database, category: 'Database' },
    { name: 'MySQL', icon: Database, category: 'Database' },
    { name: 'Node.js', icon: Globe, category: 'Backend' },
    { name: 'Next.js', icon: Layers, category: 'Frontend' },
    { name: 'React Native', icon: Smartphone, category: 'Mobile' },
    { name: 'Figma', icon: Palette, category: 'Design' },
    { name: 'Canva', icon: Palette, category: 'Design' },
    { name: 'Lightroom', icon: Palette, category: 'Design' },
    { name: 'Express', icon: Server, category: 'Backend' },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Database', 'Design', 'Programming'];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium bg-secondary/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 border border-border/30 hover:border-primary/30"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Floating Skills */}
        <div className="relative h-64 overflow-hidden rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-border/30">
          <div className="floating-skills-container">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="floating-skill"
                style={{
                  animationDelay: `${index * 0.8}s`,
                  top: `${Math.random() * 80 + 10}%`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
              >
                <div className="skill-badge">
                  <skill.icon size={20} className="text-primary" />
                  <span className="text-sm font-medium text-foreground ml-2">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover-glow">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover-glow">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover-glow">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;