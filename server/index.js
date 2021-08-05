import Express from "express";
import mysql from "mysql";
import cors from "cors";

console.clear();

const app = Express();
const port = 3001;
const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user_data",
});

app.use(Express.json());
app.use(cors());
database.connect();

app.get("/", (req, res) => {
  res.send(req.headers);
});
app.post("/register", (req, res) => {
  let sql = `INSERT INTO user_data SET username='${req.body.username}',password='${req.body.password}', referral='${req.body.refer}'`;
  database.query(sql, (err, result) => {
    if (err) console.log(err);
  });
  {
    ("use strict");
    let sql = `SELECT username FROM user_data WHERE username='${req.body.refer}'`;
    if (req.body.refer != undefined) {
      database.query(sql, (err, result) => {
        let sql = `UPDATE user_data SET referral=referral+1 WHERE username='${req.body.refer}'`;
        database.query(sql, (err, result) => {});
      });
    }
  }
});
app.post("/login", (req, res) => {
  //db = college_testing
  //table = users
  let sql = `SELECT * from user_data where username="${req.body.login_username}"`;
  database.query(sql, (err, result) => {
    try {
      if (result[0].password == req.body.login_password) {
        console.log(`[+] Logged in as "${req.body.login_username}"`);
        res.send(`[+] Logged in as "${req.body.login_username}"`);
      } else {
        console.log(`[-] Wrong Password for "${req.body.login_username}"`);
        res.send(`[-] Wrong Password for "${req.body.login_username}"`);
      }
    } catch (err) {
      console.log(`[-] No user as "${req.body.login_username}"`);
      res.send(`[-] No user as "${req.body.login_username}"`);
    }
  });
});
app.listen(port, () => {
  console.log(`Serving backend on port ${port}\n`);
});
