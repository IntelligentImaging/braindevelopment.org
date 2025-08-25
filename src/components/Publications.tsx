import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Publications = () => {
  const publications = [
    {
      title: "Robust super-resolution volume reconstruction from slice acquisitions: application to fetal brain MRI",
      authors: "Ali Gholipour, Judy A Estroff, Simon K Warfield",
      journal: "IEEE Transactions on Medical Imaging",
      year: "2010",
      abstract:
        "Fast magnetic resonance imaging slice acquisition techniques such as single shot fast spin echo are routinely used in the presence of uncontrollable motion. These techniques are widely used for fetal magnetic resonance imaging (MRI) and MRI of moving subjects and organs. Although high-quality slices are frequently acquired by these techniques, inter-slice motion leads to severe motion artifacts that are apparent in out-of-plane views. Slice sequential acquisitions do not enable 3-D volume representation. In this study, we have developed a novel technique based on a slice acquisition model, which enables the reconstruction of a volumetric image from multiple-scan slice acquisitions. The super-resolution volume reconstruction is formulated as an inverse problem of finding the underlying structure generating the acquired slices. We have developed a robust M-estimation solution which minimizes a robust error...",
      link: "https://ieeexplore.ieee.org/abstract/document/5482022"
    },
    {
      title:
        "Rapid, High-resolution and Distortion-free R2* Mapping of Fetal Brain using Multi-echo Radial FLASH and Model-based Reconstruction",
      authors:
        "Xiaoqing Wang, Hongli Fan, Zhengguo Tan, Serge Vasylechko, Edward Yang, Ryne Didier, Onur Afacan, Martin Uecker, Simon K Warfield, Ali Gholipour",
      journal: "Magnetic Resonance in Medicine",
      year: "2025",
      abstract:
        "A 2D multi‐echo radial FLASH sequence with blip gradients is adapted for data acquisition during maternal free breathing. A calibrationless model‐based reconstruction with sparsity constraints is developed to jointly estimate water, fat, R2* and B0 field maps directly from k‐space. This approach was validated and compared to reference methods using numerical and NIST phantoms and data from nine fetuses between 26 and 36 weeks of gestation age....",
      link: "https://onlinelibrary.wiley.com/doi/full/10.1002/mrm.30604"
    },
    {
      title:
        "Haitch: A framework for distortion and motion correction in fetal multi-shell diffusion-weighted MRI",
      authors:
        "Haykel Snoussi, Davood Karimi, Onur Afacan, Mustafa Utkur, Ali Gholipour",
      journal: "Imaging Neuroscience",
      year: "2024",
      abstract:
        "Diffusion magnetic resonance imaging (dMRI) is pivotal for probing the microstructure of the rapidly-developing fetal brain. However, fetal motion during scans and its interaction with magnetic field inhomogeneities result in artifacts and data scattering across spatial and angular domains. The effects of those artifacts are more pronounced in high-angular resolution fetal dMRI, where signal-to-noise ratio is very low. Those effects lead to biased estimates and compromise the consistency and reliability of dMRI analysis. This work presents High Angular resolution diffusion Imaging reconsTruction and Correction approacH (HAITCH), the first and the only publicly available tool to correct and reconstruct multi-shell high-angular resolution fetal dMRI data. HAITCH offers several technical advances that include a blip-reversed dual-echo acquisition for dynamic distortion correction, advanced motion correction for model ...",
      link: "https://direct.mit.edu/imaging/article/10.1162/imag_a_00058" // ← replace with correct link if needed
    },
    {
      title:
        "A normative spatiotemporal MRI atlas of the fetal brain for automatic segmentation and analysis of early brain growth",
      authors:
        "Ali Gholipour, Caitlin K Rollins, Clemente Velasco-Annis, Abdelhakim Ouaalam, Alireza Akhondi-Asl, Onur Afacan, Cynthia M Ortinau, Sean Clancy, Catherine Limperopoulos, Edward Yang, Judy A Estroff, Simon K Warfield",
      journal: "Scientific Reports",
      year: "2017",
      abstract:
        "Longitudinal characterization of early brain growth in-utero has been limited by a number of challenges in fetal imaging, the rapid change in size, shape and volume of the developing brain, and the consequent lack of suitable algorithms for fetal brain image analysis. There is a need for an improved digital brain atlas of the spatiotemporal maturation of the fetal brain extending over the key developmental periods. We have developed an algorithm for construction of an unbiased four-dimensional atlas of the developing fetal brain by integrating symmetric diffeomorphic deformable registration in space with kernel regression in age. We applied this new algorithm to construct a spatiotemporal atlas from MRI of 81 normal fetuses scanned between 19 and 39 weeks of gestation and labeled the structures of the developing brain. We evaluated the use of this atlas and additional individual fetal brain MRI atlases for ...",
      link: "https://www.nature.com/articles/s41598-017-00525-w"
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High Impact":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Medium Impact":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <section id="publications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Selected Publications
          </h2>
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
                    </div>
                  </div>
                  {paper.impact && (
                    <Badge className={getImpactColor(paper.impact)}>
                      {paper.impact}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {paper.abstract}
                </p>
                <a href={paper.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    View Full Paper
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://scholar.google.com/citations?user=mPB7nkYAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="medical" size="lg">
              View All Publications
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
