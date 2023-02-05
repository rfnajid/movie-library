import { STRING } from "sequelize";
import { DATE } from "sequelize";
import { Model, INTEGER } from "sequelize";
import { sequelize } from "../database";

export interface UserModel extends Model {
  id: number
  name: string
  email: string
  password: string
  createdAt: string
  updatedAt: string
}

export default sequelize.define<UserModel>('user',{
  id:{
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: STRING,
    validate: {
      isEmail: true
    }
  },
  password: STRING,
  name: STRING,
  createdAt: DATE,
  updatedAt: DATE
}, {
});
