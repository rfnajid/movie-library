import { Sequelize } from "sequelize";

require('dotenv').config();
const config = require('./config/config');

export const sequelize = new Sequelize(config);

sequelize.authenticate();