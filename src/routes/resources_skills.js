import { Router } from 'express';
import pool from "../db.js"; 

const router = Router();

// - [ ] Créer une route `GET` pour les **resources_skills**
router.get("/resources_skills", async function (req, res) {
const { rows } = await pool.query("SELECT * FROM resources_skills");
res.json(rows);});


// - [ ] Créer une route `GET` pour une **resources_skills**


// - [ ] Créer une route `POST` pour les **resources_skills**


// - [ ] Créer une route `PUT` pour les **resources_skills**


// - [ ] Créer une route `DELETE` pour les **resources_skills**



export default router;