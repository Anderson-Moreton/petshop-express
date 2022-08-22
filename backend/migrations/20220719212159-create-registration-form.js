'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('registrationForms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.INTEGER
      },
      cellphone: {
        type: Sequelize.INTEGER
      },
      password: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.INTEGER
      },
      addressNumber: {
        type: Sequelize.INTEGER
      },
      addressComplement: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('registrationForms');
  }
};