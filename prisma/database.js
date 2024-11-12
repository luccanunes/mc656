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
Object.freeze(databaseInstance); // Prevent modification of the instance

module.exports = databaseInstance;
