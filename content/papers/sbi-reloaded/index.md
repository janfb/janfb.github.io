---
title: "sbi reloaded: A toolkit for simulation-based inference workflows"
date: 2025-04-01
lastmod: 2025-04-01
author: ["Jan Boelts*", "Michael Deistler*", "Manuel Gloeckler", "Álvaro Tejero-Cantero", "Jan-Matthis Lueckmann", "Guy Moss", "Peter Steinbach", "Thomas Moreau", "Fabio Muratore", "Julia Linhart", "Conor Durkan", "Julius Vetter", "Benjamin Kurt Miller", "Maternus Herold", "Abolfazl Ziaeemehr", "Matthijs Pals", "Theo Gruner", "Sebastian Bischoff", "Nastya Krouglova", "Richard Gao", "Janne K. Lappalainen", "Bálint Mucsányi", "Felix Pei", "Auguste Schulz", "Zinovia Stefanidi", "Pedro Rodrigues", "Cornelius Schröder", "Faried Abu Zaid", "Jonas Beck", "Jaivardhan Kapoor", "David S. Greenberg", "Pedro J. Gonçalves", "Jakob H. Macke"]
description: "A comprehensive toolkit for simulation-based inference workflows, providing researchers with flexible and efficient tools for Bayesian inference" 
tags: ["machine learning", "simulation-based inference", "sbi", "probabilistic modeling", "open source", "Python", "software"]
summary: "We present sbi reloaded, a comprehensive update to the sbi Python package that provides researchers with state-of-the-art algorithms and tools for simulation-based inference workflows across scientific domains." 
editPost:
    URL: "https://joss.theoj.org/papers/10.21105/joss.07754"
    Text: "Journal of Open Source Software"
---

---

##### Download

+ [Paper](https://joss.theoj.org/papers/10.21105/joss.07754.pdf)
+ [Code](https://github.com/sbi-dev/sbi)
+ [Documentation](https://sbi-dev.github.io/sbi/)

---

##### Abstract

The sbi package provides a unified Python interface for simulation-based inference (SBI) algorithms, enabling researchers to perform Bayesian inference on models with intractable likelihoods across diverse scientific domains. This paper presents sbi reloaded, a comprehensive update that has evolved through extensive community contributions and user feedback. The package now includes multiple state-of-the-art inference algorithms (NPE, NLE, NRE, FMPE, MNLE, and more), enhanced diagnostics and validation tools, improved computational efficiency, and a flexible API supporting custom neural network architectures and proposal distributions. Key improvements include GPU acceleration, distributed training support, comprehensive testing infrastructure, and extensive documentation with tutorials. The package has enabled scientific discoveries across neuroscience, cosmology, epidemiology, and other fields by making powerful inference methods accessible to domain scientists. With over 30 contributors and a growing user base, sbi has become the standard toolkit for neural simulation-based inference, balancing ease of use with the flexibility needed for cutting-edge research.

---

##### Citation

```BibTeX
@article{boelts2025sbi,
  title = {sbi reloaded: A toolkit for simulation-based inference workflows},
  author = {Boelts*, Jan and Deistler*, Michael and Gloeckler, Manuel and Tejero-Cantero, {\'A}lvaro and Lueckmann, Jan-Matthis and Moss, Guy and Steinbach, Peter and Moreau, Thomas and Muratore, Fabio and Linhart, Julia and Durkan, Conor and Vetter, Julius and Miller, Benjamin Kurt and Herold, Maternus and Ziaeemehr, Abolfazl and Pals, Matthijs and Gruner, Theo and Bischoff, Sebastian and Krouglova, Nastya and Gao, Richard and Lappalainen, Janne K. and Mucs{\'a}nyi, B{\'a}lint and Pei, Felix and Schulz, Auguste and Stefanidi, Zinovia and Rodrigues, Pedro and Schr{\"o}der, Cornelius and Zaid, Faried Abu and Beck, Jonas and Kapoor, Jaivardhan and Greenberg, David S. and Gon{\c c}alves, Pedro J. and Macke, Jakob H.},
  year = {2025},
  month = apr,
  journal = {Journal of Open Source Software},
  volume = {10},
  number = {108},
  pages = {7754},
  issn = {2475-9066},
  doi = {10.21105/joss.07754}
}
```

---