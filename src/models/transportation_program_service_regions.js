const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transportation_program_service_regions', {
    TransportationProgramId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ServiceRegionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'transportation_program_service_regions',
    schema: 'public',
    timestamps: false
  });
};
