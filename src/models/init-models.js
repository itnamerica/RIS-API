let DataTypes = require("sequelize").DataTypes;
let _transportation_programs = require("./transportation_programs");
let _clients = require("./clients");
// let _service_regions = require("./service_regions");
// let _transportation_program_service_regions = require("./transportation_program_service_regions");


function initModels(sequelize) {
  let clients = _clients(sequelize, DataTypes);

  let transportation_programs = _transportation_programs(sequelize, DataTypes);
  // let service_regions = _service_regions(sequelize, DataTypes);
  // let transportation_program_service_regions = _transportation_program_service_regions(sequelize, DataTypes);

  return {
    clients,
    transportation_programs,
  };
}
module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;
