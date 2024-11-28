"use client";

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/app/lib/utils";
import { IconX } from "@tabler/icons-react";
import { adicionarAvaliacao, getUserId } from "@/app/services/api";

export function CadastroAvaliacao({localId}: {localId:number}) {
    const [nota, setNota] = useState<number>(0);
    const [comentario, setComentario] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const token = localStorage.getItem("token_acessofacil");
        if (!token) {
            setError("Você precisa estar logado para registrar uma avaliação.");
            return;
        }
        const usuarioId: string = (getUserId(token) || '').toString();
        const numericId = parseInt(usuarioId, 10);
        if (!nota || !comentario.trim()) {
            setError("Todos os campos são obrigatórios.");
            return;
        }

        try {
            await adicionarAvaliacao( nota, comentario, numericId, localId, token);
            setSuccess("Avaliação cadastrada com sucesso!");
            setTimeout(() => {
                
                window.location.reload();
            }, 800);
        } catch (err) {
            console.error("Erro ao cadastrar avaliação:", err);
            setError("Erro ao cadastrar avaliação. Tente novamente.");
        }
    };

    return (
        <div className="relative  w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            {/* Botão de Fechar */}
            

            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Cadastrar Avaliação
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Preencha as informações abaixo para avaliar o local.
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
                    <Label htmlFor="nota">Nota (1 a 5)</Label>
                    <Input
                        id="nota"
                        type="number"
                        min={1}
                        max={5}
                        value={nota}
                        onChange={(e) => setNota(Number(e.target.value))}
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="comentario">Comentário</Label>
                    <textarea
                        id="comentario"
                        placeholder="Escreva seu comentário sobre o local..."
                        className="border p-2 rounded-md w-full"
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                    />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] mt-6"
                    type="submit"
                >
                    Cadastrar Avaliação &rarr;
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
