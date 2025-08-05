import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">
                Fetal Brain Imaging Lab
              </h1>
              <p className="text-xs text-muted-foreground">AI-Powered Research</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#research" className="text-foreground hover:text-primary transition-colors">
              Research
            </a>
            <a href="#tools" className="text-foreground hover:text-primary transition-colors">
              AI Tools
            </a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">
              Team
            </a>
            <a href="#publications" className="text-foreground hover:text-primary transition-colors">
              Publications
            </a>
            <Button variant="medical" size="sm">
              Contact Us
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;