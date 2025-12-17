import { Router } from 'express';
import pool from "../db.js"; 

const router = Router();
//- [ ] Créer une route `GET` pour les **thèmes**
router.get("/themes", async function (req, res) {
const { rows } = await pool.query("SELECT * FROM themes");
res.json(rows);});

//- [ ] Créer une route `GET` pour un **thème**
router.get("/themes/:id", async function (req, res) {
const {id} = req.params;
const { rows } = await pool.query(`SELECT * FROM resources WHERE id = ${id}`);
res.json(rows);});

//- [ ] Créer une route `POST` pour les **thèmes**
router.post("/post/themes", async function (req, res) {
await pool.query("INSERT INTO themes (id, name, description) VALUES (5,'API REST','interface de communication entre applications') ");
res.json( "message: thème ajouté");});

// - [ ] Créer une route `PUT` pour les **thèmes**
router.put("/put/themes", async function (req, res) {
await pool.query("UPDATE themes SET description = 'interface de communication entre applis' WHERE id = 5");
res.json( "message: thème changé");});

//- [ ] Créer une route `DELETE` pour les **thèmes**
router.delete("/delete/themes", async function (req, res) {
await pool.query("DELETE FROM themes WHERE id = 5");
res.json( "message: thème supprimé");});

export default router;