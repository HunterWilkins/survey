const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const db = require("./models");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/poll/:id", (req, res) => {
    db.Poll.findOne({
        where: {
            id: req.params.id
        },
        include: [{model: db.Option, attributes: ["text"]}]
    }).then(dbPoll => {
        res.json(dbPoll);
    }).catch(err => res.json(err));
});

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port " + PORT);
    });
});
