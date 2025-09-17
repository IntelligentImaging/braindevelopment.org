import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Publications = () => {
  const publications = [
    {
      title: "Mechanics of the Spatiotemporal Evolution of Sulcal Pits in the Folding Brain",
      authors: "Solhtalab, A., Y. Guo, A. Gholipour, W. Dai, and M. J. Razavi",
      journal: "Human Brain Mapping",
      year: "2025",
      link: "https://onlinelibrary.wiley.com/doi/pdf/10.1002/hbm.70332?msockid=0a5792b8754a613623fd84d174a2600b"
    },
    {
      title: "An MRI Atlas of the Human Fetal Brain: Reference and Segmentation Tools for Fetal Brain MRI Analysis",
      authors: "Bagheri M, Velasco-Annis C, Wang J, Faghihpirayesh R, Khan S, Calixto C, Jaimes C, Vasung L, Ouaalam A, Afacan O, Warfield SK, Rollins CK, Gholipour A",
      journal: "arXiv preprint arXiv:2508.15034",
      year: "2025",
      /* abstract:
        "Accurate characterization of in-utero brain development is essential for understanding typical and atypical neurodevelopment. Building upon previous efforts to construct spatiotemporal fetal brain MRI atlases, we present the CRL-2025 fetal brain atlas, which is a spatiotemporal (4D) atlas of the developing fetal brain between 21 and 37 gestational weeks. This atlas is constructed from carefully processed MRI scans of 160 fetuses with typically-developing brains using a diffeomorphic deformable registration framework integrated with kernel regression on age. CRL-2025 uniquely includes detailed tissue segmentations, transient white matter compartments, and parcellation into 126 anatomical regions. This atlas offers significantly enhanced anatomical details over the CRL-2017 atlas, and is released along with the CRL diffusion MRI atlas with its newly created tissue segmentation and labels as well as deep learning-based multiclass segmentation models for fine-grained fetal brain MRI segmentation. The CRL-2025 atlas and its associated tools provide a robust and scalable platform for fetal brain MRI segmentation, groupwise analysis, and early neurodevelopmental research, and these materials are publicly released to support the broader research community.",
        */
      link: "https://arxiv.org/abs/2508.15034"
    },
    {
      title: "Variable Flip Angle Optimization for Fetal Brain Imaging With Reduced Specific Absorption Rate",
      authors: "Franson, D., Calixto, C., Fan, H., Jaimes, C., Velasco‐Annis, C., Ferraciolli, S.F., Alves, C., Yang, E., Cauley, S. and Gholipour, A.",
      journal: "NRM in Biomedicine",
      year: "2025",
      link: "https://pubmed.ncbi.nlm.nih.gov/40524483/"
    },
    {
      title:"Harmonization in Magnetic Resonance Imaging: A Survey of Acquisition, Image-level, and Feature-level Methods",
      authors:"Qinqin Yang, Firoozeh Shomal-Zadeh, Ali Gholipour",
      journal: "arXiv preprint arXiv:2507.16962",
      year: "2025",
      /* abstract:"Modern medical imaging technologies have greatly advanced neuroscience research and clinical diagnostics. However, imaging data collected across different scanners, acquisition protocols, or imaging sites often exhibit substantial heterogeneity, known as batch effects or site effects. These non-biological sources of variability can obscure true biological signals, reduce reproducibility and statistical power, and severely impair the generalizability of learning-based models across datasets. Image harmonization aims to eliminate or mitigate such site-related biases while preserving meaningful biological information, thereby improving data comparability and consistency. This review provides a comprehensive overview of key concepts, methodological advances, publicly available datasets, current challenges, and future directions in the field of medical image harmonization, with a focus on magnetic resonance imaging (MRI). We systematically cover the full imaging pipeline, and categorize harmonization approaches into prospective acquisition and reconstruction strategies, retrospective image-level and feature-level methods, and traveling-subject-based techniques. Rather than providing an exhaustive survey, we focus on representative methods, with particular emphasis on deep learning-based approaches. Finally, we summarize the major challenges that remain and outline promising avenues for future research.",*/
      link: "https://arxiv.org/abs/2507.16962"
    },
    {
      title: "Rapid, High-resolution and Distortion-free R2* Mapping of Fetal Brain using Multi-echo Radial FLASH and Model-based Reconstruction",
      authors: "Wang, X., Fan, H., Tan, Z., Vasylechko, S., Yang, E., Didier, R., Afacan, O., Uecker, M., Warfield, S.K. and Gholipour, A.",
      journal: "Magnetic Resonance in Medicine",
      year: "2025",
      link: "https://onlinelibrary.wiley.com/doi/10.1002/mrm.30604?msockid=0a5792b8754a613623fd84d174a2600b"
    },
    {
      title: "HAITCH: A Framework for Distortion and Motion Correction in Fetal Multi-Shell Diffusion-Weighted MRI",
      authors: "Snoussi, H., Karimi, D., Afacan, O., Utkur, M. and Gholipour, A.",
      journal: "Imaging Neuroscience",
      year: "2025",
      link: "https://direct.mit.edu/imag/article/doi/10.1162/imag_a_00490/127881/HAITCH-A-Framework-for-Distortion-and-Motion"
    },
    {
      title: "A Detailed Spatiotemporal Atlas of the White Matter Tracts for the Fetal Brain",
      authors: "Calixto, C., Dorigatti Soldatelli, M., Jaimes, C., Pierotich, L., Warfield, S.K., Gholipour, A. and Karimi, D.",
      journal: "Proceedings of the National Academy of Sciences",
      year: "2025",
      link: "https://www.pnas.org/doi/10.1073/pnas.2410341121"
    },
    {
      title: "Deep Learning Microstructure Estimation of Developing Brains from Diffusion MRI: A Newborn and Fetal Study",
      authors: "Kebiri, H., Gholipour, A., Lin, R., Vasung, L., Calixto, C., Krsnik, Ž., Karimi, D. and Cuadra, M.B",
      journal: "Medical Image Analysis",
      year: "2024",
      link: "https://pubmed.ncbi.nlm.nih.gov/38701657/"
    },
    {
      title: "Advances in Fetal Brain Imaging",
      authors: "Calixto, C., Taymourtash, A., Karimi, D., Snoussi, H., Velasco-Annis, C., Jaimes, C. and Gholipour, A.",
      journal: "Magnetic Resonance Imaging Clinics",
      year: "2024",
      link: "https://pubmed.ncbi.nlm.nih.gov/38944434/"
    },
    {
      title: "Heterogeneous Growth of the Insula Shapes the Human Brain",
      authors: "Mallela, A.N., Deng, H., Gholipour, A., Warfield, S.K. and Goldschmidt, E.",
      journal: "Proceedings of the National Academy of Sciences",
      year: "2023",
      link: "https://www.pnas.org/doi/10.1073/pnas.2220200120"
    },
    {
      title: "Learning to Segment Fetal Brain Tissue from Noisy Annotations",
      authors: "Karimi, D., Rollins, C.K., Velasco-Annis, C., Ouaalam, A. and Gholipour, A.",
      journal: "Medical Image Analysis",
      year: "2023",
      link: "https://www.sciencedirect.com/science/article/pii/S1361841522003590"
    },
    {
      title: "Fetal MRI at 3 T: Principles to Optimize Success",
      authors: "Machado-Rivas, F., Cortes-Albornoz, M.C., Afacan, O., Bedoya, M.A., Calixto, C., Choi, J.J., Ruggiero, M., Gholipour, A. and Jaimes, C.",
      journal: "Radiographics",
      year: "2023",
      link: "https://pubmed.ncbi.nlm.nih.gov/36995947/"
    },
    {
      title: "Normal Growth, Sexual Dimorphism, and Lateral Asymmetries at Fetal Brain MRI",
      authors: "Machado-Rivas, F., Gandhi, J., Choi, J.J., Velasco-Annis, C., Afacan, O., Warfield, S.K., Gholipour, A. and Jaimes, C.",
      journal: "Radiology",
      year: "2022",
      link: "https://pubmed.ncbi.nlm.nih.gov/34931857/"
    },
    {
      title: "Scan-Specific Generative Neural Network for MRI Super-Resolution Reconstruction",
      authors: "Sui, Y., Afacan, O., Jaimes, C., Gholipour, A. and Warfield, S.K.",
      journal: "IEEE Transactions on Medical Imaging",
      year: "2022",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9208763/"
    },
    {
      title: "Brain Charts for the Human Lifespan",
      authors: "Bethlehem, R.A., Seidlitz, J., et al.",
      journal: "Nature",
      year: "2022",
      link: "https://www.nature.com/articles/s41586-022-04554-y"
    },
    {
      title: "Transfer Learning in Medical Image Segmentation: New Insights from Analysis of the Dynamics of Model Parameters and Learned Representations",
      authors: "Karimi, D., Warfield, S.K. and Gholipour, A.",
      journal: "Artificial Intelligence in Medicine",
      year: "2021",
      link: "https://www.sciencedirect.com/science/article/pii/S0933365721000713"
    },
    {
      title: "Regional Brain Growth Trajectories in Fetuses with Congenital Heart Disease",
      authors: "Rollins, C.K., Ortinau, C.M., Stopp, C., Friedman, K.G., Tworetzky, W., Gagoski, B., Velasco‐Annis, C., Afacan, O., Vasung, L., Beaute, J.I., Rofeberg, V., Estroff J.A., Grant P.E., Soul J.S., Yang E., Wypij D., Gholipour A., Warfield S.K., Newburger J.W.",
      journal: "Annals of Neurology",
      year: "2021",
      link: "https://pubmed.ncbi.nlm.nih.gov/33084086/"
    },
    {
      title: "Deep Predictive Motion Tracking in Magnetic Resonance Imaging: Application to Fetal Imaging",
      authors: "Singh, A., Salehi, S.S.M. and Gholipour, A.",
      journal: "IEEE Transactions on Medical Imaging",
      year: "2020",
      link: "https://ieeexplore.ieee.org/document/9103624"
    },
    {
      title: "Deep Learning with Noisy Labels: Exploring Techniques and Remedies in Medical Image Analysis",
      authors: "Karimi, D., Dou, H., Warfield, S.K. and Gholipour, A.",
      journal: "Medical Image Analysis",
      year: "2020",
      link: "https://www.sciencedirect.com/science/article/pii/S1361841520301237"
    },
    {
      title: "In vivo Characterization of Emerging White Matter Microstructure in the Fetal Brain in the Third Trimester",
      authors: "Jaimes, C., Machado‐Rivas, F., Afacan, O., Khan, S., Marami, B., Ortinau, C.M., Rollins, C.K., Velasco‐Annis, C., Warfield, S.K. and Gholipour, A.",
      journal: "Human Brain Mapping",
      year: "2020",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7375105/"
    },
    {
      title: "A Deep Attentive Convolutional Neural Network for Automatic Cortical Plate Segmentation in Fetal MRI",
      authors: "Dou, H., Karimi, D., Rollins, C.K., Ortinau, C.M., Vasung, L., Velasco-Annis, C., Ouaalam, A., Yang, X., Ni, D. and Gholipour, A.",
      journal: "IEEE Transactions on Medical Imaging",
      year: "2020",
      link: "https://ieeexplore.ieee.org/document/9303459"
    },
    {
      title: "Fetal Brain Growth Portrayed by a Spatiotemporal Diffusion Tensor MRI Atlas Computed from In-utero Images",
      authors: "Khan, S., Vasung, L., Marami, B., Rollins, C.K., Afacan, O., Ortinau, C.M., Yang, E., Warfield, S.K. and Gholipour, A.",
      journal: "NeuroImage",
      year: "2019",
      link: "https://www.sciencedirect.com/science/article/pii/S1053811918307286"
    },
    {
      title: "Real-time Deep Pose Estimation with Geodesic Loss for Image-to-Template Rigid Registration",
      authors: "Salehi, S.S.M., Khan, S., Erdogmus, D. and Gholipour, A., ",
      journal: "IEEE Transactions on Medical Imaging",
      year: "2018",
      link: "https://arxiv.org/abs/1803.05982"
    },
    {
      title: "Motion-Robust Diffusion-Weighted Brain MRI Reconstruction Through Slice-Level Registration-Based Motion Tracking",
      authors: "Marami, B., Scherrer, B., Afacan, O., Erem, B., Warfield, S.K. and Gholipour, A.",
      journal: "IEEE Transactions on Medical Imaging",
      year: "2016",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5108524/"
    },
    {
      title: "Robust Super-Resolution Volume Reconstruction from Slice Acquisitions: Application to Fetal Brain MRI",
      authors: "Gholipour, A., Estroff, J.A. and Warfield, S.K.",
      journal: "IEEE Transactions on Medical Imaging",
      year: "2010",
      link: "https://pubmed.ncbi.nlm.nih.gov/20529730/"
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
