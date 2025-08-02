import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Users, FileText, MessageSquare, Video, Calendar, Star, User } from "lucide-react";
import { useState } from "react";

const GuidancePage = () => {
  const [question, setQuestion] = useState("");

  const mentors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      expertise: "Career Development",
      department: "Computer Science",
      rating: 4.9,
      sessions: 150,
      availability: "Available",
      specialties: ["Resume Building", "Interview Prep", "Career Planning"]
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      expertise: "Technical Skills",
      department: "Software Engineering", 
      rating: 4.8,
      sessions: 98,
      availability: "Busy",
      specialties: ["Programming", "System Design", "Tech Industry"]
    },
    {
      id: 3,
      name: "Ms. Priya Sharma",
      expertise: "Personal Development",
      department: "Psychology",
      rating: 4.9,
      sessions: 203,
      availability: "Available",
      specialties: ["Time Management", "Study Skills", "Stress Management"]
    }
  ];

  const guidanceServices = [
    {
      icon: FileText,
      title: "Resume & CV Building",
      description: "Get professional help creating compelling resumes that stand out to employers.",
      features: ["ATS-optimized templates", "Industry-specific guidance", "Expert review"]
    },
    {
      icon: Video,
      title: "Interview Preparation",
      description: "Practice with mock interviews and get feedback to boost your confidence.",
      features: ["Mock interview sessions", "Common questions prep", "Body language tips"]
    },
    {
      icon: MapPin,
      title: "Career Path Planning",
      description: "Discover career opportunities and plan your professional journey.",
      features: ["Career assessment", "Industry insights", "Growth planning"]
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Connect with experienced professionals and alumni for personalized guidance.",
      features: ["1-on-1 mentorship", "Industry connections", "Long-term support"]
    }
  ];

  const upcomingSessions = [
    {
      id: 1,
      title: "Resume Writing Workshop",
      mentor: "Dr. Sarah Johnson",
      date: "2024-02-20",
      time: "3:00 PM",
      type: "Group Session",
      spots: 8
    },
    {
      id: 2,
      title: "Technical Interview Prep",
      mentor: "Prof. Michael Chen",
      date: "2024-02-22",
      time: "10:00 AM", 
      type: "Workshop",
      spots: 12
    },
    {
      id: 3,
      title: "Career Planning Bootcamp",
      mentor: "Ms. Priya Sharma",
      date: "2024-02-25",
      time: "2:00 PM",
      type: "Intensive",
      spots: 5
    }
  ];

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available": return "bg-green-100 text-green-800";
      case "Busy": return "bg-yellow-100 text-yellow-800";
      case "Offline": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="bg-gradient-card rounded-lg p-6 border">
        <h1 className="text-3xl font-bold mb-2 text-gradient flex items-center gap-2">
          <MapPin className="h-8 w-8 text-primary" />
          Career Guidance & Mentorship
        </h1>
        <p className="text-muted-foreground">
          Get expert guidance for your career development, from resume building to interview preparation and beyond.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">25</p>
                <p className="text-sm text-muted-foreground">Active Mentors</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">180</p>
                <p className="text-sm text-muted-foreground">Sessions This Month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">4.8</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">95%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Guidance Services */}
      <Card className="shadow-soft border-0 bg-gradient-card">
        <CardHeader>
          <CardTitle>Our Guidance Services</CardTitle>
          <CardDescription>Comprehensive support for your career development journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guidanceServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="p-6 bg-background rounded-lg border space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                      <div className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">Get Started</Button>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Available Mentors */}
      <Card className="shadow-soft border-0 bg-gradient-card">
        <CardHeader>
          <CardTitle>Available Mentors</CardTitle>
          <CardDescription>Connect with experienced professionals for personalized guidance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="p-6 bg-background rounded-lg border">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{mentor.name}</h3>
                    <p className="text-muted-foreground">{mentor.expertise} • {mentor.department}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span>{mentor.rating}</span>
                      </div>
                      <span>{mentor.sessions} sessions completed</span>
                    </div>
                  </div>
                </div>
                <Badge className={getAvailabilityColor(mentor.availability)}>
                  {mentor.availability}
                </Badge>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.specialties.map((specialty, idx) => (
                  <Badge key={idx} variant="secondary">
                    {specialty}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Button disabled={mentor.availability === "Busy"}>
                  Book 1-on-1 Session
                </Button>
                <Button variant="outline">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Message
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Upcoming Sessions */}
      <Card className="shadow-soft border-0 bg-gradient-card">
        <CardHeader>
          <CardTitle>Upcoming Group Sessions</CardTitle>
          <CardDescription>Join group workshops and learning sessions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingSessions.map((session) => (
            <div key={session.id} className="p-4 bg-background rounded-lg border">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">{session.title}</h4>
                  <p className="text-sm text-muted-foreground">Led by {session.mentor}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-primary" />
                      {new Date(session.date).toLocaleDateString()}
                    </span>
                    <span>{session.time}</span>
                    <Badge variant="secondary">{session.type}</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <Button size="sm">Register</Button>
                  <p className="text-xs text-muted-foreground mt-1">{session.spots} spots left</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Ask a Question */}
      <Card className="shadow-soft border-0 bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Ask a Question
          </CardTitle>
          <CardDescription>
            Have a specific question? Our mentors will respond within 24 hours.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="What would you like guidance on? (career choices, skill development, interview prep, etc.)"
            className="min-h-[120px]"
          />
          <Button className="w-full">
            <MessageSquare className="h-4 w-4 mr-2" />
            Submit Question
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default GuidancePage;