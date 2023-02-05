import Movie from "src/models/movies";

require('dotenv').config();

const MovieResolver = {
    Query: {
        async findAllMovie(root, args, context) {
            console.log(context);
            return Movie.findAll();
        },
        async findOneMovie(root, {id}, context){
            return Movie.findByPk(id);
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
            delete movie.id;
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
        }
    },
}

export default MovieResolver;