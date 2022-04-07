'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Books', [
     {
       title: 'The Hobbit',
       author: 'J.R.R. Tolkien',
       page_quantity: 310,
       created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
     },
     {
      title: 'Brave New World',
      author: 'Aldous Huxley',
      page_quantity: 311,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Ten Little Niggers',
      author: 'Agatha Cristie',
      page_quantity: 272,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
   ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Books', null, {});
  }
};
