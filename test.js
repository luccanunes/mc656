const axios = require('axios');

const BASE_URL = "http://localhost:3001/api";

describe('Análise de Valor Limite - Cadastro de Usuários', () => {
    test('Nome deve ter no mínimo 3 caracteres', async () => {
        try {
            await axios.post(`${BASE_URL}/usuarios`, {
                nome: "ab",
                email: "shortname@example.com",
                senha: "password123"
            });
        } catch (error) {
            expect(error.response.status).toBe(400);
        }
    });
    test('Email deve ter no mínimo 3 caracteres', async () => {
        try {
            await axios.post(`${BASE_URL}/usuarios`, {
                nome: "shortmail",
                email: "@e",
                senha: "password123"
            });
        } catch (error) {
            expect(error.response.status).toBe(400);
        }
    });
    test('Nome deve ter no máximo 50 caracteres', async () => {
        const longName = "a".repeat(51)
        try {
            await axios.post(`${BASE_URL}/usuarios`, {
                nome: longName,
                email: "longName@example.com",
                senha: "password123"
            });
        } catch (error) {
            expect(error.response.status).toBe(400);
        }
    });
    test('Email deve ter no máximo 50 caracteres', async () => {
        const longEmail = "a".repeat(50) + "@"
        try {
            await axios.post(`${BASE_URL}/usuarios`, {
                nome: "longEmail",
                email: longEmail,
                senha: "password123"
            });
        } catch (error) {
            expect(error.response.status).toBe(400);
        }
    });
});

describe('Análise de Valor Limite - Cadastro de Usuários', () => {
    test('Nome deve ter no mínimo 3 caracteres', async () => {
        try {
            await axios.post(`${BASE_URL}/usuarios`, {
                nome: "ab",
                email: "shortname@example.com",
                senha: "password123"
            });
        } catch (error) {
            expect(error.response.status).toBe(400);
        }
    });
    test('Email deve ter no mínimo 3 caracteres', async () => {
        try {
            await axios.post(`${BASE_URL}/usuarios`, {
                nome: "shortmail",
                email: "@e",
                senha: "password123"
            });
        } catch (error) {
            expect(error.response.status).toBe(400);
        }
    });
    test('Nome deve ter no máximo 50 caracteres', async () => {
        const longName = "a".repeat(51)
        try {
            await axios.post(`${BASE_URL}/usuarios`, {
                nome: longName,
                email: "longName@example.com",
                senha: "password123"
            });
        } catch (error) {
            expect(error.response.status).toBe(400);
        }
    });
    test('Email deve ter no máximo 50 caracteres', async () => {
        const longEmail = "a".repeat(50) + "@"
        try {
            await axios.post(`${BASE_URL}/usuarios`, {
                nome: "longEmail",
                email: longEmail,
                senha: "password123"
            });
        } catch (error) {
            expect(error.response.status).toBe(400);
        }
    });
});

describe('Análise de Valor Limite - Registro de Locais', () => {
    test('Nome do local com menos de 5 caracteres deve falhar', async () => {
        try {
            await axios.post(`${BASE_URL}/locais`, {
                nome: "abcd",
                endereco: "Rua A",
                descricao: "Local inválido",
                tiposDeAcessibilidade: [],
                recursosDisponiveis: []
            });
        } catch (error) {
            expect(error.response.status).toBe(500);
        }
    });

    test('Nome do local com exatamente 5 caracteres deve ser aceito', async () => {
        const response = await axios.post(`${BASE_URL}/locais`, {
            nome: "abcde",
            endereco: "Rua B",
            descricao: "Local válido",
            tiposDeAcessibilidade: [],
            recursosDisponiveis: []
        });
        expect(response.status).toBe(201);
    });

    test('Nome do local com mais de 100 caracteres deve falhar', async () => {
        try {
            const longName = 'a'.repeat(101);
            await axios.post(`${BASE_URL}/locais`, {
                nome: longName,
                endereco: "Rua C",
                descricao: "Local inválido",
                tiposDeAcessibilidade: ["rampa"],
                recursosDisponiveis: ["banheiro acessível"]
            });
        } catch (error) {
            expect(error.response.status).toBe(400);
        }
    });
});

describe('Análise de Valor Limite - Avaliações', () => {
    test('Nota abaixo do limite (0) deve falhar', async () => {
        try {
            await axios.post(`${BASE_URL}/avaliacoes`, {
                nota: 0,
                comentario: "Nota inválida",
                usuarioId: 1,
                localId: 1
            });
        } catch (error) {
            expect(error.response.status).toBe(400);
        }
    });

    test('Nota mínima válida (1) deve ser aceita', async () => {
        const response = await axios.post(`${BASE_URL}/avaliacoes`, {
            nota: 1,
            comentario: "Nota válida",
            usuarioId: 1,
            localId: 1
        });
        expect(response.status).toBe(201);
    });

    test('Nota máxima válida (5) deve ser aceita', async () => {
        const response = await axios.post(`${BASE_URL}/avaliacoes`, {
            nota: 5,
            comentario: "Nota válida",
            usuarioId: 1,
            localId: 1
        });
        expect(response.status).toBe(201);
    });

    test('Nota acima do limite (6) deve falhar', async () => {
        try {
            await axios.post(`${BASE_URL}/avaliacoes`, {
                nota: 6,
                comentario: "Nota inválida",
                usuarioId: 1,
                localId: 1
            }, {
                headers: { Authorization: `Bearer VALID_TOKEN` }
            });
        } catch (error) {
            expect(error.response.status).toBe(400);
        }
    });
});

