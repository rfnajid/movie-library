
import { STRING } from "sequelize";
import { DATE } from "sequelize";
import { Model, INTEGER } from "sequelize";
import { sequelize } from "../database";

export interface MovieActorModel extends Model {
  movieId: number;
  actorId: number;
}

export default sequelize.define<MovieActorModel>('movieActor',{
  movieId:{
    type: INTEGER,
    primaryKey: true
  },
  actorId:{
    type: INTEGER,
    primaryKey: true
  }
}, {
  tableName: 'movieActors',
  name: {
      singular: 'movieActor',
      plural: 'movieActors'
  },
  timestamps: false
});