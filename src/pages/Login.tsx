import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart, User, Building } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [activeTab, setActiveTab] = useState<'vendor' | 'supplier'>('vendor');
  const [loading, setLoading] = useState(false);
  
  const { user, signIn, signUp, userProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const isSignUp = location.pathname === '/signup';

  // Redirect if already logged in
  useEffect(() => {
    if (user && userProfile) {
      const from = (location.state as any)?.from?.pathname;
      if (from) {
        navigate(from, { replace: true });
      } else {
        const dashboardPath = userProfile.role === 'vendor' ? '/vendor-dashboard' : '/supplier-dashboard';
        navigate(dashboardPath, { replace: true });
      }
    }
  }, [user, userProfile, navigate, location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await signUp(email, password, activeTab, businessName);
        if (!error) {
          // User will be redirected automatically once profile is created
        }
      } else {
        const { error } = await signIn(email, password);
        if (!error) {
          // User will be redirected automatically
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-4">
            <ShoppingCart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              SourceMart
            </span>
          </Link>
          <h1 className="text-2xl font-bold">
            {isSignUp ? 'Get Started' : 'Welcome Back'}
          </h1>
          <p className="text-muted-foreground">
            {isSignUp ? 'Create your account' : 'Sign in to your account'}
          </p>
        </div>

        <Tabs 
          value={activeTab} 
          onValueChange={(value) => setActiveTab(value as 'vendor' | 'supplier')}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="vendor" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Vendor</span>
            </TabsTrigger>
            <TabsTrigger value="supplier" className="flex items-center space-x-2">
              <Building className="h-4 w-4" />
              <span>Supplier</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="vendor">
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle>
                  {isSignUp ? 'Vendor Sign Up' : 'Vendor Login'}
                </CardTitle>
                <CardDescription>
                  {isSignUp 
                    ? 'Create your vendor account to find suppliers' 
                    : 'Sign in to access your vendor dashboard'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="vendor@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                    />
                  </div>
                  {isSignUp && (
                    <div className="space-y-2">
                      <Label htmlFor="business-name">Business Name (Optional)</Label>
                      <Input
                        id="business-name"
                        type="text"
                        placeholder="Your Business Name"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                      />
                    </div>
                  )}
                  <Button 
                    type="submit" 
                    className="w-full" 
                    variant="hero"
                    disabled={loading}
                  >
                    {loading 
                      ? 'Processing...' 
                      : isSignUp 
                        ? 'Create Vendor Account' 
                        : 'Sign In as Vendor'
                    }
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="supplier">
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle>
                  {isSignUp ? 'Supplier Sign Up' : 'Supplier Login'}
                </CardTitle>
                <CardDescription>
                  {isSignUp 
                    ? 'Create your supplier account to list products' 
                    : 'Sign in to access your supplier dashboard'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="supplier@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                    />
                  </div>
                  {isSignUp && (
                    <div className="space-y-2">
                      <Label htmlFor="business-name">Business Name (Optional)</Label>
                      <Input
                        id="business-name"
                        type="text"
                        placeholder="Your Business Name"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                      />
                    </div>
                  )}
                  <Button 
                    type="submit" 
                    className="w-full" 
                    variant="hero"
                    disabled={loading}
                  >
                    {loading 
                      ? 'Processing...' 
                      : isSignUp 
                        ? 'Create Supplier Account' 
                        : 'Sign In as Supplier'
                    }
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">
            {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          </span>
          <Link 
            to={isSignUp ? "/login" : "/signup"} 
            className="text-primary hover:underline font-medium"
          >
            {isSignUp ? 'Sign in here' : 'Sign up here'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;