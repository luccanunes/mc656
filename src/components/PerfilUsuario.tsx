"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getUserId, obterUsuario } from "@/app/services/api";
import PlaceCard from "./PlaceCard";
import { PlaceProps } from "@/types";
import { InfiniteMovingCards } from "./ui/moving-cards";
import { CustomButton } from ".";
import { CadastroLocal } from "./CadastroLocal";

const PerfilUsuario = () => {
    const [showCadastroLocalModal, setShowCadastroLocalModal] = useState(false);
    const [usuario, setUsuario] = useState<any>(null);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token_acessofacil");
        if (token) {
            const userId = getUserId();
            if (userId) {
                obterUsuario(userId, token)
                    .then((dados: any) => setUsuario(dados))
                    .catch(
                        (err: {
                            message: React.SetStateAction<string | null>;
                        }) => setErro(err.message)
                    );
            } else {
                setErro("Falha ao decodificar o token. Faça login novamente.");
            }
        } else {
            setErro("Token não encontrado. Faça login novamente.");
        }
    }, []);

    if (erro) {
        return <div>Erro: {erro}</div>;
    }

    if (!usuario) {
        return <div>Carregando...</div>;
    }
    const isDataEmpty =
        !Array.isArray(usuario.locais) ||
        usuario.locais.length < 1 ||
        !usuario.locais;
    return (
        <div className="max-w-6xl mx-auto p-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
                {/* Card do Usuário */}
                <div className="col-span-1 p-6 border rounded-3xl shadow-lg bg-white">
                    <div className="flex flex-col items-center">
                        <Image
                            src={usuario.imagem || "/profile-icon.svg"}
                            alt="Foto do Usuário"
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                        <h2 className="text-2xl font-bold mt-4">
                            {usuario.nome}
                        </h2>
                        <div className="flex space-x-8 mt-4">
                            <div className="flex flex-col items-center">
                                <h3 className="text-xl font-bold ">
                                    {usuario?.avaliacoes?.length ?? 0}
                                </h3>
                                <p className="text-gray-500">avaliações</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-xl font-bold">10</h3>
                                <p className="text-gray-500">
                                    anos no AcessoFácil
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Informações Confirmadas */}
                    <div className="mt-6 border-t pt-4">
                        <h3 className="text-lg font-bold">
                            Informações confirmadas de {usuario.nome}
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center space-x-2">
                                <span>✔️</span>
                                <p>Identidade</p>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span>✔️</span>
                                <p>Certificado de PcD</p>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span>✔️</span>
                                <p>Endereço de email</p>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span>✔️</span>
                                <p>Número de telefone</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Informações Detalhadas */}
                <div className="col-span-2">
                    <div className="p-6 border-b border-gray-300">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">
                                Sobre {usuario.nome}
                            </h2>
                        </div>
                        <ul className="grid grid-cols-2 gap-4">
                            <li>📆 Nasci na década de {usuario.decada}</li>
                            <li>💻 Meu trabalho: {usuario.trabalho}</li>
                            <li>🎵 Curiosidade: {usuario.curiosidade}</li>
                            <li>📍 Moro em: {usuario.localizacao}</li>
                            <li>📖 Onde estudei: {usuario.educacao}</li>
                            <li>⏳ Passo muito tempo: {usuario.hobby}</li>
                            <li>🌍 Idiomas: {usuario.idiomas}</li>
                        </ul>
                    </div>

                    {/* Locais Cadastrados */}
                    <div className="mt-7 p-6 border-b border-gray-300">
                        <h3 className="text-xl font-bold mb-4">
                            Lugares onde {usuario.nome} já esteve
                        </h3>
                        <div className="flex items-center mb-7">
                            {!isDataEmpty ? (
                                <section>
                                    <div className="home__places-wrapper">
                                        {usuario.locais?.map(
                                            (place: PlaceProps, index: any) => (
                                                <PlaceCard
                                                    key={place.nome || index}
                                                    place={place}
                                                />
                                            )
                                        )}
                                    </div>
                                </section>
                            ) : (
                                <div>
                                    <p className="text-gray-500">
                                        Nenhum local disponível.
                                    </p>
                                </div>
                            )}
                        </div>
                        <CustomButton
                            title="Cadastrar Local"
                            containerStyles="rounded-full border bg-white text-primary-blue min-w-[80px] h-[30px]"
                            handleClick={()=>setShowCadastroLocalModal(true)}
                        ></CustomButton>
                    </div>

                    {/* Avaliações */}
                    <div className="mt-10 p-6">
                        <h3 className="text-xl font-bold mb-4">
                            Avaliações de {usuario.nome}
                        </h3>
                        {usuario.avaliacoes && usuario.avaliacoes.length > 0 ? (
                            <div className="mt-10 mb-10 mx:auto w-full">
                                <InfiniteMovingCards
                                    items={usuario.avaliacoes}
                                    speed="slow"
                                ></InfiniteMovingCards>
                            </div>
                        ) : (
                            <p className="text-gray-500">
                                Nenhuma avaliação disponível.
                            </p>
                        )}
                    </div>
                </div>
            </div>
            {showCadastroLocalModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <CadastroLocal onClose={() => setShowCadastroLocalModal(false)} />
                </div>
            )}
        </div>
    );
};

export default PerfilUsuario;
