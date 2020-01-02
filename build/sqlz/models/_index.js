"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config = require('../config/config.json');
const dbConfig = config[process.env.NODE_ENV];
const sequelize = new sequelize_1.Sequelize(dbConfig['database'], dbConfig['username'], dbConfig['password'], Object.assign(Object.assign({}, dbConfig), { logging: dbConfig.logging ? console.log : false }));
exports.default = sequelize;

//# sourceMappingURL=_index.js.map
