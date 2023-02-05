import { STRING } from "sequelize";
import { DATE } from "sequelize";
import { Model, INTEGER } from "sequelize";
import { sequelize } from "../database";
import { Crypt } from "../util/crypt";

export interface UserModel extends Model {
  id: number
  name: string
  email: string
  password: string
  createdAt: string
  updatedAt: string
}

const User = sequelize.define<UserModel>('user',{
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

User.beforeCreate(async (user) => {
  user.password = Crypt.hash(user.password);
});

export default User;