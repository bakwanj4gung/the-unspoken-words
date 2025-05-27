import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function searchLayout({ children }) {
    return (
        <div className="">
            <div className="w-full bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                <Navbar />
            </div>
            <div className="bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                <div className="py-4">
                    <div className="min-h-svh">
                        <p className="text-xl p-8 text-center">
                            Someone might have written to you, try typing your
                            name in the search!
                        </p>
                        {children}
                    </div>
                </div>
            </div>
            <div className="w-full bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                <Footer />
            </div>
        </div>
    );
}
