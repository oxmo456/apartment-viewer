var express = require('express');
var request = require('request');


module.exports = function (req, res) {

    var apartmentId = req.params.id;

    request('http://localhost:8080/apartment/' + apartmentId, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.render('apartment', JSON.parse(body));
        } else {
            res.render('error', {message: 'Oops'});
        }
    })


};
