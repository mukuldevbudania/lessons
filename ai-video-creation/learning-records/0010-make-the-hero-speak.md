# Learning Record 0010 — Make the Hero Speak (Lip-Sync, Milestone 2)

**Date:** 2026-10-05
**Lesson:** 0010 · Milestone 2 (gated behind shipping milestone 1)

## The win
One locked keyframe + an audio clip → a lip-synced talking shot, on a Spark-fit, commercial model.

## Core idea
Base pipeline (Wan I2V) animates motion, not mouths. Two families for a talking hero:
- Audio→video generation: **Wan 2.2 S2V** (recommended — same family), OmniAvatar, InfiniteTalk.
- Mouth re-sync of existing footage: **LatentSync**, MuseTalk, Wav2Lip.

## Spark fit (the hard gate)
ALL fit 128GB — including 14B models gaming cards can't load. Split is speed, not fit:
- Fast/iterate: OmniAvatar 1.3B, LatentSync (~7.8GB), MuseTalk.
- Batch overnight: Wan S2V 14B, InfiniteTalk.

## Licensing (second gate)
Safe: Wan S2V (Apache), LatentSync (Apache), MuseTalk (MIT). Verify: Wav2Lip, some avatar variants.

## Recommended path
VO first → keyframe + audio into Wan 2.2 S2V → prototype on OmniAvatar 1.3B, final batch on S2V 14B
→ back into Resolve.

## When NOT to
If a line works as VO over a reactive shot, keep it VO. Talking head only when the hero speaking IS
the point.
