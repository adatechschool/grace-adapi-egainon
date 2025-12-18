import { Router } from 'express';
import pool from "../db.js"; 

const router = Router();

// - [ ] Créer une route `GET` pour les **ressources**
router.get("/", async function (req, res) {

    try{
const { rows } = await pool.query("SELECT * FROM resources");
res.json(rows);

    }catch(err){
 console.error(err);
 res.status(500).json({error:err.message});
}

});

// - [ ] Créer une route `GET` pour une **ressource**
router.get("/:id", async function (req, res) {

    try{
const {id} = req.params;
const { rows } = await pool.query("SELECT * FROM resources WHERE id = $1`", [id]);
res.json(rows);

    }catch(err){
 console.error(err);
 res.status(500).json({error:err.message});
}
});
//2e version :
// router.get("/:id", async function (req, res) {
// try{
// const {id} = req.params;
// const { rows } = await pool.query(`SELECT * FROM resources WHERE id = ${id}`);
// res.json(rows);

// }catch(err){
//  console.error(err);
//  res.status(500).json({error:err.message});
// }
// });

// - [ ] Créer une route `POST` pour les **ressources**
router.post("/", async function (req, res) {
    
    try{
const title = req.body.title;
const url = req.body.url;
await pool.query("INSERT INTO resources (id, title, url) VALUES (23,$1,$2)", [title, url] );
res.json( "message: ressource ajoutée");

}catch(err){
 console.error(err);
 res.status(500).json({error:err.message});
}
});
//('les bases du CSS', 'https://example.com/css', 'Guide CSS', 'guide', false, 1)

// - [ ] Créer une route `PUT` pour les **ressources**
router.put("/", async function (req, res) {

    try{
await pool.query("UPDATE resources SET title = 'Intro à Réact' WHERE id = 1");
res.json( "message: ressource changée");

    }catch(err){
 console.error(err);
 res.status(500).json({error:err.message});
}

});


//- [ ] Créer une route `DELETE` pour les **ressources**
router.delete("/:id", async function (req, res) {

    try{
const {id} = req.params;
await pool.query(`DELETE FROM resources WHERE id = ${id}`);
res.json( "message: ressource supprimée");

 }catch(err){
 console.error(err);
 res.status(500).json({error:err.message});
}
});




export default router;