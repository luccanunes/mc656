"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/app/lib/utils";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandGoogle,
  IconX,
} from "@tabler/icons-react";
import { logarUsuario } from "@/app/services/api";

export function Login({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Reseta o erro ao enviar o formulário

    try {
      const token = await logarUsuario(email, senha); // Chama a função logarUsuario
      console.log("Login efetuado com sucesso! Token:", token);
      localStorage.setItem("token_acessofacil", token);
      window.location.href = "/";
      onClose();
    } catch (err) {
      console.error("Erro ao efetuar login:", err);
      setError("Credenciais inválidas. Tente novamente."); // Define a mensagem de erro
    }
  };

  return (
    <div className="z-50 relative max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      {/* Botão de Fechar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700"
      >
        <IconX className="h-5 w-5 text-gray-600 dark:text-gray-400" />
      </button>

      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Bem-vindo ao AcessoFácil!
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Entre e faça parte da nossa comunidade!
      </p>

      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded-md mt-4">
          {error}
        </div>
      )}

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="pablo.mendes@acessofacil.com"
            type="email"
            value={email} // Bind do estado do email
            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={senha} // Bind do estado da senha
            onChange={(e) => setSenha(e.target.value)} // Atualiza o estado
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Entrar &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

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
