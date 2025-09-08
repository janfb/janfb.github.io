---
title: "Simulation-based inference for efficient identification of generative models in connectomics"
date: 2023-08-23
lastmod: 2024-01-15
author: ["Jan Boelts", "Philipp Harth", "Richard Gao", "Daniel Udvary", "Felipe Yanez", "Daniel Baum", "Hans-Christian Hege", "Marcel Oberlaender", "Jakob H. Macke"]
description: "Using simulation-based inference to identify synaptic connectivity rules in anatomically realistic cortical connectomes" 
tags: ["neuroscience", "connectomics", "simulation-based inference", "sbi", "cortical circuits"]
summary: "We demonstrate how simulation-based inference can efficiently identify synaptic connectivity rules in dense cortical connectomes, enabling analysis of complex brain circuit organization." 
editPost:
    URL: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1011406"
    Text: "PLOS Computational Biology"
---

---

##### Download

+ [Paper](https://journals.plos.org/ploscompbiol/article/file?id=10.1371/journal.pcbi.1011406&type=printable)
+ [Code](https://github.com/mackelab/sbi-for-connectomics)

---

##### Abstract

Understanding the organizational principles of neural circuits requires identifying the rules governing synaptic connectivity between neurons. However, inferring these rules from experimental data is challenging due to the complexity of biological networks and limitations in data acquisition. Here, we present a simulation-based inference approach for identifying generative models of connectivity in anatomically detailed cortical circuits. Our method combines biologically realistic simulations of cortical connectivity with neural density estimation to perform Bayesian inference on connectivity parameters. We validate our approach on synthetic data and apply it to a dense reconstruction of rat barrel cortex, revealing distance-dependent connectivity rules and cell-type-specific biases. The method is computationally efficient, requiring orders of magnitude fewer simulations than traditional approaches. This work demonstrates how modern machine learning techniques can accelerate discovery in connectomics and provides a framework for understanding the principles underlying brain circuit organization.

---

##### Citation

```BibTeX
@article{boelts2023simulation,
  title={Simulation-based inference for efficient identification of generative models in connectomics},
  author={Boelts, Jan and Harth, Philipp and Gao, Richard and Udvary, Daniel and Yanez, Felipe and Baum, Daniel and Hege, Hans-Christian and Oberlaender, Marcel and Macke, Jakob H},
  journal={PLOS Computational Biology},
  volume={19},
  number={8},
  pages={e1011406},
  year={2023},
  publisher={Public Library of Science}
}
```

---