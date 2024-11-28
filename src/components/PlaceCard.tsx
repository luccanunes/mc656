"use client";

import Image from "next/image";
import { PlaceProps } from "@/types";
import CustomButton from "./CustomButton";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { useRouter } from "next/navigation";
import { Key } from "react";

interface PlaceCardProps {
    place: PlaceProps;
}

const PlaceCard = ({ place }: PlaceCardProps) => {
    const { tiposDeAcessibilidade, cidade, nota, nome, endereco, id } = place;

    // Transforma a string de acessibilidade em um array de strings
    const acessibilidadeArray = tiposDeAcessibilidade ? tiposDeAcessibilidade.split(",") : [];
    const router = useRouter();
    const handleClick = () => {
        // Redireciona para a página com base no nome do local
        const formattedName = nome.replace(/\s+/g, "-").toLowerCase(); // Substitui espaços por hífens e deixa o nome em minúsculas
        router.push(`/places/${id}/${formattedName}`);
    };

    return (
        <div className="place-card group">
            <div className="place-card__content">
                <h2 className="place-card__content-title">{nome}</h2>
            </div>
            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] font-semibold">★</span>
                {nota}
                <span className="self-end text-[14px] font-semibold">/5</span>
            </p>
            <div className="relative w-full h-40 my-3 object-contain">
                <DirectionAwareHover
                    imageUrl={`/${nome}.jpg`}
                    children={undefined}
                />
            </div>
            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    {acessibilidadeArray.map((acess: string, index: Key | null | undefined) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center items-center gap-2 "
                        >
                            <Image
                                src={`/${acess.trim()}.jpg`}
                                alt={acess}
                                width={20}
                                height={20}
                                className="rounded-full"
                            />
                            <p className="text-[12px]">{acess.trim()}</p>
                        </div>
                    ))}
                </div>
                <div className="place-card__btn-container">
                    <CustomButton
                        title="Ver Mais"
                        containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={handleClick}
                    ></CustomButton>
                </div>
            </div>
        </div>
    );
};

export default PlaceCard;
