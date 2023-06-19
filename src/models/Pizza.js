'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Pizza extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pizza.init({
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter a izza name',
      },
      unique: {
        args: true,
        msg: 'This pizza already exists',
      },
    },
    description: DataTypes.STRING,
    created_on: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pizza',
  });
  return Pizza;
};