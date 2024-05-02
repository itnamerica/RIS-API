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

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: '/downloads/programs.csv',
    header: [
        { id: 'name', title: 'NAME' },
        { id: 'lang', title: 'LANGUAGE' }
    ]
});

// import initModels from './models/init-models';
var initModels = require('../models/init-models');
var models = initModels(sequelize);

const list = async (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    try {
        // let records = await models.transportation_programs.findAll({
        //     raw: true,
        //     // attributes: ['program', 'city', 'phone', 'website', 'payment_free', 'provider_type_nonprofit', 'vehicles_used_wheelchair'],
        //     where: filter,
        //     order: ['organization']
        // });

        // await csvWriter.writeRecords(records);

        const filePath = '/downloads/programs.csv'; // Specify the path to your file
        response.header('Content-Disposition', 'attachment; filename="programs.csv"');
        return response.sendFile(filePath);
    } catch (err) {
        return response.status(500).send({ error: `program fetch failed! ${err}` });
    }
};


module.exports = { list };