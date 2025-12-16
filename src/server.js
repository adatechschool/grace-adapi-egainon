import express from "express";
import pool from "./db.js"; 

const app = express();

//RESSOURCES
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
app.post("/postressources", async function (req, res) {
await pool.query("INSERT INTO resources (title, url, description, type, is_ada, theme_id ) VALUES ('les bases du CSS', 'https://example.com/css', 'Guide CSS', 'guide', false, 1) ");
res.json( "message: ressource ajoutée");});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

// - [ ] Créer une route `PUT` pour les **ressources**
app.put("/putressources", async function (req, res) {
await pool.query("UPDATE resources SET title = 'Intro à Réact' WHERE id = 1");
res.json( "message: ressource changée");});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

//- [ ] Créer une route `DELETE` pour les **ressources**
app.delete("/deleteressources", async function (req, res) {
await pool.query("DELETE FROM resources WHERE id = 6");
res.json( "message: ressource supprimée");});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

//THEMES
//- [ ] Créer une route `GET` pour les **thèmes**
app.get("/themes", async function (req, res) {
const { rows } = await pool.query("SELECT * FROM themes");
res.json(rows);});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

//- [ ] Créer une route `GET` pour un **thème**
app.get("/theme", async function (req, res) {
const { rows } = await pool.query("SELECT name FROM themes WHERE id = 2");
res.json(rows);});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

//- [ ] Créer une route `POST` pour les **thèmes**
app.post("/post/themes", async function (req, res) {
await pool.query("INSERT INTO themes (id, name, description) VALUES (5,'API REST','interface de communication entre applications') ");
res.json( "message: thème ajouté");});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

// - [ ] Créer une route `PUT` pour les **thèmes**
app.put("/put/themes", async function (req, res) {
await pool.query("UPDATE themes SET description = 'interface de communication entre applis' WHERE id = 5");
res.json( "message: thème changé");});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

//- [ ] Créer une route `DELETE` pour les **thèmes**
app.delete("/delete/themes", async function (req, res) {
await pool.query("DELETE FROM themes WHERE id = 5");
res.json( "message: thème supprimé");});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

//SKILLS
// - [ ] Créer une route `GET` pour les **skills**
app.get("/skills", async function (req, res) {
const { rows } = await pool.query("SELECT * FROM skills");
res.json(rows);});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

// - [ ] Créer une route `GET` pour une **skill**
app.get("/skill", async function (req, res) {
const { rows } = await pool.query("SELECT * FROM skills WHERE id = 3");
res.json(rows);});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

// - [ ] Créer une route `POST` pour les **skills**
app.post("/post/skills", async function (req, res) {
await pool.query("INSERT INTO skills (id, name) VALUES (7,'Express') ");
res.json( "message: skills ajouté");});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

// - [ ] Créer une route `PUT` pour les **skills**
app.put("/put/skills", async function (req, res) {
await pool.query("UPDATE skills SET name = 'Express.js' WHERE id = 7");
res.json( "message: skill changé");});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

// - [ ] Créer une route `DELETE` pour les **skills**
app.delete("/delete/skills", async function (req, res) {
await pool.query("DELETE FROM skills WHERE id = 7");
res.json( "message: skill supprimé");});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});


//RESSOURCES_SKILLS
// - [ ] Créer une route `GET` pour les **ressources**
// - [ ] Créer une route `GET` pour une **ressource**
// - [ ] Créer une route `POST` pour les **ressources**
// - [ ] Créer une route `PUT` pour les **ressources**
// - [ ] Créer une route `DELETE` pour les **ressources**