import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/b499ffa1-7778-43de-b318-948fe9d9bfea.png" 
              alt="Fetal Brain Imaging Lab Logo" 
              className="w-10 h-10"
            />
            <div>
              <h1 className="text-lg font-semibold text-foreground">
                Fetal Brain Imaging Lab
              </h1>
              <p className="text-xs text-muted-foreground"></p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#research" className="text-foreground hover:text-primary transition-colors">
              Research
            </a>
            <a href="#tools" className="text-foreground hover:text-primary transition-colors">
              Code
            </a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">
              Team
            </a>
            <a href="#publications" className="text-foreground hover:text-primary transition-colors">
              Publications
            </a>
            <Button variant="medical" size="sm" onClick={scrollToContact}>
              Contact Us
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
