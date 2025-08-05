import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import labImage from "@/assets/lab-equipment.jpg";

const AITools = () => {
  const tools = [
    {
      name: "BrainSeg-AI",
      description: "Automated segmentation tool for fetal brain structures with 98% accuracy",
      status: "Production",
      features: ["Real-time processing", "Multi-format support", "Quality metrics"]
    },
    {
      name: "NeuroPredict",
      description: "Predictive modeling platform for neurodevelopmental outcome assessment",
      status: "Beta",
      features: ["Risk scoring", "Longitudinal tracking", "Clinical reporting"]
    },
    {
      name: "FusionMRI",
      description: "Multi-modal imaging fusion for comprehensive fetal brain analysis",
      status: "Development",
      features: ["3D visualization", "Cross-modal registration", "Enhanced contrast"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Beta": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Development": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <section id="tools" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              AI Tools & Platforms
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our cutting-edge AI tools are designed to assist clinicians and researchers 
              in analyzing fetal brain development with unprecedented accuracy and speed.
            </p>
            
            <div className="space-y-6">
              {tools.map((tool, index) => (
                <Card key={index} className="border-l-4 border-l-primary bg-card/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-foreground">{tool.name}</CardTitle>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tool.status)}`}>
                        {tool.status}
                      </span>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <Button variant="neural" size="lg">
                Request Tool Access
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={labImage} 
              alt="AI Lab Equipment" 
              className="rounded-lg shadow-medical w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-neural opacity-20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITools;