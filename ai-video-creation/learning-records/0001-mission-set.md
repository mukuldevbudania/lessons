# 0001 — Mission set: open-source cinematic brand ads on DGX Spark

**Date:** 2026-10-05
**Status:** accepted

## Context
Learner wants to create cinematic brand advertisements using AI. First `/teach` session.
Established the mission and the three hard constraints that shape every future lesson.

## Decisions
1. **Mission = brand ads** (commercial deliverable). Consistency, control, and licensing
   are first-class, not nice-to-haves.
2. **Hardware = DGX Spark.** 128GB unified / ~273 GB/s. Key implication: models *fit* but
   run *slowly* → workflow is batch/overnight for video, interactive only on stills.
3. **Open-source models only** in the shipping pipeline. Claude ($20 sub) for writing;
   DaVinci Resolve free for finishing.
4. **Licensing rule locked:** FLUX.1 [dev] is non-commercial → excluded. Commercial-safe
   image = Qwen-Image / FLUX schnell / SDXL; commercial-safe video = Wan 2.2 / Hunyuan 1.5 / LTX.
5. **Pedagogy:** this is a *skills* mission → bias to real built artifacts over quizzes.
   I2V-first philosophy: lock stills cheaply, animate last.

## Zone of proximal development
Learner is a strong engineer (CLI/Python/CUDA/Docker) but new to the AI-film craft.
→ Skip computing basics. Teach the *pipeline shape*, *consistency mechanisms*, and *film craft*.
First win (Lesson 0001): internalize the 9-stage pipeline + the consistency-first rule, and
write the first real brief.

## Open questions (carried to NOTES.md)
- ComfyUI installed on the Spark yet?
- Real vs fictional brand for milestone 1?
- Aspect ratio preference?

## Next session candidates
- L0002: Install/verify ComfyUI on Spark + run first commercial-safe still (Qwen-Image).
- L0003: Character/product sheet + consistency (LoRA vs IPAdapter vs ControlNet).
