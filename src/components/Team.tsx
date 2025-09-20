import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Team member images (kept as imports for a zero-friction drop-in)
import aliImg from "../assets/Ali.avif";
import mahdiImg from "../assets/Mahdi.avif";
import qinqinImg from "../assets/qinqin.avif";
import xinImg from "../assets/xin.avif";
import ryleeImg from "../assets/Rylee.avif";
import andresimg from "../assets/Andres.avif";

// Collaborator images
import camiloImg from "../assets/Jaimes.avif";
import jalilImg from "../assets/Razavi.avif";
import caitlinImg from "../assets/Caitlin.avif";
import lanaImg from "../assets/Pierotich.avif";
import simonImg from "../assets/Simon.png";
import meritxellImg from "../assets/Meritxell.png";

const AVATAR_W = 64;   // matches w-16 h-16
const AVATAR_H = 64;
const COLLAB_W = 80;   // matches w-20 h-20
const COLLAB_H = 80;

const members = [
  {
    name: "Ali Gholipour, PhD",
    role: "Principal Investigator",
    expertise: ["Machine Learning", "Medical Imaging", "Fetal MRI"],
    image: aliImg,
    bio: "Ali Gholipour is Professor of Radiological Sciences, and Electrical Engineering and Computer Science at the University of California Irvine (UCI), Founder and Director of the Intelligent Medical Imaging Research Lab (aka IMAGINE), and Scientific Director of MRI AI Application in the Center for Artificial Intelligence in Diagnostic Medicine (CAIDM) at UCI. He was a faculty at Boston Children’s Hospital and Harvard Medical School from 2010 to 2024 before joining UCI. He received all his degrees in Electrical Engineering (BSc’2001 and MSc’2003 from the University of Tehran, and PhD’2008 from the University of Texas at Dallas), and completed a postdoctoral training in medical imaging at Boston Children’s Hospital, Harvard Medical School in 2010. He is a Senior Member of the IEEE (Institute of Electrical and Electronics Engineers), a member of the International Society of Magnetic Resonance in Medicine (ISMRM), a member of Medical Image Computing and Computer Assisted Intervention (MICCAI); and an Associate Editor for IEEE Transactions on Medical Imaging, and Medical Image Analysis."
  },
  {
    name: "Andres Saucedo, PhD",
    role: "Associate Research Specialist",
    expertise: ["MR spectroscopy and spectroscopic imaging","Machine Learning", "Medical Imaging"],
    image: andresimg,
    bio: "Andres Saucedo is an Associate Research Specialist at the University of California, Irvine. He completed his Ph.D. in 2023 from the Physics and Biology in Medicine Interdepartmental Graduate Program at UCLA, in association with the Department of Radiology at the David Geffen School of Medicine. His research focused on pulse sequence development and image reconstruction for both single voxel and multi-voxel 1D and 2D MR spectroscopy and spectroscopic imaging. He also worked on reconstruction algorithms for undersampled non-Cartesian spectroscopic imaging data, and advanced the application of ideas in diffusion-weighted NMR spectroscopy on clinical scanners. From 2023 to 2024, he was a postdoctoral fellow at the University of Southern California, where he developed a rosette free induction decay echo-planar spectroscopic imaging technique at 7T. Following his postdoctoral work, he briefly transitioned to industry in 2025 as a technical applications specialist, promoting the use of dynamic field cameras for diffusion tensor imaging and functional MRI research. As a core member of the IMAGINE group, Andres is engaged in developing, implementing, testing, and optimizing advanced MRI techniques for fetal, newborn, brain, and body imaging applications."
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
    name: "Dr. Meritxell Bach Cuadra, PhD",
    affiliation: "CIBM Center for Biomedical Imaging, University of Lausanne | Radiology Department, Lausanne University Hospital",
    image: meritxellImg,
    link: "https://wp.unil.ch/mial/team/meritxell-bach-cuadra/"
  },
  {
    name: "Dr. Camilo Jaimes, MD",
    affiliation: "Chief Pediatric Neuroradiology & Physician Scientist, Massachusetts General Hospital and Harvard Medical School",
    image: camiloImg,
    link: "https://scholar.google.com/citations?hl=en&user=a5AJ1NYAAAAJ&view_op=list_works"
  },
  {
    name: "Dr. Lana Pierotich (ex Vasung), MD, PhD",
    affiliation: "Neuroanatomist, Boston Children’s Hospital and Harvard Medical School",
    image: lanaImg,
    link: "https://scholar.google.com/citations?user=TWSexC0AAAAJ&hl=en"
  },
  {
    name: "Dr. Jalil Razavi, PhD",
    affiliation: "Associate Professor, State University of New York at Binghamton",
    image: jalilImg,
    link: "https://www.binghamton.edu/mechanical-engineering/people/profile.html?id=mrazavi"
  },
  {
    name: "Dr. Caitlin Rollins, MD",
    affiliation: "Associate Chief for Clinical Research, Department of Neurology | Director, Cardiac Neurodevelopmental Program | Department of Neurology, Boston Children’s Hospital",
    image: caitlinImg,
    link: "https://research.childrenshospital.org/researchers/caitlin-rollins"
  },
  {
    name: "Dr. Simon K. Warfield, PhD",
    affiliation: "Thorne Griscom Chair and Professor of Radiology, Harvard Medical School | Director of Radiology Research and Director of the Computational Radiology Lab, Boston Children's Hospital",
    image: simonImg,
    link: "http://crl.med.harvard.edu/labmembers/simonwarfield/"
  }
];

const Team = () => {
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
                      width={AVATAR_W}
                      height={AVATAR_H}
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
                  width={COLLAB_W}
                  height={COLLAB_H}
                  loading="lazy"
                  decoding="async"
                />
                <p className="text-sm font-medium text-foreground leading-tight">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.affiliation}</p>

                {c.link && (
                <button
                  onClick={() => window.open(c.link, '_blank', 'noopener,noreferrer')}
                  className="mt-2 px-3 py-1 text-xs bg-black text-white hover:bg-gray-800 rounded-md transition-colors cursor-pointer"
                  >
                  View Profile
                </button>
              )}
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
