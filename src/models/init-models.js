var DataTypes = require("sequelize").DataTypes;
var _clients = require("./clients");
var _service_regions = require("./service_regions");
var _transportation_program_service_regions = require("./transportation_program_service_regions");
var _transportation_programs = require("./transportation_programs");

function initModels(sequelize) {
  var clients = _clients(sequelize, DataTypes);
  var service_regions = _service_regions(sequelize, DataTypes);
  var transportation_program_service_regions = _transportation_program_service_regions(sequelize, DataTypes);
  var transportation_programs = _transportation_programs(sequelize, DataTypes);


  return {
    clients,
    service_regions,
    transportation_program_service_regions,
    transportation_programs,
  };
}
module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;
