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
summary: "I compare six pretrained time-series models with trained baselines on real sensor data. In a preliminary pilot, Chronos-2 cut the 24-hour error by about 29 %. The numbers can change."
tags: [Python, PyTorch, Chronos-2, FastAPI, Docker, HPC]
figures:
  - { label: Pretrained models, value: "6" }
  - { label: Rolling forecasts, value: "1,000+ / model" }
  - { label: Compute, value: "4× A100" }
  - { label: Serving latency, value: "0.5–1.7 s" }
highlight: "My first 80 % intervals contained only 70–74 % of the true values. After recalibration, they contained 80 %."
stack: [Python, PyTorch, Chronos-2, TimesFM-2.5, Moirai-2, DeepAR, PatchTST, FastAPI, Docker, Linux, HPC, SSH]
links: []
---

## Problem

A foundation model is a large model that is pretrained on many datasets. It can forecast a new time series without training on it. This is called zero-shot forecasting. Real sensor data from a city has gaps, outages and short histories. I test if the models still work on this data, and if they beat models that I train on the same data.

## Approach

I compare six pretrained models, such as Chronos-2 and TimesFM-2.5, with three groups of trained baselines: statistical, boosting and deep-learning models. I run each pretrained model zero-shot and fine-tuned (trained further on the sensor data).

- Each model gives quantile forecasts: a range of likely values, not one number. I score them with quantile loss and with the coverage of the 80 % interval (the share of true values inside it).
- Stress tests cover gaps and outages in the data. Each model makes 1,000+ rolling forecasts, and each forecast starts at a later point in time. The runs use 4× NVIDIA A100 GPUs.
- Diebold-Mariano tests show if two models differ in accuracy. The Holm correction adjusts the results because I run many tests at once. I fixed the test protocol before the confirmatory test.

## Results

> These are preliminary pilot results. The thesis is in progress, and the numbers can change.

- All six pretrained models beat the seasonal-naive reference in 30 of 30 tests. This simple reference repeats the last seasonal cycle.
- Chronos-2 cut the 24-hour error by 29 %. The best trained baseline cut it by 18 %.
- Before recalibration, the 80 % intervals contained 70–74 % of the true values. After recalibration, they contained 80 %.
- A FastAPI service returns a forecast and its 80 % band in 0.5–1.7 s.
