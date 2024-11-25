"use client";
import Menu from "../components/ui/menu";
import Acesso from "../components/ui/acesso";
import Navbar from "../components/ui/navbar";
import HomeMain from "../components/home-main";
import { CustomFilter, Hero, PlaceCard, SearchBar } from "@/components";
import { acessibility, yearsOfProduction } from "@/constants";

export default function Home() {
    //Puxar do banco de dados os locais aqui
    const allPlaces: {
        nome: string;
        cidade: string;
        acessibilidade: string[];
        nota: number;
        endereco: string;
    }[] = [];

    // Adicionando dados ao array
    allPlaces.push({
        nome: "Parque Ibirapuera",
        cidade: "São Paulo",
        acessibilidade: ["Motora", "Visual", "Auditiva"],
        nota: 5,
        endereco: "Rua X",
    });

    // Adicionando mais locais
    allPlaces.push({
        nome: "Praia de Copacabana",
        cidade: "Rio de Janeiro",
        acessibilidade: ["Motora", "Auditiva", "Visual",],
        nota: 5,
        endereco: "Rua X",
    });
    const isDataEmpty =
        !Array.isArray(allPlaces) || allPlaces.length < 1 || !allPlaces;
    return (
        <main className="overflow-hidden">
            <Hero />
            <div className="mt-12 padding-x padding-y max-width " id="discover">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">
                        Catálogo de Locais
                    </h1>
                    <p>Explore locais que você possa gostar</p>
                </div>
                <div className="home__filters">
                    <SearchBar />
                </div>
                <div>
                    {!isDataEmpty ? (
                        <section>
                            <div className="home__places-wrapper">
                                {allPlaces?.map((place, index) => (
                                    <PlaceCard
                                        key={place.nome || index}
                                        place={place}
                                    />
                                ))}
                            </div>
                        </section>
                    ) : (
                        <div className="home__error-container">
                            <h2 className="text-black text-xl font-bold">
                                Opa! Não há dados aqui.
                            </h2>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
