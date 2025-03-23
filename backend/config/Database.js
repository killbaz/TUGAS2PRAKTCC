import { Sequelize } from "sequelize";

const db = new Sequelize('dbtugas', 'root', '', {
    host: '34.121.249.104',
    dialect: 'mysql'
});

export default db;