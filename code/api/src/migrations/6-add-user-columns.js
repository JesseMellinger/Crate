module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'users',
        'bio',
        {
          type: Sequelize.TEXT
        }
      ),
      queryInterface.addColumn(
        'users',
        'shippingAddress',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'users',
        'profileUri',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'users',
        'availableDate',
        {
          type: Sequelize.STRING
        }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'bio'),
      queryInterface.removeColumn('users', 'shippingAddress'),
      queryInterface.removeColumn('users', 'profileUri'),
      queryInterface.removeColumn('users', 'availableDate'),
    ]);
  }
}
