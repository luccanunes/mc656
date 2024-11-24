import { useState } from "react";
import Image from "next/image";
import { PlaceProps } from "@/types";
import CustomButton from "./CustomButton";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

interface PlaceCardProps {
    place: PlaceProps;
}

const PlaceCard = ({ place }: PlaceCardProps) => {
    const { acessibilidade, cidade, nota, nome, endereco } = place;
    return (
        <div className="place-card group">
            <div className="place-card__content">
                <h2 className="place-card__content-title">{nome}</h2>

            </div>
            <p className="flex mt-6 text-[32px] font-extrabold">
            <span className="self-start text-[14px] font-semibold">
            ★ 
                </span>
                  {nota}
                <span className="self-end text-[14px] font-semibold">
                    /5
                </span>
            </p>
            <div className="relative w-full h-40 my-3 object-contain">
                <DirectionAwareHover imageUrl={"/ibirapuera.jpg"} children={undefined}/>
            </div>
            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/accessibility_icon.png" alt="" width={30} height={30}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlaceCard;
