var express = require('express');
var http = require('http');
var router = express.Router();


router.get('/apartment/:id', function (req, res) {

    var apartmentId = req.params.id;

    var options = {
        host: 'example.com',
        port: 80,
        path: '/apartment/' + apartmentId
    };

    http.get(options,function(response){



    })


    res.render('apartment', { title: 'yeha!' });
});

module.exports = router;
