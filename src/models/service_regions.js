const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('service_regions', {
    ServiceRegionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RegionName: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    State: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    RegionType: {
      type: DataTypes.STRING(24),
      allowNull: false
    },
    CountyCode: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    ZipCodes: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'service_regions',
    schema: 'public',
    timestamps: false
  });
};
