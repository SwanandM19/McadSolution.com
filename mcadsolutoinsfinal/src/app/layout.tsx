import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
    title: "MCAD Solution",
    description: "MCAD Solution - CAD Training & Engineering Solutions",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
                <Script
                    id="hs-script-loader"
                    src="https://js-na2.hs-scripts.com/8763234.js"
                    async
                    defer
                    strategy="afterInteractive"
                />
            </body>
        </html>
    );
}
