require("dotenv").config();
const { PrismaClient } = require("../src/generated/prisma");
const { default: colors } = require("../src/lib/colors");

const prisma = new PrismaClient();

async function main() {
    await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 0`;
    await prisma.$executeRaw`TRUNCATE TABLE mood`;
    // await prisma.$executeRaw`TRUNCATE TABLE temporaryuser`;
    await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 1`;

    // await prisma.temporaryUser.create({
    //     data: {
    //         username: "unknown",
    //     },
    // });

    for (const item of colors) {
        const moods = item.moods.join(", ");
        await prisma.mood.create({
            data: {
                color: item.name,
                mood: moods,
            },
        });
    }
    console.log("Seeding complete!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
