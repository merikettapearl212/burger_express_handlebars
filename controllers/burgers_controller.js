// Inside the `burgers_controller.js` file, import the following:
//    * Express
//    * `burger.js`
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll("burgers", function(data) {
    var burgerDataObj = {
      burgers: data
    };
    console.log(burgerDataObj);
    res.render("index", burgerDataObj);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne("burger_name", [req.body.burger], function(err, result) {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});




module.exports = router;