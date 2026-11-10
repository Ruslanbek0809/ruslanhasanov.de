---
order: 2
kind: Research project · TU Ilmenau
title: Zero-shot forecasting with LLMs
tagline: Asking LLMs for the next sensor value, and what I measured
description: "Research project case study: a FastAPI microservice that forecasts IoT sensor data with LLMs, evaluated with 4 LLMs in 192 experiments."
period: 10/2025 – 03/2026
context: TU Ilmenau, SensBee smart-city platform. Grade 1.3.
badge: { label: Grade 1.3, tone: ok }
summary: "A FastAPI service that forecasts IoT sensor data with LLMs. 4 LLMs, 192 experiments: general-purpose LLMs were unreliable on numeric sensor data."
tags: [Python, FastAPI, LLMs]
highlight: "The negative result is why the thesis benchmarks dedicated time-series models."
stack: [Python, FastAPI, LLMs, IoT sensor data]
links:
  - { label: sensbee_nvp on GitHub, href: "https://github.com/Ruslanbek0809/sensbee_nvp" }
---

## Problem

LLMs can forecast without task-specific training. I tested how reliable general-purpose LLMs are on IoT sensor data from the SensBee smart-city platform.

## Approach

- FastAPI microservice for next-value prediction on SensBee.
- 6-stage data pipeline.
- 4 LLMs in 192 experiments.
- Method and results in a written final report.

## Results

- 192 experiments, 4 LLMs.
- General-purpose LLMs unreliable on numeric sensor data.
- Grade 1.3.
