"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('ts-rest-server', 'root', '123123', {
    host: 'localhost',
    dialect: "mysql",
});
exports.default = db;
//# sourceMappingURL=connection.js.map