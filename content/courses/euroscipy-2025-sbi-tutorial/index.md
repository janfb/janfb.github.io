---
title: "Beyond Likelihoods: Bayesian Parameter Inference for Black-Box Simulators with sbi"
date: 2025-08-19
url: /courses/euroscipy-2025-sbi-tutorial/
tags: ["simulation-based inference", "sbi", "Bayesian inference", "tutorial", "EuroSciPy", "machine learning", "Python", "parameter estimation", "uncertainty quantification"]
author: ["Jan Teusen"]
description: "Hands-on tutorial on simulation-based inference for parameter estimation in complex simulators" 
summary: "A comprehensive hands-on tutorial at EuroSciPy 2025 teaching scientists and engineers how to use simulation-based inference (SBI) for Bayesian parameter estimation in complex simulators, providing full uncertainty quantification beyond simple best-fit approaches."
cover:
    image: "logo.png"
    alt: "SBI Tutorial"
    relative: false
editPost:
    URL: "https://pretalx.com/euroscipy-2025/talk/MU9HAJ/"
    Text: "EuroSciPy 2025"
---

## Tutorial Overview

**When:** August 19, 2025, 15:30–17:00  
**Where:** EuroSciPy 2025, Room 1.38 (Ground Floor)  
**Duration:** 1.5 hours  
**Level:** Intermediate  
**Materials:** [GitHub Repository](https://github.com/janfb/euroscipy-2025-sbi-tutorial)

## Description

Do you spend time tuning parameters for complex scientific simulators? Perhaps you use grid search or optimization to match parameters to data. These find a best-fit set, but often don't reveal your confidence or if other parameters also fit. This uncertainty is crucial for reliable conclusions.

This tutorial introduces **Simulation-Based Inference (SBI)**, a modern technique tackling this challenge. Unlike traditional Bayesian inference methods (like MCMC) that require mathematical likelihood functions, SBI works directly with your simulator's outputs. Using recent advances in probabilistic ML, it estimates the probability distribution of parameter values consistent with your observations, even for complex "black-box" simulators. It provides not just a single best guess, but full parameter distributions representing parameter uncertainties and potential interactions.

## What You'll Learn

In this hands-on tutorial using the **sbi Python package**, you'll learn the practical steps:

1. **Setting up the problem** - Defining parameter ranges and checking model plausibility
2. **Running SBI for parameter distributions** - Applying different SBI techniques
3. **Checking result reliability** - Validating your inference results
4. **Interpreting results** - Drawing scientific conclusions from SBI outputs

We cover different SBI techniques and how to apply them to real-world problems.

## Tutorial Content

### The SBI Workflow

The tutorial provides a comprehensive, practical introduction to SBI using the sbi Python package. We guide you through the entire practical workflow:

- **A-priori checks**: Defining parameter ranges of interest and running initial simulations to check if the model can plausibly generate data similar to observations
- **Choosing and applying SBI methods**: Learning about different SBI strategies (like those that directly estimate parameter probabilities, approximate likelihoods, or work with probability ratios) and selecting one suitable for your specific problem
- **A-posteriori checks**: Evaluating how accurately the underlying machine learning models have learned to infer parameters
- **Interpretation**: Understanding and drawing scientific conclusions from SBI results

### Why SBI?

Traditional methods like grid search or numerical optimization algorithms can find a single 'best' set of parameters. However, they often struggle when there are many parameters, and more importantly, they usually don't quantify the uncertainty associated with the result. 

SBI methods learn a statistical relationship directly from running your simulator multiple times with different inputs. Their key advantage is the ability to estimate the range of parameter values (and their probabilities) that are consistent with your observed data, providing a measure of uncertainty. This works even for complex 'black-box' simulators where the internal equations might be unknown or intractable.

## Target Audience

This tutorial is aimed at:
- Scientists and engineers using Python for simulations
- Researchers working with computational models who need to estimate parameters from data
- Practitioners looking for methods to quantify parameter uncertainty in complex systems
- Anyone interested in probabilistic inference methods

## Prerequisites

- Proficiency in Python programming
- No prior knowledge of Bayesian statistics is required
- Basic understanding of scientific computing helpful but not essential

## Learning Objectives

Upon completion, participants will be able to:
- Understand the concept of Simulation-Based Inference (SBI) and its advantages for parameter estimation in complex simulators
- Apply the sbi Python package to estimate parameter ranges and uncertainty from simulation outputs
- Become familiar with common neural network-based SBI techniques and their use cases
- Evaluate the results of an SBI analysis to ensure reliability
- Perform the complete SBI workflow using the sbi package on their own problems

## About the sbi Package

The **sbi** package implements state-of-the-art SBI algorithms, often using neural networks, and is actively developed by a large community. It's a NumFOCUS affiliated project with over 70 contributors and yearly collaborative hackathons. The package provides a unified interface for various SBI methods, making these powerful techniques accessible to domain scientists.

## Practical Applications

The tutorial includes examples from various fields:
- **Epidemiology**: Modeling disease spread with uncertainty quantification
- **Neuroscience**: Inferring neural circuit parameters from recordings
- **Physics**: Parameter estimation in particle physics simulations
- **Engineering**: Calibrating complex engineering models

## Materials and Resources

- 📚 [Tutorial Materials](https://github.com/janfb/euroscipy-2025-sbi-tutorial)
- 📦 [sbi Package Documentation](https://sbi-dev.github.io/sbi/)
- 📄 [SBI Practical Guide Paper](https://arxiv.org/abs/2508.12939)
- 🎥 [EuroSciPy 2025 Session](https://pretalx.com/euroscipy-2025/talk/MU9HAJ/)

---

*This tutorial equips participants with the practical skills to effectively use the sbi package for more reliable parameter estimation and uncertainty quantification in their simulation-based models.*