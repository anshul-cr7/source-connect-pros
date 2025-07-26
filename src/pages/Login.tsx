import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Building } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [vendorEmail, setVendorEmail] = useState("");
  const [vendorPassword, setVendorPassword] = useState("");
  const [supplierEmail, setSupplierEmail] = useState("");
  const [supplierPassword, setSupplierPassword] = useState("");

  const handleVendorLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - will be replaced with Supabase auth
    console.log("Vendor login:", { email: vendorEmail, password: vendorPassword });
    // Redirect to vendor dashboard
    window.location.href = "/vendor-dashboard";
  };

  const handleSupplierLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - will be replaced with Supabase auth
    console.log("Supplier login:", { email: supplierEmail, password: supplierPassword });
    // Redirect to supplier dashboard
    window.location.href = "/supplier-dashboard";
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
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>

        <Tabs defaultValue="vendor" className="space-y-6">
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
                <CardTitle>Vendor Login</CardTitle>
                <CardDescription>
                  Sign in to access your vendor dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleVendorLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="vendor-email">Email</Label>
                    <Input
                      id="vendor-email"
                      type="email"
                      placeholder="vendor@example.com"
                      value={vendorEmail}
                      onChange={(e) => setVendorEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vendor-password">Password</Label>
                    <Input
                      id="vendor-password"
                      type="password"
                      value={vendorPassword}
                      onChange={(e) => setVendorPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" variant="hero">
                    Sign In as Vendor
                  </Button>
                </form>
                <div className="mt-4 text-center text-sm">
                  <Link to="/forgot-password" className="text-primary hover:underline">
                    Forgot your password?
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="supplier">
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle>Supplier Login</CardTitle>
                <CardDescription>
                  Sign in to access your supplier dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSupplierLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="supplier-email">Email</Label>
                    <Input
                      id="supplier-email"
                      type="email"
                      placeholder="supplier@example.com"
                      value={supplierEmail}
                      onChange={(e) => setSupplierEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="supplier-password">Password</Label>
                    <Input
                      id="supplier-password"
                      type="password"
                      value={supplierPassword}
                      onChange={(e) => setSupplierPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" variant="hero">
                    Sign In as Supplier
                  </Button>
                </form>
                <div className="mt-4 text-center text-sm">
                  <Link to="/forgot-password" className="text-primary hover:underline">
                    Forgot your password?
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">Don't have an account? </span>
          <Link to="/signup" className="text-primary hover:underline font-medium">
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;