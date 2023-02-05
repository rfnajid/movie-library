import { STRING } from "sequelize";
import { DATE } from "sequelize";
import { Model, INTEGER } from "sequelize";
import { sequelize } from "../database";

export interface MovieModel extends Model{
  id: number;
  title: string;
  description: string;
  posterUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export default sequelize.define<MovieModel>('movie',{
  id:{
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: STRING,
    allowNull: false
  },
  description: STRING,
  posterUrl: STRING,
  createdAt: DATE,
  updatedAt: DATE,
}, {});
  