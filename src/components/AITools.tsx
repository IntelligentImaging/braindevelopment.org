import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import labImage from "@/assets/lab-equipment.avif";

type Tool = {
  name: string;
  description: string;
  features: string[];
  link: string;
  status: "Production" | "Beta" | "Development";
};

const AITools = () => {
  const tools: Tool[] = [
    {
      name: "CRL-2025",
      description: "Automated segmentation + spatiotemporal fetal MRI atlas with high-quality labels.",
      features: ["Multi-structure segmentation", "Spatiotemporal templates", "Quality metrics"],
      link: "https://github.com/IntelligentImaging/CRL-2025",
      status: "Production",
    },
    {
      name: "HAITCH",
      description: "Distortion + motion correction framework for multi-shell fetal diffusion MRI.",
      features: ["Blip-reversed dual-echo", "Advanced motion correction", "Public pipeline"],
      link: "https://github.com/IntelligentImaging/HAITCH",
      status: "Beta",
    },
    {
      name: "FetalR2Star",
      description: "Model-based multi-echo radial FLASH reconstruction for R2* mapping.",
      features: ["Calibrationless reconstruction", "Water/Fat/R2*/B0 maps", "Phantom + in-vivo"],
      link: "https://github.com/IntelligentImaging/FetalR2Star",
      status: "Development",
    },
  ];

  const getStatusColor = (status: Tool["status"]) => {
    switch (status) {
      case "Production":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Beta":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Development":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <section id="tools" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Code</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our open-source tools advance fetal brain imaging with robust reconstruction,
              segmentation, and analysis workflows.
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
                    <CardDescription className="text-muted-foreground">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                      {tool.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a href={tool.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">View Repo</Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <a href="https://github.com/IntelligentImaging" target="_blank" rel="noopener noreferrer">
                <Button variant="neural" size="lg">IMAGINE GitHub Page</Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <img 
              src={labImage} 
              alt="AI Lab Equipment" 
              className="rounded-lg shadow-medical w-full h-auto"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-neural opacity-20 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITools;
