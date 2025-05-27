import { getLetterById } from "@/actions/letter/getById";
import colors from "@/lib/colors";
import { gaegu } from "@/lib/fonts";
import React from "react";

export default async function page({ params }) {
    const { id } = await params;

    const letter = await getLetterById(id);

    if (!letter) {
        return <div>Letter not found.</div>;
    }

    const color = colors.find((c) => c.id === letter.moodId);
    const letterWithClass = {
        ...letter,
        addClass: color ? color.classEffect : colors[10].classEffect,
    };
    return (
        <div
            className={`${gaegu.className} ${letterWithClass.addClass} min-h-svh pt-12 xl:pt-24 pb-5 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64`}>
            <div className="">
                <p className="text-base md:text-lg">
                    {new Intl.DateTimeFormat("en-GB", {
                        weekday: "long",
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    }).format(new Date(letterWithClass.createdAt))}
                </p>
                <p className="text-4xl md:text-5xl mt-5 font-bold">
                    to: {letterWithClass.recipient}
                </p>
                <p className="mt-5 xl:mt-12 text-xl tracking-wide whitespace-pre-wrap">
                    {letterWithClass.message}
                </p>
            </div>
        </div>
    );
}
