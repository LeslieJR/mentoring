const db = require("../models");
const Pizza = db.pizza;
const Op = db.Sequelize.Op;

const create = (req, res) => {
  if (!req.body.name && !req.body.description) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const pizza = {
    name: req.body.name,
    description: req.body.description,
  };

  Pizza.create(pizza)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Pizza.",
      });
    });
};

const update = (req, res) => {
  const {pizza_id} = req.params;

  Pizza.update(req.body, {
    where: { id: pizza_id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Pizza was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Pizza with id=${pizza_id}. Maybe Pizza was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Error updating Pizza with id=${id}`,
      });
    });
};

const getAll = (req, res) => {
  Pizza.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving pizzas.",
      });
    });
};

const getOne = (req, res) => {
  const {pizza_id} = req.params;

  Pizza.findByPk(pizza_id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Pizza with id=${pizza_id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Error retrieving Pizza with id=${pizza_id}`,
      });
    });
};

const remove = (req, res) => {
    const {pizza_id} = req.params;

    Pizza.destroy({
      where: { id: pizza_id }
    }).then(num => {
        if (num == 1) {
          res.send({
            message: "Pizza was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Pizza with id=${pizza_id}. Maybe Pizza was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || `Could not delete Pizza with id=${pizza_id}`
        });
      });
  };

  const removeAll = (req, res) => {
    Pizza.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Pizzas were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all pizzas."
          });
        });
  };

module.exports = {
    create,
    update,
    getOne,
    getAll,
    remove,
    removeAll
}