import { Router } from 'express';
import pool from "../db.js"; 

const router = Router();


// - [ ] Créer une route `GET` pour les **skills**
router.get("/", async function (req, res) {

    try{
const { rows } = await pool.query("SELECT * FROM skills");
res.json(rows);

  }catch(err){
 console.error(err);
 res.status(500).json({error:err.message});
}

});

// - [ ] Créer une route `GET` pour une **skill**
router.get("/:id", async function (req, res) {

    try{
const {id} = req.params;
const { rows } = await pool.query(`SELECT * FROM resources WHERE id = ${id}`);
res.json(rows);

 }catch(err){
 console.error(err);
 res.status(500).json({error:err.message});
}
});

// - [ ] Créer une route `POST` pour les **skills**
router.post("/", async function (req, res) {

    try{
console.log(req.body.name);
const name = req.body.name;
await pool.query("INSERT INTO skills (id, name) VALUES (7, $1)", [name]);
res.json( "message: skills ajouté");

    }catch(err){
 console.error(err);
 res.status(500).json({error:err.message});
}
});
//name : debogage

// - [ ] Créer une route `PUT` pour les **skills**
router.put("/", async function (req, res) {

    try{
await pool.query("UPDATE skills SET name = 'Express.js' WHERE id = 7");
res.json( "message: skill changé");

    }catch(err){
 console.error(err);
 res.status(500).json({error:err.message});
}
});


// - [ ] Créer une route `DELETE` pour les **skills**
router.delete("/:id", async function (req, res) {

    try{
const {id} = req.params;
await pool.query(`DELETE FROM skills WHERE id = ${id}`);
res.json( "message: skill supprimé");

    }catch(err){
 console.error(err);
 res.status(500).json({error:err.message});
}
});


export default router;