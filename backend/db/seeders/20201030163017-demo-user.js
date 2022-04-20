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
      {
        firstName: 'Michelle',
        lastName: 'Meng',
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/michelle.png?raw=true',
        city: 'New York',
        email: 'michelle@aa.io',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        firstName: 'Jordan',
        lastName: 'Anderson',
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/jordy.jpg?raw=true',
        city: 'Antioch',
        email: 'jordan@aa.io',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        firstName: 'Roxanna',
        lastName: 'Zuniga',
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/roxxie.jpg?raw=true',
        city: 'Cary',
        email: 'roxy@aa.io',
        hashedPassword: bcrypt.hashSync('password'),

      },
      {
        firstName: 'Kevin',
        lastName: 'Chao',
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/kevin.jpg?raw=true',
        city: 'Temple City',
        email: 'kevin@aa.io',
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
