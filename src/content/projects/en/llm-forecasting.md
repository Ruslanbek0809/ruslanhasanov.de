---
order: 2
kind: Research project · TU Ilmenau
title: Zero-shot forecasting with LLMs
tagline: Can a general-purpose LLM predict the next sensor value?
description: "Research project case study: a FastAPI microservice that forecasts IoT sensor data with LLMs, evaluated with 4 LLMs in 192 experiments."
period: 10/2025 – 03/2026
context: TU Ilmenau, SensBee smart-city platform. Grade 1.3.
badge: { label: Grade 1.3, tone: ok }
summary: "A FastAPI service that forecasts IoT sensor data with LLMs. I ran 192 experiments with 4 LLMs. General-purpose LLMs gave unreliable forecasts on numeric sensor data."
tags: [Python, FastAPI, LLMs]
highlight: "This negative result led to my thesis topic: models that are built only for time series."
stack: [Python, FastAPI, LLMs, IoT sensor data]
links:
  - { label: sensbee_nvp on GitHub, href: "https://github.com/Ruslanbek0809/sensbee_nvp" }
---

## Problem

An LLM can forecast a time series without training for the task. This is called zero-shot forecasting. I tested how reliable general-purpose LLMs are on IoT sensor data from SensBee, a smart-city platform.

## Approach

- I built a FastAPI microservice that predicts the next value of a SensBee sensor.
- The data goes through 6 stages: fetch, resample, normalize, serialize, LLM, and filter/aggregate.
- I ran 192 experiments with 4 LLMs.
- I wrote the method and the results in a final report.

## Results

In 192 experiments with 4 LLMs, general-purpose LLMs gave unreliable forecasts on numeric sensor data. This result led to my thesis topic. The project got the grade 1.3.
