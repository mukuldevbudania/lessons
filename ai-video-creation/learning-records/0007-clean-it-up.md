# Learning Record 0007 — Clean It Up

**Date:** 2026-10-05
**Lesson:** 0007 · Finishing the Pixels

## The win
One approved clip at the brief's delivery resolution + fps, clean enough for the timeline.

## Core idea
Generate cheap, finish once. Upscale (ESRGAN/diffusion upscaler) + interpolate (RIFE/FILM) run on
FINAL picks only, after lock — never inside the slow generation loop. Interpolate-then-upscale is
usually cheaper. Still a batch job on the Spark. Target exactly the delivery spec, no more (no 4K
for a 9:16 phone ad).

## Status
- [ ] One clip at delivery spec
- [ ] Rest batched

## Next
0008 — edit + sound in Resolve.
