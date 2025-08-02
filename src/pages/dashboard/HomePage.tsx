import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Trophy, Calendar, MessageSquare, ArrowRight } from "lucide-react";

const HomePage = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-card rounded-lg p-6 border">
        <h1 className="text-3xl font-bold mb-2 text-gradient">Welcome to ITM University Portal</h1>
        <p className="text-muted-foreground mb-4">
          Your gateway to academic excellence, community engagement, and career growth.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Students</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resources</CardTitle>
            <BookOpen className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">567</div>
            <p className="text-xs text-muted-foreground">Available now</p>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Events</CardTitle>
            <Trophy className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Events
            </CardTitle>
            <CardDescription>Don't miss out on exciting events</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-background rounded-lg">
              <div>
                <p className="font-medium">AI in Assessment Competition</p>
                <p className="text-sm text-muted-foreground">Tomorrow, 10:00 AM</p>
              </div>
              <Button size="sm" variant="outline">View</Button>
            </div>
            <div className="flex justify-between items-center p-3 bg-background rounded-lg">
              <div>
                <p className="font-medium">Tech Hackathon 2024</p>
                <p className="text-sm text-muted-foreground">Next week</p>
              </div>
              <Button size="sm" variant="outline">Register</Button>
            </div>
            <Button variant="ghost" className="w-full">
              View All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-soft border-0 bg-gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Recent Feedback
            </CardTitle>
            <CardDescription>Community insights and suggestions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-background rounded-lg">
              <p className="text-sm">"More coding workshops needed"</p>
              <p className="text-xs text-muted-foreground mt-1">Anonymous • 2 hours ago</p>
            </div>
            <div className="p-3 bg-background rounded-lg">
              <p className="text-sm">"Improve library resources"</p>
              <p className="text-xs text-muted-foreground mt-1">Anonymous • 1 day ago</p>
            </div>
            <Button variant="ghost" className="w-full">
              Share Your Feedback <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-soft border-0 bg-gradient-card hover:shadow-medium transition-smooth">
          <CardHeader>
            <CardTitle>Anonymous Feedback</CardTitle>
            <CardDescription>Share your thoughts safely</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Get Started</Button>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0 bg-gradient-card hover:shadow-medium transition-smooth">
          <CardHeader>
            <CardTitle>Previous Papers</CardTitle>
            <CardDescription>Access exam resources</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Browse Papers</Button>
          </CardContent>
        </Card>
        <Card className="shadow-soft border-0 bg-gradient-card hover:shadow-medium transition-smooth">
          <CardHeader>
            <CardTitle>Career Guidance</CardTitle>
            <CardDescription>Resume & career help</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Get Guidance</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;