import { generateLetterId } from "@/lib/idGenerator";
import { cookies } from "next/headers";

async function getCookie() {
    const cookieStore = cookies();
    const userId = cookieStore.get("unspoken_words");

    return userId ? userId.value : "unknown";
}

export async function GET(request) {
    const ip =
        request.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";

    try {
        const id = await generateLetterId(ip);
        return new Response(JSON.stringify(id), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error generating ID:", error.message);
        return new Response(
            JSON.stringify({ error: "Failed to generate ID" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
