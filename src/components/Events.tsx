import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Award } from 'lucide-react';
import eventReactConf from '@/assets/event-react-conf.jpg';
import eventHackathon from '@/assets/event-hackathon.jpg';
import eventMeetup from '@/assets/event-meetup.jpg';
import eventAws from '@/assets/event-aws.jpg';
import eventOpensource from '@/assets/event-opensource.jpg';
import eventDesignWorkshop from '@/assets/event-design-workshop.jpg';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'React Conf 2024',
      type: 'Conference',
      role: 'Speaker',
      description: 'Delivered a keynote presentation on "Modern React Patterns" to an audience of 500+ developers.',
      date: 'March 15, 2024',
      location: 'San Francisco, CA',
      attendees: '500+',
      achievement: 'Keynote Speaker',
      technologies: ['React', 'TypeScript', 'Performance Optimization'],
      image: eventReactConf
    },
    {
      id: 2,
      title: 'HackathonX Global',
      type: 'Hackathon',
      role: 'Winner',
      description: 'Led a team of 4 to develop an AI-powered sustainability platform, winning 1st place overall.',
      date: 'January 20-22, 2024',
      location: 'Virtual Event',
      attendees: '1000+',
      achievement: '1st Place Winner',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js'],
      image: eventHackathon
    },
    {
      id: 3,
      title: 'TechMeetup JavaScript',
      type: 'Meetup',
      role: 'Organizer',
      description: 'Organized monthly JavaScript meetups, fostering community growth and knowledge sharing.',
      date: 'Ongoing since 2023',
      location: 'New York, NY',
      attendees: '150+',
      achievement: 'Community Leader',
      technologies: ['JavaScript', 'Web Development', 'Community Building'],
      image: eventMeetup
    },
    {
      id: 4,
      title: 'AWS re:Invent',
      type: 'Conference',
      role: 'Attendee',
      description: 'Attended workshops on serverless architecture and cloud-native development patterns.',
      date: 'November 27-30, 2023',
      location: 'Las Vegas, NV',
      attendees: '50,000+',
      achievement: 'Certified Solutions Architect',
      technologies: ['AWS', 'Serverless', 'Cloud Architecture'],
      image: eventAws
    },
    {
      id: 5,
      title: 'Open Source Summit',
      type: 'Conference',
      role: 'Contributor',
      description: 'Contributed to multiple open-source projects and participated in maintainer discussions.',
      date: 'September 19-21, 2023',
      location: 'Bilbao, Spain',
      attendees: '2000+',
      achievement: 'OSS Contributor',
      technologies: ['Open Source', 'Git', 'Collaboration'],
      image: eventOpensource
    },
    {
      id: 6,
      title: 'Design Systems Workshop',
      type: 'Workshop',
      role: 'Facilitator',
      description: 'Conducted hands-on workshops on building scalable design systems for development teams.',
      date: 'August 10, 2023',
      location: 'London, UK',
      attendees: '80+',
      achievement: 'Workshop Leader',
      technologies: ['Design Systems', 'Figma', 'Component Libraries'],
      image: eventDesignWorkshop
    }
  ];

  const eventTypes = ['All', 'Conference', 'Hackathon', 'Meetup', 'Workshop'];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'Conference':
        return <Users size={20} />;
      case 'Hackathon':
        return <Award size={20} />;
      case 'Meetup':
        return <Users size={20} />;
      case 'Workshop':
        return <Users size={20} />;
      default:
        return <Calendar size={20} />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'Conference':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Hackathon':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Meetup':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Workshop':
        return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <section id="events" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-6">
            Events & Participation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Active participation in tech communities, conferences, and knowledge-sharing events across the globe.
          </p>
        </div>

        {/* Event Type Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {eventTypes.map((type) => (
            <button
              key={type}
              className="px-4 py-2 rounded-full text-sm font-medium bg-secondary/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 border border-border/30 hover:border-primary/30"
            >
              {type}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card 
              key={event.id} 
              className={`project-card fade-in fade-in-delay-${(index % 3) + 1} overflow-hidden`}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getEventColor(event.type)} border`}>
                      <span className="mr-1">{getEventIcon(event.type)}</span>
                      {event.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {event.role}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-space-grotesk font-semibold text-lg mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar size={16} className="mr-2 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin size={16} className="mr-2 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users size={16} className="mr-2 text-primary" />
                      {event.attendees} attendees
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Award size={16} className="mr-2 text-accent" />
                      <span className="text-sm font-medium text-accent">
                        {event.achievement}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {event.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary/50 text-xs rounded-md border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {event.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-secondary/50 text-xs rounded-md border border-border/30">
                        +{event.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover-glow">
            <div className="text-2xl font-bold text-primary mb-2">12+</div>
            <div className="text-muted-foreground text-sm">Events Attended</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover-glow">
            <div className="text-2xl font-bold text-primary mb-2">5</div>
            <div className="text-muted-foreground text-sm">Talks Given</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover-glow">
            <div className="text-2xl font-bold text-primary mb-2">3</div>
            <div className="text-muted-foreground text-sm">Awards Won</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover-glow">
            <div className="text-2xl font-bold text-primary mb-2">8</div>
            <div className="text-muted-foreground text-sm">Countries Visited</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;