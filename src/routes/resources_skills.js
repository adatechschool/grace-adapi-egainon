import { Router } from 'express';
import pool from "../db.js"; 

const router = Router();

// - [ ] Créer une route `GET` pour les **resources_skills**
router.get("/resources_skills", async function (req, res) {
const { rows } = await pool.query("SELECT * FROM resources_skills");
res.json(rows);});


// - [ ] Créer une route `GET` pour une **resources_skills**
router.get("/resources_skills/", async function (req, res) {
const {id} = req.params;
const { rows } = await pool.query("SELECT * FROM resources_skills WHERE resource_id = 1");
res.json(rows);});


// - [ ] Créer une route `POST` pour les **resources_skills**
router.post("/post/resources_skills", async function (req, res) {
await pool.query("INSERT INTO resources_skills (resource_id, skill_id) VALUES (5, 5) ");
res.json( "message: resources_skills ajouté");});



// - [ ] Créer une route `PUT` pour les **resources_skills**
router.put("/put/resources_skills/5", async function (req, res) {
await pool.query("UPDATE resources_skills SET skill_id = 6 WHERE resource_id = 5");
res.json( "message: resources_skill changé");});


// - [ ] Créer une route `DELETE` pour les **resources_skills**
router.delete("/delete/resources_skills", async function (req, res) {
await pool.query("DELETE FROM resources_skills WHERE resource_id = 5");
res.json( "message: resources_skill supprimée");});


export default router;