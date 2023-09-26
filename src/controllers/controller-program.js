// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
require('dotenv').config();

// import Sequelize from 'sequelize';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    "dialectOptions": {
        "ssl": {
            "require": true,
            "rejectUnauthorized": (process.env.ENVIRONMENT != 'local')
        }
    }
});

// import initModels from './models/init-models';
var initModels = require('../models/init-models');
var models = initModels(sequelize);

const trimProgram = program => {
    // const { transportation_program_id, program, organization, street_address, street_address_second, city, state, zip, phone, website } = program;
    return { transportation_program_id, program, organization, street_address, street_address_second, city, state, zip, phone, website, service_area_description } = program;
};

const list = async (request, response) => {
    try {
        let programs = await models.transportation_programs.findAll({ where: { is_active: 1, state: 'ME' } });

        // const programs = profiles.map(trimProgram);
        response.header("Access-Control-Allow-Origin", "*").status(200).send(programs);
    } catch (err) {
        return response.header("Access-Control-Allow-Origin", "*").status(500).send({ error: `program fetch failed! ${err}` });
    }
};

const get = async (request) => {
    const { id } = request.params;
    // https://blog.logrocket.com/understanding-api-key-authentication-node-js/
    try {
        const profile = await prisma.profile.findUnique({
            where: { id: Number(id) },
        });
        return profile;
    } catch (err) {
        throw boom.boomify(err);
    }
};

const add = async (request) => {
    try {
        const { name, email } = request.body;
        console.log('request.body', request.body);
        console.log('name', name);
        // return true;

        const result = await prisma.profile.create({
            data: {
                name,
                email
            }
        });
        return result;
    } catch (err) {
        throw boom.boomify(err);
    }
};

const update = async (request) => {
    const { name } = request.body;
    try {
        const result = await prisma.profile.create({
            data: {
                name
            },
        });
        return result;
    } catch (err) {
        throw boom.boomify(err);
    }
};

const remove = async (request) => {
    const { id } = request.params;
    try {
        const profile = await prisma.profile.delete({
            where: {
                id: Number(id),
            },
        });
        return profile;
    } catch (err) {
        throw boom.boomify(err);
    }
};

// export default { list, get, add, update, remove };
module.exports = { list, get, add, update, remove };