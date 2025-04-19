// server/index.ts
import express, { type Request, Response, NextFunction } from "express";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add environment logging
log(`NODE_ENV is "${process.env.NODE_ENV}"`, "env");

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({ message });
  throw err;
});

(async () => {
  const isDev = process.env.NODE_ENV === "development";

  if (isDev) {
    const { createServer } = await import("http");
    const server = createServer(app);
    await setupVite(app, server);

    const port = 5000;
    server.listen({ port, host: "127.0.0.1" }, () => {
      log(`serving on port ${port}`);
    });
  } else {
    const port = process.env.PORT || 5000; // allow dynamic port for Vercel or other hosts
    serveStatic(app);

    app.listen(port, () => {
      log(`serving on port ${port}`);
    });
  }
})();
