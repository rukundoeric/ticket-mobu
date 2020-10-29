'use strict';
module.exports = (sequelize, DataTypes) => {
  const agency = sequelize.define('agency', {
    agency_id:DataTypes.STRING,
    agencyName: DataTypes.STRING,
    agencyLogo: DataTypes.STRING,
    agencyEmail: DataTypes.STRING,
    agencyPhone: DataTypes.STRING,
    agencyWebsite: DataTypes.STRING
  }, {});
  agency.associate = function(models) {
    // associations can be defined here
  };
  return agency;
};