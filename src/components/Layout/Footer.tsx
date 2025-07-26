import { Link } from "react-router-dom";
import { ShoppingCart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                SourceMart
              </span>
            </div>
            <p className="text-muted-foreground">
              Connecting street food vendors with verified suppliers for fresh, affordable raw materials.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@sourcemart.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/suppliers" className="text-muted-foreground hover:text-primary transition-colors">
                  Find Suppliers
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* For Vendors */}
          <div className="space-y-4">
            <h3 className="font-semibold">For Vendors</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/vendor-signup" className="text-muted-foreground hover:text-primary transition-colors">
                  Become a Vendor
                </Link>
              </li>
              <li>
                <Link to="/vendor-dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Vendor Dashboard
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* For Suppliers */}
          <div className="space-y-4">
            <h3 className="font-semibold">For Suppliers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/supplier-signup" className="text-muted-foreground hover:text-primary transition-colors">
                  Become a Supplier
                </Link>
              </li>
              <li>
                <Link to="/supplier-dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Supplier Dashboard
                </Link>
              </li>
              <li>
                <Link to="/verification" className="text-muted-foreground hover:text-primary transition-colors">
                  Verification Process
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 SourceMart. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;