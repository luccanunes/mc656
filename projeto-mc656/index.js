const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

async function check_email(email) {

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (user) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Erro ao verificar email:', error);
  }
};

app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let email_exists = check_email(email);
    if (!email_exists) {
      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password
        }
      })
    } else {
      alert("Email já cadastrado")
    }
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    const senhaValida = user.password

    if (senhaValida != password) {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    // Login bem-sucedido
    res.json({ message: 'Login realizado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/delete', async (req, res) => {
  const email = req.params.email;

  try {
    const userDeletado = await prisma.user.delete({
      where: { email },
    });

    if (!userDeletado) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    res.json({ message: 'Usuário removido com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = app;

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});