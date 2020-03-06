var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    console.log(req.body);
    // const data = {
    //         title1: "Installera moduler",
    //         text1: "För att installera moduler så använde jag 'npm install' följt av namnet på modulen. Jag valde också oftast att skriva --save efter npm install för att den automatiskt ska läggas till i package.json under dependencies.",
    //         title2: "Starta me-app",
    //         text2: "För att starta appen kör jag: npm start"
    // };

    res.json(req.body);
});




router.get('/week/1', function(req, res, next) {
    const data = {
            title1: "Installera moduler",
            text1: "För att installera moduler så använde jag 'npm install' följt av namnet på modulen. Jag valde också oftast att skriva --save efter npm install för att den automatiskt ska läggas till i package.json under dependencies.",
            title2: "Starta me-app",
            text2: "För att starta appen kör jag: npm start"
    };

    res.json(data);
});

router.get('/week/2', function(req, res, next) {
    const data = {
            text: "Jag plockade inspiration från lite olika platser. Jag försökte följa top 10 rekommenderationerna till viss del. Sen använde jag mig av kunskap som vi lärt oss i tidigare kurser. Vad gäller datepickern gjorde jag en som jag själv ansåg vad enkel att både förstå och använda. Jag var inne på att dela upp formuläret i olika mindre komponenter men det vart enklare att lägga hela formuläret i en stor komponent istället. Så fick bli så denna gång."
    };

    res.json(data);
});

router.get('/week/3', function(req, res, next) {
    const data = {
            text: "text 3"
    };

    res.json(data);
});

//****************
//post
//****************
router.post("/yo", (req, res) => {
    //Sparar i databasen
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('./db/texts.sqlite');

    db.run("INSERT INTO users (email, password) VALUES (?, ?)",
      "user@example.com",
      "superlonghashedpasswordthatwewillseehowtohashinthenextsection", (err) => {
      if (err) {
          res.json({
              data: {
                  msg: "un-successfully"
              }
          });
      }

      res.json({
          data: {
              msg: "successfully"
          }
      });
    });

});


router.post("/spara", (req, res) => {
  //Krypterar lösen
  const bcrypt = require('bcryptjs');
  const saltRounds = 10;
  const myPlaintextPassword = 'longandhardP4$$w0rD';

  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // spara lösenord i databasen.
  });

    //Sparar i databasen
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('./db/texts.sqlite');

    db.run("INSERT INTO users (email, password) VALUES (?, ?)",
      "user@example.com",
      "superlonghashedpasswordthatwewillseehowtohashinthenextsection", (err) => {
      if (err) {
          res.json({
              data: {
                  msg: "un-successfully"
              }
          });
      }

      res.json({
          data: {
              msg: "successfully"
          }
      });
    });

});








router.get('/test', function(req, res) {
  var string = encodeURIComponent('something that would break');
      res.params.test = "test1";
      req.params.test = "test2";

  res.redirect('/reports');
});



router.get('/', function(req, res) {
  var passedVariable = req.query.valid;
    // console.log(req);
    console.log(req.params);
});


module.exports = router;
