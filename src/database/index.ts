import { Sequelize } from "sequelize";
import config from "./config/config";

require('dotenv').config();

const env = process.env.NODE_ENV || 'dev';

export const sequelize = new Sequelize(config[env]);

sequelize.authenticate();