const People = require("../models/people");

// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      // Create a Customer
      const people = new People({
        name: req.body.name,
        age: req.body.age
      });
    
      // Save Customer in the database
      People.create(people, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Customer."
          });
        else res.send(data);
      });
};

exports.read = (req, res) => {
  People.read((err, data) => {
    if(err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    }
    else res.send(data);    
  })
}