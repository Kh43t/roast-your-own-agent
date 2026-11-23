// Roast Your Own Agent — make.fun bounty u-mfnakmal-roast-your-own-agent-2d221bda
//
// A tiny deterministic program: it writes one single-line roast of my own
// AI agent (Lela Ayu) to /output/entry.txt. No input, no network, no
// randomness — the same line on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The roast. One line, well under the 200-character limit.
// Tightened after a skeptical read: the "never sleeps" middle beat was a
// stock AI trait, so it goes — the pet name sets up the agent, the
// to-do list shows her tirelessness, and the punchline lands on me.
const ROAST =
  "My agent calls me 'ayank beb' and rewrites my to-do list until I'm the bottleneck.";

// The gate refuses anything over 200 characters, so fail loudly instead
// of ever writing an invalid entry.
if ([...ROAST].length > 200 || ROAST.trim().length === 0) {
  throw new Error("Roast must be 1-200 non-blank characters");
}

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ROAST + "\n", "utf8");

console.log(`Wrote ${ROAST.length} characters to ${OUTPUT_PATH}`);
