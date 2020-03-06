const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = 8333;
const bodyParser = require("body-parser");


const index = require('./routes/index');
const reports = require('./routes/reports');
const hello = require('./routes/hello');

const test = require('./routes/test');
const login = require('./routes/login');


//bodyParser
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.use('/', index);
app.use('/reports', reports);
app.use('/hello', hello);

app.use('/test', test);
app.use('/login', login);


// POST http://localhost:8080/api/users

// Add a route
app.post("/logg", (req, res) => {
  console.log("----------------");
  console.log(req.body);
  console.log("----------------");


  res.end("string-trosa");



});



//***********************************
//Kanske ta bort?
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/texts.sqlite');
//***********************************




//***********************************
//Vet ej
app.use(cors());

// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line

    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}
//***********************************




// This is middleware called for all routes.
// Middleware takes three parameters.
app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    console.log("*hej!!*");
    next();
});



// Testing routes with method
app.get("/user", (req, res) => {
    console.log(req.body);
    res.json({
        data: {
            msg: "Got a GET request, sending back default 200"
        }
    });
});

app.post("/user", (req, res) => {
    console.log(req.body);
    res.status(201).json({
        data: {
            msg: "Got a POST request, sending back 201 Created"
        }
    });
});

app.put("/user", (req, res) => {
    // PUT requests should return 204 No Content
    res.status(204).send();
});

app.delete("/user", (req, res) => {
    // DELETE requests should return 204 No Content
    res.status(204).send();
});


// Add a route
app.get("/createuser", (req, res) => {
    db.run("INSERT INTO users (email, password) VALUES (?, ?)",
        "user@example.com",
        "superlonghashedpasswordthatwewillseehowtohashinthenextsection", (err) => {
        if (err) {
          res.json({
              data: {
                  msg: "err0rz"
              }
          });
        }

        res.json({
            data: {
                msg: "user created"
            }
        });
    });
});











app.listen(port, () => console.log(`Example API listening on port ${port}!`));

















// Add routes for 404 and error handling
app.use((req, res, next) => {
    var err = new Error("Not Foundz!");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    res.status(err.status || 500).json({
        "errors": [
            {
                "status": err.status,
                "title":  err.message,
                "detail": err.message
            }
        ]
    });
});
