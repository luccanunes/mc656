"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/app/lib/utils";
import { IconX } from "@tabler/icons-react";
import { registrarLocal } from "@/app/services/api";

export function CadastroLocal({ onClose }: { onClose: () => void }) {
    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [descricao, setDescricao] = useState("");
    const [cidade, setcidade] = useState("");
    const [tiposDeAcessibilidade, setTiposDeAcessibilidade] = useState<
        string[]
    >([]);
    const [recursosSelecionados, setRecursosSelecionados] = useState<string[]>(
        []
    );
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const acessibilidadeOptions = ["Motora", "Visual", "Auditiva"];
    const recursosOptions = [
        "Rampas de acesso",
        "Elevador",
        "Banheiro adaptado",
        "Piso tátil",
        "Sinalização em braile",
        "Guias sonoras",
        "Sinalização visual",
        "Interpretação em Libras",
        "Alarme visual",
    ];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const token = localStorage.getItem("token_acessofacil");
        if (!token) {
            setError("Você precisa estar logado para registrar um local.");
            return;
        }

        try {
            // O `tiposDeAcessibilidade` e `recursosSelecionados` já são arrays de strings,
            // então podemos enviá-los diretamente.
            await registrarLocal(
                nome,
                endereco,
                cidade,
                descricao,
                token,
                undefined, // Adicione suporte para imagem futuramente, se necessário
                tiposDeAcessibilidade, // Aqui passamos o array diretamente
                recursosSelecionados // Aqui passamos o array diretamente
            );

            setSuccess("Local cadastrado com sucesso!");
            setTimeout(() => {
                onClose();
                window.location.reload();
            }, 800);
        } catch (err) {
            console.error("Erro ao cadastrar local:", err);
            setError("Erro ao cadastrar local. Tente novamente.");
        }
    };

    const handleCheckboxChange = (
        item: string,
        setFunction: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        setFunction(prev =>
            prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
        );
    };

    return (
        <div className="relative max-w-[1000px] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            {/* Botão de Fechar */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700"
            >
                <IconX className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </button>

            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Cadastre um Local
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Preencha as informações abaixo para cadastrar um novo local.
            </p>

            {error && (
                <div className="bg-red-100 text-red-700 p-2 rounded-md mt-4">
                    {error}
                </div>
            )}

            {success && (
                <div className="bg-green-100 text-green-700 p-2 rounded-md mt-4">
                    {success}
                </div>
            )}

            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="nome">Nome do Local</Label>
                    <Input
                        id="nome"
                        placeholder="Parque Ibirapuera"
                        type="text"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="Cidade">cidade</Label>
                    <Input
                        id="cidade"
                        placeholder="São Paulo"
                        type="text"
                        value={cidade}
                        onChange={e => setcidade(e.target.value)}
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="endereco">Endereço</Label>
                    <Input
                        id="endereco"
                        placeholder="Av. Pedro Álvares Cabral, 1000"
                        type="text"
                        value={endereco}
                        onChange={e => setEndereco(e.target.value)}
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                    <Label htmlFor="descricao">Descrição</Label>
                    <textarea
                        id="descricao"
                        placeholder="Descreva o local aqui..."
                        className="border p-2 rounded-md w-full"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />
                </LabelInputContainer>

                <div className="mt-4">
                    <Label>Tipos de Acessibilidade</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {acessibilidadeOptions.map(acessibilidade => (
                            <label
                                key={acessibilidade}
                                className="flex items-center space-x-2 border rounded-md p-2"
                            >
                                <input
                                    type="checkbox"
                                    value={acessibilidade}
                                    checked={tiposDeAcessibilidade.includes(
                                        acessibilidade
                                    )}
                                    onChange={() =>
                                        handleCheckboxChange(
                                            acessibilidade,
                                            setTiposDeAcessibilidade
                                        )
                                    }
                                />
                                <span>{acessibilidade}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="mt-4">
                    <Label>Recursos Disponíveis</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {recursosOptions.map(recurso => (
                            <label
                                key={recurso}
                                className="flex items-center space-x-2 border rounded-md p-2"
                            >
                                <input
                                    type="checkbox"
                                    value={recurso}
                                    checked={recursosSelecionados.includes(
                                        recurso
                                    )}
                                    onChange={() =>
                                        handleCheckboxChange(
                                            recurso,
                                            setRecursosSelecionados
                                        )
                                    }
                                />
                                <span>{recurso}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] mt-6"
                    type="submit"
                >
                    Cadastrar Local &rarr;
                </button>
            </form>
        </div>
    );
}

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
