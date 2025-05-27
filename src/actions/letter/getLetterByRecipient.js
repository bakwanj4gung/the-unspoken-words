import prisma from "@/lib/prisma";

export const getLetterByRecipient = async (page, limit, username) => {
    if (!username || typeof username !== "string") {
        return [];
    }

    const skip = (page - 1) * limit;

    const partialName = username.trim();
    if (partialName.length === 0) {
        return [];
    }

    if (typeof page !== "number" || page < 0 || !Number.isInteger(page)) {
        page = 0;
    }

    try {
        const letters = await prisma.letter.findMany({
            where: {
                recipient: {
                    startsWith: username,
                },
            },
            skip,
            take: limit,
        });
        return letters;
    } catch (err) {
        console.error("Error fetching letters by recipient:", err);
        throw new Error("Failed to fetch recipient letters");
    }
};

// const letters = await prisma.$queryRaw`
//     SELECT *
//     FROM letter
//     WHERE recipient LIKE ${partialName + "%"}
//     ORDER BY createdAt DESC
//     LIMIT ${limit}
//     OFFSET ${page}`;
