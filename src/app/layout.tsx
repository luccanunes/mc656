"use client"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import NavbarLogged from "@/components/NavbarLogged";
import { useState, useEffect } from "react";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const aa = {
    title: "Acesso Fácil",
    description: "Descubra Lugares de Lazer Inclusivos",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        // Verifica se está no ambiente do navegador
        if (typeof window !== "undefined") {
            const savedData = localStorage.getItem("token_acessofacil");
            setData(savedData);
        }
    }, []);
    return (
        <html lang="en" >
            <body className="relative" suppressHydrationWarning>
                {data ? (
                    <NavbarLogged />
                ) : (
                    <Navbar />
                )}
                {children}
                <Footer />
            </body>
        </html>
    );
}
