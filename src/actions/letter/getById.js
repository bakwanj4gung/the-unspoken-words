import prisma from "@/lib/prisma";

export const getLetterById = async (id) => {
    const letter = await prisma.letter.findUnique({
        where: {
            id,
        },
    });

    return letter;
};
