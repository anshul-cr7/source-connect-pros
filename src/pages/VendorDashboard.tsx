import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Heart, 
  ShoppingCart, 
  MessageCircle, 
  TrendingUp, 
  Package, 
  Clock,
  CheckCircle,
  Star
} from "lucide-react";
import { useState } from "react";

const VendorDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - will be replaced with Supabase data
  const recentOrders = [
    { id: "ORD-001", supplier: "Fresh Veggies Co.", items: "Tomatoes, Onions", amount: "₹2,500", status: "delivered", date: "2024-01-20" },
    { id: "ORD-002", supplier: "Spice Masters", items: "Red Chili, Turmeric", amount: "₹1,800", status: "pending", date: "2024-01-19" },
    { id: "ORD-003", supplier: "Grain Depot", items: "Rice, Wheat Flour", amount: "₹3,200", status: "shipped", date: "2024-01-18" }
  ];

  const favoriteSuppliers = [
    { id: 1, name: "Fresh Veggies Co.", rating: 4.8, location: "Delhi", speciality: "Fresh Vegetables" },
    { id: 2, name: "Spice Masters", rating: 4.9, location: "Mumbai", speciality: "Spices & Herbs" },
    { id: 3, name: "Grain Depot", rating: 4.7, location: "Punjab", speciality: "Grains & Pulses" }
  ];

  const availableSuppliers = [
    { 
      id: 1, 
      name: "Green Valley Farms", 
      rating: 4.6, 
      location: "Haryana", 
      deliveryTime: "2-3 days",
      products: ["Tomatoes", "Onions", "Potatoes"],
      price: "₹45/kg",
      verified: true
    },
    { 
      id: 2, 
      name: "Masala Express", 
      rating: 4.8, 
      location: "Kerala", 
      deliveryTime: "1-2 days",
      products: ["Turmeric", "Red Chili", "Coriander"],
      price: "₹250/kg",
      verified: true
    },
    { 
      id: 3, 
      name: "Protein Plus", 
      rating: 4.5, 
      location: "Gujarat", 
      deliveryTime: "3-4 days",
      products: ["Chicken", "Mutton", "Fish"],
      price: "₹180/kg",
      verified: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-success text-white";
      case "shipped": return "bg-info text-white";
      case "pending": return "bg-warning text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Vendor Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Rajesh! Manage your sourcing efficiently.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <MessageCircle className="h-4 w-4 mr-2" />
                Messages
              </Button>
              <Button variant="hero">
                <ShoppingCart className="h-4 w-4 mr-2" />
                New Order
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Suppliers</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">+3 new this month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Monthly Spending</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹45,230</div>
              <p className="text-xs text-muted-foreground">-8% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avg. Delivery Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.3 days</div>
              <p className="text-xs text-muted-foreground">-0.5 days improved</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="suppliers" className="space-y-6">
          <TabsList>
            <TabsTrigger value="suppliers">Find Suppliers</TabsTrigger>
            <TabsTrigger value="orders">My Orders</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
          </TabsList>

          <TabsContent value="suppliers" className="space-y-6">
            {/* Search Bar */}
            <Card>
              <CardHeader>
                <CardTitle>Search Suppliers</CardTitle>
                <CardDescription>Find verified suppliers for your raw materials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Search for products, suppliers, or locations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Button variant="hero">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Available Suppliers */}
            <div className="grid gap-6">
              <h2 className="text-2xl font-semibold">Available Suppliers</h2>
              {availableSuppliers.map((supplier) => (
                <Card key={supplier.id} className="hover:shadow-custom-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{supplier.name}</h3>
                          {supplier.verified && (
                            <Badge variant="secondary" className="bg-success text-white">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span>📍 {supplier.location}</span>
                          <span>⭐ {supplier.rating}</span>
                          <span>🚚 {supplier.deliveryTime}</span>
                        </div>
                        <div className="mb-3">
                          <p className="text-sm text-muted-foreground mb-1">Products:</p>
                          <div className="flex gap-2 flex-wrap">
                            {supplier.products.map((product, idx) => (
                              <Badge key={idx} variant="outline">{product}</Badge>
                            ))}
                          </div>
                        </div>
                        <p className="text-lg font-semibold text-primary">Starting from {supplier.price}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                        <Button variant="hero" size="sm">
                          View Products
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Track your recent orders and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{order.id}</span>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{order.supplier}</p>
                        <p className="text-sm">{order.items}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{order.amount}</p>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Favorite Suppliers</CardTitle>
                <CardDescription>Your trusted suppliers for quick reordering</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {favoriteSuppliers.map((supplier) => (
                    <div key={supplier.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{supplier.name}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>📍 {supplier.location}</span>
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {supplier.rating}
                          </span>
                          <span>{supplier.speciality}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                        <Button variant="hero" size="sm">
                          Order Again
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VendorDashboard;