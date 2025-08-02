import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Code, Palette, Zap, Globe, Camera, Music, Book, Calendar, MessageSquare, Crown } from "lucide-react";

const ClubsPage = () => {
  const clubs = [
    {
      id: 1,
      name: "ITM Coding Club",
      description: "Master programming languages, participate in coding competitions, and build amazing projects together.",
      icon: Code,
      members: 245,
      category: "Technical",
      status: "Very Active",
      events: 12,
      nextEvent: "Weekly Coding Challenge",
      nextEventDate: "2024-02-18",
      activities: ["Coding Contests", "Hackathons", "Tech Talks", "Project Reviews"],
      difficulty: "All Levels"
    },
    {
      id: 2,
      name: "Design & Innovation Club",
      description: "Explore UI/UX design, graphic design, and innovative product development methodologies.",
      icon: Palette,
      members: 189,
      category: "Creative",
      status: "Active",
      events: 8,
      nextEvent: "Design Thinking Workshop",
      nextEventDate: "2024-02-20",
      activities: ["Design Workshops", "Portfolio Reviews", "Design Challenges", "Client Projects"],
      difficulty: "Beginner to Advanced"
    },
    {
      id: 3,
      name: "AI & Machine Learning Society",
      description: "Dive deep into artificial intelligence, machine learning, and data science applications.",
      icon: Zap,
      members: 156,
      category: "Technical",
      status: "Very Active",
      events: 15,
      nextEvent: "ML Model Deployment",
      nextEventDate: "2024-02-22",
      activities: ["Research Projects", "Paper Reading", "Model Building", "Industry Talks"],
      difficulty: "Intermediate to Advanced"
    },
    {
      id: 4,
      name: "Web Development Circle",
      description: "Build modern web applications using cutting-edge technologies and frameworks.",
      icon: Globe,
      members: 203,
      category: "Technical",
      status: "Active",
      events: 10,
      nextEvent: "React.js Masterclass",
      nextEventDate: "2024-02-25",
      activities: ["Full-stack Projects", "Framework Tutorials", "Code Reviews", "Deployment Sessions"],
      difficulty: "All Levels"
    },
    {
      id: 5,
      name: "Photography Club",
      description: "Capture moments, learn photography techniques, and showcase your creative vision.",
      icon: Camera,
      members: 98,
      category: "Creative",
      status: "Active",
      events: 6,
      nextEvent: "Campus Photo Walk",
      nextEventDate: "2024-02-19",
      activities: ["Photo Walks", "Editing Workshops", "Equipment Sharing", "Exhibitions"],
      difficulty: "All Levels"
    },
    {
      id: 6,
      name: "Literary Society",
      description: "Express through words, participate in debates, and explore the power of literature.",
      icon: Book,
      members: 87,
      category: "Cultural",
      status: "Moderate",
      events: 4,
      nextEvent: "Poetry Slam",
      nextEventDate: "2024-02-28",
      activities: ["Poetry Sessions", "Book Clubs", "Writing Workshops", "Literary Events"],
      difficulty: "All Levels"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Weekly Coding Challenge",
      club: "ITM Coding Club",
      date: "2024-02-18",
      time: "4:00 PM",
      location: "Lab A-201",
      participants: 45
    },
    {
      id: 2,
      title: "Campus Photo Walk",
      club: "Photography Club", 
      date: "2024-02-19",
      time: "6:00 AM",
      location: "Main Campus",
      participants: 23
    },
    {
      id: 3,
      title: "Design Thinking Workshop",
      club: "Design & Innovation Club",
      date: "2024-02-20",
      time: "2:00 PM",
      location: "Design Studio",
      participants: 32
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Very Active": return "bg-green-100 text-green-800";
      case "Active": return "bg-blue-100 text-blue-800";
      case "Moderate": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Technical": return "bg-purple-100 text-purple-800";
      case "Creative": return "bg-pink-100 text-pink-800";
      case "Cultural": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="bg-gradient-card rounded-lg p-6 border">
        <h1 className="text-3xl font-bold mb-2 text-gradient flex items-center gap-2">
          <Users className="h-8 w-8 text-primary" />
          Student Clubs & Communities
        </h1>
        <p className="text-muted-foreground">
          Join active communities, participate in events, and connect with like-minded students to enhance your university experience.
        </p>
      </div>

      {/* Club Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Active Clubs</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">978</p>
                <p className="text-sm text-muted-foreground">Total Members</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">55</p>
                <p className="text-sm text-muted-foreground">Events This Month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">89%</p>
                <p className="text-sm text-muted-foreground">Engagement Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Clubs */}
      <Card className="shadow-soft border-0 bg-gradient-card">
        <CardHeader>
          <CardTitle>Active Clubs</CardTitle>
          <CardDescription>Discover and join communities that match your interests</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {clubs.map((club) => {
            const IconComponent = club.icon;
            return (
              <div key={club.id} className="p-6 bg-background rounded-lg border space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{club.name}</h3>
                      <p className="text-muted-foreground">{club.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className={getCategoryColor(club.category)}>
                          {club.category}
                        </Badge>
                        <Badge className={getStatusColor(club.status)}>
                          {club.status}
                        </Badge>
                        <Badge variant="outline">{club.difficulty}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="font-medium">Club Stats</p>
                    <p className="text-muted-foreground">{club.members} members</p>
                    <p className="text-muted-foreground">{club.events} events this semester</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Next Event</p>
                    <p className="text-muted-foreground">{club.nextEvent}</p>
                    <p className="text-muted-foreground">{new Date(club.nextEventDate).toLocaleDateString()}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Activities</p>
                    <div className="flex flex-wrap gap-1">
                      {club.activities.slice(0, 2).map((activity, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {activity}
                        </Badge>
                      ))}
                      {club.activities.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{club.activities.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button>Join Club</Button>
                  <Button variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                  <Button variant="outline">View Events</Button>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Upcoming Club Events */}
      <Card className="shadow-soft border-0 bg-gradient-card">
        <CardHeader>
          <CardTitle>Upcoming Club Events</CardTitle>
          <CardDescription>Don't miss these exciting club activities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="p-4 bg-background rounded-lg border">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h4 className="font-bold">{event.title}</h4>
                  <p className="text-sm text-muted-foreground">Organized by {event.club}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-primary" />
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                    <span>{event.time}</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <Button size="sm">Join Event</Button>
                  <p className="text-xs text-muted-foreground mt-1">{event.participants} participants</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Create New Club */}
      <Card className="shadow-soft border-0 bg-gradient-card">
        <CardHeader>
          <CardTitle>Start Your Own Club</CardTitle>
          <CardDescription>
            Have an idea for a new club? Submit your proposal and bring students together around your passion.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">
            <Users className="h-4 w-4 mr-2" />
            Propose New Club
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClubsPage;