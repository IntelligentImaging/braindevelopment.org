const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              
              <div>
                <h3 className="text-lg font-semibold"></h3>
                <p className="text-xs text-background/70"></p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-background"></h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#research" className="text-background/80 hover:text-background transition-colors"> </a></li>
              <li><a href="#tools" className="text-background/80 hover:text-background transition-colors"></a></li>
              <li><a href="#team" className="text-background/80 hover:text-background transition-colors"></a></li>
              <li><a href="#publications" className="text-background/80 hover:text-background transition-colors"></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-background"></h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors"></a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors"></a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors"> </a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors"> </a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Fetal Brain Imaging Lab. All rights reserved. 
            Advancing prenatal care through AI innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;