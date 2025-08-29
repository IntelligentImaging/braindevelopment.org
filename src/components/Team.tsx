import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Team member images
import aliImg from "../assets/Ali.jpg";
import mahdiImg from "../assets/Mahdi.jpg";
import qinqinImg from "../assets/qinqin.jpg";
import xinImg from "../assets/xin.jpg";
import ryleeImg from "../assets/Rylee.jpg";

// Collaborator images (make sure these files exist in src/assets/)
import camiloImg from "../assets/Jaimes.jpeg";
import jalilImg from "../assets/Razavi.jpeg";
import caitlinImg from "../assets/Caitlin.webp";
import lanaImg from "../assets/Pierotich.jpeg";

const Team = () => {
  const members = [
    {
      name: "Ali Gholipour, PhD",
      role: "Principal Investigator",
      expertise: ["Machine Learning", "Medical Imaging", "Fetal MRI"],
      image: aliImg,
      bio: "Ali Gholipour is Professor of Radiological Sciences, and Electrical Engineering and Computer Science at the University of California Irvine (UCI), Founder and Director of the Intelligent Medical Imaging Research Lab (aka IMAGINE), and Scientific Director of MRI AI Application in the Center for Artificial Intelligence in Diagnostic Medicine (CAIDM) at UCI. He was a faculty at Boston Children’s Hospital and Harvard Medical School from 2010 to 2024 before joining UCI. He received all his degrees in Electrical Engineering (BSc’2001 and MSc’2003 from the University of Tehran, and PhD’2008 from the University of Texas at Dallas), and completed a postdoctoral training in medical imaging at Boston Children’s Hospital, Harvard Medical School in 2010. He is a Senior Member of the IEEE (Institute of Electrical and Electronics Engineers), a member of the International Society of Magnetic Resonance in Medicine (ISMRM), a member of Medical Image Computing and Computer Assisted Intervention (MICCAI); and an Associate Editor for IEEE Transactions on Medical Imaging, and Medical Image Analysis."
    },
    {
      name: "Mahdi Bagheri, PhD",
      role: "Postdoctoral Research Fellow",
      expertise: ["Machine Learning", "Medical Imaging", "Causality"],
      image: mahdiImg,
      bio: "Mahdi Bagheri is a postdoctoral researcher at the University of California Irvine, developing machine learning methods for time series data with applications in fMRI. Previously, he was a postdoctoral researcher at Harvard Medical School, working with Professor Ali Gholipour. He earned all his degrees in Electrical Engineering and defended his Ph.D. at the University of Tehran in 2023, focusing on Bayesian causal discovery and dynamic causal learning algorithms to analyze brain data and uncover the brain’s causal connectome using fMRI and DTI data. He is passionate about translating science into practical products and is always a fan of freshly brewed tea!"
    },
    {
      name: "Qinqin Yang, PhD",
      role: "Postdoctoral Research Fellow",
      expertise: ["MRI", "Quantitative MRI", "Deep learning", "MRI simulation", "Fetal MRI"],
      image: qinqinImg,
      bio: "Qinqin Yang is a postdoctoral researcher at the University of California, Irvine. He earned his Ph.D. in 2024 from Xiamen University, where he received training in MRI physics and artificial intelligence. His research focuses on developing novel motion-robust MRI sequences and reconstruction algorithms. Additionally, he explores the use of physics-based simulations to generate training data for deep neural networks. Since joining Ali’s team, his work has been dedicated to advancing innovative MRI techniques for fetal and neonatal imaging, contributing to a deeper understanding of early human brain development."
    },
    {
      name: "Xin Wang, MD",
      role: "Visiting Scholar",
      expertise: [],
      image: xinImg,
      bio: "Xin Wang is a visiting scholar at the University of California, Irvine, focusing on advanced multimodal MRI studies of neonatal brain development. A dedicated radiologist and researcher, she serves as a diagnostic radiologist at Children’s Hospital of Nanjing, where she specializes in pediatric neuroimaging and brain functional studies. Prior to joining UCI, Wang earned her MD in 2011 and completed her Master of Science in Clinical Medicine at Nanjing University in 2014. Her work has been supported by the National Natural Science Foundation of China, recognizing her innovative contributions to understanding pediatric brain connectivity and function. Passionate about bridging clinical practice with cutting-edge research, she strives to translate imaging advancements into improved diagnostic tools for pediatric populations."
    },
    {
      name: "Rylee Kubo",
      role: "Research Assistant",
      expertise: ["Computational Biology", "Bioinformatics", "Medical Imaging"],
      image: ryleeImg,
      bio: "Rylee graduated from the University of California, Los Angeles with a B.S. in Computational and Systems Biology with a concentration in bioinformatics. Her growing interest in medical imaging led her to intern at Cedars-Sinai Medical Center in their neurology department where she conducted quantitative MRI research relating to multiple sclerosis. In the IMAGINE lab, she assists in research coordination and exploring AI applications to medical imaging. Outside of research, she is involved in the Japanese American community and is passionate about promoting cultural pride through music."
    }
  ];

  const collaborators = [
    {
      name: "Dr. Camilo Jaimes, MD",
      affiliation: "Chief Pediatric Neuroradiology & Physician Scientist- Massachusetts General Hospital and Harvard Medical School",
      image: camiloImg
    },
    {
      name: "Dr. Jalil Razavi, PhD",
      affiliation: "Assistant Professor at State University of New York at Binghamton",
      image: jalilImg
    },
    {
      name: "Dr. Caitlin Rollins, MD",
      affiliation: "Associate Professor of Neurology, Harvard Medical School,",
      image: caitlinImg
    },
    {
      name: "Dr. Lana Vasung, MD",
      affiliation: " Boston Children’s Hospital and Harvard Medical School",
      image: lanaImg
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Research Group</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A multidisciplinary group of clinicians, researchers, and engineers 
            working together to advance fetal brain imaging through AI innovation.
          </p>
        </div>
        
        {/* Team members grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {members.map((member, index) => (
            <Card 
              key={index} 
              className="hover:shadow-medical transition-all duration-300 bg-card/80 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-16 h-16 rounded-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <CardTitle className="text-xl text-foreground mb-1">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {member.role}
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
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

        {/* Collaborators */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Collaborators
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {collaborators.map((c, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center bg-card/60 rounded-lg p-4 hover:shadow-medical transition"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-20 h-20 rounded-full object-cover mb-3"
                  loading="lazy"
                  decoding="async"
                />
                <p className="text-sm font-medium text-foreground leading-tight">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
