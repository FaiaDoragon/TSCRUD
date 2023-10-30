import { Sequelize } from "sequelize";

const db = new Sequelize('ts-rest-server', 'root', '123123', {
    host: 'localhost',
    dialect: "mysql",

});

export default db;