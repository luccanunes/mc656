"use client";
import Menu from "../components/ui/menu";
import Acesso from "../components/ui/acesso";
import Navbar from "../components/ui/navbar";
import HomeMain from "../components/home-main";
import { Hero } from "@/components";

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Hero />
            <div className="mt-12 padding-x padding-y max-width " id="discover">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">
                        Catálogo de Locais
                    </h1>
                    <p>Explore</p>
                </div>
            </div>
        </main>
    );
}
