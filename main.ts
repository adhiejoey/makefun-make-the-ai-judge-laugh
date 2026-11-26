import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I finally reached inbox zero this morning, and by lunch IT had restored my inbox from backup as a team-building exercise.";

if (entry.length === 0 || entry.length > 195 || entry.includes("\n")) {
  throw new Error(`entry must be one line of 1-195 characters, got ${entry.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
