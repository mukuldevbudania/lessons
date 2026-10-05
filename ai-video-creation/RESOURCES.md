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
