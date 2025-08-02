import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Calendar, FileText, MapPin, Users, Lightbulb } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Anonymous Feedback",
    description: "Share your thoughts, suggestions, and concerns safely through our secure feedback platform.",
    color: "text-blue-600"
  },
  {
    icon: Calendar,
    title: "Events & Hackathons",
    description: "Discover and participate in university events, competitions, and hackathons to boost engagement.",
    color: "text-green-600"
  },
  {
    icon: FileText,
    title: "Previous Year Papers",
    description: "Access a comprehensive repository of previous year question papers for all subjects.",
    color: "text-purple-600"
  },
  {
    icon: MapPin,
    title: "Career Guidance",
    description: "Get professional mentorship, resume building tips, and career assessment tools.",
    color: "text-orange-600"
  },
  {
    icon: Users,
    title: "Student Clubs",
    description: "Join active tech clubs and communities that organize regular learning sessions.",
    color: "text-red-600"
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Collaborate on projects, share ideas, and turn your innovations into reality.",
    color: "text-yellow-600"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform addresses every challenge faced by ITM University students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth border-0 bg-gradient-card">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;