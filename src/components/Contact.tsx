import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail, Download, Send } from 'lucide-react';
import profilePic from '@/assets/thushanth.jpg';

const Contact = () => {
  const { toast } = useToast();

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'thushanth.22@cse.mrt.ac.lk',
      href: 'mailto:thushanth.22@cse.mrt.ac.lk',
      color: 'hover:text-red-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@thusykanna',
      href: 'https://github.com/thusykanna',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Thushanth Uthayarajan',
      href: 'https://linkedin.com/in/thushanth-uthayarajan',
      color: 'hover:text-blue-400'
    }
  ];

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
    window.location.href = 'mailto:thushanth.22@cse.mrt.ac.lk?subject=Let\'s work together&body=Hi Thushanth, I\'d like to discuss a potential opportunity with you.';
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-6">
            Let's Work Together
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
              </CardTitle>
              <CardDescription>
                Ready to bring your ideas to life? Let's connect and discuss your next project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Profile Picture */}
                <div className="md:col-span-1 flex justify-center md:justify-start mt-10">
                    <div className="relative">
                    <img
                      src={profilePic}
                      alt="Thushanth Uthayarajan"
                      className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                    />
                    </div>
                </div>

                {/* Contact Information */}
                <div className="md:col-span-2 space-y-6">
                  <div className="grid gap-4">
                    {contactLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-3 rounded-lg border border-border/20 hover:border-primary/50 transition-all duration-300 hover:bg-primary/5 ${link.color}`}
                      >
                        <link.icon className="w-5 h-5" />
                        <div>
                          <div className="font-medium">{link.label}</div>
                          <div className="text-sm text-muted-foreground">{link.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      onClick={handleDownloadCV}
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </Button>
                    <Button 
                      onClick={handleDirectEmail}
                      variant="outline"
                      className="flex-1"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8 mb-[-60px]">
          <p className="text-muted-foreground">
            Looking forward to hearing from you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;