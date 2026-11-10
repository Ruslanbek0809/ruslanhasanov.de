---
order: 3
kind: Gruppenstudien · TU Ilmenau
title: LLM-Agent für die Hardware-Verifikation
tagline: Ein LLM-Agent, der SystemVerilog-Testbenches schreibt und von drei weiteren Agenten geprüft wird
description: "Fallstudie Gruppenprojekt: ein Python-LLM-Agent (LangGraph, Tool Use), der SystemVerilog-Testbenches schreibt, geprüft von drei Subagenten per Mehrheitsvotum."
period: 04/2026 – 08/2026
context: "TU Ilmenau, Team aus 3 Personen. Ich habe an allen Teilen des Agenten mitgearbeitet: Entwurf, Implementierung und Evaluation."
badge: { label: Team aus 3, tone: neutral }
summary: Ein Python-LLM-Agent (LangGraph, Tool Use), der SystemVerilog-Testbenches schreibt. Drei Prüf-Subagenten entscheiden per Mehrheitsvotum. Evaluiert auf VerilogEval-Designs mit Mutation Testing. Team aus 3 Personen.
tags: [Python, LangGraph, SystemVerilog]
highlight: Die erzeugten Testbenches verlassen sich nicht auf die Antwort eines einzelnen Modells. Drei Prüfer stimmen ab, und Mutation Testing bewertet das Ergebnis auf VerilogEval-Designs.
stack: [Python, LangGraph, SystemVerilog, VerilogEval, Mutation Testing]
links:
  - { label: hw-verif-agent auf GitHub, href: "https://github.com/Ruslanbek0809/hw-verif-agent" }
---

## Problem

Die Hardware-Verifikation braucht SystemVerilog-Testbenches. Wir haben einen LLM-Agenten gebaut, der sie schreibt, und einen Weg, seine Ausgabe zu prüfen, ohne der Antwort eines einzelnen Modells zu vertrauen.

## Vorgehen

- Python-Agent mit LangGraph und Tool Use, der SystemVerilog-Testbenches schreibt.
- Drei Prüf-Subagenten bewerten die Ausgabe und entscheiden per Mehrheitsvotum.
- Evaluation auf VerilogEval-Designs mit Mutation Testing.
- Arbeit im Team aus 3 Personen, mit Beiträgen zu Entwurf, Implementierung und Evaluation.

## Ergebnisse

- Ein funktionierender Agent, der SystemVerilog-Testbenches schreibt.
- Drei Prüf-Subagenten bewerten jedes Ergebnis und entscheiden per Mehrheitsvotum.
- Evaluiert auf VerilogEval-Designs mit Mutation Testing.
