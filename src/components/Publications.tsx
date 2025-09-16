import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Publications = () => {
  const publications = [
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
      title:"Harmonization in Magnetic Resonance Imaging: A Survey of Acquisition, Image-level, and Feature-level Methods",
      authors:"Qinqin Yang, Firoozeh Shomal-Zadeh, Ali Gholipour",
      journal: "arXiv preprint arXiv:2507.16962",
      year: "2025",
      /* abstract:"Modern medical imaging technologies have greatly advanced neuroscience research and clinical diagnostics. However, imaging data collected across different scanners, acquisition protocols, or imaging sites often exhibit substantial heterogeneity, known as batch effects or site effects. These non-biological sources of variability can obscure true biological signals, reduce reproducibility and statistical power, and severely impair the generalizability of learning-based models across datasets. Image harmonization aims to eliminate or mitigate such site-related biases while preserving meaningful biological information, thereby improving data comparability and consistency. This review provides a comprehensive overview of key concepts, methodological advances, publicly available datasets, current challenges, and future directions in the field of medical image harmonization, with a focus on magnetic resonance imaging (MRI). We systematically cover the full imaging pipeline, and categorize harmonization approaches into prospective acquisition and reconstruction strategies, retrospective image-level and feature-level methods, and traveling-subject-based techniques. Rather than providing an exhaustive survey, we focus on representative methods, with particular emphasis on deep learning-based approaches. Finally, we summarize the major challenges that remain and outline promising avenues for future research.",*/
      link: "https://arxiv.org/abs/2507.16962"
    },
    {
      title:
        "Mechanics of the Spatiotemporal Evolution of Sulcal Pits in the Folding Brain",
      authors:
        "Akbar Solhtalab, Yanchen Guo, Ali Gholipour, Weiying Dai, Mir Jalil Razavi",
      journal: "Human Brain Mapping",
      year: "2025",
      abstract:
        "Understanding the development of complex brain surface morphologies during the fetal stage is essential for uncovering mechanisms underlying brain disorders linked to abnormal cortical folding. However, knowledge of the spatiotemporal evolution of fetal brain landmarks remains limited due to the lack of longitudinal data capturing multiple timepoints for individual brains. In this study, we develop and validate an image‐based true‐scale mechanical model to investigate the spatiotemporal evolution of brain sulcal pits in individual fetal brains. Altered sulcal pits patterns have been observed in disorders such as autism spectrum disorder (ASD), polymicrogyria, Down syndrome, and agenesis of the corpus callosum. Our model, constructed using magnetic resonance imaging (MRI) scans from the first timepoint of longitudinal data, predicts the brain's surface morphology by comparing the distribution of sulcal pits between the predicted models and MRI scans from a later timepoint. This dynamic model simulates how a smooth fetal brain with primary folds evolves into a convoluted morphology. Our results align with imaging data, showing that sulcal pits are stable during brain development and can serve as key markers linking prenatal and postnatal brain characteristics. The model provides a platform for future hypothesis testing and for studying the effects of mechanical parameters on the evolution of sulcal pits in both healthy and disordered brains. This research represents a significant advancement in understanding fetal brain development and its connection to disorders that manifest as abnormal sulcal pit patterns later in life.",
      link: "https://onlinelibrary.wiley.com/doi/full/10.1002/hbm.70332" // ← replace with correct link if needed
    },
    {
      title:
        "A detailed spatiotemporal atlas of the white matter tracts for the fetal brain",
      authors:
        "Camilo Calixto, Matheus Dorigatti Soldatelli, Camilo Jaimes, Lana Pierotich, Simon K. Warfield, Ali Gholipour, and Davood Karimi",
      journal: "Proceedings of the National Academy of Sciences",
      year: "2025",
      abstract:
        "This study presents the construction of a comprehensive spatiotemporal atlas of white matter tracts in the fetal brain for every gestational week between 23 and 36 wk using diffusion MRI (dMRI). Our research leverages data collected from fetal MRI scans, capturing the dynamic changes in the brain’s architecture and microstructure during this critical period. The atlas includes 60 distinct white matter tracts, including commissural, projection, and association fibers. We employed advanced fetal dMRI processing techniques and tractography to map and characterize the developmental trajectories of these tracts. Our findings reveal that the development of these tracts is characterized by complex patterns of fractional anisotropy (FA) and mean diffusivity (MD), coinciding with the intensity of histogenic processes such as axonal growth, involution of the radial-glial scaffolding, and synaptic pruning. This atlas can serve as a useful resource for neuroscience research and clinical practice, improving our understanding of the fetal brain and potentially aiding in the early diagnosis of neurodevelopmental disorders. By detailing the normal progression of white matter tract development, the atlas can be used as a benchmark for identifying deviations that may indicate neurological anomalies or predispositions to disorders.",
      link: "https://www.pnas.org/doi/abs/10.1073/pnas.2410341121"
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
