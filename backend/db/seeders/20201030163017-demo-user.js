'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Demo',
        lastName: 'User',
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/eating-bear.jpg?raw=true',
        city: 'App Academy',
        email: 'demo@aa.io',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        firstName: 'Leah',
        lastName: 'Kim',
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/white-bear.jpg?raw=true',
        city: 'San Jose',
        email: 'leah@aa.io',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        firstName: 'John',
        lastName: 'Angcla',
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/brown-bear.jpg?raw=true',
        city: 'Bay Point',
        email: 'john@aa.io',
        hashedPassword: bcrypt.hashSync('password'),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      email: { [Op.in]: ['demo@user.io', 'leah@aa.io', 'john@aa.io'] }
    }, {});
  }
};
