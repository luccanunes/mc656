"use client";

import Image from "next/image";
import { CustomButton } from ".";
import heroImage from "@/public/image-from-rawpixel-id-15871163-png.png";

const Hero = () => {
    const handleScroll = () => {
        const targetSection = document.getElementById("bottom-section"); // Substitua com o ID do elemento da seção alvo
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Descubra Lugares de{" "}
                    <span className="text-blue-500">Lazer Inclusivos — </span>{" "}
                    de forma fácil e confiável!
                </h1>

                <p className="hero__subtitle">
                    Tenha informações de confiança sobre a acessibilidade de
                    locais de Lazer.
                </p>
                <CustomButton
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    title="Explorar Lugares"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container mt-10">
                <div className="hero__image">
                    <Image
                        src="/image-from-rawpixel-id-15871163-png.png"
                        alt="hero"
                        fill
                        className="object-contain"
                    ></Image>
                </div>
                <div className="hero__image-overlay"></div>
            </div>
        </div>
    );
};

export default Hero;
