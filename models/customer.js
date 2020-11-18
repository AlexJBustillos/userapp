'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  customer.init({
    userId: DataTypes.INTEGER,
    userName: DataTypes.STRING,
    telephoneNumber: DataTypes.INTEGER,
    level: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'customer',
  });
  return customer;
};