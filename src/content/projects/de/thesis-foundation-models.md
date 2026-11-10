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
summary: "Sechs vortrainierte Zeitreihenmodelle gegen trainierte Baselines auf echten Sensordaten, Zero-Shot und feinabgestimmt. Vorläufiger Pilot (Arbeit in Bearbeitung): Alle sechs schlagen die saisonale Naiv-Referenz, in 30 von 30 Tests. Chronos-2 senkt den 24-h-Fehler um rund 29 %."
tags: [Python, PyTorch, Chronos-2, FastAPI, Docker, HPC]
figures:
  - { label: Vortrainierte Modelle, value: "6" }
  - { label: Rollierende Prognosen, value: "1.000+ / Modell" }
  - { label: Rechenleistung, value: "4× A100" }
  - { label: Antwortzeit des Dienstes, value: "0,5–1,7 s" }
highlight: Ich habe meine eigenen Unsicherheitsschätzungen geprüft, als zu eng erkannt und korrigiert. Das Protokoll habe ich vor dem bestätigenden Test auf neuen Daten eingefroren.
stack: [Python, PyTorch, Chronos-2, TimesFM-2.5, Moirai-2, DeepAR, PatchTST, FastAPI, Docker, Linux, HPC, SSH]
links: []
---

## Problem

Vortrainierte Foundation Models versprechen Prognosen ohne aufgabenspezifisches Training. Echte Sensordaten einer Stadt haben Lücken, Ausfälle, Schließzeiten und kurze Historien. Ich untersuche, ob die Modelle dort bestehen und ob sie auf denselben Daten trainierte Modelle schlagen.

## Vorgehen

- Sechs vortrainierte Modelle (Chronos-2, Chronos-Bolt, TimesFM-2.5, TiRex, Toto, Moirai-2) gegen statistische Modelle, Gradient Boosting, Deep-Learning-Baselines (DeepAR, PatchTST) und eine LLM-Methode, jeweils Zero-Shot und feinabgestimmt.
- Quantilsprognosen, bewertet mit Quantile Loss und der Abdeckung des 80-%-Intervalls.
- Robustheitstest bei Datenlücken, Sensorausfällen, Schließzeiten und kurzer Historie: über 1.000 rollierende Prognosen pro Modell.
- Vergleich mit Diebold-Mariano-Tests und Holm-Korrektur. Das Protokoll ist eingefroren, ein bestätigender Test läuft auf neuen Daten.
- PyTorch-Training und Fine-Tuning-Grids auf einem Linux-HPC-GPU-Knoten (4x NVIDIA A100) per SSH.
- Das gewählte Modell läuft in einem Docker-basierten FastAPI-Dienst.

## Ergebnisse

> Vorläufige Pilotergebnisse; die Arbeit ist in Bearbeitung, die Werte können sich noch ändern.

- Alle sechs vortrainierten Modelle schlagen die saisonale Naiv-Referenz: 30 von 30 Tests.
- Chronos-2 senkt den 24-h-Fehler um rund 29 % gegenüber der saisonalen Naiv-Referenz. Die beste trainierte Baseline senkt ihn um 18 %.
- Die 80-%-Intervalle waren zu eng. Nach der Rekalibrierung stieg die Abdeckung auf den Validierungsdaten von 0,70–0,74 auf 0,80.
- Der FastAPI-Dienst liefert Prognose und 80-%-Band in 0,5–1,7 s.
