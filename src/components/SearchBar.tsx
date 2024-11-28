"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Searchcity from "./SearchCity";
import { PlaceProps } from "@/types";

interface SearchBarProps {
    places: PlaceProps[]; // Recebe os lugares para filtrar
    setFilteredPlaces: (places: PlaceProps[]) => void; // Atualiza o array filtrado
}

const SearchBar = ({ places, setFilteredPlaces }: SearchBarProps) => {
    const [city, setCity] = useState("");
    const [local, setLocal] = useState("");

    const handleSearch = () => {
        // Aplica o filtro no array de lugares
        const filteredPlaces = places.filter(
            (place) =>
                (city && place.cidade?.toLowerCase() === city.toLowerCase()) || // Filtra por cidade
                (local && place.nome.toLowerCase().includes(local.toLowerCase())) // Filtra por nome
        );

        setFilteredPlaces(filteredPlaces);
    };

    return (
        <form
            className="searchbar"
            onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
            }}
        >
            <div className="searchbar__item">
                <Searchcity city={city} setcity={setCity} />
                <SearchButton handleSearch={handleSearch} otherClasses="sm:hidden" />
            </div>
            <div className="searchbar__item">
                <Image
                    src="/Icon-place.png"
                    width={25}
                    height={25}
                    className="absolute w-[20px] h-[20px] ml-4"
                    alt="mundo"
                />
                <input
                    type="text"
                    name="local"
                    value={local}
                    onChange={(e) => setLocal(e.target.value)}
                    placeholder="Parque Ibirapuera..."
                    className="searchbar__input"
                />
                <SearchButton handleSearch={handleSearch} otherClasses="sm:hidden" />
            </div>
            <SearchButton handleSearch={handleSearch} otherClasses="max-sm:hidden" />
        </form>
    );
};

const SearchButton = ({
    handleSearch,
    otherClasses,
}: {
    handleSearch: () => void;
    otherClasses: string;
}) => (
    <button
        type="button"
        onClick={handleSearch}
        className={`-ml-3 z-5 ${otherClasses}`}
    >
        <Image
            src={"/magnifying-glass.svg"}
            alt={"magnifying glass"}
            width={40}
            height={40}
            className="object-contain"
        />
    </button>
);

export default SearchBar;
