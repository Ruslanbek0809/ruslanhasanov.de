---
order: 3
kind: Gruppenstudien · TU Ilmenau
title: LLM-Agent für die Hardware-Verifikation
tagline: Ein LLM-Agent schreibt SystemVerilog-Testbenches, drei weitere Agenten prüfen sie
description: "Fallstudie Gruppenprojekt: ein Python-LLM-Agent (LangGraph, Tool Use), der SystemVerilog-Testbenches schreibt, geprüft von drei Subagenten per Mehrheitsvotum."
period: 04/2026 – 08/2026
context: "TU Ilmenau, Team aus 3 Personen. Ich habe an allen Teilen des Agenten mitgearbeitet: Entwurf, Implementierung und Evaluation."
badge: { label: Team aus 3, tone: neutral }
summary: "Python-LLM-Agent (LangGraph, Tool Use), der SystemVerilog-Testbenches schreibt. Drei Prüf-Subagenten entscheiden per Mehrheitsvotum. Bewertet mit Mutation Testing auf VerilogEval-Designs."
tags: [Python, LangGraph, SystemVerilog]
highlight: "Drei Prüfer stimmen ab, statt einem Modell zu vertrauen. Mutation Testing bewertet das Ergebnis."
stack: [Python, LangGraph, SystemVerilog, VerilogEval, Mutation Testing]
links:
  - { label: hw-verif-agent auf GitHub, href: "https://github.com/Ruslanbek0809/hw-verif-agent" }
---

## Problem

Die Hardware-Verifikation braucht SystemVerilog-Testbenches. Wir haben einen LLM-Agenten gebaut, der sie schreibt, und einen Weg, seine Ausgabe zu prüfen, ohne einem einzelnen Modell zu vertrauen.

## Vorgehen

- Python-Agent mit LangGraph und Tool Use schreibt die Testbenches.
- Drei Prüf-Subagenten bewerten die Ausgabe und entscheiden per Mehrheitsvotum.
- Evaluation auf VerilogEval-Designs mit Mutation Testing.
- Team aus 3 Personen. Mein Anteil: Entwurf, Implementierung, Evaluation.

## Ergebnisse

- Ein funktionierender Agent, der SystemVerilog-Testbenches schreibt.
- 3 Prüfer, Mehrheitsvotum, bewertet mit Mutation Testing auf VerilogEval.
