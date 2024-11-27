"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { getUserId, obterUsuario } from "@/app/services/api";
import jwtDecode, { JwtPayload } from "jwt-decode";

const Navbar = () => {
    const handleLogout = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("token_acessofacil");
            console.log("Token removido com sucesso");
            window.location.href = "/";
        }
    };

    const [usuario, setUsuario] = useState<any>(null);
    const [erro, setErro] = useState<string | null>(null);
    useEffect(() => {
        const token = localStorage.getItem("token_acessofacil");
        if (token) {
            const userId = getUserId();
            console.log(userId)
            if (userId) {
                obterUsuario(userId, token)
                    .then((dados: any) => setUsuario(dados))
                    .catch((err: { message: React.SetStateAction<string | null>; }) => setErro(err.message));
            } else {
                setErro("Falha ao decodificar o token. Faça login novamente.");
            }
        } else {
            setErro("Token não encontrado. Faça login novamente.");
        }
    }, []);

    return (
        <header className="w-full absolute z-10 ">
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
                    {/* Botão Perfil */}
                    {usuario?.imagem ? (
                        <Link href="/perfil">
                            <CustomButton
                                title=""
                                btnType="button"
                                containerStyles="text-black rounded-full bg-white min-w-[60px] border"
                                rightIcon={usuario.imagem}
                            />
                        </Link>
                    ) : (
                        <Link href="/perfil">
                            <CustomButton
                                title=""
                                btnType="button"
                                containerStyles="text-black rounded-full bg-white min-w-[60px] border"
                                rightIcon="/profile-icon.svg"
                            />
                        </Link>
                    )}

                    {/* Botão Sair */}
                    <CustomButton
                        title="Sair"
                        btnType="button"
                        containerStyles="text-white rounded-full bg-red-500 min-w-[80px] "
                        handleClick={handleLogout}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
