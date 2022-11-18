const db = require("../models");
const Pizza = db.pizza;
const Op = db.Sequelize.Op;

// Create and Save a new Pizza
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      const pizza = {
        name: req.body.name,
        description: req.body.description
      };
    
      Pizza.create(pizza)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Pizza."
          });
        });
};
