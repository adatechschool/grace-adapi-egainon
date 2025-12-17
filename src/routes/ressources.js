//RESSOURCES
// - [ ] Créer une route `GET` pour les **ressources**
app.get("/ressources", async function (req, res) {
const { rows } = await pool.query("SELECT * FROM resources");
res.json(rows);});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

// - [ ] Créer une route `GET` pour une **ressource**
app.get("/ressources/:id", async function (req, res) {
const {id} = req.params;
const { rows } = await pool.query("SELECT * FROM resources WHERE id = $1`", [id]);
res.json(rows);});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

// - [ ] Créer une route `POST` pour les **ressources**
app.post("/postressources", async function (req, res) {
    console.log(req.body.name);
    const name = req.body.name;
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