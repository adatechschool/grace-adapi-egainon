import express from "express";
import pool from "./db.js"; 
import cors from "cors";
import resourcesRouter from "./routes/resources.js";
import skillsRouter from "./routes/skills.js";
import themesRouter from "./routes/themes.js";
import resources_skillsRouter from "./routes/resources_skills.js";

import swaggerUi from "swagger-ui-express";
// function systeme
import fs from "fs";
// path => chemin
import path from "path";
// contenu url
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerDoc = JSON.parse(
  fs.readFileSync(path.join(__dirname, "swagger.json"), "utf-8")
);

const app = express();


//Middleware
app.use(cors());
app.use(express.json());
// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
//routes
app.use("/resources", resourcesRouter);
app.use("/skills", skillsRouter);
app.use("/themes", themesRouter);
app.use("/resources_skills", resources_skillsRouter);

//serveur
app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});




