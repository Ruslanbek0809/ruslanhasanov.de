---
order: 2
kind: Forschungsprojekt · TU Ilmenau
title: Zero-Shot-Zeitreihenprognose mit LLMs
tagline: LLMs nach dem nächsten Sensorwert fragen, und was die Messung ergab
description: "Fallstudie Forschungsprojekt: ein FastAPI-Microservice zur LLM-gestützten Prognose von IoT-Sensordaten, evaluiert mit 4 LLMs in 192 Experimenten."
period: 10/2025 – 03/2026
context: TU Ilmenau, SensBee-Plattform für Smart Cities. Note 1,3.
badge: { label: "Note 1,3", tone: ok }
summary: "FastAPI-Dienst, der IoT-Sensordaten mit LLMs prognostiziert. 4 LLMs, 192 Experimente: Allgemeine LLMs sind auf numerischen Sensordaten unzuverlässig."
tags: [Python, FastAPI, LLMs]
highlight: "Das negative Ergebnis ist der Grund, warum die Masterarbeit spezialisierte Zeitreihenmodelle vergleicht."
stack: [Python, FastAPI, LLMs, IoT-Sensordaten]
links:
  - { label: sensbee_nvp auf GitHub, href: "https://github.com/Ruslanbek0809/sensbee_nvp" }
---

## Problem

LLMs können ohne aufgabenspezifisches Training prognostizieren. Ich habe geprüft, wie zuverlässig allgemeine LLMs auf IoT-Sensordaten der Smart-City-Plattform SensBee sind.

## Vorgehen

- FastAPI-Microservice für die Vorhersage des nächsten Werts auf SensBee.
- Datenverarbeitung als 6-stufige Pipeline.
- 4 LLMs in 192 Experimenten.
- Methode und Ergebnisse in einem schriftlichen Abschlussbericht.

## Ergebnisse

- 192 Experimente, 4 LLMs.
- Allgemeine LLMs auf numerischen Sensordaten unzuverlässig.
- Note 1,3.
