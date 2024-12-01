const http = require('http');
const axios = require('axios');
const bcrypt = require('bcrypt');

const BASE_URL = "http://localhost:3001";
// Função auxiliar para fazer requisições HTTP
function makeRequest(options, data = null, callback) {
    const req = http.request(options, (res) => {
        let responseData = '';
        res.on('data', (chunk) => { responseData += chunk; });
        res.on('end', () => { callback(null, res, responseData); });
    });
    req.on('error', (error) => { callback(error, null, null); });
    if (data) {
        req.write(data);
    }
    req.end();
}
// Testes de Particionamento de Classes de Equivalência para Criar Usuário
function testCreateUser() {
    const users = [
        {
            nome: "João", email: "joao@example.com", senha: "senhaSegura", deficiencias:
                null
        }, // Válido
        { nome: "", email: "email_invalido", senha: "senhaSegura", deficiencias: null }, // Inválido
    ];
    users.forEach((user, index) => {
        const data = JSON.stringify(user);
        const options = {
            hostname: 'localhost',
            port: 3001,
            path: '/usuarios',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };
        makeRequest(options, data, (error, res, responseData) => {
            if (error) {
                console.error(`Create User Test ${index}: Error occurred - ${error.message}
`);
                return;
            }
            console.log(`Create User Test ${index}: Status ${res.statusCode}, Response: 
${responseData}`);
        });
    });
}
// Testes de Login de Usuário
function testLoginUser(callback) {
    const credentials = [
        { email: "joao@example.com", senha: "senhaSegura" }, // Válido
        { email: "usuario@example.com", senha: "senhaIncorreta" }, // Senha errada
    ];
    credentials.forEach((cred, index) => {
        const data = JSON.stringify(cred);
        const options = {
            hostname: 'localhost',
            port: 3001,
            path: '/usuarios/login',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };
        makeRequest(options, data, (error, res, responseData) => {
            if (error) {
                console.error(`Login User Test ${index}: Error occurred - ${error.message}
`);
                return;
            }
            console.log(`Login User Test ${index}: Status ${res.statusCode}, Response: $
{responseData}`);

            // Passar o token para criar local apenas se o login for bem-sucedido
            if (res.statusCode === 200) {
                const responseObj = JSON.parse(responseData);
                callback(responseObj.token);
            }
        });
    });
}
// Testes Pairwise para Criar Local
function testCreateLocation(token) {
    const locations = [
        {
            nome: "Praça Central", endereco: "Rua A, 123", cidade: "Cidade Exemplo",
            tiposDeAcessibilidade: ["rampa"]
        }, // Válido
        { nome: "", endereco: "Rua A, 123", cidade: "", tiposDeAcessibilidade: null }, // Nome e cidade ausentes
    ];
    locations.forEach((location, index) => {
        const data = JSON.stringify(location);
        const options = {
            hostname: 'localhost',
            port: 3001,
            path: '/locais',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length,
                'Authorization': `Bearer ${token}` // Use o token do login bem-sucedido
            }
        };
        makeRequest(options, data, (error, res, responseData) => {
            if (error) {
                console.error(`Create Location Test ${index}: Error occurred - $
{error.message}`);
                return;
            }
            console.log(`Create Location Test ${index}: Status ${res.statusCode}, 
Response: ${responseData}`);
        });
    });
}

// Chamar os Testes
describe('Testes de Cadastro, Login e Criação de Locais', () => {
    let token = null;
    let id_user = null
  
    // Teste de criação de usuário
    describe('Cadastro de Usuários - Classes de Equivalência', () => {
      test('Usuário válido deve ser criado com sucesso', async () => {
        const user = {
          nome: 'João',
          email: 'joao@example.com',
          senha: 'senhaSegura',
          deficiencias: null,
        };
  
        const response = await axios.post(`${BASE_URL}/usuarios`, user);
        expect(response.status).toBe(200); // Código de sucesso esperado
        expect(response.data).toHaveProperty('id');
        id_user = response.data.id
      });
  
      test('Usuário com dados inválidos deve retornar erro', async () => {
        const user = {
          nome: '',
          email: 'email_invalido',
          senha: 'senhaSegura',
          deficiencias: null,
        };
  
        try {
          await axios.post(`${BASE_URL}/usuarios`, user);
        } catch (error) {
          expect(error.response.status).toBe(400); // Código de erro esperado
        }
      });
    });
    describe('Cadastro de Usuários - Análise de Valor Limite', () => {
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
  
    // Teste de login de usuário
    describe('Login de Usuários - Classe de Equivalencia', () => {
      test('Login com credenciais válidas deve retornar token', async () => {
        const credentials = {
          email: 'joao@example.com',
          senha: 'senhaSegura',
        };
  
        const response = await axios.post(`${BASE_URL}/usuarios/login`, credentials);
        expect(response.status).toBe(200); // Código de sucesso esperado
        expect(response.data).toHaveProperty('token');
  
        // Salva o token para usar nos testes seguintes
        token = response.data.token;
      });
  
      test('Login com senha inválida deve retornar erro', async () => {
        const credentials = {
          email: 'joao@example.com',
          senha: 'senhaIncorreta',
        };
  
        try {
          await axios.post(`${BASE_URL}/usuarios/login`, credentials);
        } catch (error) {
          expect(error.response.status).toBe(401); // Código de erro esperado
        }
      });
    });
  
    // Teste de criação de locais
    describe('Criação de Locais - Pairwise', () => {
      test('Local válido deve ser criado com sucesso', async () => {
        const location = {
          nome: 'Praça Central',
          endereco: 'Rua A, 123',
          descricao: 'Muito bom',
          cidade: 'Cidade Exemplo',
          tiposDeAcessibilidade: 'rampa',
        };
  
        const response = await axios.post(`${BASE_URL}/locais`, location, {
          headers: {
            Authorization: `Bearer ${token}`, // Token do usuário logado
          },
        });
  
        expect(response.status).toBe(200); // Código de sucesso esperado
        expect(response.data).toHaveProperty('id');
        await axios.delete(`${BASE_URL}/locais/${response.data.id}`)
        await axios.delete(`${BASE_URL}/usuarios/${id_user}`) // Ja aproveitando para apagar o user
      });
  
      test('Local com nome vazio deve retornar erro', async () => {
        const location = {
          nome: '',
          endereco: 'Rua A, 123',
          cidade: '',
          tiposDeAcessibilidade: null,
        };
  
        try {
          await axios.post(`${BASE_URL}/locais`, location, {
            headers: {
              Authorization: `Bearer ${token}`, // Token do usuário logado
            },
          });
        } catch (error) {
          expect(error.response.status).toBe(400); // Código de erro esperado
        }
      });
    });
  });