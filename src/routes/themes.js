import { Router } from 'express';
import pool from "../db.js"; 

const router = Router();

//- [ ] Créer une route `GET` pour les **thèmes**
router.get("/", async function (req, res) {
    try{
const { rows } = await pool.query("SELECT * FROM themes");
res.json(rows);

    }catch(err){
 console.error(err);
 res.status(500).json({error:err.message});
}
});

//- [ ] Créer une route `GET` pour un **thème**
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

//2e verion :
// router.get("/:id", async function (req, res) {
//     try{
// const {id} = req.params;
// const { rows } = await pool.query("SELECT * FROM resources  WHERE id = $1`", [id]);
// res.json(rows);

//  }catch(err){
//  console.error(err);
//  res.status(500).json({error:err.message});
// }
// });


//- [ ] Créer une route `POST` pour les **thèmes**
router.post("/", async function (req, res) {
    try{
const name = req.body.name;
const description = req.body.description;
await pool.query("INSERT INTO themes (id, name, description) VALUES (5,$1,$2)", [name, description] );
res.json( "message: thème ajouté");

 }catch(err){
 console.error(err);
 res.status(500).json({error:err.message});
}
});
//5,'API REST','interface de communication entre applications'

// - [ ] Créer une route `PUT` pour les **thèmes**
router.put("/", async function (req, res) {
    try{
await pool.query("UPDATE themes SET description = 'interface de communication entre applis' WHERE id = 5");
res.json( "message: thème changé");

}catch(err){
 console.error(err);
 res.status(500).json({error:err.message});
}
});

//- [ ] Créer une route `DELETE` pour les **thèmes**
router.delete("/", async function (req, res) {
    try{
await pool.query("DELETE FROM themes WHERE id = 5");
res.json( "message: thème supprimé");

    }catch(err){
 console.error(err);
 res.status(500).json({error:err.message});
}
});



export default router;