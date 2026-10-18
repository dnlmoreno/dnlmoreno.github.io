export const papersBloqueA = [
  {
    title: "Image-Based Multi-Survey Classification of Light Curves with a Pre-Trained Vision Transformer",
    venue: "ICML Workshop",
    homeVenue: "2025 ICML Workshop - ML4Astro",
    year: 2025,
    status: "published",
    featured: 2,
    description: "We proposed a multi-stream architecture to process time series from two telescopes simultaneously using my previous vision Transformer adaptation as a backbone.",
    data: ["Time Series"],
    frameworks: ["PyTorch", "ViT"],
    github: null,
    paper: "https://ml4astro.github.io/icml2025/assets/camera_ready/47_Image_Based_Multi_Survey_Cl.pdf",
    image: "/images/ms_paper.png" // [TELESCOPE_FIGURE]
  },
  {
    title: "Leveraging pre-trained vision Transformers for multi-band photometric light curve classification",
    venue: "Journal",
    homeVenue: "2025 Journal - Astronomy & Astrophysics (A&A)",
    year: 2025,
    status: "published",
    featured: 1,
    description: "Novel method translating light curves into visual representations to leverage pre-trained vision transformers for classification.",
    data: ["Time Series", "Multi-band"],
    frameworks: ["PyTorch", "ViT"],
    github: null,
    paper: "https://www.aanda.org/articles/aa/full_html/2025/11/aa54289-25/aa54289-25.html",
    image: "https://www.aanda.org/articles/aa/full_html/2025/11/aa54289-25/aa54289-25-fig2.jpg" // [VT_CURVE_FIGURE]
  },
  {
    title: "ATAT: Astronomical Transformer for time series and Tabular data",
    venue: "Journal",
    homeVenue: "2024 Journal - Astronomy & Astrophysics (A&A)",
    year: 2024,
    status: "published",
    featured: 3,
    description: "We designed a multimodal architecture that integrated time series data with tabular metadata and human-engineered features. We also introduced a novel positional encoding, called Time Modulation, which enabled the model to outperform the state of the art.",
    data: ["Time Series", "Tabular"],
    frameworks: ["PyTorch", "ATAT"],
    github: null,
    paper: "https://www.aanda.org/articles/aa/full_html/2024/09/aa49475-24/aa49475-24.html",
    image: "https://www.aanda.org/articles/aa/full_html/2024/09/aa49475-24/aa49475-24-fig1.jpg" // [ATAT_FIGURE]
  },
  {
    title: "Positional encodings for light curve transformers: Playing with positions and attention",
    venue: "ICML Workshop + Thesis",
    homeVenue: "2023 ICML Workshop - ML4Astro",
    year: 2023,
    status: "published",
    featured: 4,
    description: "We experimented with different positional encoding schemes on astronomical time series to improve generalization against temporal shifts.",
    data: ["Time Series"],
    frameworks: ["TensorFlow", "Astromer"],
    github: null,
    paper: "https://ml4astro.github.io/icml2023/assets/55.pdf",
    image: "https://erdem.pl/static/546f1f587232f70269c5af8d617adad9/encoding.png" // [SINUSOIDAL_FIGURE]
  },
/*  {
    title: "Synthetic Population",
    venue: "Journal",
    status: "published",
    description: "[SHORT_DESCRIPTION] Generative deep learning models for simulating realistic synthetic populations of variable stars for data augmentation.",
    data: ["Simulated Data"],
    frameworks: ["Generative Models"],
    github: "https://github.com/[PLACEHOLDER]",
    paper: "https://arxiv.org/abs/[PLACEHOLDER]",
    image: "https://via.placeholder.com/600x400/111111/00ff99?text=Paper+Figure" // [PAPER_FIGURE]
  },

  {
    title: "Real Time Alert with Vision Transformer",
    venue: "Journal",
    status: "in_progress",
    description: "[SHORT_DESCRIPTION] Real-time inference system deployed on edge devices to trigger transient alerts with ultra-low latency.",
    data: ["Alert Streams"],
    frameworks: ["ONNX", "ViT"],
    github: null,
    paper: null,
    image: "https://via.placeholder.com/600x400/111111/00ff99?text=Placeholder+Figure" // [PLACEHOLDER_FIGURE]
  }
  */
];

export const contributionsBloqueB = [
  {
    title: "The ALeRCE Broker",
    venue: "Proceedings",
    year: 2026,
    paper: "https://www.cambridge.org/core/journals/proceedings-of-the-international-astronomical-union/article/abs/alerce-broker/D293831F4A13002D7AD09BFE63F44160",
    github: null,
    frameworks: ["Surveys", "AGN"]
  },
  {
    title: "Generalizing across astronomical surveys: Few-shot light curve classification with Astromer 2",
    venue: "Journal",
    year: 2025,
    paper: "https://www.aanda.org/articles/aa/full_html/2025/07/aa53388-24/aa53388-24.html", 
    github: null,
    frameworks: ["TensorFlow", "Transformers"]
  },
  { 
    title: "Astro-MoE: Mixture of Experts for Multiband Astronomical Time Series",
    venue: "ICML Workshop",
    year: 2025,
    paper: "https://ml4astro.github.io/icml2025/assets/camera_ready/54_Astro_MoE_Mixture_of_Expert.pdf", 
    github: null,
    frameworks: ["PyTorch", "Uncertainty"]
  },
  { 
    title: "Uncertainty estimation for time series classification-Exploring predictive uncertainty in transformer-based models for variable stars",
    venue: "Journal",
    year: 2025,
    paper: "https://www.aanda.org/articles/aa/full_html/2025/07/aa53388-24/aa53388-24.html", 
    github: null,
    frameworks: ["Bayesian NNs"]
  },
  { 
    title: "Transformer-Based Astronomical Time Series Model with Uncertainty Estimation for Detecting Misclassified Instances",
    venue: "ICML Workshop",
    year: 2024,
    paper: "https://icml.cc/virtual/2024/38072", 
    github: null,
    frameworks: ["Uncertainty"]
  },
  {
    title: "Semi-Supervised Domain Adaptation for Multi-band Photometric Supernovae Classification",
    venue: "LARIM Workshop",
    year: 2023,
    paper: "https://www.astroscu.unam.mx/rmaa/RMxAC..60/PDF/RMxAC..60_jsaavedra-9.pdf",
    github: null,
    frameworks: ["Domain Adaptation"]
  }
];
