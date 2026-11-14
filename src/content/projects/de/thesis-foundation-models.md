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
summary: "Ich vergleiche sechs vortrainierte Zeitreihenmodelle mit trainierten Baselines auf echten Sensordaten. Im vorläufigen Pilot senkte Chronos-2 den 24-h-Fehler um rund 29 %. Die Werte können sich noch ändern."
tags: [Python, PyTorch, Chronos-2, FastAPI, Docker, HPC]
figures:
  - { label: Vortrainierte Modelle, value: "6" }
  - { label: Rollierende Prognosen, value: "1.000+ / Modell" }
  - { label: Rechenleistung, value: "4× A100" }
  - { label: Antwortzeit des Dienstes, value: "0,5–1,7 s" }
highlight: "Meine ersten 80-%-Intervalle enthielten nur 70–74 % der echten Werte. Nach der Rekalibrierung waren es 80 %."
stack: [Python, PyTorch, Chronos-2, TimesFM-2.5, Moirai-2, DeepAR, PatchTST, FastAPI, Docker, Linux, HPC, SSH]
links: []
---

## Problem

Ein Foundation Model ist ein großes Modell, das auf vielen Datensätzen vortrainiert ist. Es kann eine neue Zeitreihe ohne eigenes Training prognostizieren. Das heißt Zero-Shot-Prognose. Echte Sensordaten einer Stadt haben Lücken, Ausfälle und kurze Historien. Ich prüfe, ob die Modelle mit diesen Daten zurechtkommen und ob sie Modelle schlagen, die ich auf denselben Daten trainiere.

## Vorgehen

Ich vergleiche sechs vortrainierte Modelle, zum Beispiel Chronos-2 und TimesFM-2.5, mit drei Gruppen trainierter Baselines: statistische Modelle, Boosting und Deep Learning. Jedes vortrainierte Modell läuft zero-shot und feinabgestimmt (auf den Sensordaten weitertrainiert).

- Jedes Modell liefert Quantilsprognosen: einen Bereich wahrscheinlicher Werte statt einer einzelnen Zahl. Ich bewerte sie mit dem Quantile Loss und mit der Abdeckung des 80-%-Intervalls (dem Anteil echter Werte im Intervall).
- Stresstests decken Lücken und Ausfälle in den Daten ab. Jedes Modell erstellt über 1.000 rollierende Prognosen. Jede Prognose beginnt an einem späteren Zeitpunkt. Die Läufe nutzen 4× NVIDIA A100.
- Diebold-Mariano-Tests zeigen, ob sich zwei Modelle in der Genauigkeit unterscheiden. Die Holm-Korrektur gleicht aus, dass ich viele Tests gleichzeitig durchführe. Das Testprotokoll habe ich vor dem bestätigenden Test festgelegt.

## Ergebnisse

> Das sind vorläufige Pilotergebnisse. Die Arbeit läuft noch, und die Werte können sich ändern.

- Alle sechs vortrainierten Modelle schlagen die saisonal-naive Referenz in 30 von 30 Tests. Diese einfache Referenz wiederholt den letzten saisonalen Zyklus.
- Chronos-2 senkte den 24-h-Fehler um 29 %. Die beste trainierte Baseline senkte ihn um 18 %.
- Vor der Rekalibrierung enthielten die 80-%-Intervalle 70–74 % der echten Werte. Danach waren es 80 %.
- Ein FastAPI-Dienst liefert eine Prognose mit 80-%-Band in 0,5–1,7 s.
