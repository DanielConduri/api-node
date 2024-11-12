import { Sequelize } from 'sequelize';
import { configVariables } from '../config/variables.config.js';

//Servidor PostgreSQL 15
export const sequelize = new Sequelize(
    configVariables.dbName,
    configVariables.dbUser,
    configVariables.dbPassword,
    {
        host: configVariables.dbServer,
        dialect: configVariables.dbDialect,
        logging: false,
        port: configVariables.dbPort,
    }
  );

