import { BuildOptions, STRING } from "sequelize";
import { DATE } from "sequelize";
import { Model, INTEGER } from "sequelize";
import { sequelize } from "../database";
import Person from "./person";

type MovieModel = typeof Model
    & { associate: (models: any) => void }
    & { new(values?: Record<string, unknown>, options?: BuildOptions) }

const Movie = <MovieModel>sequelize.define('movie',{
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
  updatedAt: DATE
}, {});
  
export default Movie;