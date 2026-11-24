import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Earth: the locals scoop their pets' droppings into little bags and carry them home like treasure. Bizarre, touching \u2014 five stars, would visit again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate: entry.txt must be UTF-8 text of 1 to 200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, gate needs 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
