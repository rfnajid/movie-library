import {Movie, MovieActor, MovieAuthor, Person} from "src/models";
import { movieQueryHelper } from "src/models/helper/movie-query-helper";

require('dotenv').config();

const MovieResolver = {
    Query: {
        async findAllMovie(root, args, context) {
            return Movie.findAll();
        },
        async findOneMovie(root, {id}, context){
           return movieQueryHelper.findByPk(id);
        }
    },
    Mutation : {
        async createMovie(root, args, context) {
            const { title, description, posterUrl } = args;
            return Movie.create({ title, description, posterUrl });
        },
        async updateMovie(root, args, context) {
            const id = args.id;
            const movie = args;
            await Movie.update(movie, { 
                where: { id: id }
            });

            return {id: id, ...movie};

        },
        async deleteMovie(root, {id}, context){
            const deleteRes = await Movie.destroy({
                where: {id: id}
            });

            if(deleteRes){
                return `Movie id:${id} has been deleted`;
            }else{
                return `Can't delete Movie id:${id}`;
            }
        },
        async addActor(root, args, context){
            const {movieId, actorId} = args;
            await MovieActor.create({movieId, actorId});
            
            return movieQueryHelper.findByPk(movieId);
        },
        async deleteActor(root, args, context){
            const {movieId, actorId} = args;
            await MovieActor.destroy({
                where: {movieId: movieId, actorId: actorId}
            });
            
            return movieQueryHelper.findByPk(movieId);
        },
        async addAuthor(root, args, context){
            const {movieId, authorId} = args;
            await MovieAuthor.create({movieId, authorId});
            
            return movieQueryHelper.findByPk(movieId);
        },
        async deleteAuthor(root, args, context){
            const {movieId, authorId} = args;
            await MovieAuthor.destroy({
                where: {movieId: movieId, authorId: authorId}
            });
            
            return movieQueryHelper.findByPk(movieId);
        }
    },
    Movie: {
        actors(movie){
            return movie.actors;
        },
        authors(movie){
            return movie.authors;
        }
    }
}

export default MovieResolver;