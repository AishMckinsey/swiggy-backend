"use strict";

module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Menus", [
      {
        name: "Veg Sandwich",
        price: "100",
        rating: 5,
        resturant_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Veg Burger",
        price: "100",
        rating: 5,
        resturant_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chicken Burger",
        price: "150",
        rating: 4,
        resturant_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Soup",
        price: "1000",
        rating: 3,
        resturant_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fried rice",
        price: "900",
        rating: 5,
        resturant_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pizza",
        price: "800",
        rating: 4,
        resturant_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Idly",
        price: "1000",
        rating: 1,
        resturant_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dosa",
        price: "900",
        rating: 5,
        resturant_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vada",
        price: "800",
        rating: 3,
        resturant_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Caviar",
        price: "10000",
        rating: 3,
        resturant_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lobster",
        price: "9000",
        rating: 2,
        resturant_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Barnacle",
        price: "8000",
        rating: 4,
        resturant_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Menus", null, {});
  },
};
