import prisma from "@/lib/prisma";

const { NextResponse } = require("next/server");

/**
 * Creates a new letter and sends it to the recipient.
 *
 * @param {Object} formData
 * @param {string} formData.recipient - The recipient of the letter.
 * @param {string} formData.message - The content of the letter.
 * @param {number} formData.mood - The mood of the letter.
 * @param {string} [formData.username] - The username of the sender.
 *
 * @returns {Promise<Object>} - The created letter and status.
 * @throws {Error} - The error thrown if creating the letter fails.
 */

export const createLetter = async (formData) => {
    // console.log(formData);
    // return;

    if (!formData || Object.keys(formData).length == 0) {
        return NextResponse.json(
            {
                status: 400,
                message: "Field(s) cannot be empty.",
            },
            { status: 400 }
        );
    }

    try {
        let userId;
        if (formData.username) {
            const check = await prisma.temporaryUser.findUnique({
                where: {
                    username: formData.username,
                },
                select: {
                    id: true,
                },
            });
            if (check) {
                userId = check.id;
            } else {
                const create = await prisma.temporaryUser.create({
                    data: {
                        username: formData.username,
                    },
                });

                userId = create.id;
            }
        } else {
            userId = 1;
        }

        const create = await prisma.letter.create({
            data: {
                id: formData.id,
                recipient: formData.recipient,
                message: formData.message,
                moodId: formData.mood,
                temporaryUserId: userId,
            },
        });

        return {
            status: 200,
            message: "All set! Your letter's been sent.",
            data: create,
        };
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            message: "Pardon, something went wrong. Try again later. 🥲",
        };
    }
};
