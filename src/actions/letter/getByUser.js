import prisma from "@/lib/prisma";

export const getLetterByUser = async (username) => {
    const idUser = await prisma.temporaryUser.findUnique({
        where: {
            username,
        },
    });
    if (!idUser) return [];

    const letter = await prisma.letter.findMany({
        where: {
            temporaryUserId: idUser.id,
        },
        orderBy: { createdAt: "desc" },
    });

    return letter;
};
