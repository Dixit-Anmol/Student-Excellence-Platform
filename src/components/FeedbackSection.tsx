import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Shield, Send, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim() || !category) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Feedback Submitted Successfully!",
      description: "Thank you for your valuable feedback. We'll review it soon.",
      variant: "default",
    });

    setFeedback("");
    setCategory("");
  };

  return (
    <section id="feedback" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Your Voice Matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share your thoughts anonymously and help us improve the university experience for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Feedback Form */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-success" />
                Anonymous Feedback
              </CardTitle>
              <CardDescription>
                Your identity is completely protected. Share your honest thoughts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Category
                  </label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select feedback category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="academic">Academic Issues</SelectItem>
                      <SelectItem value="facilities">Campus Facilities</SelectItem>
                      <SelectItem value="events">Events & Activities</SelectItem>
                      <SelectItem value="career">Career Services</SelectItem>
                      <SelectItem value="technology">Technology & Platform</SelectItem>
                      <SelectItem value="general">General Suggestions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Your Feedback
                  </label>
                  <Textarea
                    placeholder="Share your thoughts, suggestions, or concerns..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="min-h-32 resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Submit Feedback
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="space-y-6">
            <Card className="shadow-soft border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle>Why Your Feedback Matters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-warning mt-1" />
                  <div>
                    <h4 className="font-semibold">Improve Student Experience</h4>
                    <p className="text-sm text-muted-foreground">
                      Help us identify and fix issues that affect your daily university life
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-warning mt-1" />
                  <div>
                    <h4 className="font-semibold">Shape Future Policies</h4>
                    <p className="text-sm text-muted-foreground">
                      Your suggestions directly influence university decisions and policies
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-warning mt-1" />
                  <div>
                    <h4 className="font-semibold">Build Better Community</h4>
                    <p className="text-sm text-muted-foreground">
                      Help create a more engaging and supportive environment for all students
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">100% Anonymous</Badge>
              <Badge variant="secondary">Secure Platform</Badge>
              <Badge variant="secondary">Quick Response</Badge>
              <Badge variant="secondary">Action-Oriented</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;