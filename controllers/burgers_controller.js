var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res) {
    // console.log(req);
    burger.all(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log("*************************");
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

// Export routes for server.js to use.
module.exports = router;