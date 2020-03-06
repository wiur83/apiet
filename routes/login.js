var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
// *************** databas grejor ****************
const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const dbPath = path.resolve("db", 'texts.sqlite')
let db = new sqlite3.Database(dbPath, (err) => {
	if(err) {
		return console.log(err.message);
	}
	console.log("Connected to database!")
});



// Add a route
router.get("/create", (req, res) => {
    rand_val1 = Math.random()
    rand_val2 = Math.random()
    db.run("INSERT INTO users (email, password) VALUES (?, ?)",
        rand_val1,
        rand_val2, (err) => {
        if (err) {
          console.log("******");
          console.log(err.message);
          console.log("******");
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


// Add a route
router.post("/create", (req, res) => {
    console.log(req.body);
    db.run("INSERT INTO users (email, password) VALUES (?, ?)",
        rand_val1,
        rand_val2, (err) => {
        if (err) {
          console.log(err.message);
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



// Add a route
router.post("/login", (req, res) => {
  console.log(req.body);
  console.log(res.body);
  let sql = `SELECT * FROM users WHERE email = ? ORDER BY email`;

  db.each(sql, ['user@example.com'], (err, row) => {
    if (err) {
      throw err;
    }
    console.log(`${row.password}`);
  });

  // close the database connection
  // db.close();
    res.json({
        data: {
            msg: "user found"
        }
    });
});



// // Add a route
// router.post("/login", (req, res) => {
//   console.log("bajs1");
//   let sql = `SELECT * FROM users WHERE email = ? ORDER BY email`;
//
//   db.each(sql, ['user@example.com'], (err, row) => {
//     if (err) {
//       throw err;
//     }
//     console.log(`${row.password}`);
//   });
//
//   // close the database connection
//   // db.close();
//     console.log("bajs2");
//     res.json({
//         data: {
//             msg: "user found"
//         }
//     });
// });



// Add a route
router.get("/login", (req, res) => {
  console.log("bajs1x");
  console.log(req.body);
  let sql = `SELECT * FROM users WHERE email = ? ORDER BY email`;

  db.each(sql, ['user@example.com'], (err, row) => {
    if (err) {
      throw err;
    }
    console.log(`${row.password}`);
  });

  // close the database connection
  // db.close();
    console.log("bajs2x");
    console.log(req.body);
    res.json({
        data: {
            msg: "user found"
        }
    });
});







// // Add a route
// router.post("/login", (req, res) => {
//   let sql = `SELECT DISTINCT Email email FROM users
//          ORDER BY email`;
//
//   db.all(sql, [], (err, rows) => {
//   if (err) {
//     throw err;
//   }
//   rows.forEach((row) => {
//     console.log(row.email);
//   });
//   db.close();
//   res.json({
//       data: {
//           msg: "user found"
//       }
//   });
// });
// });



// // Add a route
// router.post("/login", (req, res) => {
//     rand_val1 = Math.random()
//     rand_val2 = Math.random()
//     console.log(req.body);
//     // SELECT * FROM Accounts WHERE Username LIKE '%query%'
//     // "SELECT * from users where username
//     $sql = "SELECT * from users where email = 'user@example.com'";
//     db.run($sql, (err, row) => {
//         if (err) {
//           console.log(err.message);
//           res.json({
//               data: {
//                   msg: "err0rz"
//               }
//           });
//         }
//         console.log("----------------------------------------");
//         console.log(row);
//         console.log("----------------------------------------");
//         res.json({
//             data: {
//                 msg: "user found"
//             }
//         });
//
//     });
// });
















// This is middleware called for all routes.
// Middleware takes three parameters.
router.use((req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    console.log("*test!!*");
    next();
});























// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });


module.exports = router;
