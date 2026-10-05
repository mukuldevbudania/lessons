# AI Video Creation — Cinematic Brand Ads with Open-Source Models

A stateful, hands-on course for producing **cinematic brand advertisements** end-to-end
using **open-source AI models**, built to run locally on an **NVIDIA DGX Spark**.

## Start here
Open [`lessons/0001-shape-of-the-pipeline.html`](lessons/0001-shape-of-the-pipeline.html) in a browser.

## Layout
| Path | What it is |
|------|-----------|
| `MISSION.md` | Why this course exists + the hard constraints (hardware, licensing) that shape every lesson |
| `RESOURCES.md` | Vetted, cited sources — nothing is taught from memory alone |
| `NOTES.md` | Learner preferences & setup facts |
| `lessons/` | The lessons. Self-contained HTML, Tufte-clean, printable. Start at `0001`. |
| `reference/` | `pipeline.html` (the 9-stage map) and `glossary.html` (shared nomenclature) |
| `assets/` | `course.css` — shared styling every lesson links |
| `learning-records/` | What's been learned / decided, ADR-style |

## The one rule
> Resolve consistency on cheap still images first. Only animate frames you've already locked.

## Licensing note (this is commercial work)
Commercial-safe image models: **Qwen-Image, FLUX.1 [schnell], SDXL**.
Commercial-safe video models: **Wan 2.2, HunyuanVideo 1.5, LTX-Video** (Apache-2.0).
❌ **FLUX.1 [dev] is non-commercial** — do not use it for brand deliverables.
