---
title: "Pyro Meets SBI: Unlocking Hierarchical Bayesian Inference for Complex Simulators"
date: 2025-08-20
url: /talks/pyro-meets-sbi-2025/
tags: ["simulation-based inference", "sbi", "Pyro", "hierarchical Bayesian inference", "probabilistic programming", "EuroSciPy", "decision-making", "drift-diffusion model"]
author: ["Jan Teusen", "Seth Axen"]
description: "Bridging simulation-based inference and probabilistic programming for hierarchical Bayesian analysis of complex simulators" 
summary: "This talk introduces a novel approach that bridges SBI and Pyro to enable simulation-based hierarchical Bayesian inference, combining SBI's ability to handle intractable simulators with Pyro's expressive power for complex hierarchical structures."
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

## Case Study: Hierarchical Drift-Diffusion Model

We illustrate the methodology using a key example from cognitive science: fitting a hierarchical drift-diffusion model (DDM) to choice data. The DDM is a widely-used model of decision-making that:
- Simulates the cognitive process of evidence accumulation
- Has an intractable likelihood for many parameter combinations
- Naturally fits into hierarchical structures (multiple subjects, conditions)

Our approach successfully:
- Combines information across multiple simulated subjects
- Handles the intractable DDM likelihood
- Enables full Bayesian inference over hierarchical parameters
- Provides uncertainty quantification at both individual and group levels

## Technical Implementation

The implementation leverages recent developments in the sbi package that facilitate this workflow:

```python
# Learn likelihood approximation with sbi
likelihood_nn = sbi.train_likelihood_estimator(simulator, data)

# Integrate into Pyro hierarchical model
with pyro.plate("subjects", n_subjects):
    # Group-level parameters
    group_drift = pyro.sample("group_drift", Normal(0, 1))
    
    # Individual parameters
    drift = pyro.sample("drift", Normal(group_drift, 0.5))
    
    # Use SBI-learned likelihood
    pyro.sample("data", SBILikelihood(likelihood_nn, drift))
```

## Impact and Applications

This integration significantly expands the scope of rigorous Bayesian inference, opening new possibilities for analyzing complex, simulation-based models across various scientific disciplines:

- **Neuroscience**: Hierarchical models of neural circuits
- **Psychology**: Multi-subject cognitive models
- **Epidemiology**: Population-level disease models
- **Economics**: Agent-based models with group structure

## Collaboration

**Presentation by:** Jan Teusen  
**Implementation in sbi package by:** Seth Axen

This work represents a collaborative effort to make advanced hierarchical modeling accessible for simulator-based research, combining theoretical innovation with practical software development.

## Resources

- 📊 [Slides and Code](https://github.com/janfb/pyro-meets-sbi)
- 📦 [sbi Package](https://github.com/sbi-dev/sbi)
- 🔥 [Pyro Documentation](https://pyro.ai)
- 🎥 [EuroSciPy 2025 Session](https://pretalx.com/euroscipy-2025/talk/KCYYTF/)

---

*This talk demonstrates how bridging simulation-based inference and probabilistic programming enables powerful new workflows for hierarchical Bayesian analysis of complex scientific models.*