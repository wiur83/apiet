var express = require('express');
var router = express.Router();

// This is middleware called for all routes.
// Middleware takes three parameters.
router.use((req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    console.log("*test!*");
    next();
});

router.get('/', function(req, res, next) {
    const data = {
        data: {
            msg: "test!"
        }
    };

    res.json(data);
});




router.get('/test', function(req, res) {
    console.log("hejhej!");


    res.end()
});





router.post('/test', function(req, res) {
    console.log("hejhej!");

    console.log(req.body);

    res.end()
});






module.exports = router;
