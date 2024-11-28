const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();
async function main() {
    // Criar senhas hashadas para usar para todos os usuários mock
    const senhaHash = await bcrypt.hash('senhaMock', 10);
    // Criar usuários mock
    const users = [
        {
            nome: 'Alice',
            email: 'alice@example.com',
            senha: senhaHash,
            imagem: 'https://via.placeholder.com/150/00BFFF/FFFFFF?text=Alice',
            deficiencias: 'auditiva',
        },
        {
            nome: 'Bob',
            email: 'bob@example.com',
            senha: senhaHash,
            imagem: 'https://via.placeholder.com/150/FF4500/FFFFFF?text=Bob',
            deficiencias: 'motora,visual',
        },
        {
            nome: 'Charlie',
            email: 'charlie@example.com',
            senha: senhaHash,
            imagem: 'https://via.placeholder.com/150/32CD32/FFFFFF?text=Charlie',
            deficiencias: 'visual',
        },
        {
            nome: 'David',
            email: 'david@example.com',
            senha: senhaHash,
            imagem: 'https://via.placeholder.com/150/FF1493/FFFFFF?text=David',
            deficiencias: 'auditiva,visual',
        },
        {
            nome: 'Eve',
            email: 'eve@example.com',
            senha: senhaHash,
            imagem: 'https://via.placeholder.com/150/FFFF00/333?text=Eve',
            deficiencias: 'motora',
        },
    ];
    const usuariosCriados = [];
    for (const userData of users) {
        const usuarioCriado = await prisma.usuario.create({
            data: userData,
        });
        usuariosCriados.push(usuarioCriado);
    }
    // Criar locais mock
    const locais = [
        {
            nome: 'Museu do Louvre',
            endereco: 'Rue de Rivoli, Paris',
            cidade: 'Paris',
            descricao: 'Um dos museus mais famosos do mundo.',
            tiposDeAcessibilidade: 'motora,visual,auditiva',
            recursosDisponiveis: 'rampa,elevador,banheiro adaptado',
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Louvre_Museum_Wikimedia_Commons.jpg/1280px-Louvre_Museum_Wikimedia_Commons.jpg',
            criadorId: usuariosCriados[0].id, // Criado por Alice
        },
        {
            nome: 'Parque Ibirapuera',
            endereco: 'Av. Pedro Álvares Cabral, São Paulo',
            cidade: 'São Paulo',
            descricao: 'Um grande parque com acessibilidade completa.',
            tiposDeAcessibilidade: 'motora,visual',
            recursosDisponiveis: 'rampa,elevador',
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ibirapuera_Auditorium_%28External_View%29.jpg/1024px-Ibirapuera_Auditorium_%28External_View%29.jpg',
            criadorId: usuariosCriados[1].id, // Criado por Bob
        },
        {
            nome: 'Central Park',
            endereco: 'New York, NY',
            cidade: 'New York',
            descricao: 'Um icônico parque no coração de Nova York.',
            tiposDeAcessibilidade: 'visual',
            recursosDisponiveis: 'rampa,assistente',
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/USA-NYC-Central_Park.jpg/1024px-USA-NYC-Central_Park.jpg',
            criadorId: usuariosCriados[2].id, // Criado por Charlie
        },
        {
            nome: 'Sydney Opera House',
            endereco: 'Bennelong Point, Sydney',
            cidade: 'Sydney',
            descricao: 'Um dos mais icônicos edifícios do século XX.',
            tiposDeAcessibilidade: 'motora,auditiva',
            recursosDisponiveis: 'rampa,elevador,intérprete',
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Opera_House_Sydney_Australia_3.jpg/1024px-Opera_House_Sydney_Australia_3.jpg',
            criadorId: usuariosCriados[3].id, // Criado por David
        },
        {
            nome: 'Museu de Arte de São Paulo',
            endereco: 'Av. Paulista, São Paulo',
            cidade: 'São Paulo',
            descricao: 'Um dos mais importantes museus de arte do Hemisfério Sul.',
            tiposDeAcessibilidade: 'motora,visual,auditiva',
            recursosDisponiveis: 'rampa,elevador,interprete',
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/S%C3%A3o_Paulo_Museum_of_Art.jpg/1024px-S%C3%A3o_Paulo_Museum_of_Art.jpg',
            criadorId: usuariosCriados[4].id, // Criado por Eve
        },
        {
            nome: 'Jardim Botânico do Rio de Janeiro',
            endereco: 'Rua Jardim Botânico, Rio de Janeiro',
            cidade: 'Rio de Janeiro',
            descricao: 'Um dos grandes atrativos do Rio de Janeiro para os amantes da natureza.',
            tiposDeAcessibilidade: 'visual,auditiva',
            recursosDisponiveis: 'rampa,guia',
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Jardim_botanico_rio_de_janeiro.jpg/1024px-Jardim_botanico_rio_de_janeiro.jpg',
            criadorId: usuariosCriados[0].id, // Outro criado por Alice
        },
    ];
    const locaisCriados = [];
    for (const localData of locais) {
        const localCriado = await prisma.local.create({
            data: localData,
        });
        locaisCriados.push(localCriado);
    }
    // Criar avaliações mock
    const avaliacoes = [
        {
            nota: 5,
            comentario: 'Maravilhoso! Super acessível e bem cuidado.',
            usuarioId: usuariosCriados[1].id, // Avaliação por Bob
            localId: locaisCriados[0].id, // Museu do Louvre
        },
        {
            nota: 4,
            comentario: 'Muito legal, mas pode melhorar em alguns aspectos.',
            usuarioId: usuariosCriados[2].id, // Avaliação por Charlie
            localId: locaisCriados[1].id, // Parque Ibirapuera
        },
        {
            nota: 3,
            comentario: 'Bom, mas senti falta de algumas instalações de acessibilidade.',
            usuarioId: usuariosCriados[3].id, // Avaliação por David
            localId: locaisCriados[2].id, // Central Park
        },
        {
            nota: 4,
            comentario: 'Espaço maravilhoso, recomendo a todos!',
            usuarioId: usuariosCriados[4].id, // Avaliação por Eve
            localId: locaisCriados[3].id, // Sydney Opera House
        },
        {
            nota: 5,
            comentario: 'Lugar fantástico, amei a acessibilidade.',
            usuarioId: usuariosCriados[0].id, // Avaliação por Alice
            localId: locaisCriados[4].id, // Museu de Arte de São Paulo
        },
        {
            nota: 4,
            comentario: 'Experiência incrível, mas pode melhorar a sinalização.',
            usuarioId: usuariosCriados[1].id, // Outra avaliação por Bob
            localId: locaisCriados[0].id, // Museu do Louvre
        },
    ];
    for (const avaliacaoData of avaliacoes) {
        await prisma.avaliacao.create({
            data: avaliacaoData,
        });
    }
    // Recalcular a média das notas para cada local criado
    for (const local of locaisCriados) {
        const avaliacoesDoLocal = await prisma.avaliacao.findMany({
            where: {
                localId: local.id,
            },
            select: {
                nota: true,
            },
        });
        const totalAvaliacoes = avaliacoesDoLocal.length;
        const somaNotas = avaliacoesDoLocal.reduce((acc, avaliacao) => acc + avaliacao.nota, 0);
        const mediaNotas = totalAvaliacoes ? somaNotas / totalAvaliacoes : 0;
        await prisma.local.update({
            where: {
                id: local.id,
            },
            data: {
                nota: mediaNotas,
            },
        });
    }
    console.log('Dados mock inseridos com sucesso!');
}
main()
    .catch(e => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });