"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Searchcity from "./SearchCity";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`-ml-3 z-5 ${otherClasses}`}>
        <Image
            src={"/magnifying-glass.svg"}
            alt={"magnifying glass"}
            width={40}
            height={40}
            className="object-contain"
        />
    </button>
);

const SearchBar = () => {
    const [city, setcity] = useState("");
    const [acessibilidade, setacessibilidade] = useState("");

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (city.trim() === "" && acessibilidade.trim() === "") {
            return alert("Please provide some input");
        }

        updateSearchParams(acessibilidade.toLowerCase(), city.toLowerCase());
    };

    const updateSearchParams = (acessibilidade: string, city: string) => {
        // Create a new URLSearchParams object using the current URL search parameters
        const searchParams = new URLSearchParams(window.location.search);

        // Update or delete the 'acessibilidade' search parameter based on the 'acessibilidade' value
        if (acessibilidade) {
            searchParams.set("acessibilidade", acessibilidade);
        } else {
            searchParams.delete("acessibilidade");
        }

        // Update or delete the 'city' search parameter based on the 'city' value
        if (city) {
            searchParams.set("city", city);
        } else {
            searchParams.delete("city");
        }

        // Generate the new pathname with the updated search parameters
        const newPathname = `${
            window.location.pathname
        }?${searchParams.toString()}`;

        router.push(newPathname);
    };

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <Searchcity city={city} setcity={setcity} />
                <SearchButton otherClasses="sm:hidden" />
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
                    name="acessibilidade"
                    value={acessibilidade}
                    onChange={e => setacessibilidade(e.target.value)}
                    placeholder="Parque Ibirapuera..."
                    className="searchbar__input"
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <SearchButton otherClasses="max-sm:hidden" />
        </form>
    );
};

export default SearchBar;
