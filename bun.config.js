import path from 'path';
import fs from 'fs';
import { $ } from "bun";

const config = {
  sourcemap: "external",
  entrypoints: ["app/javascript/application.jsx"],
  outdir: path.join(process.cwd(), "app/assets/builds"),
};

const buildJS = async () => {
  const result = await Bun.build(config);

  if (!result.success) {
    console.error("JS build failed");
    for (const message of result.logs) {
      console.error(message);
    }
    return false;
  }
  return true;
};

const buildCSS = async () => {
  try {
    await $`bunx @tailwindcss/cli -i app/assets/stylesheets/application.css -o app/assets/builds/application.css`.quiet();
    return true;
  } catch (e) {
    console.error("CSS build failed:", e.message);
    return false;
  }
};

const buildAll = async () => {
  await Promise.all([buildJS(), buildCSS()]);
};

(async () => {
  await buildAll();

  if (process.argv.includes('--watch')) {
    const dirs = [
      path.join(process.cwd(), "app/javascript"),
      path.join(process.cwd(), "app/assets/stylesheets"),
    ];

    for (const dir of dirs) {
      fs.watch(dir, { recursive: true }, (eventType, filename) => {
        if (filename?.endsWith('.css')) {
          console.log(`CSS changed: ${filename}. Rebuilding...`);
          buildCSS();
        } else {
          console.log(`JS changed: ${filename}. Rebuilding...`);
          buildJS();
        }
      });
    }
  } else {
    process.exit(0);
  }
})();
