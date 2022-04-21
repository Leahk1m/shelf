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
        rating: 5,
        post: 'I always try to make a stop at Honeycomb Grocer whenever I am in Oakland, because they genuinely have the most variety when it comes to snacks. They carry homemade mitarashi dango, which is enough reason to make the trip to Oakland. ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Roxanna',
        lastName: 'Zuniga',
        userId: 6,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/roxxie.jpg?raw=true',
        businessId: 1,
        rating: 5,
        post: "I'm always a bit nervous to try food that I am unfamiliar with, but I visited Honeycomb Grocer with a friend who highly recommended it and I loved every snack I got, although I'm still not sure what some of them were. I will definitely be visiting more often."
      },
      {
        firstName: 'Kevin',
        lastName: 'Chao',
        userId: 7,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/kevin.jpg?raw=true',
        businessId: 2,
        rating: 5,
        post: "I don't even remember what happened when I was there but I had a blast. Why can't all grocery stores be like this though?"
      },
      {
        firstName: 'Michelle',
        lastName: 'Meng',
        userId: 4,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/michelle.png?raw=true',
        businessId: 2,
        rating: 1,
        post: "I came for food but I left with a headache instead. Can they change the name to Omega NOT Mart so it's less confusing?"

      },
      {
        firstName: 'Jordan',
        lastName: 'Anderson',
        userId: 5,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/jordy.jpg?raw=true',
        businessId: 3,
        rating: 5,
        post: 'I made the trip all the way to Oakland from Antioch because I heard they have korean cheesy corndogs. It was worth the trip, I ended up eating five and even taking some to go. Try their milk teas too, they come in a can and are so refreshing!',
      },
      {
        firstName: 'Kevin',
        lastName: 'Chao',
        userId: 7,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/kevin.jpg?raw=true',
        businessId: 3,
        rating: 3,
        post: "I hit up Seoul-A-Mart after going to Omega Mart and it was pretty disappointing compared to it. This place could use more rgb lights and then maybe I'll reconsider."
      },
      {
        firstName: 'Leah',
        lastName: 'Kim',
        userId: 2,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/white-bear.jpg?raw=true',
        businessId: 4,
        rating: 3,
        post: "The place that I usually shop at was closed today, so I visited this shop that's pretty close to my work. I was surprised by how fresh their fruits and produce were, but sadly they didn't have what I needed."
      },
      {
        firstName: 'Roxanna',
        lastName: 'Zuniga',
        userId: 6,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/roxxie.jpg?raw=true',
        businessId: 5,
        rating: 4,
        post: "I won't lie, I love a rustic interior so that's the only reason I come here. I can't even speak on the quality of the food here because I really don't care and I'm already having a good day whenever I make the trip because the decor is just spot on. This is how I plan on decorating my own home tbh."
      },
      {
        firstName: 'John',
        lastName: 'Angcla',
        userId: 3,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/brown-bear.jpg?raw=true',
        businessId: 5,
        rating: 3,
        post: "I can tell that the owners spent a lot of time on their decor, so the three stars come from the ambiance alone. However, their food was disappointing, as a lot of their items were past their expiration date."
      },
      {
        firstName: 'Michelle',
        lastName: 'Meng',
        userId: 4,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/michelle.png?raw=true',
        businessId: 6,
        rating: 5,
        post: "I love everything about Jane's shop - the decor, their organic produce, their homemade jams - honestly all of it. I hope they never change anything because it's all perfect!"
      },
      {
        firstName: 'Leah',
        lastName: 'Kim',
        userId: 2,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/white-bear.jpg?raw=true',
        businessId: 6,
        rating: 4,
        post: "The store's a little small so you probably won't be able to find everything you're looking for, but if you do visit, don't forget to grab one of Jane's homemade lavender honey. It is honestly to die for!"
      },
      {
        firstName: 'Michelle',
        lastName: 'Meng',
        userId: 4,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/michelle.png?raw=true',
        businessId: 7,
        rating: 4,
        post: "I love whole foods so I was so exicted to visit this super aesthetic version, but I found that they don't have many items compared to the traditional whole foods. I probably would skip coming here unless you're just there for the vibes."
      },
      {
        firstName: 'Jordan',
        lastName: 'Anderson',
        userId: 5,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/jordy.jpg?raw=true',
        businessId: 8,
        rating: 5,
        post: 'There are a couple spots I always hit up when I am in Berkeley/Oakland and this is always one of them. The cheese here are on another level. If you want to know what pure perfection tastes like, try their cheese because that is it.'
      },
      {
        firstName: 'Roxanna',
        lastName: 'Zuniga',
        userId: 6,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/roxxie.jpg?raw=true',
        businessId: 8,
        rating: 2,
        post: "I come here with my sister because she's obsessed with the cheese they sell here, but I find the place to stink because of that reason. I don't really care how good the cheese may be, because the smell is probably enough to deter most people away."
      },
      {
        firstName: 'Kevin',
        lastName: 'Chao',
        userId: 7,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/kevin.jpg?raw=true',
        businessId: 8,
        rating: 5,
        post: "I hear it might be smelly here. Good thing I can't smell! Hahaha give me all the cheese"
      },
      {
        firstName: 'John',
        lastName: 'Angcla',
        userId: 3,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/brown-bear.jpg?raw=true',
        businessId: 9,
        rating: 3,
        post: "It feels kinda cramped in there because the store's pretty small. They have a bread wall though, which I thought was really cool. But wouldn't the bread get dusty on the wall? I don't know..."
      },
      {
        firstName: 'Michelle',
        lastName: 'Meng',
        userId: 4,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/michelle.png?raw=true',
        businessId: 9,
        rating: 5,
        post: 'Bread wall. BREAD WALL! This place deserves all the stars for having a bread wall. Other grocery stores, take notes.'
      },
      {
        firstName: 'Leah',
        lastName: 'Kim',
        userId: 2,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/white-bear.jpg?raw=true',
        businessId: 10,
        rating: 5,
        post: "I wish I could go to Yuji for all of my grocery needs because they have it all. The modern interior is beautiful and the food is as fresh as it could get. I just wish that the prices were a bit more affordable but I guess it makes sense, since it's located in Walnut Creek. "
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
