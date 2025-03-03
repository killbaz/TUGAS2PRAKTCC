import { Sequelize } from "sequelize";

const db = new Sequelize('dbtugas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;