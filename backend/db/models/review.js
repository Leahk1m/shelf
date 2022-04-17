'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Review.init({
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    profilePhoto: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    businessId: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    post: {
      type: DataTypes.TEXT,
      allowNull: false,

    },
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
