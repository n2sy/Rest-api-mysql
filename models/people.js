const sql = require("../connextion.js");

// constructor
const People = function(people) {
  this.name = people.name;
  this.age = people.age;
};

People.create = (newPeople, result) => {
  sql.query("INSERT INTO people SET ?", newPeople, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...newPeople });
    result(null, { id: res.insertId, ...newPeople });
  });
};

People.read = (result) => {
  sql.query("SELECT * FROM people", (err, rows) => {
    if(!err) {
        result(null, rows);
    }
    else {
        console.log("Error with SELECT");
        result(err, null);
        return;
    }
})
}

module.exports = People;
