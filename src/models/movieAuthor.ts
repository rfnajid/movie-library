
import { Model, INTEGER } from "sequelize";
import { sequelize } from "../database";

export interface MovieAuthorModel extends Model {
  movieId: number;
  authorId: number;
}

export default sequelize.define<MovieAuthorModel>('movieAuthors',{
  movieId:{
    type: INTEGER,
    primaryKey: true
  },
  authorId:{
    type: INTEGER,
    primaryKey: true
  }
}, {
  tableName: 'movieAuthors',
  name: {
      singular: 'movieAuthor',
      plural: 'movieAuthors'
  },
  timestamps: false
});