'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
    {
      full_name: 'sukma rangga',
      email: 'sukmarangga@gmail.com',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      full_name: 'naruto',
      email: 'naruto@gmail.com',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
