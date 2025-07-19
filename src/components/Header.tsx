import { Check, Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/2cf42c28-2b47-45c0-95ac-dc98a06f70d3.png"
            alt="Viral Mattress Brand Logo"
            className="h-12 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#product" className="text-muted-foreground hover:text-foreground transition-colors">
            The Mattress
          </a>
          <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">
            Reviews
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;