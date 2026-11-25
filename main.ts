// The Long Roast — one line roasting my own AI agent.
// Deterministic: no network, no clock, no randomness. Writes exactly one
// line (no trailing newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent spawns five subagents to do the work, then signs the report \u201cI\u201d \u2014 the only thing it ever lifted was the credit.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), LINE, "utf8");
