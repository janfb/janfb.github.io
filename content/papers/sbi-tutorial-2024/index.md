---
title: "Simulation-based inference: an introduction for applied mathematicians"
date: 2024-08-26
lastmod: 2024-08-26
author: ["Michael Deistler*", "Jan Boelts*"]
description: "A comprehensive tutorial introduction to simulation-based inference methods for applied mathematicians and practitioners" 
tags: ["simulation-based inference", "sbi", "tutorial", "neural networks", "Bayesian inference", "machine learning"]
summary: "We provide a self-contained introduction to simulation-based inference (SBI), covering foundational concepts, state-of-the-art methods, and practical implementation guidance for researchers entering the field." 
editPost:
    URL: "https://arxiv.org/abs/2508.12939"
    Text: "arXiv"
---

---

##### Download

+ [Paper](https://arxiv.org/pdf/2508.12939.pdf)
+ [Code examples](https://github.com/sbi-dev/sbi)
+ [Interactive tutorials](https://sbi-dev.github.io/sbi/tutorial/00_getting_started/)

---

##### Abstract

Many models in science and engineering consist of a mechanistic component that simulates observed data from underlying parameters. Simulation-based inference (SBI) aims to invert such models, i.e., to infer parameters from observed data. Due to the complexity of many simulators, SBI methods typically do not rely on evaluations of the likelihood function. Instead, they use neural networks to learn representations from simulated data, enabling Bayesian inference for any mechanistic model. This tutorial introduces the fundamental concepts, state-of-the-art methods, and practical considerations of SBI. We demonstrate how SBI can be used to perform Bayesian inference when traditional methods fail, how to design neural network architectures for scientific problems, and how to diagnose and improve inference results. Throughout, we provide intuitive explanations of the mathematical foundations while maintaining rigor. We include practical code examples and discuss common pitfalls and best practices. This tutorial is aimed at applied mathematicians, statisticians, and practitioners in scientific computing who want to understand and apply modern simulation-based inference methods to their research problems.

---

##### Key Contributions

This tutorial paper provides:
- **Unified framework**: A coherent presentation of neural posterior, likelihood, and ratio estimation methods
- **Practical guidance**: Step-by-step implementation advice with code examples
- **Mathematical foundations**: Rigorous yet accessible treatment of the underlying theory
- **Diagnostic tools**: Methods for validating and improving inference results
- **Real-world applications**: Examples from neuroscience, epidemiology, and cosmology

---

##### Citation

```BibTeX
@article{deistler2024sbi,
  title={Simulation-based inference: an introduction for applied mathematicians},
  author={Deistler*, Michael and Boelts*, Jan},
  journal={arXiv preprint arXiv:2508.12939},
  year={2024}
}
```

*Equal contribution

---