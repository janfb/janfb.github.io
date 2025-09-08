---
title: "sbi: A toolkit for simulation-based inference"
date: 2020-08-14
lastmod: 2020-08-14
author: ["Álvaro Tejero-Cantero*", "Jan Boelts*", "Michael Deistler*", "Jan-Matthis Lueckmann*", "Conor Durkan*", "Pedro J. Gonçalves", "David S. Greenberg", "Jakob H. Macke"]
description: "The original sbi package paper introducing a unified Python toolkit for simulation-based inference" 
tags: ["machine learning", "simulation-based inference", "open source", "Python", "software"]
summary: "We introduce sbi, a Python package providing a unified interface for simulation-based inference methods, making these powerful techniques accessible to researchers across disciplines." 
editPost:
    URL: "https://joss.theoj.org/papers/10.21105/joss.02505"
    Text: "Journal of Open Source Software"
---

---

##### Download

+ [Paper](https://www.theoj.org/joss-papers/joss.02505/10.21105.joss.02505.pdf)
+ [Code](https://github.com/sbi-dev/sbi)
+ [Documentation](https://sbi-dev.github.io/sbi/)

---

##### Abstract

Scientists and engineers use numerical simulators to model empirical phenomena. When the simulator is stochastic, or the phenomena under investigation are corrupted by noise, the simulation outputs and the empirical observations will not match exactly. In such cases, a key task is to infer the simulator parameters that best describe the observed data, a process referred to as inverse modeling or parameter inference. When the likelihood of the simulator is intractable, conventional Bayesian inference methods are inapplicable. Simulation-based inference (SBI) provides a solution by using neural networks to learn the relationship between parameters and data from simulations. The sbi package implements recent SBI algorithms in a user-friendly Python API. It provides a unified interface for different algorithms, enabling users to easily switch between methods and compare their performance. The package is designed to be accessible to domain scientists while remaining flexible enough for machine learning researchers to extend and customize.

---

##### Citation

```BibTeX
@article{tejero2020sbi,
  title={sbi: A toolkit for simulation-based inference},
  author={Tejero-Cantero*, {\'A}lvaro and Boelts*, Jan and Deistler*, Michael and Lueckmann*, Jan-Matthis and Durkan*, Conor and Gon{\c{c}}alves, Pedro J and Greenberg, David S and Macke, Jakob H},
  journal={Journal of Open Source Software},
  volume={5},
  number={52},
  pages={2505},
  year={2020}
}
```

*Equal contribution

---