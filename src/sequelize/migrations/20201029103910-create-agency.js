'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('agencies', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      agencyName: {
        type: Sequelize.STRING
      },
      agencyLogo: {
        type: Sequelize.STRING
      },
      agencyPhone: {
        type: Sequelize.STRING
      },
      agencyEmail: {
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