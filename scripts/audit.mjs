import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";
import { launch } from "chrome-launcher";
import lighthouse from "lighthouse";

const root = resolve("dist");
const routes = ["/", "/work/", "/research/", "/about/"];
const thresholds = {
  performance: 0.9,
  accessibility: 0.95,
  "best-practices": 0.95,
  seo: 0.95,
};

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

if (!existsSync(root)) {
  console.error("dist/ does not exist. Run npm run build first.");
  process.exit(1);
}

const server = createServer((request, response) => {
  const url = new URL(request.url ?? "/", "http://127.0.0.1");
  let pathname = decodeURIComponent(url.pathname);
  if (pathname.endsWith("/")) pathname += "index.html";

  let file = resolve(root, `.${pathname}`);
  if (!file.startsWith(`${root}${sep}`) && file !== root) {
    response.writeHead(403).end("Forbidden");
    return;
  }

  if (!existsSync(file) || statSync(file).isDirectory()) {
    file = resolve(root, "404.html");
  }

  response.writeHead(file.endsWith("404.html") ? 404 : 200, {
    "Content-Type": contentTypes[extname(file)] ?? "application/octet-stream",
    "Cache-Control": "no-store",
  });
  createReadStream(file).pipe(response);
});

await new Promise((ready) => server.listen(0, "127.0.0.1", ready));
const address = server.address();
if (!address || typeof address === "string") {
  throw new Error("Could not start the audit server.");
}

const chrome = await launch({
  chromePath: process.env.CHROME_PATH,
  chromeFlags: ["--headless", "--no-sandbox", "--disable-gpu"],
});

let failed = false;

try {
  for (const route of routes) {
    const result = await lighthouse(
      `http://127.0.0.1:${address.port}${route}`,
      {
        port: chrome.port,
        logLevel: "error",
        output: "json",
        onlyCategories: Object.keys(thresholds),
      },
    );

    if (!result) {
      throw new Error(`Lighthouse returned no result for ${route}`);
    }

    const scores = Object.fromEntries(
      Object.entries(thresholds).map(([category, minimum]) => {
        const score = result.lhr.categories[category]?.score ?? 0;
        if (score < minimum) failed = true;
        return [category, Math.round(score * 100)];
      }),
    );

    console.log(
      `${route.padEnd(12)} performance ${scores.performance} · accessibility ${scores.accessibility} · best practices ${scores["best-practices"]} · SEO ${scores.seo}`,
    );
  }
} finally {
  chrome.kill();
  await new Promise((closed) => server.close(closed));
}

if (failed) {
  console.error("One or more Lighthouse category budgets failed.");
  process.exit(1);
}

console.log("All Lighthouse category budgets passed.");
