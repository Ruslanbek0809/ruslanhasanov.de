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
summary: "Six pretrained time-series models against trained baselines on real sensor data, zero-shot and fine-tuned. Preliminary pilot (thesis in progress): all six beat the seasonal-naive reference in 30 of 30 tests. Chronos-2 cut the 24-hour error by about 29 %."
tags: [Python, PyTorch, Chronos-2, FastAPI, Docker, HPC]
figures:
  - { label: Pretrained models, value: "6" }
  - { label: Rolling forecasts, value: "1,000+ / model" }
  - { label: Compute, value: "4× A100" }
  - { label: Serving latency, value: "0.5–1.7 s" }
highlight: I checked my own uncertainty estimates, found them too narrow and fixed them. I also froze the protocol before the confirmatory test on new data.
stack: [Python, PyTorch, Chronos-2, TimesFM-2.5, Moirai-2, DeepAR, PatchTST, FastAPI, Docker, Linux, HPC, SSH]
links: []
---

## Problem

Pretrained foundation models promise forecasts without task-specific training. Real city sensor data has gaps, outages, closed hours and short histories. I test whether the models hold up there, and whether they beat models trained on the same data.

## Approach

- Benchmark six pretrained models (Chronos-2, Chronos-Bolt, TimesFM-2.5, TiRex, Toto, Moirai-2) against statistical, gradient-boosting and deep learning baselines (DeepAR, PatchTST) and one LLM method. Each runs zero-shot and fine-tuned.
- Score quantile forecasts with quantile loss and 80 % interval coverage.
- Stress-test under data gaps, sensor outages, closed hours and short history: over 1,000 rolling forecasts per model.
- Compare with Diebold-Mariano tests and Holm correction. The protocol is frozen, and a confirmatory test runs on new data.
- Run PyTorch training and fine-tuning grids on a Linux HPC GPU node (4x NVIDIA A100) over SSH.
- Deploy the chosen model in a Dockerized FastAPI service.

## Results

> Preliminary pilot results; the thesis is in progress and the numbers may change.

- All six pretrained models beat the seasonal-naive reference: 30 of 30 tests.
- Chronos-2 cut the 24-hour error by about 29 % against the seasonal-naive reference. The best trained baseline cut it by 18 %.
- The 80 % intervals were too narrow. After recalibration, validation coverage went from 0.70–0.74 to 0.80.
- The FastAPI service returns a forecast and an 80 % band in 0.5–1.7 s.
