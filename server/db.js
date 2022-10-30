const sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    return;
  }
  db.run(
    `CREATE TABLE user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name text, 
        phone text UNIQUE, 
        adresse text, 
        CONSTRAINT name_unique UNIQUE (name)
        )`,
    (err) => {
      if (err) {
        console.log("client table already exists");
      }
    }
  );
});

module.exports = db;
