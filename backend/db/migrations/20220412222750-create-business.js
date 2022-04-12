'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Businesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ownerId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      zipCode: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      lat: {
        type: Sequelize.DECIMAL
      },
      lng: {
        type: Sequelize.DECIMAL
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      imageUrl: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      imageUrlTwo: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      imageUrlThree: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Businesses');
  }
};
