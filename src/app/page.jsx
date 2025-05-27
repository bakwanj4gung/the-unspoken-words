import CardInput from "@/components/CardInput";
import CardMessageSent from "@/components/CardMessageSent";
import Explanation from "@/components/Explanation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { cookies } from "next/headers";

export default async function Home() {
    const cookieStorage = await cookies();
    const username = cookieStorage.get("unspoken_words");
    return (
        <div>
            <div className="w-full bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                <Navbar />
            </div>
            <div className="bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                <div className="py-4">
                    <Hero />
                    <div id="write" className="pt-8">
                        <CardInput cookie={username ? username.value : null} />
                    </div>
                    <CardMessageSent
                        cookie={username ? username.value : "unknown"}
                    />
                    <Explanation />
                </div>
            </div>
            <div className="w-full bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                <Footer />
            </div>
        </div>
    );
}
