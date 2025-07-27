import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Star, Search, Filter } from "lucide-react";

const Suppliers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Mock suppliers data - this would come from Supabase in real implementation
  const suppliers = [
    {
      id: 1,
      name: "Fresh Vegetables Hub",
      category: "Vegetables",
      location: "Mumbai, Maharashtra",
      rating: 4.8,
      phone: "+91 98765 43210",
      description: "Premium quality vegetables sourced directly from farms. Specializing in leafy greens, tomatoes, onions, and seasonal produce.",
      image: "/placeholder.svg",
      verified: true,
      minOrder: "₹500"
    },
    {
      id: 2,
      name: "Spice Masters",
      category: "Spices",
      location: "Delhi, NCR",
      rating: 4.9,
      phone: "+91 87654 32109",
      description: "Authentic Indian spices and masalas. We provide fresh ground spices, whole spices, and custom spice blends.",
      image: "/placeholder.svg",
      verified: true,
      minOrder: "₹300"
    },
    {
      id: 3,
      name: "Grain & Pulses Co.",
      category: "Grains",
      location: "Pune, Maharashtra",
      rating: 4.7,
      phone: "+91 76543 21098",
      description: "High-quality grains, pulses, and legumes. We offer rice, wheat, lentils, and specialty grains for street food vendors.",
      image: "/placeholder.svg",
      verified: true,
      minOrder: "₹1000"
    },
    {
      id: 4,
      name: "Oil & Condiments Mart",
      category: "Oil & Condiments",
      location: "Bangalore, Karnataka",
      rating: 4.6,
      phone: "+91 65432 10987",
      description: "Cooking oils, sauces, and condiments for street food preparation. We stock mustard oil, sunflower oil, and specialty sauces.",
      image: "/placeholder.svg",
      verified: true,
      minOrder: "₹750"
    },
    {
      id: 5,
      name: "Dairy Fresh",
      category: "Dairy",
      location: "Ahmedabad, Gujarat",
      rating: 4.5,
      phone: "+91 54321 09876",
      description: "Fresh dairy products including milk, paneer, curd, and butter. Daily delivery available for consistent supply.",
      image: "/placeholder.svg",
      verified: true,
      minOrder: "₹400"
    },
    {
      id: 6,
      name: "Snack Ingredients Pro",
      category: "Snacks",
      location: "Chennai, Tamil Nadu",
      rating: 4.8,
      phone: "+91 43210 98765",
      description: "Specialized in snack ingredients like chickpea flour, cornflour, breadcrumbs, and ready-to-fry mixes.",
      image: "/placeholder.svg",
      verified: false,
      minOrder: "₹600"
    }
  ];

  const categories = ["all", "Vegetables", "Spices", "Grains", "Oil & Condiments", "Dairy", "Snacks"];

  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || supplier.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Find Suppliers</h1>
          <p className="text-muted-foreground">
            Browse verified suppliers for your street food business
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search suppliers, categories, or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results count */}
        <div className="text-sm text-muted-foreground">
          Showing {filteredSuppliers.length} of {suppliers.length} suppliers
        </div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSuppliers.map((supplier) => (
            <Card key={supplier.id} className="border-0 shadow-custom-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg">{supplier.name}</CardTitle>
                      {supplier.verified && (
                        <Badge variant="secondary" className="text-xs">
                          ✓ Verified
                        </Badge>
                      )}
                    </div>
                    <Badge variant="outline">{supplier.category}</Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{supplier.rating}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {supplier.description}
                </CardDescription>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{supplier.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{supplier.phone}</span>
                  </div>
                  <div className="text-muted-foreground">
                    <span className="font-medium">Min Order:</span> {supplier.minOrder}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1" size="sm">
                    Contact Supplier
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSuppliers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No suppliers found matching your criteria.</p>
            <p className="text-muted-foreground">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Suppliers;