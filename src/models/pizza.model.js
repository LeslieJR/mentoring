module.exports = (sequelize, Sequelize) => {
    const Pizza = sequelize.define("pizza", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      created_on: {
        type: Sequelize.DATE
      }
    });
  
    return Pizza;
  };