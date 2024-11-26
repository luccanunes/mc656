// database.js
const { PrismaClient } = require('@prisma/client');

class Database {
    constructor() {
        if (!Database.instance) {
            Database.instance = new PrismaClient();
        }
        return Database.instance;
    }
}

const databaseInstance = new Database();

module.exports = databaseInstance;