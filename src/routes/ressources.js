import { Router } from 'express';
import pool from "../db.js"; 

const router = Router();

// - [ ] Créer une route `GET` pour les **ressources**
router.get("/", async function (req, res) {
const { rows } = await pool.query("SELECT * FROM resources");
res.json(rows);});

// - [ ] Créer une route `GET` pour une **ressource**
router.get("/:id", async function (req, res) {
const {id} = req.params;
const { rows } = await pool.query("SELECT * FROM resources WHERE id = $1`", [id]);
res.json(rows);});

// - [ ] Créer une route `POST` pour les **ressources**
router.post("/", async function (req, res) {
const title = req.body.title;
await pool.query("INSERT INTO resources (title) VALUES ($1)", [title] );
res.json( "message: ressource ajoutée");});
//('les bases du CSS', 'https://example.com/css', 'Guide CSS', 'guide', false, 1)

// - [ ] Créer une route `PUT` pour les **ressources**
router.put("/", async function (req, res) {
await pool.query("UPDATE resources SET title = 'Intro à Réact' WHERE id = 1");
res.json( "message: ressource changée");});

//- [ ] Créer une route `DELETE` pour les **ressources**
router.delete("/", async function (req, res) {
await pool.query("DELETE FROM resources WHERE id = 6");
res.json( "message: ressource supprimée");});

export default router;