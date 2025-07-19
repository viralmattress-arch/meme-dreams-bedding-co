import { Check, Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-black text-viral-dark">Viral Mattress</span>
            <div className="bg-viral-blue rounded-full p-1">
              <Check className="w-4 h-4 text-white" />
            </div>
            <Zap className="w-6 h-6" />
          </div>
          <span className="text-lg font-bold">Brand™</span>
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