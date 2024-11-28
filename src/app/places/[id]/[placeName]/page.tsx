import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { InfiniteMovingCards } from "@/components/ui/moving-cards";
import {
    listarLocais,
    fetchLocal,
    getUserId,
    obterUsuario,
} from "@/app/services/api"; // Certifique-se de que este é o método correto
import { placesData } from "@/constants";
import { CadastroAvaliacao, CustomButton } from "@/components";

export const generateStaticParams = async () => {
    try {
        // Chama o backend para listar os locais
        const allPlaces = await listarLocais();

        // Mapeia os locais retornados para os parâmetros esperados

        return allPlaces.map((place: { nome: string; id: number }) => {
            return {
                id: place.id.toString(),
                placeName: place.nome.toLowerCase().replace(/\s+/g, "-"), // Gera a URL amigável
            };
        });
    } catch (error) {
        console.error("Erro ao gerar parâmetros estáticos:", error);
        return []; // Retorna um array vazio em caso de erro
    }
};

interface PageProps {
    params: {
        id: string;
        placeName: string;
    };
}

// Função para buscar dados no servidor
async function fetchPlaceDetails(placeName: string, id: number) {
    const place = await fetchLocal(id);

    const criador = place?.criadorId
        ? await obterUsuario(place.criadorId)
        : null;

    return { place, criador };
}

const PlaceDetails = async ({ params }: PageProps) => {
    const { id, placeName } = params;
    const numericId = parseInt(id, 10);

    const { place, criador } = await fetchPlaceDetails(placeName, numericId);

    const toTitleCase = (str: string) =>
        str
            .toLowerCase()
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

    const formattedName = toTitleCase(placeName.replace(/-/g, " "));

    if (!place) {
        return (
            <div className="text-red-500 text-center">
                Local não encontrado.
            </div>
        );
    }
    console.log(place);

    return (
        <main className="overflow-hidden">
            <div className="mt-[120px] max-w-5xl mx-auto">
                {/* Título */}
                <h1 className="text-[50px] font-extrabold">{formattedName}</h1>
                <h2 className="text-[27px] text-black-100 font-light mb-10">
                    {place?.cidade || "Desconhecido"}
                </h2>

                {/* Imagens */}
                <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
                    {placesData[placeName].items.map((item: any, i: number) => (
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
                            {criador?.imagem && (
                                <Image
                                    src={criador.imagem}
                                    alt={`Foto de ${
                                        criador.nome || "usuário desconhecido"
                                    }`}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            )}
                            <Image
                                src="/profile-icon.svg"
                                alt={`Foto de ${
                                    criador.nome || "usuário desconhecido"
                                }`}
                                fill
                                className="rounded-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold">
                                Cadastrado por:{" "}
                                {criador?.nome || "Desconhecido"}
                            </h2>
                            <p className="text-sm text-gray-500">
                                {criador?.deficiencias || "Desconhecido"}
                            </p>
                        </div>
                    </div>

                    {/* Recursos */}
                    <div className="space-y-4 mb-6 p-6 border-b border-gray-300">
                        <h3 className="text-lg font-bold mb-4">
                            Recursos Disponíveis
                        </h3>
                        {place.recursosDisponiveis ? (
                            place.recursosDisponiveis
                                .split(",")
                                .map((recurso: string, index: number) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4"
                                    >
                                        {/* Ícone do recurso */}
                                        <Image
                                            src="/accessibility_icon.png" // Substitua pelo caminho do ícone correspondente
                                            alt={recurso}
                                            width={24}
                                            height={24}
                                        />
                                        {/* Título e descrição */}
                                        <div>
                                            <h4 className="text-base font-bold">
                                                {recurso.trim()}
                                            </h4>
                                        </div>
                                    </div>
                                ))
                        ) : (
                            <p className="text-gray-500">
                                Nenhum recurso disponível para este local.
                            </p>
                        )}
                    </div>
                    {/* Descrição */}
                    <div>
                        <p className="text-sm text-gray-700">
                            {place?.descricao || "Sem descrição disponível."}
                        </p>
                    </div>
                </div>

                {/* Avaliações */}
                <div className="home__text-container mt-[98px]">
                    <h1 className="text-[27px] text-black-100 font-light mb-10">
                        Avaliações
                    </h1>
                </div>
                <div className="mt-10 mb-10 mx:auto w-full">
                    <h1 className="text-[27px] text-black-100 font-light mb-10">
                        Avaliações
                    </h1>
                    {place.avaliacoes && place.avaliacoes.length > 0 ? (
                        // Primeiro criamos o array formatado
                        (() => {
                            const reviewsArray = place.avaliacoes.map(
                                (avaliacao: any) => ({
                                    key: avaliacao.id, // Chave única para renderização
                                    quote: avaliacao.comentario,
                                    name: avaliacao.usuario.id, // Certifique-se que 'usuario.nome' existe no objeto
                                    title: `Nota: ${avaliacao.nota}`,
                                })
                            );

                            // Renderizamos o componente com o array formatado
                            return (
                                <InfiniteMovingCards
                                    speed="fast"
                                    items={reviewsArray}
                                />
                            );
                        })()
                    ) : (
                        <h2 className="text-[20px] text-black-100 font-bold mb-10">
                            Não há avaliações ainda!
                        </h2>
                    )}
                </div>

                <div className="mt-10 mb-10 mx:auto w-full">
                    <CadastroAvaliacao localId={numericId}></CadastroAvaliacao>
                </div>
            </div>
        </main>
    );
};

export default PlaceDetails;
