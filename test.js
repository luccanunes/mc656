const axios = require('axios');

const BASE_URL = "http://localhost:3001/api";

describe('API Tests', () => {
    test('Register a user and check if they exist', async () => {
        // Register a new user
        let response = await axios.post(`${BASE_URL}/register`, {
            username: "testuser",
            email: "testuser@example.com",
            password: "password123"
        });
        expect(response.status).toBe(201); // Check if the user was created successfully

        // Check if the user exists
        response = await axios.get(`${BASE_URL}/users`);
        expect(response.status).toBe(200);
        const users = response.data;
        expect(users.some(user => user.email === "testuser@example.com")).toBe(true);
    });

    test('Register a user and try to register another with the same email', async () => {
        // Register a new user
        let response = await axios.post(`${BASE_URL}/register`, {
            username: "testuser2",
            email: "testuser2@example.com",
            password: "password123"
        });
        expect(response.status).toBe(201); // Check if the user was created successfully

        // Try to register another user with the same email
        try {
            response = await axios.post(`${BASE_URL}/register`, {
                username: "testuser3",
                email: "testuser2@example.com",
                password: "password123"
            });
        } catch (error) {
            response = error.response;
        }
        expect(response.status).toBe(400); // Check if the API returns an error for existing email
    });

    test('Login a user', async () => {
        // Register a new user
        let response = await axios.post(`${BASE_URL}/register`, {
            username: "testuser4",
            email: "testuser4@example.com",
            password: "password123"
        });
        expect(response.status).toBe(201); // Check if the user was created successfully

        // Login the user
        response = await axios.post(`${BASE_URL}/login`, {
            email: "testuser4@example.com",
            password: "password123"
        });
        expect(response.status).toBe(200); // Check if the login was successful
    });

    test('Delete a user', async () => {
        // Register a new user
        let response = await axios.post(`${BASE_URL}/register`, {
            username: "testuser5",
            email: "testuser5@example.com",
            password: "password123"
        });
        expect(response.status).toBe(201); // Check if the user was created successfully

        // Delete the user
        response = await axios.delete(`${BASE_URL}/delete/testuser5@example.com`);
        expect(response.status).toBe(200); // Check if the user was deleted successfully

        // Check if the user no longer exists
        response = await axios.get(`${BASE_URL}/users`);
        expect(response.status).toBe(200);
        const users = response.data;
        expect(users.some(user => user.email === "testuser5@example.com")).toBe(false);
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