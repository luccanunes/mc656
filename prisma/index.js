const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('./database'); // Importa a instância do banco de dados
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// Middleware de autenticação
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401); // Não autorizado

  jwt.verify(token, 'SECRET_KEY', (err, user) => {
    if (err) return res.sendStatus(403); // Proibido
    req.user = user;
    next();
  });
}

// Criar usuário
app.post('/usuarios', async (req, res) => {
  const { nome, email, senha, deficiencias = [] } = req.body;

  const hashedPassword = await bcrypt.hash(senha, 10);

  try {
    const usuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha: hashedPassword,
        deficiencias, // Converte array para string delimitada
      },
      select: {
        id: true,
        nome: true,
        email: true,
        createdAt: true, // Inclui o campo de data de criação na resposta
        deficiencias: true, // Opcionalmente incluir deficiências também
      }
    });
    res.json(usuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
});

// Obter todas as avaliações de um usuário com informações limitadas dos locais
app.get('/usuarios/:id/avaliacoes', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    const avaliacoes = await prisma.avaliacao.findMany({
      where: {
        usuarioId: parseInt(id)
      },
      select: {
        id: true,
        nota: true,
        comentario: true,
        local: {
          select: {
            id: true,
            nome: true, // Inclui apenas o ID e o nome do local
            // Adicione mais campos se necessário
          }
        }
      }
    });

    if (!avaliacoes || avaliacoes.length === 0) {
      return res.status(404).json({ error: 'Nenhuma avaliação encontrada para este usuário.' });
    }

    res.json(avaliacoes);
  } catch (error) {
    console.error('Erro ao buscar avaliações:', error);
    res.status(500).json({ error: 'Erro ao buscar avaliações do usuário.' });
  }
});

// Obter informações de um usuário (id, nome, imagem, deficiencias)
app.get('/usuarios/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await prisma.usuario.findUnique({
      where: {
        id: parseInt(id),
      },
      select: {
        id: true,
        nome: true,
        imagem: true,
        deficiencias: true, // Assumindo que deficiencias está como uma lista de strings ou campo similar
      },
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    res.json(usuario);
  } catch (error) {
    console.error('Erro ao buscar informações do usuário:', error);
    res.status(500).json({ error: 'Erro ao buscar informações do usuário.' });
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

// Registrar local - Protegido por autenticação
app.post('/locais', authenticateToken, async (req, res) => {
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

// Adicionar avaliação - Protegido por autenticação
app.post('/avaliacoes', authenticateToken, async (req, res) => {
  const { nota, comentario, usuarioId, localId } = req.body;
  console.log(req.body);

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
    console.log(error);
    res.status(500).json({ error: 'Erro ao adicionar avaliação.' });
  }
});

// Listar locais - Pode ser acessado por todos (não protegido)
app.get('/locais', async (req, res) => {
  try {
    const locais = await prisma.local.findMany();
    res.json(locais);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar locais.' });
  }
});

// Obter um local específico e suas avaliações
app.get('/locais/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const local = await prisma.local.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        avaliacoes: true,
      },
    });

    if (!local) {
      return res.status(404).json({ error: 'Local não encontrado.' });
    }

    res.json(local);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar informações do local.' });
  }
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});