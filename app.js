const express = require('express');
const request = require('request');

const FANA_SERVER = process.env.FANA_SERVER || "http://localhost:8080/";
const SERVER_PORT = Number(process.env.PORT || 3000);

const publicDirectory = __dirname + '/public';

const app = express();

app.use(express.static(publicDirectory));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.render('index', {});
});

app.get('/apartment/:id', function (req, res) {
    const apartmentId = req.params.id;

    request(FANA_SERVER + 'apartment/' + apartmentId, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.render('apartment', JSON.parse(body));
        } else {
            res.render('error', {message: 'Oops'});
        }
    })
});

app.get('/apartments', function (req, res) {

    request(FANA_SERVER + 'apartments?sort-by=newest-first', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.render('apartments', JSON.parse(body));
        } else {
            res.render('error', {message: 'Oops'});
        }
    })
});


app.listen(SERVER_PORT, function () {
});