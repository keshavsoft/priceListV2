import { exec } from "child_process";

import express from "express";

import loadConfig from "./configLoader.js";
import setupRoutes from "./routes.js";
import startServer from "./server.js";
import { router as routerFromApi } from "./Api/routes.js";

loadConfig();

const app = express()

setupRoutes(app);

const { port } = startServer(app);

if (process.env.OPEN_BROWSER === "true") {
    exec(`start http://localhost:${port}`);
};
app.use("/Api", routerFromApi);
