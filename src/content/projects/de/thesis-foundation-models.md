---
order: 1
wide: true
kind: Masterarbeit · TU Ilmenau
title: Evaluating Pretrained Time Series Foundation Models for Smart City Sensor Forecasting
tagline: Schlagen vortrainierte Prognosemodelle trainierte Baselines auf lückenhaften Sensordaten einer Stadt?
description: "Fallstudie Masterarbeit: sechs vortrainierte Foundation Models für Zeitreihen gegen trainierte Baselines auf echten Smart-City-Sensordaten, Zero-Shot und feinabgestimmt."
period: 09/2026 – 03/2027
context: TU Ilmenau, Fachgebiet Datenbanken und Informationssysteme (Databases and Information Systems Group). Einzelarbeit. Noch keine Note.
badge: { label: In Arbeit, tone: progress }
summary: "Sechs vortrainierte Zeitreihenmodelle gegen trainierte Baselines auf echten Sensordaten. Vorläufiger Pilot, Werte können sich ändern: Chronos-2 senkt den 24-h-Fehler um rund 29 %."
tags: [Python, PyTorch, Chronos-2, FastAPI, Docker, HPC]
figures:
  - { label: Vortrainierte Modelle, value: "6" }
  - { label: Rollierende Prognosen, value: "1.000+ / Modell" }
  - { label: Rechenleistung, value: "4× A100" }
  - { label: Antwortzeit des Dienstes, value: "0,5–1,7 s" }
highlight: "Meine eigenen Unsicherheitsschätzungen waren zu eng. Ich habe sie korrigiert."
stack: [Python, PyTorch, Chronos-2, TimesFM-2.5, Moirai-2, DeepAR, PatchTST, FastAPI, Docker, Linux, HPC, SSH]
links: []
---

## Problem

Vortrainierte Foundation Models versprechen Prognosen ohne aufgabenspezifisches Training. Echte Sensordaten einer Stadt haben Lücken, Ausfälle und kurze Historien. Ich prüfe, ob die Modelle dort bestehen und ob sie auf denselben Daten trainierte Modelle schlagen.

## Vorgehen

- Sechs vortrainierte Modelle gegen statistische, Boosting- und Deep-Learning-Baselines, Zero-Shot und feinabgestimmt.
- Quantilsprognosen, bewertet mit Quantile Loss und Abdeckung des 80-%-Intervalls.
- Stresstests mit Lücken und Ausfällen: über 1.000 rollierende Prognosen pro Modell.
- Diebold-Mariano-Tests mit Holm-Korrektur, Protokoll vor dem bestätigenden Test eingefroren.

## Ergebnisse

> Vorläufige Pilotergebnisse; die Arbeit ist in Bearbeitung, die Werte können sich noch ändern.

- Alle sechs schlagen die saisonale Naiv-Referenz: 30 von 30 Tests.
- Chronos-2: 24-h-Fehler um 29 % gesenkt. Beste trainierte Baseline: 18 %.
- Abdeckung der 80-%-Intervalle: 0,70–0,74 vor der Rekalibrierung, 0,80 danach.
- FastAPI-Dienst: Prognose und 80-%-Band in 0,5–1,7 s.
