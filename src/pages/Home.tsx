import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle, Users, ShieldCheck, TrendingUp, Star, Quote } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useAuth } from "@/hooks/useAuth";

const Home = () => {
  const { user, userProfile } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (user && userProfile) {
      // Redirect to appropriate dashboard
      const dashboardPath = userProfile.role === 'vendor' ? '/vendor-dashboard' : '/supplier-dashboard';
      navigate(dashboardPath);
    } else {
      // Redirect to signup
      navigate('/signup');
    }
  };

  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Verified Suppliers",
      description: "All suppliers are thoroughly vetted and verified for quality and reliability."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Secure Transactions",
      description: "Safe and secure payment processing with buyer protection."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Real-time Analytics",
      description: "Track your orders, expenses, and supplier performance in real-time."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Street Food Vendor",
      content: "SourceMart helped me reduce my ingredient costs by 30% while maintaining quality. The suppliers are reliable and delivery is always on time.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Vegetable Supplier",
      content: "As a supplier, SourceMart gave me access to hundreds of vendors. My business has grown 2x since joining the platform.",
      rating: 5
    },
    {
      name: "Meera Patel",
      role: "Spice Vendor",
      content: "The chat feature makes communication so easy. I can coordinate with multiple suppliers effortlessly.",
      rating: 5
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Vendors" },
    { number: "5,000+", label: "Verified Suppliers" },
    { number: "1M+", label: "Orders Completed" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted">
        <div className="container py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  🚀 India's #1 Supplier Marketplace
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Connect with{" "}
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    Verified Suppliers
                  </span>{" "}
                  for Your Street Food Business
                </h1>
                <p className="text-xl text-muted-foreground">
                  Find affordable, high-quality raw materials from trusted suppliers. 
                  Streamline your sourcing process and grow your street food business.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="hero" className="w-full sm:w-auto" onClick={handleGetStarted}>
                  {user ? 'Go to Dashboard' : 'Start Sourcing Now'}
                </Button>
                <Link to="/suppliers">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Browse Suppliers
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm text-muted-foreground">Free to join</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm text-muted-foreground">Verified suppliers only</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Street food vendors connecting with suppliers"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Why Choose SourceMart?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're building India's most trusted marketplace for street food vendors and suppliers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-custom-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
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

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Thousands of vendors and suppliers trust SourceMart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-custom-lg">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary mb-4" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container text-center">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Sourcing?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of vendors and suppliers who are already growing their business with SourceMart
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto" onClick={handleGetStarted}>
                {user ? 'Go to Dashboard' : 'Get Started Free'}
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;