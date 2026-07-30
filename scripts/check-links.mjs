import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";

const root = resolve("dist");

if (!existsSync(root)) {
  console.error("dist/ does not exist. Run npm run build first.");
  process.exit(1);
}

const files = [];
const walk = (directory) => {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) walk(path);
    else files.push(path);
  }
};
walk(root);

const htmlFiles = files.filter((file) => extname(file) === ".html");
const errors = [];

const resolveTarget = (href) => {
  const clean = href.split("#")[0].split("?")[0];
  if (!clean) return null;
  const relative = clean.startsWith("/") ? clean.slice(1) : clean;
  const target = resolve(root, relative);

  if (existsSync(target) && !statSync(target).isDirectory()) return target;
  if (existsSync(join(target, "index.html"))) return join(target, "index.html");
  if (existsSync(`${target}.html`)) return `${target}.html`;
  return null;
};

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const links = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(
    (match) => match[1],
  );

  for (const href of links) {
    if (
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("data:") ||
      href.startsWith("#")
    ) {
      continue;
    }

    if (!resolveTarget(href)) {
      errors.push(`${file.replace(`${root}/`, "")}: ${href}`);
    }
  }
}

if (errors.length) {
  console.error("Broken internal links:\n" + errors.join("\n"));
  process.exit(1);
}

console.log(
  `Checked ${htmlFiles.length} HTML files: no broken internal links.`,
);
