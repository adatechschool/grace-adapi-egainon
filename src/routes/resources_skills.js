import { Router } from 'express';
import pool from "../db.js"; 

const router = Router();

// - [ ] Créer une route `GET` pour les **resources_skills**
router.get("/", async function (req, res) {

    try{
const { rows } = await pool.query("SELECT * FROM resources_skills");
res.json(rows);

}catch(err){
 console.error(err);
 res.status(500).json({error:err.message});
}
});


// - [ ] Créer une route `GET` pour une **resources_skills**
router.get("/:id", async function (req, res) {
try{
const {id} = req.params;
const { rows } = await pool.query(`SELECT * FROM resources_skills WHERE resource_id = ${id}`);
res.json(rows);

}catch(err){
 console.error(err);
 res.status(500).json({error:err.message});
}
});

// - [ ] Créer une route `POST` pour les **resources_skills**
router.post("/", async function (req, res) {
    try{

// const resources_skills = req.body.resources_skills;
const skill_id = req.body.skill_id;
await pool.query("INSERT INTO resources_skills (resource_id, skill_id) VALUES (4,$1)", [skill_id] );
res.json( "message: ressource ajoutée");

}catch(err){
 console.error(err);
 res.status(500).json({error:err.message});
}
});
//4, 1 4 doit déjà exister car dépend autre table.

// - [ ] Créer une route `PUT` pour les **resources_skills**
router.put("/", async function (req, res) {
    try{
await pool.query("UPDATE resources_skills SET resource_id = 3 WHERE skill_id = 2");
res.json( "message: ressource changée");

    }catch(err){
 console.error(err);
 res.status(500).json({error:err.message});
}

});

// - [ ] Créer une route `DELETE` pour les **resources_skills**
router.delete("/:id", async function (req, res) {

    try{
const {id} = req.params;
await pool.query(`DELETE FROM resources_skills WHERE resource_id = ${id}`);
res.json( "message: ressource supprimée");

 }catch(err){
 console.error(err);
 res.status(500).json({error:err.message});
}
});



export default router;