const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const dataProfiles = [
    {
        name: 'AH Admin',
        email: 'dragos@webfixstudio.com',
        password: 'felimit73'
    },
];

async function seed() {
    console.log(`Start seeding ...`);
    for (const dataProfile of dataProfiles) {
        const profile = await prisma.profile.create({
            data: dataProfile,
        });
        console.log(`Created profile with id: ${profile.id}`);
    }
    console.log(`Seeding finished.`);
}

seed().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});