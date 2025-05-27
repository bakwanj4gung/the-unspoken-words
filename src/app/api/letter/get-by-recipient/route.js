import { getLetterByRecipient } from "@/actions/letter/getLetterByRecipient";
import colors from "@/lib/colors";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();
    const page = parseInt(body.page) || 1;
    const limit = parseInt(body.limit) || 10;
    const username = body.q || null;

    let letters;
    console.log(username);

    letters = await getLetterByRecipient(page, limit, username);

    const lettersWithClass = letters.map((letter) => {
        const color = colors.find((c) => c.id === letter.moodId);

        return {
            ...letter,
            addClass: color ? color.classEffect : colors[9].classEffect,
        };
    });

    return NextResponse.json(lettersWithClass);
}
