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
        type: Sequelize.STRING(30)
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(30)
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
        type: Sequelize.STRING(30)
      },
      imageUrls: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING)

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
