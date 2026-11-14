---
order: 3
kind: Gruppenstudien · TU Ilmenau
title: LLM-Agent für die Hardware-Verifikation
tagline: Ein LLM-Agent schreibt SystemVerilog-Testbenches, drei weitere Agenten prüfen sie
description: "Fallstudie Gruppenprojekt: ein Python-LLM-Agent (LangGraph, Tool Use), der SystemVerilog-Testbenches schreibt, geprüft von drei Subagenten per Mehrheitsvotum."
period: 04/2026 – 08/2026
context: "TU Ilmenau, Team aus 3 Personen. Ich habe an allen Teilen des Agenten mitgearbeitet: Entwurf, Implementierung und Evaluation."
badge: { label: Team aus 3, tone: neutral }
summary: "Python-LLM-Agent (LangGraph, Tool Use), der SystemVerilog-Testbenches schreibt. Drei Prüf-Subagenten entscheiden per Mehrheitsvotum. Wir haben gemessen, wie viele eingebaute Fehler (Mutanten) die Testbenches auf VerilogEval-Designs finden."
tags: [Python, LangGraph, SystemVerilog]
highlight: "Drei Prüfer stimmen ab, damit das Ergebnis nicht von einem einzigen Modell abhängt. Mutation Testing misst, wie viele eingebaute Fehler die Testbenches finden."
stack: [Python, LangGraph, SystemVerilog, VerilogEval, Mutation Testing]
links:
  - { label: hw-verif-agent auf GitHub, href: "https://github.com/Ruslanbek0809/hw-verif-agent" }
---

## Problem

Bei der Hardware-Verifikation wird der Entwurf einer digitalen Schaltung gegen seine Spezifikation getestet. Dafür schreibt man Testbenches in SystemVerilog. Eine Testbench ist Code, der den Entwurf mit Testeingaben ausführt und die Ausgaben prüft. Wir haben einen LLM-Agenten gebaut, der diese Testbenches schreibt. Wir wollten seine Ausgabe prüfen, ohne einem einzelnen Modell zu vertrauen.

## Vorgehen

- Wir haben den Agenten in Python mit LangGraph geschrieben. Der Agent kann Werkzeuge aufrufen (Tool Use).
- Drei Prüf-Subagenten bewerten jede Testbench und entscheiden per Mehrheitsvotum.
- Wir haben den Agenten auf VerilogEval-Designs mit Mutation Testing getestet. Dabei baut man kleine Fehler (Mutanten) in einen Entwurf ein. Eine gute Testbench findet sie.
- Wir waren ein Team aus 3 Personen. Ich habe an Entwurf, Implementierung und Evaluation mitgearbeitet.

## Ergebnisse

Das Ergebnis ist ein funktionierender Agent, der SystemVerilog-Testbenches schreibt. Drei Prüfer entscheiden per Mehrheitsvotum. Mutation Testing auf VerilogEval-Designs misst, wie gut die Testbenches sind.
