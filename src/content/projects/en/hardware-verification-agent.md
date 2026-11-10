---
order: 3
kind: Group studies · TU Ilmenau
title: LLM-agent hardware verification flow
tagline: An LLM agent that writes SystemVerilog testbenches and gets checked by three other agents
description: "Group project case study: a Python LLM agent (LangGraph, tool use) that writes SystemVerilog testbenches, checked by three sub-agents with majority voting."
period: 04/2026 – 08/2026
context: "TU Ilmenau, team of 3. I contributed to all parts of the agent: design, implementation and evaluation."
badge: { label: Team of 3, tone: neutral }
summary: A Python LLM agent (LangGraph, tool use) that writes SystemVerilog testbenches. Three checker sub-agents vote by majority. Evaluated on VerilogEval designs with mutation testing. Team of 3.
tags: [Python, LangGraph, SystemVerilog]
highlight: "The generated testbenches are not trusted on one model's word. Three checkers vote, and mutation testing evaluates the result on VerilogEval designs."
stack: [Python, LangGraph, SystemVerilog, VerilogEval, mutation testing]
links:
  - { label: hw-verif-agent on GitHub, href: "https://github.com/Ruslanbek0809/hw-verif-agent" }
---

## Problem

Hardware verification needs SystemVerilog testbenches. We built an LLM agent to write them, and a way to check its output without trusting a single model answer.

## Approach

- Build a Python agent with LangGraph and tool use that writes SystemVerilog testbenches.
- Add three checker sub-agents that review the output and decide by majority voting.
- Evaluate on VerilogEval designs with mutation testing.
- Work in a team of 3, contributing to design, implementation and evaluation.

## Results

- A working agent that writes SystemVerilog testbenches.
- Three checker sub-agents review each result and decide by majority voting.
- Evaluated on VerilogEval designs with mutation testing.
