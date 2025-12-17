//RESOURCES_SKILLS
// - [ ] Créer une route `GET` pour les **resources_skills**
app.get("/resources_skills", async function (req, res) {
const { rows } = await pool.query("SELECT * FROM resources_skills");
res.json(rows);});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

// - [ ] Créer une route `GET` pour une **resources_skills**
app.get("/resources_skills/1", async function (req, res) {
const { rows } = await pool.query("SELECT * FROM resources_skills WHERE resource_id = 1");
res.json(rows);});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

// - [ ] Créer une route `POST` pour les **resources_skills**
app.post("/post/resources_skills", async function (req, res) {
await pool.query("INSERT INTO resources_skills (resource_id, skill_id) VALUES (5, 5) ");
res.json( "message: resources_skills ajouté");});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

// - [ ] Créer une route `PUT` pour les **resources_skills**
app.put("/put/resources_skills/5", async function (req, res) {
await pool.query("UPDATE resources_skills SET skill_id = 6 WHERE resource_id = 5");
res.json( "message: resources_skill changé");});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});

// - [ ] Créer une route `DELETE` pour les **resources_skills**
app.delete("/delete/resources_skills", async function (req, res) {
await pool.query("DELETE FROM resources_skills WHERE resource_id = 5");
res.json( "message: resources_skill supprimée");});

app.listen(3000, () => {
console.log(":rocket: Serveur lancé : http://localhost:3000");
});