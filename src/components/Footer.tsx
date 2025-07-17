import { Shield, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border sticky bottom-0 z-40 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Machine & Operator Info */}
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="font-mono">
                Machine: CAT-320-001
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="font-mono">
                Operator: J.Smith
              </Badge>
            </div>
          </div>

          {/* Emergency Safety Button */}
          <Button 
            variant="destructive" 
            size="sm"
            className="animate-pulse-alert font-semibold"
          >
            <AlertTriangle className="h-4 w-4 mr-2" />
            Emergency Stop
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;