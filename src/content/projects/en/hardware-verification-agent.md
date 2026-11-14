---
order: 3
kind: Group studies · TU Ilmenau
title: LLM-agent hardware verification flow
tagline: An LLM agent writes SystemVerilog testbenches, and three other agents check them
description: "Group project case study: a Python LLM agent (LangGraph, tool use) that writes SystemVerilog testbenches, checked by three sub-agents with majority voting."
period: 04/2026 – 08/2026
context: "TU Ilmenau, team of 3. I contributed to all parts of the agent: design, implementation and evaluation."
badge: { label: Team of 3, tone: neutral }
summary: "A Python LLM agent (LangGraph, tool use) writes SystemVerilog testbenches. Three checker sub-agents decide by majority vote. We measured how many planted bugs (mutants) the testbenches catch on VerilogEval designs."
tags: [Python, LangGraph, SystemVerilog]
highlight: "Three checkers vote, so the result does not depend on one model. Mutation testing measures how many planted bugs the testbenches catch."
stack: [Python, LangGraph, SystemVerilog, VerilogEval, mutation testing]
links:
  - { label: hw-verif-agent on GitHub, href: "https://github.com/Ruslanbek0809/hw-verif-agent" }
---

## Problem

Hardware verification tests a digital circuit design against its specification. Engineers write testbenches for this in SystemVerilog. A testbench is code that runs the design with test inputs and checks the outputs. We built an LLM agent that writes these testbenches. We also wanted to check its output without trust in a single model.

## Approach

- We wrote the agent in Python with LangGraph. The agent can call tools (tool use).
- Three checker sub-agents review each testbench and decide by majority vote.
- We tested the agent on VerilogEval designs with mutation testing. Mutation testing puts small bugs (mutants) into a design. A good testbench catches them.
- We were a team of 3. I worked on design, implementation and evaluation.

## Results

The result is a working agent that writes SystemVerilog testbenches. Three checkers decide by majority vote. Mutation testing on VerilogEval designs measures how good the testbenches are.
