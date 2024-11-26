"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { obterUsuario } from "@/app/services/api";

const PerfilUsuario = () => {
    const [usuario, setUsuario] = useState<any>(null);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token_acessofacil");
        if (token) {
            obterUsuario(token)
                .then((dados) => setUsuario(dados))
                .catch((err) => setErro(err.message));
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

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex gap-6">
                {/* Card do Usuário */}
                <div className="p-4 border rounded-lg shadow">
                    <div className="flex flex-col items-center">
                        <Image
                            src={usuario.imagem || "/default-profile.png"}
                            alt="Foto do Usuário"
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                        <h2 className="text-xl font-bold mt-2">{usuario.nome}</h2>
                        <p className="text-gray-500">{usuario.tipo}</p>
                    </div>
                </div>

                {/* Informações Detalhadas */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">Sobre {usuario.nome}</h2>
                    <ul className="space-y-2">
                        <li>📆 Nasci na década de {usuario.decada}</li>
                        <li>💻 Meu trabalho: {usuario.trabalho}</li>
                        <li>🎵 Curiosidade: {usuario.curiosidade}</li>
                        <li>📍 Moro em: {usuario.localizacao}</li>
                        <li>📖 Onde estudei: {usuario.educacao}</li>
                    </ul>
                </div>
            </div>

            {/* Avaliações */}
            <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">O que os anfitriões dizem sobre {usuario.nome}</h3>
                {usuario.avaliacoes && usuario.avaliacoes.length > 0 ? (
                    usuario.avaliacoes.map((avaliacao: any, index: number) => (
                        <div key={index} className="p-4 border rounded-lg shadow mb-4">
                            <p>{avaliacao.comentario}</p>
                            <p className="text-gray-500 mt-2">- {avaliacao.anfitriao}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">Nenhuma avaliação disponível.</p>
                )}
            </div>
        </div>
    );
};

export default PerfilUsuario;
