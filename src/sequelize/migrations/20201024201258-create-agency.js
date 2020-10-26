'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('agencies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      agencyName: {
        type: Sequelize.STRING
      },
      agencyLogo: {
        type: Sequelize.STRING
      },
      agencyEmail: {
        type: Sequelize.STRING
      },
      agencyPhone: {
        type: Sequelize.STRING
      },
      agencyWebsite: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('agencies');
  }
};