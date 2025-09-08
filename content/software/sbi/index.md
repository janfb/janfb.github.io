---
title: "sbi: Simulation-Based Inference"
date: 2020-08-14
url: /software/sbi/
tags: ["machine learning", "Bayesian inference", "simulation-based inference", "probabilistic modeling", "Python", "open source"]
author: ["The sbi-dev team"]
description: "A Python package for simulation-based inference, designed to meet the needs of both researchers and practitioners" 
summary: "sbi is a Python package for simulation-based inference, providing a user-friendly interface to perform Bayesian parameter inference for simulator-based models with intractable likelihoods."
cover:
    image: "sbi-logo.png"
    alt: "sbi python package"
    relative: false
editPost:
    URL: "https://github.com/sbi-dev/sbi"
    Text: "GitHub Repository"
disableAnchoredHeadings: false
showToc: true
---

<!-- <img src="sbi-logo.png" alt="SBI Software Package" style="width:100px;"/> -->

## Overview

**sbi** is a Python package for simulation-based inference, designed to meet the needs of both researchers and practitioners. Whether you need fine-grained control or an easy-to-use interface, sbi has you covered.

With sbi, you can perform parameter inference using Bayesian inference: Given a simulator that models a real-world process, SBI estimates the full posterior distribution over the simulator's parameters based on observed data. This distribution indicates the most likely parameter values while additionally quantifying uncertainty and revealing potential interactions between parameters.

## Key Features

sbi provides access to simulation-based inference methods via a user-friendly interface:

```python
import torch
from sbi.inference import NPE

# Define shifted Gaussian simulator
def simulator(θ): 
    return θ + torch.randn_like(θ)

# Draw parameters from Gaussian prior
θ = torch.randn(1000, 2)

# Simulate data
x = simulator(θ)

# Choose sbi method and train
inference = NPE()
inference.append_simulations(θ, x).train()

# Do inference given observed data
x_o = torch.ones(2)
posterior = inference.build_posterior()
samples = posterior.sample((1000,), x=x_o)
```

## Resources

- 📚 [**Documentation**](https://sbi.readthedocs.io/en/latest/)
- 💻 [**GitHub Repository**](https://github.com/sbi-dev/sbi)
- 📦 [**PyPI Package**](https://pypi.org/project/sbi/)
- 📄 [**Paper (JOSS 2020)**](https://joss.theoj.org/papers/10.21105/joss.02505)
- 📄 [**Paper (JOSS 2025)**](https://joss.theoj.org/papers/10.21105/joss.07754)

## Installation

```bash
uv pip install sbi
```

## Community & Development

sbi is developed and maintained by the **sbi-dev team**, consisting of [over 80 contributors](https://github.com/sbi-dev/sbi/graphs/contributors) from around the world. The package is a NumFOCUS affiliated project with an active community, regular hackathons, and continuous development.

### Get Involved

- 🐛 [Report issues](https://github.com/sbi-dev/sbi/issues)
- 🎯 [Contribute code](https://github.com/sbi-dev/sbi/blob/main/CONTRIBUTING.md)
- 💬 [Join discussions](https://github.com/sbi-dev/sbi/discussions)

---

*sbi makes simulation-based inference accessible to researchers and practitioners across scientific domains.*