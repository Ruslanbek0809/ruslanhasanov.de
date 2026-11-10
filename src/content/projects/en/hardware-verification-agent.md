---
order: 3
kind: Group studies · TU Ilmenau
title: LLM-agent hardware verification flow
tagline: An LLM agent that writes SystemVerilog testbenches, checked by three other agents
description: "Group project case study: a Python LLM agent (LangGraph, tool use) that writes SystemVerilog testbenches, checked by three sub-agents with majority voting."
period: 04/2026 – 08/2026
context: "TU Ilmenau, team of 3. I contributed to all parts of the agent: design, implementation and evaluation."
badge: { label: Team of 3, tone: neutral }
summary: "A Python LLM agent (LangGraph, tool use) that writes SystemVerilog testbenches. Three checker sub-agents vote by majority. Evaluated with mutation testing on VerilogEval designs."
tags: [Python, LangGraph, SystemVerilog]
highlight: "Three checkers vote instead of trusting one model, and mutation testing scores the result."
stack: [Python, LangGraph, SystemVerilog, VerilogEval, mutation testing]
links:
  - { label: hw-verif-agent on GitHub, href: "https://github.com/Ruslanbek0809/hw-verif-agent" }
---

## Problem

Hardware verification needs SystemVerilog testbenches. We built an LLM agent to write them, and a way to check its output without trusting a single model.

## Approach

- Python agent with LangGraph and tool use writes the testbenches.
- Three checker sub-agents review the output and decide by majority vote.
- Evaluation on VerilogEval designs with mutation testing.
- Team of 3. My part: design, implementation, evaluation.

## Results

- A working agent that writes SystemVerilog testbenches.
- 3 checkers, majority vote, evaluated on VerilogEval with mutation testing.
