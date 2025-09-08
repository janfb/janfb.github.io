---
title: "GATSBI: Generative Adversarial Training for Simulation-Based Inference"
date: 2022-04-25
lastmod: 2022-04-25
author: ["Poornima Ramesh", "Jan-Matthis Lueckmann", "Jan Boelts", "Álvaro Tejero-Cantero", "David S. Greenberg", "Jakob H. Macke"]
description: "A new approach to simulation-based inference using generative adversarial networks for improved sample efficiency" 
tags: ["machine learning", "simulation-based inference", "GANs", "neural networks", "ICLR"]
summary: "We introduce GATSBI, a method that combines generative adversarial networks with simulation-based inference to achieve better sample efficiency and accuracy in posterior estimation." 
editPost:
    URL: "https://openreview.net/forum?id=kR1hC6j48Tp"
    Text: "ICLR 2022"
---

---

##### Download

+ [Paper](https://openreview.net/pdf?id=kR1hC6j48Tp)
+ [Code](https://github.com/mackelab/gatsbi)

---

##### Abstract

Simulation-based inference (SBI) enables Bayesian inference for models where evaluating the likelihood is intractable but simulating from the model is possible. Many SBI methods approximate the posterior distribution using neural density estimators, but training these estimators requires a large number of simulations. We introduce GATSBI (Generative Adversarial Training for Simulation-Based Inference), which leverages generative adversarial networks (GANs) to improve the sample efficiency of posterior estimation. GATSBI trains a discriminator to distinguish between samples from the true posterior and samples from a learned generator, while simultaneously training the generator to approximate the posterior. This adversarial training objective provides a more direct learning signal compared to maximum likelihood estimation, leading to improved performance with fewer simulations. We demonstrate GATSBI's effectiveness on benchmark problems from neuroscience and epidemiology, showing that it achieves comparable or better accuracy than existing methods while requiring significantly fewer simulations.

---

##### Citation

```BibTeX
@inproceedings{ramesh2022gatsbi,
  title={GATSBI: Generative Adversarial Training for Simulation-Based Inference},
  author={Ramesh, Poornima and Lueckmann, Jan-Matthis and Boelts, Jan and Tejero-Cantero, {\'A}lvaro and Greenberg, David S and Macke, Jakob H},
  booktitle={International Conference on Learning Representations (ICLR)},
  year={2022}
}
```

---