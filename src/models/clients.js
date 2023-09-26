const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clients', {
    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clients',
    schema: 'public',
    timestamps: false
  });
};
