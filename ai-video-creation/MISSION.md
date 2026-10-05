# Mission

## What I want to be able to do
Produce **cinematic brand advertisements** end-to-end using **open-source AI models**,
from character/product design through to a finished, graded, sound-designed video.

## Why it matters
Brand ads are the deliverable. That means the bar is:
- **Consistency** — the same character / product / brand look must hold across every shot.
- **Control** — the output has to match a brief, not just "look cool".
- **Shippable licensing** — every model in the pipeline must be legal for commercial use.
- **Polish** — color grade, pacing, sound. The edit matters as much as the generation.

## Constraints (these shape every lesson)
- **Hardware: NVIDIA DGX Spark.** 128 GB unified LPDDR5x memory, GB10 Grace Blackwell,
  ~1 PFLOP FP4 — BUT only ~273 GB/s memory bandwidth.
  → Models *fit* easily; they run *slowly*. Workflow is built around **batch / overnight
    rendering and tight prompt iteration on stills**, not real-time video scrubbing.
- **Story/writing: Claude ($20 Pro sub).** Used for concept, script, shot lists, prompts.
- **Edit/finish: DaVinci Resolve (free edition).** Grade, cut, sound, delivery.
- **Models: open-source only.** No Runway/Kling/Veo/Sora/Midjourney in the shipping pipeline.

## Hard licensing rule for this mission
A brand ad is a **commercial** use. Therefore:
- ✅ Commercial-OK image models: **Qwen-Image (Apache-2.0)**, **FLUX.1 [schnell] (Apache-2.0)**,
  **SDXL (Stability Community License, commercial-OK with conditions)**, HiDream, Lumina-2.
- ❌ **FLUX.1 [dev] is NON-COMMERCIAL** — great quality, but do NOT ship brand work made with it.
- ✅ Commercial-OK video models: **Wan 2.2**, **HunyuanVideo 1.5**, **LTX-Video** — all Apache-2.0.
- Always re-check the weight's license card before shipping; licenses change.

## Definition of done (first milestone)
A single 15–30s brand spot for a chosen (even fictional) brand, where:
1. The hero character OR product is visibly the *same* across ≥4 shots.
2. It follows a written brief + shot list (not improvised).
3. It is cut, graded, and sound-designed in Resolve.
4. Every asset is from a commercial-licensed open model.

_Last updated: 2026-10-05. Update + add a learning record whenever the mission shifts._
