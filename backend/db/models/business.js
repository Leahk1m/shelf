'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Business.init({
    ownerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.INTEGER,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL,
    category: DataTypes.STRING,
    imageUrl: DataTypes.TEXT,
    imageUrlTwo: DataTypes.TEXT,
    imageUrlThree: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Business',
  });
  return Business;
};