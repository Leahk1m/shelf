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
        post: "I'm always a bit nervous to try food that I am unfamiliar with, but I visited Honeycomb Grocer with a friend who highly recommended it and I loved every snack I got, although I'm still not sure what some of them were. I will definitely be visiting more often.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Roxanna',
        lastName: 'Zuniga',
        userId: 6,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/roxxie.jpg?raw=true',
        businessId: 4,
        rating: 5,
        post: "It's a quaint little store that sells house-made fruit juices, jams, and preserves. From the outside, it doesn't look super nice or anything, but the quality is definitely present in their products. The owner's always very kind and sociable when he is at the shop, and tries to create a good relationship with all of his customers.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Kevin',
        lastName: 'Chao',
        userId: 7,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/kevin.jpg?raw=true',
        businessId: 2,
        rating: 5,
        post: "I don't even remember what happened when I was there but I had a blast. Why can't all grocery stores be like this though?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Michelle',
        lastName: 'Meng',
        userId: 4,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/michelle.png?raw=true',
        businessId: 2,
        rating: 2,
        post: "I came for food but I left with a headache instead. Can they change the name to Omega NOT Mart so it's less confusing?",
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        firstName: 'Michelle',
        lastName: 'Meng',
        userId: 4,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/michelle.png?raw=true',
        businessId: 4,
        rating: 2,
        post: "They have some of the most refreshing cold pressed juice I have ever tried, and the prices are better than most stores I've been too, while preserving high quality and amazing taste. 10/10 easily!!",
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        firstName: 'Jordan',
        lastName: 'Anderson',
        userId: 5,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/jordy.jpg?raw=true',
        businessId: 3,
        rating: 5,
        post: 'I made the trip all the way to Oakland from Antioch because I heard they have korean cheesy corndogs. It was worth the trip, I ended up eating five and even taking some to go. Try their milk teas too, they come in a can and are so refreshing!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Jordan',
        lastName: 'Anderson',
        userId: 5,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/jordy.jpg?raw=true',
        businessId: 2,
        rating: 5,
        post: "If they sold real groceries here I would never go to any other store for food ever again. Omega Mart was an awesome experience I recommend it to everyone (unless you're sensitive to bright lights though, because it does get a bit crazy).",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Kevin',
        lastName: 'Chao',
        userId: 7,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/kevin.jpg?raw=true',
        businessId: 3,
        rating: 3,
        post: "I hit up Seoul-A-Mart after going to Omega Mart and it was pretty disappointing compared to it. This place could use more rgb lights and then maybe I'll reconsider.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Leah',
        lastName: 'Kim',
        userId: 2,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/white-bear.jpg?raw=true',
        businessId: 4,
        rating: 4,
        post: "The place that I usually shop at was closed today, so I visited this shop that's pretty close to my work. I was surprised by how fresh their fruits and produce were, but sadly they didn't have what I needed.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Roxanna',
        lastName: 'Zuniga',
        userId: 6,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/roxxie.jpg?raw=true',
        businessId: 5,
        rating: 4,
        post: "I won't lie, I love a rustic interior so that's the only reason I come here. I can't even speak on the quality of the food here because I really don't care and I'm already having a good day whenever I make the trip because the decor is just spot on. This is how I plan on decorating my own home tbh.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'John',
        lastName: 'Angcla',
        userId: 3,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/brown-bear.jpg?raw=true',
        businessId: 5,
        rating: 3,
        post: "I can tell that the owners spent a lot of time on their decor, so the three stars come from the ambiance alone. However, their food was disappointing, as a lot of their items were past their expiration date.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Michelle',
        lastName: 'Meng',
        userId: 4,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/michelle.png?raw=true',
        businessId: 6,
        rating: 5,
        post: "I love everything about Jane's shop - the decor, their organic produce, their homemade jams - honestly all of it. I hope they never change anything because it's all perfect!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Leah',
        lastName: 'Kim',
        userId: 2,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/white-bear.jpg?raw=true',
        businessId: 6,
        rating: 4,
        post: "The store's a little small so you probably won't be able to find everything you're looking for, but if you do visit, don't forget to grab one of Jane's homemade lavender honey. It is honestly to die for!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Michelle',
        lastName: 'Meng',
        userId: 4,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/michelle.png?raw=true',
        businessId: 7,
        rating: 4,
        post: "I love whole foods so I was so excited to visit this super aesthetic version, but I found that they don't have many items compared to the traditional whole foods. I probably would skip coming here unless you're just there for the vibes.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Jordan',
        lastName: 'Anderson',
        userId: 5,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/jordy.jpg?raw=true',
        businessId: 8,
        rating: 5,
        post: 'There are a couple spots I always hit up when I am in Berkeley/Oakland and this is always one of them. The cheese here are on another level. If you want to know what pure perfection tastes like, try their cheese because that is it.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Roxanna',
        lastName: 'Zuniga',
        userId: 6,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/roxxie.jpg?raw=true',
        businessId: 8,
        rating: 2,
        post: "I come here with my sister because she's obsessed with the cheese they sell here, but I find the place to stink because of that reason. I don't really care how good the cheese may be, because the smell is probably enough to deter most people away.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Roxanna',
        lastName: 'Zuniga',
        userId: 6,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/roxxie.jpg?raw=true',
        businessId: 7,
        rating: 4,
        post: "This is whole foods, but prettier. Nothing more and nothing less, really. You get what you would expect from whole foods but with extra attention to decor - which is pretty nice.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Kevin',
        lastName: 'Chao',
        userId: 7,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/kevin.jpg?raw=true',
        businessId: 8,
        rating: 5,
        post: "I hear it might be smelly here. Good thing I can't smell! Hahaha give me all the cheese",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'John',
        lastName: 'Angcla',
        userId: 3,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/brown-bear.jpg?raw=true',
        businessId: 9,
        rating: 4,
        post: "It feels kinda cramped in there because the store's pretty small. They have a bread wall though, which I thought was really cool. But wouldn't the bread get dusty on the wall? I don't know...",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Michelle',
        lastName: 'Meng',
        userId: 4,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/michelle.png?raw=true',
        businessId: 9,
        rating: 5,
        post: 'Bread wall. BREAD WALL! This place deserves all the stars for having a bread wall. Other grocery stores, take notes.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Leah',
        lastName: 'Kim',
        userId: 2,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/white-bear.jpg?raw=true',
        businessId: 10,
        rating: 5,
        post: "I wish I could go to Yuji for all of my grocery needs because they have it all. The modern interior is beautiful and the food is as fresh as it could get. I just wish that the prices were a bit more affordable but I guess it makes sense, since it's located in Walnut Creek. ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Kevin',
        lastName: 'Chao',
        userId: 7,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/kevin.jpg?raw=true',
        businessId: 10,
        rating: 4,
        post: 'I thought this place was based off the dude from jujutsu kaisen. Booooo. I loved everything I picked up from the store though.',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        firstName: 'Michelle',
        lastName: 'Meng',
        userId: 4,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/michelle.png?raw=true',
        businessId: 10,
        rating: 5,
        post: "I don't understand why some people leave stupid reviews.... Anyways, Yuji is beautifully decorated and honestly exceeded my expectations with the quality of their products.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Roxanna',
        lastName: 'Zuniga',
        userId: 6,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/roxxie.jpg?raw=true',
        businessId: 11,
        rating: 5,
        post: "This place blew my mind! I never knew I could be shopping for groceries at such a beautiful location. It felt like I was shopping for my dinner at a high end museum. I will be back every weekend for sure!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Jordan',
        lastName: 'Anderson',
        userId: 5,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/jordy.jpg?raw=true',
        businessId: 11,
        rating: 5,
        post: "I found this place by accident when I was walking through the city and I didn't have that much time to explore it but it was so beautiful I look forward to going back.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'John',
        lastName: 'Angcla',
        userId: 3,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/brown-bear.jpg?raw=true',
        businessId: 12,
        rating: 4,
        post: "I thought this place was for kids but my girlfriend talked me into going with her and I honestly had so much fun. The ice cream they sell here was so good I wish they sold it at stores closer to me. This place would have been 5 stars but I took one off because I kept finding sprinkles in bad places...",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Leah',
        lastName: 'Kim',
        userId: 2,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/white-bear.jpg?raw=true',
        businessId: 12,
        rating: 5,
        post: "The ice cream really is delicious here! You should definitely try their cherry garcia flavor if you ever get a chance to visit.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Jordan',
        lastName: 'Anderson',
        userId: 5,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/jordy.jpg?raw=true',
        businessId: 13,
        rating: 5,
        post: "This is a small convenience store, but with a modern twist. Everything was spotless and they had a coffee shop that served one of the best affogatos I've ever had! This place is a hidden gem.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Roxanna',
        lastName: 'Zuniga',
        userId: 6,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/roxxie.jpg?raw=true',
        businessId: 14,
        rating: 5,
        post: "This is a very small store, although it doesn't look like it from the outside. The decor is not my cup of tea but prices were very reasonable and their produce is organic and very fresh. I think it's a great location in Palo Alto.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Michelle',
        lastName: 'Meng',
        userId: 4,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/michelle.png?raw=true',
        businessId: 14,
        rating: 4,
        post: "There aren't many artisanal shops in Palo Alto, so the Goods Mart really stands out as one of the best places to visit for some great quality grocery items for sure.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'John',
        lastName: 'Angcla',
        userId: 3,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/brown-bear.jpg?raw=true',
        businessId: 15,
        rating: 5,
        post: "It's hard to believe that this is a grocery store because the design of it all is so futuristic. I only stopped by to grab a quick drink, but they had such a huge selection of everything. I definitely plan on coming back to explore more of it.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Kevin',
        lastName: 'Chao',
        userId: 7,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/kevin.jpg?raw=true',
        businessId: 15,
        rating: 3,
        post: "It's no Omega Mart but this place was cool too. I liked their neon lights so I would probably choose this place over like, wal-mart.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Michelle',
        lastName: 'Meng',
        userId: 4,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/michelle.png?raw=true',
        businessId: 16,
        rating: 5,
        post: "I love Eataly so much, it reminds me of home! Not Italy, but New York, since I used to go to the NY location all the time. I'm so glad the bay's getting nicer things.",
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        firstName: 'Leah',
        lastName: 'Kim',
        userId: 2,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/white-bear.jpg?raw=true',
        businessId: 16,
        rating: 5,
        post: "My best friend showed me the ways of Eataly and it's honestly a whole experience that can't be rated on food alone. Although, the food was amazing too.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Roxanna',
        lastName: 'Zuniga',
        userId: 6,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/roxxie.jpg?raw=true',
        businessId: 17,
        rating: 5,
        post: "I thought it was a gas station from the outside, so I was really surprised when I went in to pay for my gas. I didn't really have time to shop but the concept of it all is so intriguing. I will be back with my sister next weekend, since she loves interesting places like these.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Kevin',
        lastName: 'Chao',
        userId: 7,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/kevin.jpg?raw=true',
        businessId: 17,
        rating: 2,
        post: "This isn't a gas station??? My car stopped because I used up my remaining 5 miles to get here and they didn't have gas but it's whatever.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Demo',
        lastName: 'User',
        userId: 1,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/eating-bear.jpg?raw=true',
        businessId: 19,
        rating: 5,
        post: 'They have a pasta dispenser!! That is so cool, I love it.',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        firstName: 'Michelle',
        lastName: 'Meng',
        userId: 4,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/michelle.png?raw=true',
        businessId: 19,
        rating: 4,
        post: "Pretty underrated little shop that's located in Daly City on Marietta St, across from the mall. I dont ever see too many customers here when I shop, but they really do deserve a lot more business because they carry pretty much everything you would need and everything's priced so affordably.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Michelle',
        lastName: 'Meng',
        userId: 4,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/michelle.png?raw=true',
        businessId: 18,
        rating: 4,
        post: "I'm a huge fan of wines and recently found out that Trader Joe's now carries orange wine! I usually had to drive out to Napa to get quality orange wine, but I'm so glad that TJ has hopped on the bandwagon so that I don't have to waste so much gas anymore.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Kevin',
        lastName: 'Chao',
        userId: 7,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/kevin.jpg?raw=true',
        businessId: 18,
        rating: 5,
        post: "Trader Joe's is the same at every location and I respect the consistency. I never have to think about which location is better, because they're all pretty much the same. I come here once a week to grab essentials such as orange chicken, and they never disappoint.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Jordan',
        lastName: 'Anderson',
        userId: 5,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/jordy.jpg?raw=true',
        businessId: 20,
        rating: 5,
        post: "I come here daily during my lunch breaks for the korean cheesy corn dogs. I'm not even exaggerating, even the employees think I'm wild for never missing a day. If you haven't tried it, you should definitely be heading to H-Mart right now, after reading my review. Try the one with potatoes on it, it's life-changing!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Jordan',
        lastName: 'Anderson',
        userId: 5,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/jordy.jpg?raw=true',
        businessId: 21,
        rating: 5,
        post: "I love Daiso!! I'm so glad there are more locations opening up in the bay, because this is my favorite spot for snacks and makeup. You should try the matcha chips if you ever visit but be warned - they're addictive. Also, their false lashes are only $1.50 and are nicer than any other ones I've tried so they're an absolute steal!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'John',
        lastName: 'Angcla',
        userId: 7,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/kevin.jpg?raw=true',
        businessId: 20,
        rating: 4,
        post: "I love H-Mart and their kimchis - I buy at least 3 huge jars every time I visit and they get eaten up by my family within 2 weeks. They also have the biggest selection of korean snacks that I have ever seen from the grocery stores in the area!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Roxanna',
        lastName: 'Zuniga',
        userId: 6,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/roxxie.jpg?raw=true',
        businessId: 21,
        rating: 4,
        post: "My friend wanted to grab some snacks from Daiso before our movie started, so we got a bunch of different ones not knowing what any of them weree. They were all around a dollar, so I didn't expect much when it came to taste but they were all surprisingly good!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Michelle',
        lastName: 'Meng',
        userId: 4,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/michelle.png?raw=true',
        businessId: 8,
        rating: 4,
        post: "I love the vibe here and could see myself coming pretty often for brunch. It's always such a nice touch when grocery stores provide restaurants/spaces to eat at.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Leah',
        lastName: 'Kim',
        userId: 2,
        profilePhoto: 'https://github.com/Leahk1m/shelf_app/blob/styling_stuff/frontend/src/components/IconPics/white-bear.jpg?raw=true',
        businessId: 13,
        rating: 4,
        post: "I needed lemons for dinner and came here as I saw that they were open and seemed inviting. The shop is a bit small, almost like a convenience store, but it was very cozy and clean. The lemons were fresh as were a lot of the other produce, so I would definitely come back again.",
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
