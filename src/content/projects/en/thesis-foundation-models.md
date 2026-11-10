---
order: 1
wide: true
kind: "Master's thesis · TU Ilmenau"
title: Evaluating Pretrained Time Series Foundation Models for Smart City Sensor Forecasting
tagline: Do pretrained forecasting models beat trained baselines on messy city sensor data?
description: "Master's thesis case study: six pretrained time-series foundation models against trained baselines on real smart-city sensor data, zero-shot and fine-tuned."
period: 09/2026 – 03/2027
context: TU Ilmenau, Databases and Information Systems Group. Individual thesis. No grade yet.
badge: { label: In progress, tone: progress }
summary: "Six pretrained time-series models against trained baselines on real sensor data. Preliminary pilot, may change: Chronos-2 cut the 24-hour error by about 29 %."
tags: [Python, PyTorch, Chronos-2, FastAPI, Docker, HPC]
figures:
  - { label: Pretrained models, value: "6" }
  - { label: Rolling forecasts, value: "1,000+ / model" }
  - { label: Compute, value: "4× A100" }
  - { label: Serving latency, value: "0.5–1.7 s" }
highlight: "I found my own uncertainty estimates too narrow and fixed them."
stack: [Python, PyTorch, Chronos-2, TimesFM-2.5, Moirai-2, DeepAR, PatchTST, FastAPI, Docker, Linux, HPC, SSH]
links: []
---

## Problem

Pretrained foundation models promise forecasts without task-specific training. Real city sensor data has gaps, outages and short histories, so I test whether the models hold up and whether they beat models trained on the same data.

## Approach

- Six pretrained models against statistical, boosting and deep learning baselines, zero-shot and fine-tuned.
- Quantile forecasts scored by quantile loss and 80 % interval coverage.
- Stress tests with gaps and outages: 1,000+ rolling forecasts per model.
- Diebold-Mariano tests with Holm correction, protocol frozen before the confirmatory test.

## Results

> Preliminary pilot results; the thesis is in progress and the numbers may change.

- All six beat seasonal-naive: 30 of 30 tests.
- Chronos-2: 24-hour error down 29 %. Best trained baseline: 18 %.
- 80 % interval coverage: 0.70–0.74 before recalibration, 0.80 after.
- FastAPI service: forecast and 80 % band in 0.5–1.7 s.
