// Exemplo com Express.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.post('/api/register', async (req, res) => {
  const { user, email, password } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        user,
        email,
        password
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});