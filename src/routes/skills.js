//SKILLS
// - [ ] Créer une route `GET` pour les **skills**
app.get("/skills", async function (req, res) {
const { rows } = await pool.query("SELECT * FROM skills");
res.json(rows);});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

// - [ ] Créer une route `GET` pour une **skill**
app.get("/skill", async function (req, res) {
const { rows } = await pool.query("SELECT * FROM skills WHERE id = 3");
res.json(rows);});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

// - [ ] Créer une route `POST` pour les **skills**
app.post("/post/skills", async function (req, res) {
await pool.query("INSERT INTO skills (id, name) VALUES (7,'Express') ");
res.json( "message: skills ajouté");});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

// - [ ] Créer une route `PUT` pour les **skills**
app.put("/put/skills", async function (req, res) {
await pool.query("UPDATE skills SET name = 'Express.js' WHERE id = 7");
res.json( "message: skill changé");});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

// - [ ] Créer une route `DELETE` pour les **skills**
app.delete("/delete/skills", async function (req, res) {
await pool.query("DELETE FROM skills WHERE id = 7");
res.json( "message: skill supprimé");});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});