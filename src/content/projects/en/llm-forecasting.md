---
order: 2
kind: Research project · TU Ilmenau
title: Zero-shot forecasting with LLMs
tagline: A FastAPI service that asks LLMs for the next sensor value, and what happened when I measured it
description: "Research project case study: a FastAPI microservice that forecasts IoT sensor data with LLMs, evaluated with 4 LLMs in 192 experiments."
period: 10/2025 – 03/2026
context: TU Ilmenau, SensBee smart-city platform. Grade 1.3.
badge: { label: Grade 1.3, tone: ok }
summary: A FastAPI microservice with a 6-stage data pipeline that forecasts IoT sensor data with LLMs. I evaluated 4 LLMs in 192 experiments. General-purpose LLMs were unreliable on numeric sensor data.
tags: [Python, FastAPI, LLMs]
highlight: The negative result is the useful part. It is why the thesis benchmarks dedicated time-series models.
stack: [Python, FastAPI, LLMs, IoT sensor data]
links:
  - { label: sensbee_nvp on GitHub, href: "https://github.com/Ruslanbek0809/sensbee_nvp" }
---

## Problem

LLMs can forecast without task-specific training. The SensBee smart-city platform holds IoT sensor data. I wanted to know how reliable general-purpose LLMs are on numeric sensor values.

## Approach

- Build a FastAPI microservice in Python for next-value prediction on the SensBee platform.
- Structure the data handling as a 6-stage pipeline.
- Evaluate 4 LLMs in 192 experiments.
- Write up the method and results in a scientific final report.

## Results

- 192 experiments across 4 LLMs.
- General-purpose LLMs are unreliable on numeric sensor data.
- That result set the question for my thesis: pretrained time-series models instead of general LLMs.
- Grade 1.3.
