# Learning Record 0006 — Make It Move

**Date:** 2026-10-05
**Lesson:** 0006 · Motion

## The win
One keyframe animated into a 3-5s clip where identity holds and motion matches the shot's intent.

## Core idea
I2V, never T2V — the keyframe already encodes identity + composition; the model only animates.
Wan 2.2 14B I2V = workhorse (Apache-2.0, native ComfyUI template); 5B/LTX for fast drafts.
Spark rhythm: iterate motion on fast/low-res (5B, 480p, Lightning LoRA) by day, batch final 14B
renders overnight — bandwidth-bound, clips are minutes. Keep first-pass motion small (drift/anatomy).
Motion prompt describes motion+camera, not content.

## Status
- [ ] First shot moving, identity held
- [ ] Rest queued as batch

## Next
0007 — upscale + interpolate.
