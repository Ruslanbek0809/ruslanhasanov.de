---
order: 2
kind: Forschungsprojekt · TU Ilmenau
title: Zero-Shot-Zeitreihenprognose mit LLMs
tagline: Ein FastAPI-Dienst, der LLMs nach dem nächsten Sensorwert fragt, und was die Messung ergab
description: "Fallstudie Forschungsprojekt: ein FastAPI-Microservice zur LLM-gestützten Prognose von IoT-Sensordaten, evaluiert mit 4 LLMs in 192 Experimenten."
period: 10/2025 – 03/2026
context: TU Ilmenau, SensBee-Plattform für Smart Cities. Note 1,3.
badge: { label: "Note 1,3", tone: ok }
summary: FastAPI-Microservice mit 6-stufiger Datenpipeline zur LLM-gestützten Prognose von IoT-Sensordaten. 4 LLMs in 192 Experimenten evaluiert. Allgemeine LLMs sind auf numerischen Sensordaten unzuverlässig.
tags: [Python, FastAPI, LLMs]
highlight: Das negative Ergebnis ist der nützliche Teil. Deshalb vergleicht die Masterarbeit spezialisierte Zeitreihenmodelle.
stack: [Python, FastAPI, LLMs, IoT-Sensordaten]
links:
  - { label: sensbee_nvp auf GitHub, href: "https://github.com/Ruslanbek0809/sensbee_nvp" }
---

## Problem

LLMs können ohne aufgabenspezifisches Training prognostizieren. Die SensBee-Plattform für Smart Cities hält IoT-Sensordaten. Ich wollte wissen, wie zuverlässig allgemeine LLMs bei numerischen Sensorwerten sind.

## Vorgehen

- FastAPI-Microservice in Python für die Vorhersage des jeweils nächsten Werts auf der SensBee-Plattform.
- Datenverarbeitung als 6-stufige Pipeline.
- 4 LLMs in 192 Experimenten evaluiert.
- Methode und Ergebnisse in einem wissenschaftlichen Abschlussbericht dokumentiert.

## Ergebnisse

- 192 Experimente mit 4 LLMs.
- Allgemeine LLMs sind auf numerischen Sensordaten unzuverlässig.
- Dieses Ergebnis gab die Frage für meine Masterarbeit vor: vortrainierte Zeitreihenmodelle statt allgemeiner LLMs.
- Note 1,3.
