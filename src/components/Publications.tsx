import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Publications = () => {
  const publications = [
    {
      title: "Deep Learning Approaches for Automated Fetal Brain Segmentation in MRI",
      authors: "Chen, S., Rodriguez, M., Johnson, E.",
      journal: "NeuroImage",
      year: "2024",
      impact: "High Impact",
      citations: 127,
      abstract: "This study presents a novel deep learning framework for automated segmentation of fetal brain structures..."
    },
    {
      title: "Multi-Modal AI Integration for Enhanced Prenatal Neuroimaging",
      authors: "Rodriguez, M., Chen, S., Park, A.",
      journal: "Medical Image Analysis",
      year: "2023",
      impact: "High Impact",
      citations: 89,
      abstract: "We propose a comprehensive multi-modal approach combining MRI and ultrasound data..."
    },
    {
      title: "Predictive Modeling of Neurodevelopmental Outcomes Using AI",
      authors: "Johnson, E., Chen, S., Rodriguez, M.",
      journal: "Prenatal Diagnosis",
      year: "2023",
      impact: "Medium Impact",
      citations: 64,
      abstract: "Our predictive models demonstrate significant accuracy in forecasting neurodevelopmental trajectories..."
    },
    {
      title: "Real-Time Quality Assessment in Fetal Brain Imaging",
      authors: "Park, A., Rodriguez, M., Chen, S.",
      journal: "IEEE TMI",
      year: "2024",
      impact: "High Impact",
      citations: 42,
      abstract: "A real-time quality assessment system for fetal brain imaging using computer vision techniques..."
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High Impact": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Medium Impact": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <section id="publications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Recent Publications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our research contributes to the global scientific community through 
            peer-reviewed publications in top-tier journals.
          </p>
        </div>
        
        <div className="grid gap-6 max-w-4xl mx-auto">
          {publications.map((paper, index) => (
            <Card 
              key={index} 
              className="hover:shadow-medical transition-all duration-300 border-l-4 border-l-primary"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-foreground mb-2 leading-tight">
                      {paper.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mb-2">
                      {paper.authors}
                    </CardDescription>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-medium">{paper.journal}</span>
                      <span>•</span>
                      <span>{paper.year}</span>
                      <span>•</span>
                      <span>{paper.citations} citations</span>
                    </div>
                  </div>
                  <Badge className={getImpactColor(paper.impact)}>
                    {paper.impact}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {paper.abstract}
                </p>
                <Button variant="outline" size="sm">
                  View Full Paper
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="medical" size="lg">
            View All Publications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Publications;