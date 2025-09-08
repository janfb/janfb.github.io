---
title: "Streuobstwiesen Classification: AI for Environmental Monitoring"
date: 2024-11-01
url: /software/streuobstwiesen/
tags: ["machine learning", "computer vision", "environmental monitoring", "satellite imagery", "open source", "GIS"]
author: ["Jan Teusen", "AI Kommune Team"]
description: "Open-source ML solution for automated classification of traditional orchards from satellite imagery" 
summary: "Leading the development of an open-source machine learning solution for automated classification of Streuobstwiesen (traditional orchards) from satellite imagery, enabling efficient environmental monitoring for public administration."
editPost:
    URL: "https://github.com/aai-institute/ki-kommune-2024"
    Text: "GitHub Repository"
disableAnchoredHeadings: false
showToc: true
---

## Project Overview

I am leading the technical development of an open-source machine learning solution for automated classification of **Streuobstwiesen** (traditional orchards) from satellite imagery. This environmental monitoring project aims to deliver a production-ready QGIS plugin for the Regionalverband Neckar-Alb (RVNA), enabling efficient land management and preservation of these ecologically valuable landscapes.

## Technical Architecture

The project transforms a hackathon prototype (November 2024) into a sustainable, well-engineered software product using:

- **Vision Foundation Models**: Fine-tuning SAM (Segment Anything Model) with LoRA adapters for efficient satellite image segmentation
- **MLOps Infrastructure**: Comprehensive MLFlow-based experiment tracking and model versioning system
- **Modern Python Stack**: Using `uv` for dependency management and `ruff` for code quality
- **GIS Integration**: Seamless integration with QGIS through a custom plugin
- **Web Interface**: Gradio-based web application for non-technical users

## Key Features

### 🛰️ Satellite Image Processing
- Handles large satellite imagery files (3GB+ .ecw format)
- Coordinate system transformations
- Multi-resolution processing pipeline

### 🤖 Machine Learning Pipeline
- State-of-the-art vision models (SAM) with parameter-efficient fine-tuning
- Custom dataset preparation for German landscape characteristics
- Reproducible training workflows with MLFlow tracking

### 🔧 User-Facing Tools
- **QGIS Plugin**: Direct integration into existing GIS workflows
- **Web Application**: Browser-based interface for quick classification tasks
- **API**: RESTful API for programmatic access

## Impact

This project bridges cutting-edge AI research with practical public service applications:

- **Environmental Conservation**: Protecting traditional orchards crucial for biodiversity
- **Public Administration**: Streamlining land-use monitoring for government agencies
- **Open Source**: Contributing to the open-source ecosystem with reusable components
- **Knowledge Transfer**: Demonstrating best practices in ML engineering for environmental applications

## Technologies

- **ML Frameworks**: PyTorch, Transformers, scikit-learn
- **Computer Vision**: Segment Anything Model (SAM), LoRA fine-tuning
- **MLOps**: MLFlow, DVC, GitHub Actions
- **GIS**: QGIS, GDAL, Rasterio
- **Development**: Python 3.11+, uv, ruff, pytest

## Get Involved

The project is open source and welcomes contributions:

- [GitHub Repository](https://github.com/aai-institute/ki-kommune-2024)
- [Documentation](https://github.com/aai-institute/ki-kommune-2024/wiki)
- [Issue Tracker](https://github.com/aai-institute/ki-kommune-2024/issues)

---