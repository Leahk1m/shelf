'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Demo User',
        lastName: 'Trial',
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        firstName: 'Leah',
        lastName: 'Kim',
        email: 'leah@aa.io',
        username: 'Leahk1m',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        firstName: 'John',
        lastName: 'Angcla',
        email: 'john@aa.io',
        username: 'shinobu',
        hashedPassword: bcrypt.hashSync('password'),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
