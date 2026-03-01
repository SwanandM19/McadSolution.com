import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "MCAD Solution",
    description: "MCAD Solution - CAD Training & Engineering Solutions",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
