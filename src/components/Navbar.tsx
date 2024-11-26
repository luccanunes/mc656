"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { Login } from "./Login";
import { Cadastro } from "./Cadastro";

const Navbar = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showCadastroModal, setShowCadastroModal] = useState(false);

    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                {/* Logo */}
                <Link href="/" className="flex justify-center items-center">
                    <Image
                        src="/Logo.png"
                        alt="AcessoFacil Logo"
                        width={90}
                        height={18}
                        className="object-contain"
                    />
                </Link>

                {/* Botões */}
                <div className="flex space-x-4">
                    {/* Botão Login */}
                    <CustomButton
                        title="Entrar"
                        btnType="button"
                        containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] border"
                        handleClick={() => setShowLoginModal(true)} // Exibe o modal de login
                    />
                    {/* Botão Cadastro */}
                    <CustomButton
                        title="Cadastre-se"
                        btnType="button"
                        containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] border"
                        handleClick={() => setShowCadastroModal(true)} // Exibe o modal de cadastro
                    />

                </div>
            </nav>

            {/* Modal de Login */}
            {showLoginModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                    <Login onClose={() => setShowLoginModal(false)} />
                </div>
            )}

            {/* Modal de Cadastro */}
            {showCadastroModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                    <Cadastro onClose={() => setShowCadastroModal(false)} />
                </div>
            )}
        </header>
    );
};

export default Navbar;
