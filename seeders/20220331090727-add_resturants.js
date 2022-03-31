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

    await queryInterface.bulkInsert("Resturants", [
      {
        fullName: "Restaurant A",
        costForTwo: 200,
        Location: "Bangalore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fullName: "Restaurant B",
        costForTwo: 2000,
        Location: "Bangalore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fullName: "Restaurant C",
        costForTwo: 1500,
        Location: "Bangalore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fullName: "Restaurant D",
        costForTwo: 15000,
        Location: "Bangalore",
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

    await queryInterface.bulkDelete("Resturants", null, {});
  },
};
