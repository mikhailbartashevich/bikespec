var express = require('express');
var orm = require('orm');
var app = express();

app.use(orm.express("mysql://root:mysql@127.0.0.1/bikespec", {
    define: function (db, models, next) {
        models.forks = db.define("forks", {

            id          : Number,
            vendor      : String,
            name        : String,
            modelName   : String,
            year        : Number

        });

        next();
    }
}));

app.get("/", function (req, res) {

    req.models.forks.find(function (err, _forks) {

        if(err) {
            res.send(404, err);
        } else {
            res.send(_forks);
        }

        

    });

    
});

app.listen(9000);