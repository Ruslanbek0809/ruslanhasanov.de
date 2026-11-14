---
order: 2
kind: Forschungsprojekt · TU Ilmenau
title: Zero-Shot-Zeitreihenprognose mit LLMs
tagline: Kann ein allgemeines LLM den nächsten Sensorwert vorhersagen?
description: "Fallstudie Forschungsprojekt: ein FastAPI-Microservice zur LLM-gestützten Prognose von IoT-Sensordaten, evaluiert mit 4 LLMs in 192 Experimenten."
period: 10/2025 – 03/2026
context: TU Ilmenau, SensBee-Plattform für Smart Cities. Note 1,3.
badge: { label: "Note 1,3", tone: ok }
summary: "FastAPI-Dienst, der IoT-Sensordaten mit LLMs prognostiziert. Ich habe 192 Experimente mit 4 LLMs durchgeführt. Allgemeine LLMs lieferten auf numerischen Sensordaten unzuverlässige Prognosen."
tags: [Python, FastAPI, LLMs]
highlight: "Aus diesem negativen Ergebnis entstand das Thema meiner Masterarbeit: Modelle, die nur für Zeitreihen gebaut sind."
stack: [Python, FastAPI, LLMs, IoT-Sensordaten]
links:
  - { label: sensbee_nvp auf GitHub, href: "https://github.com/Ruslanbek0809/sensbee_nvp" }
---

## Problem

Ein LLM kann eine Zeitreihe ohne Training für die Aufgabe prognostizieren. Das heißt Zero-Shot-Prognose. Ich habe getestet, wie zuverlässig allgemeine LLMs auf IoT-Sensordaten von SensBee sind, einer Smart-City-Plattform.

## Vorgehen

- Ich habe einen FastAPI-Microservice gebaut, der den nächsten Wert eines SensBee-Sensors vorhersagt.
- Die Daten laufen durch 6 Stufen: Abrufen, Resampling, Normalisieren, Serialisieren, LLM und Filtern/Aggregieren.
- Ich habe 192 Experimente mit 4 LLMs durchgeführt.
- Methode und Ergebnisse habe ich in einem Abschlussbericht beschrieben.

## Ergebnisse

In 192 Experimenten mit 4 LLMs lieferten allgemeine LLMs unzuverlässige Prognosen auf numerischen Sensordaten. Aus diesem Ergebnis entstand das Thema meiner Masterarbeit. Das Projekt wurde mit 1,3 benotet.
