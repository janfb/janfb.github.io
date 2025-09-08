---
title: "Benchmarking Simulation-Based Inference"
date: 2021-04-13
lastmod: 2021-04-13
author: ["Jan-Matthis Lueckmann", "Jan Boelts", "David S. Greenberg", "Pedro J. Gonçalves", "Jakob H. Macke"]
description: "A comprehensive benchmark suite for evaluating simulation-based inference methods across diverse tasks" 
tags: ["machine learning", "simulation-based inference", "benchmarking", "AISTATS"]
summary: "We present a benchmark suite for simulation-based inference, systematically evaluating different methods across tasks with varying dimensionality, simulation budgets, and amortization requirements." 
editPost:
    URL: "https://proceedings.mlr.press/v130/lueckmann21a.html"
    Text: "AISTATS 2021"
---

---

##### Download

+ [Paper](https://proceedings.mlr.press/v130/lueckmann21a/lueckmann21a.pdf)
+ [Code](https://github.com/sbi-benchmark/sbibm)
+ [Website](https://sbi-benchmark.github.io)

---

##### Abstract

Simulation-based inference (SBI) has emerged as a powerful framework for performing Bayesian inference when the likelihood function is intractable but simulations from the model are feasible. The rapid development of SBI methods has created a need for systematic evaluation and comparison. We present a comprehensive benchmark for SBI methods, including tasks with different properties: dimensionality of parameters and data, simulation budget, and requirements for amortization. Our benchmark includes reference posteriors obtained with expensive Monte Carlo methods, standardized implementations of competing algorithms, and metrics for accuracy and computational efficiency. We evaluate six SBI algorithms across ten benchmark tasks, revealing strengths and weaknesses of different approaches. Sequential methods generally achieve better accuracy per simulation, while amortized methods excel when many posterior evaluations are needed. Flow-based methods consistently outperform methods based on mixture density networks. Our benchmark provides a foundation for systematic progress in SBI research and is available as an open-source Python package.

---

##### Citation

```BibTeX
@inproceedings{lueckmann2021benchmarking,
  title={Benchmarking Simulation-Based Inference},
  author={Lueckmann, Jan-Matthis and Boelts, Jan and Greenberg, David S and Gon{\c{c}}alves, Pedro J and Macke, Jakob H},
  booktitle={International Conference on Artificial Intelligence and Statistics (AISTATS)},
  pages={343--351},
  year={2021},
  organization={PMLR}
}
```

---