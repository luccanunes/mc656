import { FilterProps } from "@/types";

const API_BASE_URL = "http://localhost:3001";

export async function criarUsuario(nome: string, email: string, senha: string, deficiencias: string) {
    const response = await fetch(`${API_BASE_URL}/usuarios`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, senha, createdAt: new Date() , deficiencias}),
    });

    if (!response.ok) {
        throw new Error("Erro ao criar usuário");
    }

    const data = await response.json();
    console.log(data);
    return data;
}

export async function logarUsuario(email: string, senha: string) {
    const response = await fetch(`${API_BASE_URL}/usuarios/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
    });

    if (!response.ok) {
        throw new Error("Erro ao logar usuário");
    }

    const data = await response.json();
    console.log("Token JWT:", data.token);
    return data.token;
}

export async function registrarLocal(
    nome: string,
    endereco: string,
    cidade: string,
    descricao: string,
    token: string,
    imagem?: string,
    tiposDeAcessibilidade?: string[],
    recursosDisponiveis?: string[]
) {
    // Converta arrays para strings delimitadas, se fornecidos
    const acessibilidadeString = tiposDeAcessibilidade?.join(",") || null;
    const recursosString = recursosDisponiveis?.join(",") || null;

    const response = await fetch(`${API_BASE_URL}/locais`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            nome,
            endereco,
            cidade,
            descricao,
            imagem,
            tiposDeAcessibilidade: acessibilidadeString,
            recursosDisponiveis: recursosString,
        }),
    });

    if (!response.ok) {
        throw new Error("Erro ao registrar local");
    }

    const data = await response.json();
    console.log("Local registrado:", data);
    return data;
}

export async function adicionarAvaliacao(
    nota: number,
    comentario: string,
    usuarioId: number,
    localId: number,
    token: string
) {
    const response = await fetch(`${API_BASE_URL}/avaliacoes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ nota, comentario, usuarioId, localId }),
    });

    if (!response.ok) {
        throw new Error("Erro ao adicionar avaliação");
    }

    const data = await response.json();
    console.log(data);
    return data;
}

export async function listarLocais() {
    const response = await fetch(`${API_BASE_URL}/locais`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Erro ao listar locais");
    }

    const data = await response.json();
    console.log(data);
    return data;
}

export async function obterUsuario(userId: string) {
    const response = await fetch(`${API_BASE_URL}/usuarios/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Erro ao obter usuário");
    }

    const data = await response.json();
    console.log("Dados do Usuário:", data);
    return data;
}
export function decodeTokenManually(token: string): any {
    try {
        // Divida o token em suas partes
        const payload = token.split(".")[1];
        // Decodifique o payload de Base64 para JSON
        const decodedPayload = JSON.parse(atob(payload));
        return decodedPayload; // Retorna o objeto decodificado
    } catch (error) {
        console.error("Erro ao decodificar o token:", error);
        return null; // Retorna null se houver erro
    }
}

export function getUserId(): string | null {
    const token = localStorage.getItem("token_acessofacil");
    if (token) {
        const decoded = decodeTokenManually(token);
        return decoded?.userId || null; // Retorna o ID ou null se não existir
    }
    return null;
}

export async function fetchLocal(id: number){
    try {
      const response = await fetch(`${API_BASE_URL}/locais/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Local não encontrado.');
        } else {
          throw new Error('Erro ao buscar informações do local.');
        }
      }
  
      const localData= await response.json();
      return localData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
