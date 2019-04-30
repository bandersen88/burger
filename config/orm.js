var connection = require("./connection.js");

// TODO: be careful with the callbacks

// Remeber orm is an object, so comma's after all but the last definition
var orm = {
    // Query 1
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
          if (err) throw err;
          console.log("All Results");
        //   This would be an aspect in AOP
          for(let r of result) {
            console.log(r.id  + " - " + r.burger_name + " - " + r.devoured);
          }
          cb(result);
        });
        
      },

    // Query 2
    selectByName: function(searchName) {
      var queryString = "SELECT * FROM burgers WHERE burger_name = ?";
      connection.query(queryString, [searchName], function(err, result) {
        if (err) throw err;
        for(let r of result) {
            console.log(r.id  + " - " + r.burger_name + " - " + r.devoured);
        }
      });
    },

    // Query 3
    insertOne: function(burgerName, devouredVal, cb) {
        var queryString = "INSERT INTO burgers (burger_name,devoured) VALUES (?,?)";
        connection.query(queryString, [burgerName, devouredVal], function(err, result) {
          if (err) throw err;
        console.log("Inserted One Row");
        cb(result);
        });
      },

    // Query 4
    updateOne: function(tableInput,burgerName, devouredVal, condition) {
        var queryString = "UPDATE ?? SET ?? = ??, ?? = ?? WHERE ??";
        connection.query(queryString, [tableInput, "burger_name", burgerName, "devoured", devouredVal, condition], function(err, result) {
            if (err) throw err;
        console.log("Inserted One Row");
        });
      },

    updateOneDevour: function(devouredVal, condition, cb) {
        var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";
        connection.query(queryString, [devouredVal, condition], function(err, result) {
        if (err) throw err;
        cb(result);
        });
      }
  };
  
  module.exports = orm;