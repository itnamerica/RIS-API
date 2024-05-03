require('dotenv').config();

// import Sequelize from 'sequelize';
const { Sequelize, Op } = require('sequelize');
let options = {};
if (process.env.ENVIRONMENT == 'local') {
    options = {
        "dialectOptions": {
            // "ssl": {
            //     "require": false,
            //     "rejectUnauthorized": false
            // }
        }
    };
}
const sequelize = new Sequelize(process.env.DATABASE_URL, options);

var initModels = require('../models/init-models');
var models = initModels(sequelize);

const titleCase = (string) => {
    return string
        .replace(/_/g, ' ')// Replace underscores with spaces        
        .replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());// Convert to title case
};

const list = async (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    try {
        let records = await models.transportation_programs.findAll({
            raw: true,
            // attributes: ['program', 'city', 'phone', 'website', 'payment_free', 'provider_type_nonprofit', 'vehicles_used_wheelchair'],
            // where: filter,
            order: ['organization']
        });

        let names = Object.keys(records[0]);
        names = names.map(name => titleCase(name)).join('","');

        let header = `"${names}"`; //'"' + names.join('","') + '"';
        let values = records.map(record => {
            let row = Object.values(record).map(value => String(value).replace(/"/g, '""')).join('","');
            return `"${row}"`;
        });
        values = values.join('\n');
        let csv = `${header}\n${values}`;
        response.header('Content-Disposition', 'attachment; filename="programs.csv"');
        return response.status(200).send(csv);
        // console.log(csv);
    } catch (err) {
        console.log(err);
        return response.status(500).send({ error: `program fetch failed! ${err}` });
    }
};


module.exports = { list };