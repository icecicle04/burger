var express = require("express");

var router = express.Router();

// Importing model
var burger = require("../models/burger.js");

//routes and logic
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hasObject = {
      burgers: data,
    };
    console.log(hasObject);
    res.render("index", hasObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create(
    ["name", "devoured"],
    [req.body.name, req.body.devoured],
    function (result) {
      //send back new burger ID
      res.json({ id: result.insertId });
    }
  );
});
