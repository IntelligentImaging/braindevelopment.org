import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // only these two icons are imported

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center space-x-3">
            <picture>
              <source
                type="image/avif"
                srcSet="/lovable-uploads/b499ffa1-7778-43de-b318-948fe9d9bfea.avif"
              />
              <source
                type="image/webp"
                srcSet="/lovable-uploads/b499ffa1-7778-43de-b318-948fe9d9bfea.avif"
              />
              <img
                src="/lovable-uploads/b499ffa1-7778-43de-b318-948fe9d9bfea.avif"
                alt="IMAGINE Research Lab logo"
                width={40}
                height={40}
                decoding="async"
                fetchPriority="high"
                className="w-10 h-10"
              />
            </picture>
            <h1 className="text-lg font-semibold text-foreground">
              IMAGINE Research Lab
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#research" className="hover:text-primary transition-colors">Research</a>
            <a href="#tools" className="hover:text-primary transition-colors">Code</a>
            <a href="#team" className="hover:text-primary transition-colors">Team</a>
            <a href="#publications" className="hover:text-primary transition-colors">Publications</a>
            <Button variant="medical" size="sm" onClick={scrollToContact}>
              Contact Us
            </Button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            <a href="#research" onClick={() => setMobileOpen(false)}>Research</a>
            <a href="#tools" onClick={() => setMobileOpen(false)}>Code</a>
            <a href="#team" onClick={() => setMobileOpen(false)}>Team</a>
            <a href="#publications" onClick={() => setMobileOpen(false)}>Publications</a>
            <Button variant="medical" size="sm" onClick={scrollToContact}>
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
