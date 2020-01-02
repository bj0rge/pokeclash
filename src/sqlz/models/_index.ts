import { Sequelize } from 'sequelize';
import { operatorsAliases } from './config/operators';

const config = require('../config/config.json');

const dbConfig = config[process.env.NODE_ENV];
const sequelize = new Sequelize(
    dbConfig['database'],
    dbConfig['username'],
    dbConfig['password'],
    {
        ...dbConfig,
        operatorsAliases,
        logging: dbConfig.logging ? console.log : false,
    },
);

export default sequelize;
