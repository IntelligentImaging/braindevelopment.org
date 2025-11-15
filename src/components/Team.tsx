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
import inderImg from "../assets/Inder.png";
import ortinauImg from "../assets/Ortinau.png";

const AVATAR_W = 64;   // matches w-16 h-16
const AVATAR_H = 64;
const COLLAB_W = 80;   // matches w-20 h-20
const COLLAB_H = 80;

const members = [
  {
    name: "Ali Gholipour, PhD",
    role: "Principal Investigator",
    expertise: ["Machine Learning", "Medical Imaging", "Medical Image Computing", "MRI", "Fetal MRI"],
    image: aliImg,
    bio: "Ali Gholipour is Professor of Radiological Sciences, Electrical Engineering and Computer Science at UCI, Founder and Director of the Intelligent Medical Imaging Research Lab (aka IMAGINE), Scientific Director of MRI AI Application in the Center for Artificial Intelligence at UCI, and a Visiting Scientist at Rady Children's Health (Children's Hospital of Orange County). He was a research faculty at Boston Children’s Hospital and Harvard Medical School from 2010 to 2024 before joining UCI. He is a Senior Member of IEEE and serves as an Associate Editor for Medical Image Analysis and IEEE Trans. Medical Imaging."
  },
  {
    name: "Andres Saucedo, PhD",
    role: "Associate Specialist",
    expertise: ["MR spectroscopy and spectroscopic imaging","Machine Learning", "Medical Imaging"],
    image: andresimg,
    bio: "Andres Saucedo is an Associate Research Specialist at the University of California, Irvine. He completed his Ph.D. from the Physics and Biology in Medicine Interdepartmental Graduate Program at UCLA in 2023. His research focused on pulse sequence development, image reconstruction, and quantitative data processing for MR spectroscopy and spectroscopic imaging. As postdoctoral fellow at the University of Southern California from 2023-2024, he developed a spectroscopic imaging method for neuroscience applications at 7T. Following his postdoctoral work, he briefly transitioned to industry in 2025, promoting the use of dynamic field cameras for MRI research. As a core member of the IMAGINE group, Andres is engaged in developing, implementing, testing, and optimizing advanced MRI and MRS techniques for fetal, newborn, brain, and body imaging applications."
  },
  {
    name: "Mahdi Bagheri, PhD",
    role: "Postdoctoral Research Fellow",
    expertise: ["Machine Learning", "Medical Imaging", "Causality"],
    image: mahdiImg,
    bio: "Mahdi Bagheri is a postdoctoral researcher at UC Irvine, developing machine learning methods for time series analysis in fMRI. He was a postdoc at Harvard Medical School with Prof. Ali Gholipour and earned his Ph.D. in Electrical Engineering from the University of Tehran in 2023, focusing on Bayesian causal discovery for brain data. He’s passionate about turning science into real-world applications—and enjoys a good cup of tea."
  },
  {
    name: "Qinqin Yang, PhD",
    role: "Postdoctoral Research Fellow",
    expertise: ["MRI", "Quantitative MRI", "Deep learning", "MRI simulation", "Fetal MRI"],
    image: qinqinImg,
    bio: "Qinqin Yang is a postdoctoral researcher at the University of California, Irvine. He earned his Ph.D. in 2024 from Xiamen University, where he received training in MRI physics and artificial intelligence. His research focuses on developing novel motion-robust MRI sequences and deep learning–based reconstruction/enhancement methods. Since joining the IMAGINE team, his work has been dedicated to advancing innovative MRI techniques for fetal and neonatal imaging."
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
    bio: "Rylee graduated from the University of California, Los Angeles with a B.S. in Computational and Systems Biology with a concentration in bioinformatics. Her growing interest in medical imaging led her to intern at Cedars-Sinai Medical Center in their neurology department where she conducted quantitative MRI research relating to multiple sclerosis. In the IMAGINE lab, she assists in research coordination and exploring AI applications to medical imaging."
  }
];

const collaborators = [
  {
    name: "Dr. Meritxell Bach Cuadra, PhD",
    affiliation: "Associate Professor, CIBM Center for Biomedical Imaging, University of Lausanne | Radiology Department, Lausanne University Hospital",
    image: meritxellImg,
    link: "https://wp.unil.ch/mial/team/meritxell-bach-cuadra/"
  },
  {
    name: "Dr. Camilo Jaimes, MD",
    affiliation: "Neuroradiologist, Chief of Pediatric Neuroradiology & Co-Director of Pediatric Imaging Research Center, Massachusetts General Brigham | Associate Chair of Imaging Sciences & Associate Professor of Radiology, Massachusetts General Hospital",
    image: camiloImg,
    link: "https://scholar.google.com/citations?hl=en&user=a5AJ1NYAAAAJ&view_op=list_works"
  },
  {
    name: "Dr. Terrie Inder, MD",
    affiliation: "Neonatologist and Child Neurologist, Director of Center for Neonatal Research, Rady Children's Health (Children's Hospital of Orange County) | Professor of Pediatrics, University of California Irvine",
    image: inderImg,
    link: "https://scholar.google.com/citations?user=TWSexC0AAAAJ&hl=en"
  },
  {
    name: "Dr. Cynthia M. Ortinau, MD",
    affiliation: "Neonatologist, Neonatal-perinatal Pediatric Medicine, St. Louis Children's Hospital | Assistant Professor of Pediatrics, Newborn Medicine, Washington University in St. Louis",
    image: ortinauImg,
    link: "https://physicians.wustl.edu/people/cynthia-m-ortinau-md/"
  },
  {
    name: "Dr. Lana Pierotich (ex Vasung), MD, PhD",
    affiliation: "Neuroanatomist | Medical Director, Atalanta Therapeutics",
    image: lanaImg,
    link: "https://choc.org/medical-staff/neonatology/terrie-inder-md/"
  },
  {
    name: "Dr. Jalil Razavi, PhD",
    affiliation: "Associate Professor, State University of New York at Binghamton",
    image: jalilImg,
    link: "https://www.binghamton.edu/mechanical-engineering/people/profile.html?id=mrazavi"
  },
  {
    name: "Dr. Caitlin Rollins, MD",
    affiliation: "Neurologist, Associate Chief for Clinical Research, Department of Neurology | Director, Cardiac Neurodevelopmental Program | Department of Neurology, Boston Children’s Hospital | Associate Professor of Neurology, Harvard Medical School",
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
            
          </p>
        </div>
        /* A multidisciplinary group of clinicians, researchers, and engineers 
            working together to advance fetal brain imaging through AI innovation.*/
        
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
