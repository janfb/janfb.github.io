---
title: "Pyro Meets SBI: Unlocking Hierarchical Bayesian Inference for Complex Simulators"
date: 2025-08-20
url: /talks/pyro-meets-sbi-2025/
tags: ["simulation-based inference", "sbi", "Pyro", "hierarchical Bayesian inference", "probabilistic programming", "EuroSciPy", "decision-making", "drift-diffusion model"]
author: ["Jan Teusen", "Seth Axen"]
description: "Bridging simulation-based inference and probabilistic programming for hierarchical Bayesian analysis of complex simulators" 
summary: "This talk introduces a novel approach that bridges SBI and Pyro to enable simulation-based hierarchical Bayesian inference, combining SBI's ability to handle intractable simulators with Pyro's expressive power for complex hierarchical structures."
cover:
    image: "figure1.png"
    alt: "Pyro meets SBI at EuroSciPy 2025"
    relative: false
editPost:
    URL: "https://pretalx.com/euroscipy-2025/talk/KCYYTF/"
    Text: "EuroSciPy 2025"
---

## Talk Details

**When:** August 20, 2025, 11:40–12:00  
**Where:** EuroSciPy 2025, Room 1.38 (Ground Floor)  
**Duration:** 20 minutes  
**Materials:** [Slides and Code on GitHub](https://github.com/janfb/pyro-meets-sbi)

## Abstract

Hierarchical Bayesian inference is a powerful framework for analyzing structured data common in complex experimental settings, like multi-subject decision-making research. Probabilistic programming languages (PPLs) such as Pyro provide excellent tools for defining and inferring these hierarchical models, leveraging features like plate notation for concisely representing repeated structures and managing dependencies. 

However, a significant challenge arises when the underlying scientific model is a complex simulator with an intractable likelihood function, rendering standard PPL-based inference inapplicable. While Simulation-Based Inference (SBI) techniques can handle such simulators by learning likelihood (or posterior) approximations from simulations, they often lack native support for easily specifying and inferring complex hierarchical dependencies.

This talk introduces a novel approach that bridges the **sbi** package and **Pyro**, enabling effective simulation-based hierarchical Bayesian inference. We demonstrate how likelihood approximations learned via sbi can be seamlessly integrated as custom components within Pyro models. This synergistic approach combines the strengths of both methodologies:
- **SBI's ability** to perform inference on intractable simulators
- **Pyro's expressive power** and efficiency in handling complex hierarchical structures

## Key Innovation

The integration of SBI-learned likelihoods into Pyro models allows for hierarchical Bayesian analysis of simulation-based models. This bridges two powerful paradigms:

### The Challenge
- **Traditional PPLs**: Require tractable likelihood functions
- **Standard SBI**: Limited support for hierarchical structures
- **Real-world problems**: Often have both intractable likelihoods AND hierarchical dependencies

### Our Solution
We show how to:
1. Learn likelihood approximations using the sbi package
2. Integrate these approximations as custom distributions in Pyro
3. Leverage Pyro's infrastructure for efficient hierarchical inference
4. Maintain the full expressiveness of both frameworks

## Case Study: The Cookie Factory Problem 🍪

We illustrate the methodology using an accessible example: a cookie factory with 5 locations producing chocolate chip cookies. This example demonstrates:

### The Problem Setup
- **Data**: Chocolate chip counts from 30 cookies at each of 5 factory locations
- **Challenge**: Locations follow the same recipe but may vary in execution
- **Goal**: Understand both global patterns and location-specific variations

### Three Modeling Approaches
1. **Pooled Model**: All locations identical (ignores differences)
2. **Unpooled Model**: Each location independent (no information sharing)
3. **Hierarchical Model**: Locations are different but related (optimal balance)

The hierarchical approach demonstrates the power of partial pooling and shrinkage effects, where extreme estimates are pulled toward the global mean.

### Real-World Application: Drift-Diffusion Model
While the talk focused on the cookie example for clarity, the approach extends to complex cognitive models like the Drift-Diffusion Model (DDM) for decision-making, where analytical likelihoods are intractable

## Technical Implementation

The implementation leverages recent developments in the sbi package that facilitate this workflow:

```python
# Step 1: Train neural likelihood estimator with sbi
from sbi.inference import NLE
nle = NLE().append_simulations(theta, x)
estimator = nle.train()

# Step 2: Integrate into Pyro hierarchical model
def sbi_pyro_model(locations, chips=None):
    # Hyperpriors - global parameters
    mu = pyro.sample("mu", dist.Gamma(2, 0.2))
    sigma = pyro.sample("sigma", dist.Exponential(1))
    
    # Location-specific parameters
    with pyro.plate("location", n_locations):
        lam = pyro.sample("lam", 
            dist.Gamma(mu**2/sigma**2, mu/sigma**2))
    
    # Use SBI-learned likelihood wrapped for Pyro
    with pyro.plate("data", len(chips)):
        pyro.sample("obs", 
            SBItoPyro(estimator, lam[locations]), 
            obs=chips)
```

The `SBItoPyro` wrapper is a lightweight class (~150 lines) that handles shape conversions between sbi and Pyro

## Impact and Applications

This integration significantly expands the scope of rigorous Bayesian inference, opening new possibilities for analyzing complex, simulation-based models across various scientific disciplines:

- **Neuroscience**: Hierarchical models of neural circuits
- **Psychology**: Multi-subject cognitive models
- **Epidemiology**: Population-level disease models
- **Economics**: Agent-based models with group structure

## Collaboration & Acknowledgments

**Presentation by:** Jan Teusen  
**Pyro-SBI Bridge Implementation:** Seth Axen (developed during SBI Hackathon 2025)  
**Cookie Factory Example:** Adapted from Juan Camilo Orduz's [blog post](https://juanitorduz.github.io/cookies_example_numpyro/)

This work represents a collaborative effort to make advanced hierarchical modeling accessible for simulator-based research, combining theoretical innovation with practical software development.

## Resources

- 📊 [Slides and Code](https://github.com/janfb/pyro-meets-sbi)
- 📦 [sbi Package](https://github.com/sbi-dev/sbi)
- 🔥 [Pyro Documentation](https://pyro.ai)
- 🎥 [EuroSciPy 2025 Session](https://pretalx.com/euroscipy-2025/talk/KCYYTF/)

---

*This talk demonstrates how bridging simulation-based inference and probabilistic programming enables powerful new workflows for hierarchical Bayesian analysis of complex scientific models.*