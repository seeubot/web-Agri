// scripts/compress-images.mjs
import sharp from "sharp";
import { readdir, stat, mkdir } from "fs/promises";
import { join, basename, extname } from "path";
const SRC = "public/features";
const OUT = "public/features/compressed";
await mkdir(OUT, { recursive: true });
const files = (await readdir(SRC)).filter((f) => f.endsWith(".png"));
for (const file of files) {
  const srcPath = join(SRC, file);
  const outPath = join(OUT, basename(file, extname(file)) + ".webp");
  const before = (await stat(srcPath)).size;
  await sharp(srcPath)
    .resize({ width: 1024, height: 1024, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outPath);
  const after = (await stat(outPath)).size;
  console.log(
    `${file}  ${(before / 1024).toFixed(0)} KB  →  ${(after / 1024).toFixed(0)} KB  (${(
      (1 - after / before) * 100
    ).toFixed(0)}% smaller)`
  );
}
console.log(`\nDone. Compressed files in ${OUT}/`);
