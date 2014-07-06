var express = require('express');
var request = require('request');

console.log(process.env);

var FANA_SERVER = process.env.FANA_SERVER || "http://localhost:8080/";

module.exports = function (req, res) {

    var apartmentId = req.params.id;

    request(FANA_SERVER + 'apartment/' + apartmentId, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.render('apartment', JSON.parse(body));
        } else {
            res.render('error', {message: 'Oops'});
        }
    })


};
