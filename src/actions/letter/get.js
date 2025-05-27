import prisma from "@/lib/prisma";

export const getLetters = async (page = 1, limit = 10) => {
    const skip = (page - 1) * limit;

    const letters = await prisma.letter.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
    });

    return letters;
};
