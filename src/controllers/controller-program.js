// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
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

// import initModels from './models/init-models';
var initModels = require('../models/init-models');
var models = initModels(sequelize);

const trimRecord = program => {
    // const { transportation_program_id, program, organization, street_address, street_address_second, city, state, zip, phone, website } = program;
    // return { transportation_program_id, program, organization, street_address, street_address_second, city, state, zip, phone, website, service_area_description } = program;

    const { is_active, created_by, modified_by, private_notes, ...rest } = program;
    return rest;
};

const list = async (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    try {
        let filter = { is_active: 1 };
        let { zipcode, county, free, nonprofit, wheelchair, purpose, door_to_door, eligibility_seniors } = request.query;
        // console.log('request.params', request.query);

        if (!zipcode && !county) {
            return response.status(500).send({ error: `missing parameters` });
        }

        if (county) {
            filter['service_areas'] = {
                [Op.overlap]: [county]
            };
        }

        if (zipcode) {
            filter['service_area_zipcodes'] = {
                [Op.overlap]: [zipcode]
            };
        }

        // let optional = {};
        if (free) {
            filter['payment_free'] = 1;
        }

        if (nonprofit) {
            filter['provider_type_nonprofit'] = 1;
        }

        if (wheelchair) {
            filter['assistance_wheelchair'] = 1;
        }

        if (door_to_door) {
            filter['transportation_door_to_door'] = 1;
        }
        if (eligibility_seniors) {
            filter['eligibility_seniors'] = 1;
        }

        // console.log('optional', optional);

        // if (Object.keys(optional).length > 0) {
        //     filter[[Op.or]] = optional;
        // }

        console.log('filter', filter);

        //test
        // return response.status(200).send(request.query);

        let records = await models.transportation_programs.findAll({
            raw: true,
            // attributes: ['program', 'city', 'phone', 'website', 'payment_free', 'provider_type_nonprofit', 'vehicles_used_wheelchair'],
            where: filter,
            order: ['organization']
        });

        const programs = records.map(trimRecord);
        return response.status(200).send(programs);
    } catch (err) {
        return response.status(500).send({ error: `program fetch failed! ${err}` });
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