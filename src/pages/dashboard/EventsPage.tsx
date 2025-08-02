import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Trophy, Code, Palette, Zap } from "lucide-react";

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI in Assessment Competition",
      description: "Showcase your AI skills in this exciting competition focused on educational assessment tools.",
      date: "2024-02-15",
      time: "10:00 AM",
      location: "Tech Lab A",
      participants: 45,
      maxParticipants: 100,
      category: "Competition",
      difficulty: "Intermediate",
      icon: Zap,
      status: "Open"
    },
    {
      id: 2,
      title: "React & Next.js Workshop",
      description: "Learn modern web development with hands-on experience in React and Next.js frameworks.",
      date: "2024-02-18",
      time: "2:00 PM",
      location: "Computer Lab 1",
      participants: 78,
      maxParticipants: 80,
      category: "Workshop",
      difficulty: "Beginner",
      icon: Code,
      status: "Almost Full"
    },
    {
      id: 3,
      title: "Tech Hackathon 2024",
      description: "48-hour hackathon to build innovative solutions for real-world problems.",
      date: "2024-02-25",
      time: "9:00 AM",
      location: "Main Auditorium",
      participants: 120,
      maxParticipants: 150,
      category: "Hackathon",
      difficulty: "Advanced",
      icon: Trophy,
      status: "Open"
    },
    {
      id: 4,
      title: "UI/UX Design Masterclass",
      description: "Master the principles of user interface and user experience design with industry experts.",
      date: "2024-03-02",
      time: "11:00 AM",
      location: "Design Studio",
      participants: 32,
      maxParticipants: 60,
      category: "Workshop",
      difficulty: "Intermediate",
      icon: Palette,
      status: "Open"
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Python Programming Bootcamp",
      description: "Intensive 3-day bootcamp covering Python fundamentals to advanced concepts.",
      date: "2024-01-20",
      participants: 95,
      status: "Completed",
      rating: 4.8
    },
    {
      id: 6,
      title: "Cybersecurity Awareness Week",
      description: "Week-long series of talks and workshops on cybersecurity best practices.",
      date: "2024-01-15",
      participants: 200,
      status: "Completed",
      rating: 4.6
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-green-100 text-green-800";
      case "Almost Full": return "bg-yellow-100 text-yellow-800";
      case "Full": return "bg-red-100 text-red-800";
      case "Completed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-blue-100 text-blue-800";
      case "Intermediate": return "bg-purple-100 text-purple-800";
      case "Advanced": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="bg-gradient-card rounded-lg p-6 border">
        <h1 className="text-3xl font-bold mb-2 text-gradient flex items-center gap-2">
          <Calendar className="h-8 w-8 text-primary" />
          Events & Hackathons
        </h1>
        <p className="text-muted-foreground">
          Discover and participate in exciting events, workshops, and competitions to enhance your skills and network.
        </p>
      </div>

      {/* Event Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">This Month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">450</p>
                <p className="text-sm text-muted-foreground">Participants</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">Competitions</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">15</p>
                <p className="text-sm text-muted-foreground">Workshops</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card className="shadow-soft border-0 bg-gradient-card">
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Don't miss out on these exciting upcoming events!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {upcomingEvents.map((event) => {
            const IconComponent = event.icon;
            return (
              <div key={event.id} className="p-6 bg-background rounded-lg border space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{event.category}</Badge>
                        <Badge className={getDifficultyColor(event.difficulty)}>
                          {event.difficulty}
                        </Badge>
                        <Badge className={getStatusColor(event.status)}>
                          {event.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{event.participants}/{event.maxParticipants} participants</span>
                  </div>
                  <Button 
                    disabled={event.status === "Full"}
                    className={event.status === "Almost Full" ? "bg-yellow-600 hover:bg-yellow-700" : ""}
                  >
                    {event.status === "Full" ? "Event Full" : "Register Now"}
                  </Button>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Past Events */}
      <Card className="shadow-soft border-0 bg-gradient-card">
        <CardHeader>
          <CardTitle>Past Events</CardTitle>
          <CardDescription>Check out what we've accomplished together</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {pastEvents.map((event) => (
            <div key={event.id} className="p-4 bg-background rounded-lg border">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">{event.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                    <span>{event.participants} participants</span>
                    <span>⭐ {event.rating}/5.0</span>
                  </div>
                </div>
                <Badge className={getStatusColor(event.status)}>
                  {event.status}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default EventsPage;