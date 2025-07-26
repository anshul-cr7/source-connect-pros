import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  TrendingUp, 
  Package, 
  Users,
  CheckCircle,
  X,
  Eye,
  Edit,
  BarChart3
} from "lucide-react";
import { useState } from "react";

const SupplierDashboard = () => {
  // Mock data - will be replaced with Supabase data
  const products = [
    { 
      id: 1, 
      name: "Fresh Tomatoes", 
      price: "₹45/kg", 
      stock: 500, 
      unit: "kg",
      category: "Vegetables",
      orders: 23,
      status: "active"
    },
    { 
      id: 2, 
      name: "Red Chili Powder", 
      price: "₹280/kg", 
      stock: 150, 
      unit: "kg",
      category: "Spices",
      orders: 45,
      status: "active"
    },
    { 
      id: 3, 
      name: "Basmati Rice", 
      price: "₹120/kg", 
      stock: 0, 
      unit: "kg",
      category: "Grains",
      orders: 12,
      status: "out_of_stock"
    }
  ];

  const pendingOrders = [
    {
      id: "ORD-101",
      vendor: "Raj Street Food",
      items: "Tomatoes (50kg), Onions (30kg)",
      amount: "₹3,500",
      date: "2024-01-20",
      status: "pending"
    },
    {
      id: "ORD-102",
      vendor: "Spice Corner",
      items: "Red Chili Powder (10kg)",
      amount: "₹2,800",
      date: "2024-01-20",
      status: "pending"
    },
    {
      id: "ORD-103",
      vendor: "Delhi Delights",
      items: "Basmati Rice (25kg)",
      amount: "₹3,000",
      date: "2024-01-19",
      status: "pending"
    }
  ];

  const analytics = {
    totalRevenue: "₹2,45,680",
    totalOrders: 156,
    activeProducts: 12,
    avgRating: 4.8
  };

  const handleAcceptOrder = (orderId: string) => {
    console.log("Accepting order:", orderId);
    // Will be implemented with Supabase
  };

  const handleDeclineOrder = (orderId: string) => {
    console.log("Declining order:", orderId);
    // Will be implemented with Supabase
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Supplier Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Fresh Veggies Co.! Manage your products and orders.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics
              </Button>
              <Button variant="hero">
                <Plus className="h-4 w-4 mr-2" />
                Add Product
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
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.totalRevenue}</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.totalOrders}</div>
              <p className="text-xs text-muted-foreground">+23 new this month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Products</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.activeProducts}</div>
              <p className="text-xs text-muted-foreground">2 products added</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.avgRating}</div>
              <p className="text-xs text-muted-foreground">Based on 89 reviews</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList>
            <TabsTrigger value="orders">Pending Orders</TabsTrigger>
            <TabsTrigger value="products">My Products</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Orders</CardTitle>
                <CardDescription>Review and manage incoming orders from vendors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingOrders.map((order) => (
                    <div key={order.id} className="p-4 border rounded-lg">
                      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{order.id}</h4>
                            <Badge variant="outline" className="bg-warning text-white">
                              Pending
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-1">Vendor: {order.vendor}</p>
                          <p className="mb-2">{order.items}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Amount: <span className="font-semibold text-foreground">{order.amount}</span></span>
                            <span>Date: {order.date}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDeclineOrder(order.id)}
                          >
                            <X className="h-4 w-4 mr-1" />
                            Decline
                          </Button>
                          <Button 
                            variant="success" 
                            size="sm"
                            onClick={() => handleAcceptOrder(order.id)}
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Accept
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Inventory</CardTitle>
                <CardDescription>Manage your product listings, prices, and stock levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="p-4 border rounded-lg">
                      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{product.name}</h4>
                            <Badge 
                              variant={product.status === 'active' ? 'secondary' : 'destructive'}
                              className={product.status === 'active' ? 'bg-success text-white' : ''}
                            >
                              {product.status === 'active' ? 'Active' : 'Out of Stock'}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Price:</span>
                              <p className="font-semibold">{product.price}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Stock:</span>
                              <p className="font-semibold">{product.stock} {product.unit}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Category:</span>
                              <p className="font-semibold">{product.category}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Orders:</span>
                              <p className="font-semibold">{product.orders} this month</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant={product.status === 'active' ? 'destructive' : 'success'} 
                            size="sm"
                          >
                            {product.status === 'active' ? 'Deactivate' : 'Activate'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Demand Trends</CardTitle>
                  <CardDescription>Track product demand and seasonal trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 mx-auto mb-4" />
                      <p>Analytics charts will be implemented with real data</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Performing Products</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Red Chili Powder</span>
                        <span className="font-semibold">45 orders</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Fresh Tomatoes</span>
                        <span className="font-semibold">23 orders</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Basmati Rice</span>
                        <span className="font-semibold">12 orders</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>Order ORD-098 completed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-info" />
                        <span>New order ORD-103 received</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-success" />
                        <span>Product rating improved to 4.8</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SupplierDashboard;