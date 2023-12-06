const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('clients', {
    client_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    domain: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    current_month: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    current_visits: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ytd_visits: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ris_username: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'clients',
    schema: 'public',
    timestamps: false
  });
};
