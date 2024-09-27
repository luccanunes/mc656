const request = require('supertest');
const app = require('./index.js'); // Caminho para o seu app

describe('API Tests', function () {
    let expect;

    before(async function () {
        const chai = await import('chai');
        expect = chai.expect;
    });

    let userId;

    it('Deve registrar um usuário e verificar se ele existe', async function () {
        const res = await request(app)
            .post('/api/register')
            .send({
                username: 'testuser',
                email: 'testuser@example.com',
                password: 'password123'
            });

        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('id');
        userId = res.body.id;

        const usersRes = await request(app).get('/api/users');
        expect(usersRes.status).to.equal(200);
        const user = usersRes.body.find(user => user.email === 'testuser@example.com');
        expect(user).to.exist;
    });

    it('Deve tentar registrar um usuário com o mesmo email e falhar', async function () {
        const res = await request(app)
            .post('/api/register')
            .send({
                username: 'testuser2',
                email: 'testuser@example.com',
                password: 'password123'
            });

        expect(res.status).to.equal(400); // Supondo que 400 é o código de erro para email duplicado
        expect(res.body).to.have.property('error');
    });

    after(async function () {
        if (userId) {
            await request(app)
                .delete('/api/delete')
                .send({ id: userId });
        }
    });
});