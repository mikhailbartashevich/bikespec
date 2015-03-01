var express = require('express'),
orm = require('orm'),
app = express(),
config = require('./server/config')();

app.use(orm.express(config.db, {
    define: function (db, models, next) {
        models.forks = db.define('forks', {

            id          : Number,
            vendor      : Number,
            name        : String,
            modelName   : String,
            year        : Number

        });

        models.parts = db.define('parts', {

            id          : Number,
            name        : String,
            main        : Number,
            route       : String

        });


        models.vendors = db.define('vendors', {

            id          : Number,
            name        : String

        });

        next();
    }
}));


app.use('/bikespec', express.static(__dirname + '/public/index.html'));

app.use(express.static(__dirname + '/public'));

app.get('/api/forks', function (req, res) {

    req.models.forks.find(function (err, _forks) {

        if(err) {
            res.send(404, err);
        } else {
            res.send({forks : _forks});
        }

    });
    
});

app.get('/api/parts', function (req, res) {

    req.models.parts.find(function (err, _parts) {

        if(err) {
            res.send(404).send(err);
        } else {
            res.send({parts : _parts});
        }

    });
    
});

app.get('/api/vendors', function (req, res) {

    req.models.vendors.find(function (err, _vendors) {

        if(err) {
            res.send(404).send(err);
        } else {
            res.send({vendors : _vendors});
        }

    });
    
});

app.listen(9000);