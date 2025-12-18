import express from "express";
import pool from "./db.js"; 
import cors from "cors";
import ressourcesRouter from "./routes/ressources.js";
import skillsRouter from "./routes/skills.js";
import themesRouter from "./routes/themes.js";
import resources_skillsRouter from "./routes/resources_skills.js";

const app = express();


//Middleware
app.use(cors());
app.use(express.json()); 
app.use("/ressources", ressourcesRouter);
app.use("/skills", skillsRouter);
app.use("/themes", themesRouter);
app.use("/resources_skills", resources_skillsRouter);


app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});




