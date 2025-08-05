import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Team = () => {
  const members = [
    {
      name: "Dr. Sarah Chen",
      role: "Principal Investigator",
      expertise: ["Fetal Medicine", "AI Research", "Neuroimaging"],
      education: "MD, PhD - Harvard Medical School",
      bio: "Leading expert in prenatal neuroimaging with 15+ years of research experience."
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Senior AI Researcher",
      expertise: ["Machine Learning", "Computer Vision", "Medical Imaging"],
      education: "PhD Computer Science - MIT",
      bio: "Specializes in developing deep learning algorithms for medical image analysis."
    },
    {
      name: "Dr. Emily Johnson",
      role: "Clinical Research Coordinator",
      expertise: ["Clinical Trials", "Data Analysis", "Patient Care"],
      education: "MD - Johns Hopkins University",
      bio: "Bridges clinical practice with research to ensure real-world applicability."
    },
    {
      name: "Alex Park",
      role: "Research Engineer",
      expertise: ["Software Development", "Cloud Computing", "Data Pipeline"],
      education: "MS Engineering - Stanford University",
      bio: "Develops and maintains the technical infrastructure for our AI platforms."
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Our Research Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A multidisciplinary team of clinicians, researchers, and engineers 
            working together to advance fetal brain imaging through AI innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {members.map((member, index) => (
            <Card 
              key={index} 
              className="hover:shadow-medical transition-all duration-300 bg-card/80 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <CardTitle className="text-xl text-foreground mb-1">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </div>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {member.education}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Areas of Expertise:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-secondary/20 text-secondary-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;