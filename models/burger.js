  
// Inside `burger.js`, import `orm.js` into `burger.js`
var orm = require("../config/orm.js");

//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
  // Select everything from the burgers table
  selectAll: function(table, cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(colName, valOfCol, cb) {
    orm.insertOne("burgers", colName, valOfCol, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

//     * Export at the end of the `burger.js` file.
module.exports = burger;