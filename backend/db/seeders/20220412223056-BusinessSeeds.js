'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Businesses', [
      {
        ownerId: 1,
        title: 'New Seasons Market',
        description: 'Organic produce',
        address:'123 Green Ln.',
        city: 'San Francisco',
        state: 'California',
        zipCode: 1234,
        lat: 10.3,
        lng: 23.10,
        category: 'organic',
        imageUrl: 'https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/08/erewhon-santa-monica_produce_CREDIT_carlos-r-hernandez-1-1068x712.jpg',
        imageUrlTwo: 'https://cdn.gobankingrates.com/wp-content/uploads/2019/06/sustainable-organic-produce-in-market-shutterstock_749388277.jpg?w=675&quality=75',
        imageUrlThree: 'https://thumbor.thedailymeal.com/k4LiMy_gfKqiQqZPhcvp9bfZy2Q=/870x565/filters:focal(500x333:501x334):format(webp)/https://www.thedailymeal.com/sites/default/files/2020/01/23/copy/5812149-New_Seasons.jpg',
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
    await queryInterface.bulkDelete('Businesses', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
