import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { userAPI } from "@/lib/userApi";
import { LoginCredentials, RegisterData } from "@/types/user";
import { useToast } from "@/components/ui/use-toast";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<LoginCredentials | RegisterData>({
    email: "",
    password: "",
    ...(isLogin ? {} : { username: "" })
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await userAPI.login(formData as LoginCredentials);
      } else {
        await userAPI.register(formData as RegisterData);
      }
      window.location.href = "/dashboard";
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Button variant="ghost" onClick={goBack} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-gradient">ITM University</span>
          </div>
        </div>

        <Card className="bg-gradient-card shadow-elegant border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gradient">
              {isLogin ? "Welcome Back" : "Join ITM Platform"}
            </CardTitle>
            <CardDescription>
              {isLogin 
                ? "Sign in to access your student dashboard" 
                : "Create your account to get started"
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input
                    name="username"
                    placeholder="Enter your full name"
                    value={'username' in formData ? formData.username : ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium">Student Email</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="your.email@student.itm.edu"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Student ID</label>
                  <Input
                    name="studentId"
                    placeholder="Enter your student ID"
                    value={'studentId' in formData ? (formData as RegisterData).studentId ?? '' : ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}

              <Button type="submit" className="w-full" variant="hero">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setFormData({
                      email: "",
                      password: "",
                      ...(isLogin ? { username: "", studentId: "" } : {})
                    });
                  }}
                  className="text-primary hover:underline font-medium"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
