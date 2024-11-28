"use client";

import { useEffect, useState } from "react";
import { Hero, PlaceCard, SearchBar } from "@/components";
import { PlaceProps } from "@/types";
import { listarLocais } from "./services/api";

export default function Home() {
    const [places, setPlaces] = useState<PlaceProps[]>([]); // Todos os lugares
    const [filteredPlaces, setFilteredPlaces] = useState<PlaceProps[]>([]); // Lugares filtrados
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await listarLocais();
                setPlaces(response);
                setFilteredPlaces(response); // Inicializa com todos os lugares
            } catch (err) {
                setError("Erro ao carregar os locais.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchPlaces();
    }, []);

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
                    <SearchBar
                        places={places} // Passa todos os lugares
                        setFilteredPlaces={setFilteredPlaces} // Atualiza os filtrados
                    />
                </div>
                <div>
                    {error ? (
                        <div className="home__error-container">
                            <h2 className="text-black text-xl font-bold">
                                {error}
                            </h2>
                        </div>
                    ) : filteredPlaces.length > 0 ? (
                        <section>
                            <div className="home__places-wrapper">
                                {filteredPlaces.map((place, index) => (
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
