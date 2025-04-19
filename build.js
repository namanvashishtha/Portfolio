import { execSync } from "child_process";
import fs from "fs";
import path from "path";

function copyFolderSync(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const element of fs.readdirSync(from)) {
    const stat = fs.lstatSync(path.join(from, element));
    if (stat.isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else if (stat.isSymbolicLink()) {
      const symlink = fs.readlinkSync(path.join(from, element));
      fs.symlinkSync(symlink, path.join(to, element));
    } else if (stat.isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  }
}

try {
  console.log("Building client...");
  execSync("vite build", { stdio: "inherit" });

  console.log("Building server...");
  execSync("esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist", { stdio: "inherit" });

  console.log("Copying client/dist to dist...");
  copyFolderSync("client/dist", "dist");

  console.log("Build completed successfully.");
} catch (error) {
  console.error("Build failed:", error);
  process.exit(1);
}
