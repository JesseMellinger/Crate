'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CrateProducts', [
      {
        subscriptionCrateId: 1,
        productId: 1,
        returned: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subscriptionCrateId: 1,
        productId: 1,
        returned: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subscriptionCrateId: 1,
        productId: 3,
        returned: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subscriptionCrateId: 1,
        productId: 3,
        returned: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('crateProducts', null, {});
  }
}