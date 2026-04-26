// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Reverse-chronological list of publications. * indicates equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-software",
          title: "software",
          description: "Open-source software I build and maintain.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "Conference talks, invited seminars, and tutorials.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Tutorials, workshops, and training material on simulation-based inference and probabilistic ML.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Machine learning researcher focused on probabilistic and open-source methods for efficient model adaptation. Experienced in building reliable ML pipelines that bridge research and real-world applications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-new-site-new-home-for-blog-posts",
        
          title: "New site, new home for blog posts",
        
        description: "This site has moved to Jekyll + al-folio. Blog posts on simulation-based inference and probabilistic ML are coming.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/welcome/";
          
        },
      },{id: "projects-sbi",
          title: 'sbi',
          description: "Python toolkit for simulation-based inference. NumFOCUS-affiliated, 80+ contributors. I&#39;m one of the lead maintainers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sbi/";
            },},{id: "talks-simulation-based-inference-for-computational-neuroscience",
          title: 'Simulation-Based Inference for Computational Neuroscience',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2022-11-bernstein/";
            },},{id: "talks-mind-the-gap-methods-and-applicability-of-simulation-based-inference",
          title: 'Mind the Gap: Methods and Applicability of Simulation-Based Inference',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2024-03-transferlab/";
            },},{id: "talks-simulated-data-is-all-you-need-bayesian-parameter-inference-for-scientific-simulators-with-sbi",
          title: 'Simulated Data is All You Need: Bayesian Parameter Inference for Scientific Simulators with...',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2024-08-sbi-euroscipy/";
            },},{id: "talks-pyro-meets-sbi-unlocking-hierarchical-bayesian-inference-for-complex-simulators",
          title: 'Pyro Meets SBI: Unlocking Hierarchical Bayesian Inference for Complex Simulators',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2025-08-pyro-meets-sbi/";
            },},{id: "teachings-simulation-based-inference-training",
          title: 'Simulation-Based Inference Training',
          description: "Hands-on training in simulation-based inference for applications in neuroscience, astrophysics, and biology. Developed in collaboration with the University of Tübingen and the TransferLab at the appliedAI Institute for Europe.",
          section: "Teachings",handler: () => {
              window.location.href = "/teaching/2023-04-tfl-sbi-training/";
            },},{id: "teachings-beyond-likelihoods-bayesian-parameter-inference-for-black-box-simulators-with-sbi",
          title: 'Beyond Likelihoods: Bayesian Parameter Inference for Black-Box Simulators with sbi',
          description: "1.5-hour hands-on tutorial at EuroSciPy 2025 teaching scientists and engineers how to use simulation-based inference for Bayesian parameter estimation in complex simulators, with full uncertainty quantification.",
          section: "Teachings",handler: () => {
              window.location.href = "/teaching/2025-08-euroscipy-sbi-tutorial/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%6E.%74%65%75%73%65%6E@%6D%61%69%6C%62%6F%78.%6F%72%67", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/janfb", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jan-teusen-né-bölts-202172233", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/janfiete", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=wsE4N68AAAAJ", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
