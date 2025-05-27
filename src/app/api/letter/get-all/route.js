import { getLetters } from "@/actions/letter/get";
import colors from "@/lib/colors";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;

    let letters;

    letters = await getLetters(page, limit);

    const lettersWithClass = letters.map((letter) => {
        const color = colors.find((c) => c.id === letter.moodId);

        return {
            ...letter,
            addClass: color ? color.classEffect : colors[10].classEffect,
        };
    });

    return NextResponse.json(lettersWithClass);
}
