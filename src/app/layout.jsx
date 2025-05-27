import { comfortaa } from "@/lib/fonts";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

export const metadata = {
    title: "the unspoken words",
    description: "write your letter, let your words work",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
                    crossOrigin="anonymous"
                />
            </head>
            <body className={`${comfortaa.className} antiliased`}>
                {children}
                <CookieBanner />
            </body>
        </html>
    );
}
