import { STRING } from "sequelize";
import { DATE } from "sequelize";
import { Model, INTEGER } from "sequelize";
import { sequelize } from "../database";

export interface PersonModel extends Model {
  id: number
  name: string,
  bio: string,
  photoUrl: string,
  createdAt: Date
  updatedAt: Date
}

const Person = sequelize.define<PersonModel>('person',{
  id:{
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: STRING,
    allowNull: false
  },
  bio: STRING,
  photoUrl: STRING,
  createdAt: DATE,
  updatedAt: DATE
}, {
  tableName: 'persons',
  name: {
      singular: 'person',
      plural: 'persons'
  }
});

export default Person;