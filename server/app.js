const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db");
const port = 3111;

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.post("/getTable", async (req, res) => {
  const { TableName } = req.body;
  const sql = `SELECT * FROM ${TableName}`;
  db.get(sql, (err, row) => {
    if (err) return res.json({ err });
    res.json(row);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
