const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('./database'); // Importa a instância do banco de dados

const app = express();
app.use(express.json());

// Criar usuário
app.post('/usuarios', async (req, res) => {
  const { nome, email, senha } = req.body;
  const hashedPassword = await bcrypt.hash(senha, 10);

  try {
    const usuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha: hashedPassword
      }
    });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
});

// Logar usuário
app.post('/usuarios/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } });
    if (usuario && await bcrypt.compare(senha, usuario.senha)) {
      const token = jwt.sign({ userId: usuario.id }, 'SECRET_KEY');
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Credenciais inválidas.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao logar usuário.' });
  }
});

// Registrar local
app.post('/locais', async (req, res) => {
  const { nome, endereco, descricao } = req.body;

  try {
    const local = await prisma.local.create({
      data: {
        nome,
        endereco,
        descricao
      }
    });
    res.json(local);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao registrar local.' });
  }
});

// Adicionar avaliação
app.post('/avaliacoes', async (req, res) => {
  const { nota, comentario, usuarioId, localId } = req.body;

  try {
    const avaliacao = await prisma.avaliacao.create({
      data: {
        nota,
        comentario,
        usuarioId,
        localId
      }
    });
    res.json(avaliacao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar avaliação.' });
  }
});

// Listar locais
app.get('/locais', async (req, res) => {
  try {
    const locais = await prisma.local.findMany();
    res.json(locais);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar locais.' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});