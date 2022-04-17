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
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 50]
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,

    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 50]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30]
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30]
      }
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lat: {
      type: DataTypes.DECIMAL,
    },
    lng: {
      type: DataTypes.DECIMAL,

    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30]
      }
    },
    imageUrls: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      validate: {
        len: [1, 3]
      }
    },

  }, {
    sequelize,
    modelName: 'Business',
  });
  return Business;
};
