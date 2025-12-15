import express from "express";
import pool from "./db.js"; 

const app = express();

// - [ ] Créer une route `GET` pour les **ressources**
app.get("/ressources", async function (req, res) {
const { rows } = await pool.query("SELECT * FROM resources");
res.json(rows);});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

// - [ ] Créer une route `GET` pour une **ressource**
app.get("/ressource", async function (req, res) {
const { rows } = await pool.query("SELECT * FROM resources WHERE title LIKE '%eact'");
res.json(rows);});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

// - [ ] Créer une route `POST` pour les **ressources**
app.get("/ressource", async function (req, res) {
const { rows } = await pool.query("SELECT * FROM resources WHERE title LIKE '%eact'");
res.json(rows);});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});