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

router.put("api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        // if no rows were changed, then the ID must not exist so err
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});
