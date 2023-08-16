import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const list = async () => {
    try {
        const profiles = await prisma.profile.findMany();
        return profiles;
    } catch (err) {
        throw boom.boomify(err);
    }
};

const get = async (request) => {
    const { id } = request.params;
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

export default { list, get, add, update, remove };