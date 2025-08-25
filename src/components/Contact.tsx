import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Twitter, Download, FileText, Send, Bot, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [resumeText, setResumeText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState('');
  const { toast } = useToast();

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: '',
      href: 'mailto:alex@example.com',
      color: 'hover:text-red-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@alexdev',
      href: 'https://github.com/thusykanna',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Alex Developer',
      href: 'https://linkedin.com/in/thushanth-uthayarajan',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@alexdev_',
      href: 'https://twitter.com',
      color: 'hover:text-sky-400'
    }
  ];

  const handleResumeAnalyze = async () => {
    if (!resumeText.trim()) {
      toast({
        title: "Please enter resume text",
        description: "Add your resume content to get AI-powered analysis.",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis (replace with actual API call)
    setTimeout(() => {
      const mockAnalysis = `
**Resume Analysis Report**

**Strengths:**
• Strong technical background with modern technologies
• Good project diversity showing full-stack capabilities
• Clear progression in responsibilities and impact

**Areas for Improvement:**
• Consider adding more quantifiable achievements (e.g., "Increased performance by 40%")
• Include soft skills and leadership experience
• Add certifications or continuous learning activities

**Recommendations:**
• Reorganize sections to highlight most relevant experience first
• Use action verbs to start bullet points (Developed, Implemented, Led)
• Include keywords from target job descriptions
• Consider adding a brief professional summary at the top

**Formatting Suggestions:**
• Ensure consistent formatting and spacing
• Use a clean, professional font
• Keep to 1-2 pages maximum
• Include contact information prominently

**Score: 7.5/10**
Your resume shows strong technical competency but could benefit from better storytelling and quantified impact statements.
      `;
      
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
      toast({
        title: "Analysis Complete!",
        description: "Your resume has been analyzed with AI-powered insights.",
      });
    }, 3000);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Thushanth-Uthayarajan.pdf';
    link.download = 'Thushanth-Uthayarajan.pdf';
    link.click();
    
    toast({
      title: "CV Download Started",
      description: "Your CV is being prepared for download.",
    });
  };

  const handleDirectEmail = () => {
    window.location.href = 'mailto:alex@example.com?subject=Let\'s work together&body=Hi Alex, I\'d like to discuss a potential opportunity with you.';
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="font-space-grotesk">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== 'Email' ? '_blank' : undefined}
                    rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className={`flex items-center space-x-4 p-3 rounded-lg hover:bg-secondary/50 transition-all duration-300 group ${link.color}`}
                  >
                    <link.icon size={24} className="text-muted-foreground group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <div className="font-medium">{link.label}</div>
                      <div className="text-sm text-muted-foreground">{link.value}</div>
                    </div>
                  </a>
                ))}

                {/* Action Buttons */}
                <div className="space-y-3 pt-4 border-t border-border/30">
                  <Button 
                    onClick={handleDownloadCV}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <Download size={20} className="mr-2" />
                    Download CV
                  </Button>
                  <Button 
                    onClick={handleDirectEmail}
                    variant="outline"
                    className="w-full border-primary/20 hover:border-primary/50 hover:bg-primary/10"
                  >
                    <Send size={20} className="mr-2" />
                    Send Direct Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resume Analyzer */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-space-grotesk flex items-center">
                  <Bot size={24} className="mr-2 text-primary" />
                  AI Resume Analyzer
                  <Sparkles size={20} className="ml-2 text-accent" />
                </CardTitle>
                <p className="text-muted-foreground">
                  Get AI-powered insights and suggestions to improve your resume with modern best practices.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Paste your resume text here:
                  </label>
                  <Textarea
                    placeholder="Copy and paste your resume content here for analysis..."
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                    className="min-h-[200px] resize-none"
                  />
                </div>

                <Button
                  onClick={handleResumeAnalyze}
                  disabled={isAnalyzing}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                      Analyzing Resume...
                    </>
                  ) : (
                    <>
                      <FileText size={20} className="mr-2" />
                      Analyze My Resume
                    </>
                  )}
                </Button>

                {analysis && (
                  <Card className="bg-secondary/30 border-primary/20">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Sparkles size={18} className="mr-2 text-accent" />
                        AI Analysis Results
                      </h4>
                      <div className="prose prose-sm max-w-none">
                        <pre className="whitespace-pre-wrap text-sm text-muted-foreground font-inter">
                          {analysis}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <div className="text-left">
              <h3 className="font-space-grotesk font-semibold text-lg">
                Ready to start your project?
              </h3>
              <p className="text-muted-foreground">
                Let's discuss how we can bring your vision to life.
              </p>
            </div>
            <Button 
              size="lg"
              onClick={handleDirectEmail}
              className="bg-primary hover:bg-primary/90 px-8"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;