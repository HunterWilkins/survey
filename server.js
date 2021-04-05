const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const mysql = require("mysql2");
const config = require("./config/config");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const db = mysql.createConnection(process.env.NODE_ENV === "production" ? config.production : config.dev);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
})