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
    { name: 'JavaScript', icon: Code2, category: 'Programming' },
    { name: 'React', icon: Layers, category: 'Frontend' },
    { name: 'React Native', icon: Smartphone, category: 'Mobile' },
    { name: 'Python', icon: Server, category: 'Backend' },
    { name: 'Java', icon: Cpu, category: 'Programming' },
    { name: 'C++', icon: Monitor, category: 'Programming' },
    { name: 'MongoDB', icon: Database, category: 'Database' },
    { name: 'MySQL', icon: Database, category: 'Database' },
    { name: 'Figma', icon: Palette, category: 'Design' },
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

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-icon group fade-in fade-in-delay-${(index % 5) + 1}`}
            >
              <skill.icon 
                size={28} 
                className="text-muted-foreground group-hover:text-primary transition-colors duration-300" 
              />
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap border border-border/50">
                  {skill.name}
                </div>
              </div>
            </div>
          ))}
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