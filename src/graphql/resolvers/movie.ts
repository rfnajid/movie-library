import {Movie, MovieActor, Person} from "src/models";

require('dotenv').config();

const MovieResolver = {
    Query: {
        async findAllMovie(root, args, context) {
            console.log(context);
            return Movie.findAll();
        },
        async findOneMovie(root, {id}, context){
            return Movie.findByPk(id, {
                include: [{
                    model: Person
                }]
            });
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
            
            return Movie.findByPk(movieId, {
                include: [{
                    model: Person
                }]
            })
        },
        async deleteActor(root, args, context){
            const {movieId, actorId} = args;
            await MovieActor.destroy({
                where: {movieId: movieId, actorId: actorId}
            });
            
            return Movie.findByPk(movieId, {
                include: [{
                    model: Person
                }]
            })
        }
    },
    Movie: {
        actors(movie){
            return movie.persons;
        }
    }
}

export default MovieResolver;