---
title: "Simulation-Based Inference for Computational Neuroscience"
date: 2022-11-10
url: /talks/bernstein-2022/
tags: ["neuroscience", "simulation-based inference", "computational modeling", "decision-making"]
author: ["Jan Boelts"]
description: "Invited talk on applying simulation-based inference to neuroscience models" 
summary: "Invited presentation at the Bernstein Center for Computational Neuroscience Berlin on using SBI methods for parameter inference in models of neural circuits and behavior."
editPost:
    URL: "https://www.bccn-berlin.de"
    Text: "BCCN Berlin"
---

## Abstract

Computational models are essential tools for understanding brain function, but inferring their parameters from experimental data remains challenging. Traditional likelihood-based inference is often intractable for realistic models of neural circuits and behavior. In this talk, I present how simulation-based inference (SBI) provides a solution by learning the relationship between parameters and data from simulations.

## Talk Outline

1. **Introduction to SBI in Neuroscience**
   - Why neuroscience models are challenging for inference
   - The role of simulators in computational neuroscience

2. **Mixed Neural Likelihood Estimation (MNLE)**
   - Handling mixed discrete-continuous data from behavioral experiments
   - Application to drift-diffusion models of decision-making
   - Comparison with traditional methods

3. **Connectomics Applications**
   - Inferring synaptic connectivity rules from anatomical data
   - Scaling to realistic cortical circuits
   - Validation on electron microscopy reconstructions

4. **Software Tools**
   - The sbi package: making SBI accessible
   - Integration with neuroscience simulators
   - Best practices for practitioners

## Key Results

- MNLE achieves comparable accuracy to specialized methods with 6 orders of magnitude fewer simulations
- Successfully identified connectivity rules in dense cortical reconstructions
- Open-source tools have been adopted by multiple neuroscience labs

## Venue

**Bernstein Center for Computational Neuroscience**  
Humboldt University Berlin  
Berlin, Germany

### Recording

[Contact for recording availability]

---