import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Send, ThumbsUp, Eye, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!feedback.trim() || !category) {
      toast({
        title: "Please fill all fields",
        description: "Both feedback and category are required.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Feedback submitted successfully!",
      description: "Thank you for your valuable feedback. It will be reviewed by the administration.",
    });

    setFeedback("");
    setCategory("");
  };

  const recentFeedback = [
    {
      id: 1,
      content: "The library needs more study spaces during exam periods. It gets too crowded.",
      category: "Infrastructure",
      time: "2 hours ago",
      likes: 15,
      status: "Under Review"
    },
    {
      id: 2,
      content: "More coding workshops and hackathons would help students stay updated with industry trends.",
      category: "Academic",
      time: "5 hours ago",
      likes: 23,
      status: "Approved"
    },
    {
      id: 3,
      content: "The cafeteria could offer more healthy food options and vegetarian choices.",
      category: "Food & Services",
      time: "1 day ago",
      likes: 8,
      status: "In Progress"
    },
    {
      id: 4,
      content: "WiFi connectivity in the hostel areas needs improvement, especially during peak hours.",
      category: "Technology",
      time: "2 days ago",
      likes: 31,
      status: "Resolved"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Under Review": return "bg-yellow-100 text-yellow-800";
      case "Resolved": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="bg-gradient-card rounded-lg p-6 border">
        <h1 className="text-3xl font-bold mb-2 text-gradient flex items-center gap-2">
          <MessageSquare className="h-8 w-8 text-primary" />
          Anonymous Feedback
        </h1>
        <p className="text-muted-foreground">
          Share your thoughts, suggestions, and concerns safely. Your identity will remain completely anonymous.
        </p>
      </div>

      {/* Submit Feedback */}
      <Card className="shadow-soft border-0 bg-gradient-card">
        <CardHeader>
          <CardTitle>Submit Your Feedback</CardTitle>
          <CardDescription>
            Help us improve by sharing your honest feedback about any aspect of university life.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Category</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="infrastructure">Infrastructure</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="food-services">Food & Services</SelectItem>
                <SelectItem value="administration">Administration</SelectItem>
                <SelectItem value="events">Events & Activities</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Your Feedback</label>
            <Textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your thoughts, suggestions, or concerns here..."
              className="min-h-[120px]"
            />
          </div>
          <Button onClick={handleSubmit} className="w-full">
            <Send className="h-4 w-4 mr-2" />
            Submit Anonymous Feedback
          </Button>
        </CardContent>
      </Card>

      {/* Recent Community Feedback */}
      <Card className="shadow-soft border-0 bg-gradient-card">
        <CardHeader>
          <CardTitle>Community Feedback</CardTitle>
          <CardDescription>
            See what other students are saying and support feedback you agree with.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentFeedback.map((item) => (
            <div key={item.id} className="p-4 bg-background rounded-lg border space-y-3">
              <div className="flex justify-between items-start">
                <Badge variant="secondary" className="text-xs">
                  {item.category}
                </Badge>
                <Badge className={`text-xs ${getStatusColor(item.status)}`}>
                  {item.status}
                </Badge>
              </div>
              <p className="text-sm leading-relaxed">{item.content}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {item.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    Anonymous
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="h-6 px-2">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  {item.likes}
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Feedback Guidelines */}
      <Card className="shadow-soft border-0 bg-gradient-card">
        <CardHeader>
          <CardTitle>Feedback Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Be constructive and specific in your feedback</li>
            <li>• Avoid personal attacks or inappropriate language</li>
            <li>• Provide suggestions for improvement when possible</li>
            <li>• Your feedback will be reviewed within 48 hours</li>
            <li>• Updates on your feedback will be posted in the community section</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackPage;