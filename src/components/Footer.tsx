const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Fetal Brain Imaging Lab</h3>
                <p className="text-xs text-background/70">AI-Powered Research</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Advancing prenatal care through innovative AI solutions 
              for fetal brain imaging and neurological assessment.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#research" className="text-background/80 hover:text-background transition-colors">Research Areas</a></li>
              <li><a href="#tools" className="text-background/80 hover:text-background transition-colors">AI Tools</a></li>
              <li><a href="#team" className="text-background/80 hover:text-background transition-colors">Our Team</a></li>
              <li><a href="#publications" className="text-background/80 hover:text-background transition-colors">Publications</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-background">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Documentation</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">API Access</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Training Materials</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Ethics Guidelines</a></li>
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