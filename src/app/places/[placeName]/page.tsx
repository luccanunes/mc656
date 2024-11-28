import Image from "next/image"; // Assuming you use Next.js Image optimization
import { cn } from "@/app/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { InfiniteMovingCards } from "@/components/ui/moving-cards";
import { description, features, host, placesData, reviews } from "@/constants";

export const generateStaticParams = async () => {
    const allPlaces = [
        { nome: "Parque Ibirapuera", url: "parque-ibirapuera" },
        { nome: "Praia de Copacabana", url: "praia-de-copacabana" },
    ];
    return allPlaces.map(place => ({
        placeName: place.url,
    }));
};

interface PageProps {
    params: {
        placeName: string;
    };
}

const PlaceDetails = ({ params }: PageProps) => {
    const toTitleCase = (str: string) => {
        return str
            .toLowerCase()
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    const { placeName } = params;

    const formattedName = toTitleCase(placeName.replace(/-/g, " "));

    const placeDetails = placesData[placeName] || {
        cidade: "Desconhecido",
        items: [],
    };

    return (
        <main className="overflow-hidden ">
            <div className="mt-[120px] max-w-5xl mx-auto">
                {/* Titulo */}
                <h1 className="text-[50px] font-extrabold">{formattedName}</h1>
                <h1 className="text-[27px] text-black-100 font-light mb-10">
                    {placeDetails.cidade}
                </h1>

                {/* Imagens */}
                <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
                    {placeDetails.items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            className={item.className}
                            backgroundImage={item.backgroundImage}
                        />
                    ))}
                </BentoGrid>
                <div className="p-6 border-b border-gray-300 mt-10">
                    {/* Informações do Cadastrante */}
                    <div className="flex items-center space-x-4 mb-6 p-6 border-b border-gray-300">
                        <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full relative">
                            <Image
                                src={host.image}
                                alt={`Foto de ${host.name}`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold">
                                Cadastrado por: {host.name}
                            </h2>
                            <p className="text-sm text-gray-500">
                                {host.role} · {host.experience}
                            </p>
                        </div>
                    </div>

                    {/* Acessibilidades */}
                    <div className="space-y-4 mb-6 p-6 border-b border-gray-300">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-4"
                            >
                                <svg
                                    xmlns={feature.icon.xmlns}
                                    fill={feature.icon.fill}
                                    viewBox={feature.icon.viewBox}
                                    strokeWidth={feature.icon.strokeWidth}
                                    stroke={feature.icon.stroke}
                                    className={feature.icon.className}
                                >
                                    <path
                                        strokeLinecap={
                                            feature.icon.strokeLinecap as
                                                | "round"
                                                | "butt"
                                                | "square"
                                                | "inherit"
                                        }
                                        strokeLinejoin={
                                            feature.icon.strokeLinejoin as
                                                | "round"
                                                | "miter"
                                                | "bevel"
                                                | "inherit"
                                        }
                                        d={feature.icon.d}
                                    />
                                </svg>
                                <div>
                                    <h3 className="text-base font-bold">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Descrição */}
                    <div>
                        <p className="text-sm text-gray-700">
                            {description.string}
                        </p>
                    </div>
                </div>

                {/* Avaliacoes */}
                <div className="home__text-container mt-[98px]">
                    <h1 className="text-[27px] text-black-100 font-light mb-10">
                        Avaliações
                    </h1>
                </div>
                <div className="mt-10 mb-10 mx:auto w-full">
                    <InfiniteMovingCards items={reviews}></InfiniteMovingCards>
                </div>
            </div>
        </main>
    );
};

export default PlaceDetails;
