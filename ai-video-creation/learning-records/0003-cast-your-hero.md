# Learning Record 0003 — Cast Your Hero

**Date:** 2026-10-05
**Lesson:** 0003 · The Character / Product Sheet

## The win
A multi-angle reference grid (sheet) that reads as one hero across ≥4 tiles.

## Core idea
Consistency = the whole game. Three stacked mechanisms, chosen by recurrence:
- Character sheet + IPAdapter (~70-85%, no training) — one/two shots or static product.
- Character LoRA (~90%, 15-30 imgs + trigger word) — recurring character across the spot.
- ControlNet — composition only, added per-shot in 0005.
Tripwire: LoRA + IPAdapter both strong late in sampling → face drift. Fix the seed.
Product heroes: prefer Qwen-Image (best legible text/logo).

## Status
- [ ] Learner chose character vs product hero
- [ ] Learner decided LoRA vs IPAdapter
- [ ] Sheet reads as one hero across ≥4 tiles

## Next
0004 — script + shot list.
