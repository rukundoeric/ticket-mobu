"use strict";
module.exports = (sequelize, DataTypes) => {
  const journey = sequelize.define(
    "journey",
    {
      origin: DataTypes.STRING,
      destination: DataTypes.STRING,
      price: DataTypes.FLOAT,
      available_sits: DataTypes.INTEGER,
      status: DataTypes.STRING,
      done_by: DataTypes.STRING,
      agency_id: DataTypes.STRING,
    },
    {}
  );
  journey.associate = function (models) {
    // // associations can be defined here
    journey.belongsTo(models.agency, {
      foreignKey: "agency_id",
      target_key: "agency_id", 
      onDelete: 'CASCADE',
      hooks: true,
    });
    journey.belongsTo(models.users, {
      foreignKey: "done_by",
      target_key: "userId", 
      onDelete: 'CASCADE',
      hooks: true,
    });
  };
  return journey;
};
