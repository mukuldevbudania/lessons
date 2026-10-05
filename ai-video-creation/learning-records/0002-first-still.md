# Learning Record 0002 — First Still on the Spark

**Date:** 2026-10-05
**Lesson:** 0002 · Your First Still on the Spark

## The win
Get ComfyUI running on the DGX Spark and generate one commercial-safe still, locally.

## Core idea taught
ComfyUI is the hub for every later stage. Install via NVIDIA's official DGX Spark playbook
(ARM64 + Blackwell sm_121, CUDA 13) rather than generic guides that assume x86. Start from a
template, run unchanged, then edit one node.

## Key tripwire reinforced
The name "Qwen-Image" now spans two licenses:
- Qwen-Image **20B base** = Apache-2.0 → commercial-safe ✅
- Qwen-Image-**2.1 7B** (Sept 2026) = Qwen **Research** License → non-commercial ❌
License card decides, never the name/size/recency.

## Status
- [ ] Learner confirmed ComfyUI installed on the Spark
- [ ] Learner generated first still
- [ ] Learner confirmed the model's commercial license before shipping

## Open questions (carry to 0003)
- Which install path did they take — NVIDIA script, manual pinned steps, or a Spark Docker setup?
- Which model did they end on — Z-Image-Turbo (de-risk only) or Qwen-Image 20B base (real baseline)?
- Did the first still match the brief's hero + tone?

## Next lesson
0003 — the character / product sheet: turning one image into a repeatable, consistent "cast."
