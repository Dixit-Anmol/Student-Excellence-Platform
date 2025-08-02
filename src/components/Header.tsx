import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary">ITM University</h1>
              <p className="text-xs text-muted-foreground">Student Portal</p>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#home" className="transition-smooth hover:text-primary">
            Home
          </a>
          <a href="#feedback" className="transition-smooth hover:text-primary">
            Feedback
          </a>
          <a href="#events" className="transition-smooth hover:text-primary">
            Events
          </a>
          <a href="#resources" className="transition-smooth hover:text-primary">
            Resources
          </a>
          <a href="#guidance" className="transition-smooth hover:text-primary">
            Guidance
          </a>
          <a href="#clubs" className="transition-smooth hover:text-primary">
            Clubs
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <User className="h-4 w-4" />
            Student Login
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;