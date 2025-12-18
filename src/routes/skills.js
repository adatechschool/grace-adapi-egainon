import { Router } from 'express';
import pool from "../db.js"; 

const router = Router();
// - [ ] Créer une route `GET` pour les **skills**
router.get("/", async function (req, res) {
const { rows } = await pool.query("SELECT * FROM skills");
res.json(rows);});

// - [ ] Créer une route `GET` pour une **skill**
router.get("/skill/:id", async function (req, res) {
const {id} = req.params;
const { rows } = await pool.query(`SELECT * FROM resources WHERE id = ${id}`);
res.json(rows);});

// - [ ] Créer une route `POST` pour les **skills**
router.post("/skills", async function (req, res) {
console.log(req.body.name);
const name = req.body.name;
await pool.query("INSERT INTO skills (name) VALUES $1", [name]);
res.json( "message: skills ajouté");});

// - [ ] Créer une route `PUT` pour les **skills**
router.put("/put/skills", async function (req, res) {
await pool.query("UPDATE skills SET name = 'Express.js' WHERE id = 7");
res.json( "message: skill changé");});


// - [ ] Créer une route `DELETE` pour les **skills**
router.delete("/delete/skills", async function (req, res) {
await pool.query("DELETE FROM skills WHERE id = 7");
res.json( "message: skill supprimé");});


export default router;