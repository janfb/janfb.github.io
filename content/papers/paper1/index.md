---
title: "Flexible and efficient simulation-based inference for models of decision-making"
date: 2022-07-27
lastmod: 2024-07-12
author: ["Jan Boelts","Jan-Matthis Lueckmann","Richard Gao","Jakob H. Macke"]
description: "We introduce Mixed Neural Likelihood Estimation (MNLE), a simulation-based inference method for models with both continuous and discrete data, enabling efficient Bayesian inference in decision-making models." 
tags: ["machine learning", "Bayesian inference", "neuroscience", "decision-making", "SBI"]
summary: "We propose a new method to perform simulation-based inference for mixed data e.g., with continuous and discrete data types, like they often occur in models of decision-making." 
cover:
    image: "paper1.jpg"
    alt: "Mixed Neural Likelihood Estimation"
    relative: false
editPost:
    URL: "https://github.com/pmichaillat/hugo-website"
    Text: "eLife"

---

---

##### Download

+ [Paper](paper1.pdf)
+ [Code and data](https://github.com/mackelab/mnle-for-ddms)

---

##### Abstract

Inferring parameters of computational models that capture experimental data is a central task in cognitive neuroscience. Bayesian statistical inference methods usually require the ability to evaluate the likelihood of the model—however, for many models of interest in cognitive neuroscience, the associated likelihoods cannot be computed efficiently. Simulation-based inference (SBI) offers a solution to this problem by only requiring access to simulations produced by the model. Previously, Fengler et al. introduced Likelihood Approximation Networks (LAN, Fengler et al., 2021) which make it possible to apply SBI to models of decision-making, but require billions of simulations for training. Here, we provide a new SBI method that is substantially more simulation-efficient. Our approach, Mixed Neural Likelihood Estimation (MNLE), trains neural density estimators on model simulations to emulate the simulator, and is designed to capture both the continuous (e.g., reaction times) and discrete (choices) data of decision-making models. The likelihoods of the emulator can then be used to perform Bayesian parameter inference on experimental data using standard approximate inference methods like Markov Chain Monte Carlo sampling. We demonstrate MNLE on two variants of the drift-diffusion model (DDM) and show that it is substantially more efficient than LANs. MNLE achieves similar likelihood accuracy with six orders of magnitude fewer training simulations, and is significantly more accurate than LANs when both are trained with the same budget. This enables researchers to perform SBI on custom-tailored models of decision-making, leading to fast iteration of model design for scientific discovery.

Boelts, J., Lueckmann, J. M., Gao, R., & Macke, J. H. (2022). Flexible and efficient
simulation-based inference for models of decision-making. Elife, 11, e77220. https://elifesciences.org/articles/77220

```BibTeX
@article{boelts2022flexible,
  title={Flexible and efficient simulation-based inference for models of decision-making},
  author={Boelts, Jan and Lueckmann, Jan-Matthis and Gao, Richard and Macke, Jakob H},
  journal={Elife},
  volume={11},
  pages={e77220},
  year={2022},
  publisher={eLife Sciences Publications Limited}
}
```

---
