import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectFitness from '@/assets/project-fitness.jpg';
import projectAnalytics from '@/assets/project-analytics.jpg';
import projectSocial from '@/assets/project-social.jpg';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: projectEcommerce,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'Mobile Fitness App',
      description: 'Cross-platform mobile application for fitness tracking with React Native. Includes workout plans, progress tracking, and social features.',
      image: projectFitness,
      technologies: ['React Native', 'Firebase', 'Redux', 'AsyncStorage'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'Mobile Development'
    },
    {
      id: 3,
      title: 'AI Dashboard Analytics',
      description: 'Real-time analytics dashboard with AI-powered insights. Built with Python backend and React frontend, featuring data visualization and predictive analytics.',
      image: projectAnalytics,
      technologies: ['Python', 'React', 'TensorFlow', 'PostgreSQL', 'D3.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'Data Science'
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'Full-featured social media application with real-time messaging, post sharing, and user interactions. Scalable architecture with microservices.',
      image: projectSocial,
      technologies: ['React', 'Java', 'MySQL', 'Redis', 'WebSocket'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'Web Development'
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'Data Science'];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise across various technologies and domains.
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

        {/* Featured Project Carousel */}
        <div className="relative mb-16">
          <Card className="project-card max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-video md:aspect-auto">
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="w-full h-full object-cover rounded-l-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-l-2xl" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="text-sm text-primary font-medium mb-2">
                    {projects[currentProject].category}
                  </div>
                  <h3 className="font-space-grotesk font-bold text-2xl mb-4">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {projects[currentProject].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[currentProject].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/50 text-sm rounded-full border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-primary/90"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/20 hover:border-primary/50 hover:bg-primary/10"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0 border-primary/20 hover:border-primary/50 hover:bg-primary/10"
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0 border-primary/20 hover:border-primary/50 hover:bg-primary/10"
          >
            <ChevronRight size={20} />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject 
                    ? 'bg-primary scale-110' 
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project, index) => (
            <Card key={project.id} className={`project-card fade-in fade-in-delay-${(index % 3) + 1}`}>
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-t-2xl" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="font-space-grotesk font-semibold text-lg mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="p-2 h-auto">
                        <ExternalLink size={16} />
                      </Button>
                      <Button size="sm" variant="ghost" className="p-2 h-auto">
                        <Github size={16} />
                      </Button>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {project.technologies.slice(0, 2).join(', ')}
                      {project.technologies.length > 2 && '...'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/20 hover:border-primary/50 hover:bg-primary/10 px-8 py-3"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;