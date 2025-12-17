//THEMES
//- [ ] Créer une route `GET` pour les **thèmes**
app.get("/themes", async function (req, res) {
const { rows } = await pool.query("SELECT * FROM themes");
res.json(rows);});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

//- [ ] Créer une route `GET` pour un **thème**
app.get("/theme", async function (req, res) {
const { rows } = await pool.query("SELECT name FROM themes WHERE id = 2");
res.json(rows);});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

//- [ ] Créer une route `POST` pour les **thèmes**
app.post("/post/themes", async function (req, res) {
await pool.query("INSERT INTO themes (id, name, description) VALUES (5,'API REST','interface de communication entre applications') ");
res.json( "message: thème ajouté");});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

// - [ ] Créer une route `PUT` pour les **thèmes**
app.put("/put/themes", async function (req, res) {
await pool.query("UPDATE themes SET description = 'interface de communication entre applis' WHERE id = 5");
res.json( "message: thème changé");});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

//- [ ] Créer une route `DELETE` pour les **thèmes**
app.delete("/delete/themes", async function (req, res) {
await pool.query("DELETE FROM themes WHERE id = 5");
res.json( "message: thème supprimé");});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});