'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Reviews', [
      {
        firstName: 'Leah',
        lastName: 'Kim',
        userId: 2,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/white-bear.jpg?raw=true',
        businessId: 1,
        rating: 4,
        post: 'I like it',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reviews', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
