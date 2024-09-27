const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');


const prisma = new PrismaClient();
const app = express();

async function deleeee() {
  await prisma.user.deleteMany();
}

deleeee();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

async function check_email(email) {
  const user = await prisma.user.findUnique({
    where: { email: email },
  });
  return !!user;
}

app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let email_exists = await check_email(email);
    if (!email_exists) {
      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password
        }
      });
      console.log(`Registrando ${email}`);
      res.status(201).json({ message: 'Usuário registrado com sucesso!', user: newUser });
    } else {
      console.error("Email já cadastrado");
      res.status(400).json("Email já está cadastrado");
      return;
    }
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ error: error.message });
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

    const senhaValida = user.password; // Aqui você deve usar bcrypt para comparar as senhas

    if (senhaValida != password) {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

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

app.delete('/api/delete/:email', async (req, res) => {
  const email = req.params.email;
  console.log(`Deletando ${email}`);

  try {
    const userDeletado = await prisma.user.delete({
      where: { email },
    });
    res.json({ message: 'Usuário removido com sucesso!' });
  } catch (error) {
    if (error.code === 'P2025') { // Código de erro do Prisma para registro não encontrado
      console.error(`Usuário com email ${email} não encontrado`)
      res.status(404).json({ message: 'Usuário não encontrado.' });
    } else {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  }
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});