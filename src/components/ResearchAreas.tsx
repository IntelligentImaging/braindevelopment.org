import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ResearchAreas = () => {
  const areas = [
    {
      title: "Neural Development Analysis",
      description: "Advanced AI algorithms for tracking fetal brain development patterns and identifying potential abnormalities early in pregnancy.",
      technologies: ["Deep Learning", "Computer Vision", "3D Reconstruction"],
      icon: "🧠"
    },
    {
      title: "Automated Segmentation",
      description: "Machine learning models for precise anatomical segmentation of fetal brain structures from MRI and ultrasound data.",
      technologies: ["U-Net Architecture", "Semantic Segmentation", "Medical Imaging"],
      icon: "🔬"
    },
    {
      title: "Predictive Modeling",
      description: "Developing predictive models to assess neurodevelopmental outcomes and guide clinical decision-making.",
      technologies: ["Statistical Learning", "Time Series Analysis", "Risk Assessment"],
      icon: "📊"
    },
    {
      title: "Multi-Modal Integration",
      description: "Combining multiple imaging modalities to create comprehensive fetal brain assessments using AI fusion techniques.",
      technologies: ["Data Fusion", "Multi-Modal AI", "Image Registration"],
      icon: "🔗"
    }
  ];

  return (
    <section id="research" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Research Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our interdisciplinary team focuses on pioneering AI applications 
            in fetal neuroimaging to improve prenatal diagnosis and care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area, index) => (
            <Card 
              key={index} 
              className="hover:shadow-medical transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{area.icon}</span>
                  <CardTitle className="text-xl text-foreground">{area.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {area.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;