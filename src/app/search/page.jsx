"use client";

import { gaegu } from "@/lib/fonts";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function page() {
    const [letters, setLetters] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState(false);
    const [resetting, setResetting] = useState(false);

    const loaderRef = useRef(null);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    useEffect(() => {
        const fetchLetters = async () => {
            if (!hasMore || loading || resetting) return;

            setLoading(true);
            try {
                const urlParams = new URLSearchParams(window.location.search);
                const q = urlParams.get("q");

                let res;
                if (q) {
                    res = await fetch("/api/letter/get-by-recipient", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            q,
                            page,
                            limit: 10,
                        }),
                    });
                } else {
                    res = await fetch(
                        `/api/letter/get-all?page=${page}&limit=10`
                    );
                }

                const newLetters = await res.json();

                if (newLetters.length === 0) {
                    setHasMore(false);
                } else {
                    if (page === 1) {
                        setLetters(newLetters); // replace saat reset
                    } else {
                        setLetters((prev) => [...prev, ...newLetters]);
                    }
                    setPage((prev) => prev + 1);
                }
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchLetters();
    }, [page]); // HANYA page yang trigger fetch

    // Reset saat query berubah
    useEffect(() => {
        setResetting(true);
        setLetters([]);
        setPage(1);
        setHasMore(true);

        const timeout = setTimeout(() => {
            setResetting(false);
        }, 100);

        return () => clearTimeout(timeout);
    }, [searchParams.get("q")]);

    // Observer logic untuk trigger page++
    useEffect(() => {
        if (resetting) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading && hasMore) {
                    setPage((prev) => prev + 1);
                }
            },
            { threshold: 1.0 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [loaderRef.current, loading, hasMore, resetting]);

    const handleSearch = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const q = formData.get("search");
        const params = new URLSearchParams(searchParams);

        if (q) {
            params.set("q", q);
        } else {
            params.delete("q");
        }
        setLetters([]);
        setPage(1);
        setHasMore(true);
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <>
            <form
                onSubmit={handleSearch}
                className="flex gap-4 w-full md:px-32 lg:px-64">
                <input
                    autoComplete="off"
                    defaultValue={searchParams.get("q")?.toString()}
                    type="text"
                    name="search"
                    className="min-w-0 flex-1 border px-4 py-2 sm:text-lg rounded-lg outline-none"
                />
                <button
                    type="submit"
                    className="bg-slate-800 px-4 py-2 rounded-lg text-white cursor-pointer transition-all hover:opacity-85">
                    Search
                </button>
            </form>
            <div
                className={`${gaegu.className} grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-8`}>
                {/* LOOPING */}
                {letters.map((letter) => (
                    <CardMessage data={letter} />
                ))}
            </div>
            {error && <Error />}
            {!error && (
                <Message loadRef={loaderRef} loading={loading} more={hasMore} />
            )}
        </>
    );
}

const CardMessage = ({ data }) => {
    if (!data) return;
    return (
        <Link
            key={data.id}
            s
            href={`/message/${data.id}`}
            target="_blank"
            className={`border ${data.addClass} flex flex-col items-center gap-4 p-4 w-full rounded-lg h-[150px] overflow-hidden transition-all duration-300 ease-in-out cursor-pointer hover:shadow-xl`}>
            <p className="w-full truncate font-bold text-2xl">
                to: {data.recipient}
            </p>
            <p className="w-full line-clamp-3 text-base">{data.message}</p>
        </Link>
    );
};

const Error = () => {
    return (
        <div className="mx-auto w-fit mt-8 text-center">
            <p>Something just happened, we're going to fix it.</p>
            <p>😅😅</p>
        </div>
    );
};

const Message = ({ loadRef, loading, more }) => {
    return (
        <div ref={loadRef} className="p-4 text-center">
            {loading && <p>Loading...</p>}
            {!more && <p>No more letters.</p>}
        </div>
    );
};
