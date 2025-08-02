import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="ITM University Campus" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-float">
            Transform Your Academic Journey
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Empowering ITM University students with the tools, resources, and community they need to excel
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="animate-glow">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gradient-card p-6 rounded-xl shadow-soft border transition-smooth hover:shadow-medium">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">1000+</h3>
              <p className="text-muted-foreground">Active Students</p>
            </div>
            <div className="bg-gradient-card p-6 rounded-xl shadow-soft border transition-smooth hover:shadow-medium">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-muted-foreground">Resources Shared</p>
            </div>
            <div className="bg-gradient-card p-6 rounded-xl shadow-soft border transition-smooth hover:shadow-medium">
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-muted-foreground">Events Organized</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;