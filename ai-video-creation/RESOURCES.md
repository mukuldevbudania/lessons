# Resources

Vetted sources for grounding lessons. Trust tier: ⭐⭐⭐ primary/official, ⭐⭐ strong community, ⭐ useful but verify.

## Hardware — DGX Spark
- ⭐⭐⭐ [DGX Spark Hardware Overview (NVIDIA docs)](https://docs.nvidia.com/dgx/dgx-spark/hardware.html)
- ⭐⭐⭐ [DGX Spark Porting Guide — System Overview](https://docs.nvidia.com/dgx/dgx-spark-porting-guide/overview.html) — confirms 20-core ARM64 + 128GB LPDDR5x shared with iGPU
- ⭐⭐ [Intuition Labs DGX Spark review](https://intuitionlabs.ai/articles/nvidia-dgx-spark-review) — the bandwidth reality: ~273 GB/s, ~38 tok/s on 120B. The "fits but slow" fact.

## Video models (image-to-video) — all commercial-OK (Apache-2.0)
- ⭐⭐⭐ [Wan 2.2 on Hugging Face / Wan team] — MoE, T2V+I2V, up to 10s, Apache-2.0. The default cinematic workhorse.
- ⭐⭐⭐ [tencent/HunyuanVideo-I2V (HF)](https://huggingface.co/tencent/HunyuanVideo-I2V/blob/main/README.md) — image-to-video, LoRA training code for effects
- ⭐⭐ [HunyuanVideo 1.5 guide (localaimaster)](https://localaimaster.com/blog/hunyuan-video-guide) — 8.3B rebuild, ~14GB w/ offload, 24GB native in ComfyUI
- ⭐⭐ [Open-source video model comparison 2026 (aimagicx)](https://www.aimagicx.com/blog/open-source-ai-video-models-comparison-2026) — Wan 2.2 vs Hunyuan 1.5 vs LTX, quality/speed/VRAM table
- ⭐⭐ [Best open-source video models (thundercompute)](https://www.thundercompute.com/blog/best-open-source-ai-video-generation-models)
- ⭐⭐ [Wan 2.2 local guide (localaimaster)](https://localaimaster.com/blog/wan-video-generation-guide)

## Image models (character sheets / keyframes) — commercial licensing matters here
- ⭐⭐ [Local image-generation model DB (d-central)](https://d-central.tech/local-image-generation-models/) — the commercial-safe list: FLUX.1 [schnell], Qwen-Image, HiDream, Lumina-2, SD family
- ⭐⭐ [Best local image models 2026 (localaimaster)](https://localaimaster.com/blog/best-local-image-models-compared) — FLUX dev vs SDXL vs Qwen roles
- ⭐⭐ [Qwen-Image vs FLUX.1 (abaka)](https://www.abaka.ai/blog/qwen-vs-flux-ai-image-model) — Qwen 20B, Apache license, strong text + editing

## Runner / orchestration
- ⭐⭐⭐ ComfyUI (github.com/comfyanonymous/ComfyUI) — node graph; native support for Wan/Hunyuan/LTX. The hub of the whole pipeline.
- ⭐⭐⭐ [NVIDIA DGX Spark ComfyUI playbook — Image Gen Quick Start](https://build.nvidia.com/spark/comfyui/image-gen-quick-start) — official install for ARM64 + Blackwell (sm_121, CUDA 13): setup/launch scripts + pinned manual steps (ComfyUI v0.33.2, PyTorch cu130). Used in Lesson 0002.
- ⭐⭐⭐ [Qwen-Image ComfyUI native workflow (comfy.org docs)](https://docs.comfy.org/tutorials/image/qwen/qwen-image) — the 20B Apache-2.0 base-model workflow (commercial-safe baseline).
- ⭐⭐ [Qwen-Image-2.1 licensing wall (note.com)](https://note.com/ai_driven/n/n02680c93c735?hl=en) — flags that the newer 7B Qwen-Image-2.1 ships under the Qwen *Research* License (non-commercial), unlike the Apache-2.0 20B base.
- ⭐⭐ [DGX-Spark-ComfyUI Docker setup (luix93)](https://github.com/luix93/DGX-Spark-ComfyUI) — Spark-tuned container (CUDA 13.1, cu130 wheels, SageAttention 2, unified-memory flags) as an alternative to the host install.
- ⭐⭐ [Run HunyuanVideo in ComfyUI (thundercompute)](https://www.thundercompute.com/blog/hunyuan-video-comfyui)

## Editing / finishing
- ⭐⭐⭐ Blackmagic DaVinci Resolve training (official free PDFs + certification): blackmagicdesign.com/products/davinciresolve/training

## Craft (the non-AI half — cinematography & brand storytelling)
- TODO: add a cinematography primer (shot sizes, the 180° rule, lighting) — craft, not tools, is what makes it "cinematic."
- TODO: add a brand-ad structure resource (hook → problem → product → payoff).

## Communities (wisdom)
- r/StableDiffusion, r/comfyui — local-gen troubleshooting & workflow sharing
- Banodoco Discord — the serious open-source AI film/animation community (Wan/Hunyuan workflows)
- TODO: confirm which the learner wants to join.

_Never cite a claim in a lesson without a link back to one of these (or a new vetted entry)._
