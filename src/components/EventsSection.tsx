import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Trophy, Code } from "lucide-react";

const upcomingEvents = [
  {
    title: "AI & Machine Learning Hackathon",
    description: "48-hour intensive hackathon focusing on AI solutions for real-world problems",
    date: "March 15-17, 2024",
    time: "9:00 AM",
    location: "Tech Hub, ITM Campus",
    participants: "50+ registered",
    prize: "₹50,000 prize pool",
    category: "Hackathon",
    status: "Registration Open"
  },
  {
    title: "Career Guidance Workshop",
    description: "Learn resume building, interview skills, and career planning from industry experts",
    date: "March 20, 2024",
    time: "2:00 PM",
    location: "Auditorium A",
    participants: "100+ seats",
    prize: "Free certificates",
    category: "Workshop",
    status: "Few Seats Left"
  },
  {
    title: "Tech Talk: Future of Web Development",
    description: "Industry professionals share insights on modern web technologies and trends",
    date: "March 25, 2024",
    time: "11:00 AM",
    location: "Seminar Hall",
    participants: "80+ registered",
    prize: "Networking opportunity",
    category: "Tech Talk",
    status: "Registration Open"
  }
];

const EventsSection = () => {
  return (
    <section id="events" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Upcoming Events & Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Engage with exciting events, hackathons, and workshops designed to boost your skills and enthusiasm
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth border-0 bg-gradient-card">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={event.status === "Registration Open" ? "default" : "secondary"}>
                    {event.status}
                  </Badge>
                  <Badge variant="outline">{event.category}</Badge>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription className="text-base">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{event.participants}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Trophy className="h-4 w-4 text-warning" />
                    <span>{event.prize}</span>
                  </div>
                </div>
                
                <Button 
                  variant={event.status === "Registration Open" ? "hero" : "outline"} 
                  className="w-full"
                  disabled={event.status === "Few Seats Left"}
                >
                  {event.status === "Registration Open" ? "Register Now" : "Join Waitlist"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-card p-8 rounded-xl shadow-soft border max-w-2xl mx-auto">
            <Code className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Missing Your Favorite Event?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for new ideas! Suggest events you'd like to see or volunteer to organize one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero">Suggest Event</Button>
              <Button variant="outline">Become Organizer</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;