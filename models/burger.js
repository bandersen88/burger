// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// TODO: this can be improved to follow a more standard format

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
        console.log("Here in the Model");
        console.log(res);
        cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(burgerName, devouredVal, cb) {
    orm.insertOne(burgerName, devouredVal, function(res) {
      cb(res);
    });
  },
  update: function(burgerName, devouredVal, condition, cb) {
    orm.updateOne("burgers", burgerName, devouredVal, condition, function(res) {
      cb(res);
    });
  },
  devour: function(devourVal, condition, cb) {
    orm.updateOneDevour(devourVal, condition, function(res) {
      cb(res);
    });
  },
  //TODO: Set up Delete
  delete: function(id, cb) {
    console.log("i am here");
    orm.delete("cats",id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
