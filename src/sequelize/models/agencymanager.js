'use strict';
module.exports = (sequelize, DataTypes) => {
  const AgencyManager = sequelize.define('AgencyManager', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    agency_id: DataTypes.STRING,
    role: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  AgencyManager.associate = function(models) {
    // associations can be defined here
  };
  return AgencyManager;
};