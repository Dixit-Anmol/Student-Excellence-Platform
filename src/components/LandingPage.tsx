import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowRight, Users, BookOpen, Trophy, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const LandingPage = () => {
  const handleLogin = () => {
    window.location.href = "/login";
  };

  const handleSignUp = () => {
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen">
      {/* Premium Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-10 w-10 text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-gradient">ITM University</h1>
              <p className="text-sm text-muted-foreground">Student Excellence Platform</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={handleLogin}>
              Login
            </Button>
            <Button variant="hero" onClick={handleSignUp}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="ITM University Campus" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-card p-2 pr-4 rounded-full border mb-8 animate-glow">
              <div className="bg-primary text-primary-foreground rounded-full p-2">
                <Star className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">Empowering 1000+ Students Daily</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gradient animate-float">
              Elevate Your
              <br />
              <span className="text-primary">Academic Journey</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              The ultimate platform designed exclusively for ITM University students. 
              Access resources, connect with peers, and accelerate your success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <Button variant="hero" size="xl" className="animate-glow" onClick={handleSignUp}>
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </div>

            {/* Premium Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant border transition-smooth hover:shadow-glow hover:scale-105">
                <Users className="h-14 w-14 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-3 text-gradient">1000+</h3>
                <p className="text-muted-foreground text-lg">Active Students</p>
              </div>
              <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant border transition-smooth hover:shadow-glow hover:scale-105">
                <BookOpen className="h-14 w-14 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-3 text-gradient">500+</h3>
                <p className="text-muted-foreground text-lg">Resources Shared</p>
              </div>
              <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant border transition-smooth hover:shadow-glow hover:scale-105">
                <Trophy className="h-14 w-14 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-3 text-gradient">50+</h3>
                <p className="text-muted-foreground text-lg">Events Organized</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-32 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and resources designed to enhance your academic experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Anonymous Feedback", desc: "Share thoughts safely", icon: "💬" },
              { title: "Previous Papers", desc: "Access exam resources", icon: "📚" },
              { title: "Career Guidance", desc: "Resume & career help", icon: "🎯" },
              { title: "Tech Events", desc: "Hackathons & competitions", icon: "🚀" },
              { title: "Study Groups", desc: "Connect with peers", icon: "👥" },
              { title: "Mentorship", desc: "Get expert guidance", icon: "🌟" }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-card p-6 rounded-2xl shadow-soft border transition-smooth hover:shadow-medium hover:scale-105">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
              Ready to Transform Your Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Join thousands of ITM students who are already accelerating their success
            </p>
            <Button variant="hero" size="xl" className="animate-glow" onClick={handleSignUp}>
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gradient-card py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold text-gradient">ITM University Platform</span>
          </div>
          <p className="text-muted-foreground">
            Empowering students • Building futures • Creating excellence
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;