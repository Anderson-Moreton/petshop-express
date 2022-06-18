'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return [
      queryInterface.addColumn('Products', 'name', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      queryInterface.addColumn('Products', 'price', {
        type: Sequelize.FLOAT,
        allowNull: false,
      }),
      queryInterface.addColumn('Products', 'category', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Categories', key: 'id' }
      }),
    ]
  },

  async down(queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('Products', 'name'),
      queryInterface.removeColumn('Products', 'price'),
      queryInterface.removeColumn('Products', 'category'),
    ]
  }
};
