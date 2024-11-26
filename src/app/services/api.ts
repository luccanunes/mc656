const API_BASE_URL = 'http://localhost:3001';

export async function criarUsuario(nome: string, email: string, senha: string) {
  const response = await fetch(`${API_BASE_URL}/usuarios`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nome, email, senha }),
  });

  if (!response.ok) {
    throw new Error('Erro ao criar usuário');
  }

  const data = await response.json();
  console.log(data);
  return data;
}

export async function logarUsuario(email: string, senha: string) {
  const response = await fetch(`${API_BASE_URL}/usuarios/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, senha }),
  });

  if (!response.ok) {
    throw new Error('Erro ao logar usuário');
  }

  const data = await response.json();
  console.log('Token JWT:', data.token);
  return data.token;
}

export async function registrarLocal(
  nome: string,
  endereco: string,
  descricao: string,
  token: string
) {
  const response = await fetch(`${API_BASE_URL}/locais`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ nome, endereco, descricao }),
  });

  if (!response.ok) {
    throw new Error('Erro ao registrar local');
  }

  const data = await response.json();
  console.log(data);
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
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ nota, comentario, usuarioId, localId }),
  });

  if (!response.ok) {
    throw new Error('Erro ao adicionar avaliação');
  }

  const data = await response.json();
  console.log(data);
  return data;
}

export async function listarLocais() {
  const response = await fetch(`${API_BASE_URL}/locais`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Erro ao listar locais');
  }

  const data = await response.json();
  console.log(data);
  return data;
}
