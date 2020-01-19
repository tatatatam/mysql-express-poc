const app = require("express")();
const mysql = require("promise-mysql");
let pool;
const createPool = async () => {
  const config = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "rootpw",
    database: "cabin",
    connectionLimit: 100
  };
  pool = await mysql.createPool(config);
};
createPool();
app.get("/", async (req, res) => {
  try {
    //Find item
    let itemData = await pool.query(`SELECT 1 + 1 AS solution`);
    res.json(itemData);
  } catch (error) {
    console.log(error);
    res.json(400).json({ error: error.message });
  }
});

app.listen(8080);
