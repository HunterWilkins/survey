const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const mysql = require("mysql2");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const db = mysql.createConnection(
    {
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    }
)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
})