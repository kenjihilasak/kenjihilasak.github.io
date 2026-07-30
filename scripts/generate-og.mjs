import sharp from "sharp";

await sharp("public/og-image.svg").png().toFile("public/og-image.png");
console.log("Generated public/og-image.png");
