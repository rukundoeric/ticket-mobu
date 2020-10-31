'use strict';
module.exports = (sequelize, DataTypes) => {
  const agency_users = sequelize.define('agency_users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    agency_id: DataTypes.STRING,
    role: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  agency_users.associate = function(models) {
    // associations can be defined here
  };
  return agency_users;
};