import { createLetter } from "@/actions/letter/create";
import { NextResponse } from "next/server";

export async function POST(req) {
    const formData = await req.json();

    const result = await createLetter(formData);

    return NextResponse.json(
        {
            message: result.message,
            ...(result.data && { data: result.data }),
        },
        { status: result.status }
    );
}
