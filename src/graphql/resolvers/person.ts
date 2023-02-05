import {Movie, Person} from "src/models";

require('dotenv').config();

const PersonResolver = {
    Query: {
        async findAllPerson(root, args, context) {
            console.log(context);
            return Person.findAll();
        },
        async findOnePerson(root, {id}, context){
            return Person.findByPk(id, {
                include:[{
                    model: Movie
                }]
            });
        }
    },
    Mutation : {
        async createPerson(root, args, context) {
            const { name, bio, photoUrl } = args;
            return Person.create({ name, bio, photoUrl });
        },
        async updatePerson(root, args, context) {
            const id = args.id;
            const person = args;
            await Person.update(person, { 
                where: { id: id }
            });

            return {id: id, ...person};

        },
        async deletePerson(root, {id}, context){
            const deleteRes = await Person.destroy({
                where: {id: id}
            });

            if(deleteRes){
                return `Person id:${id} has been deleted`;
            }else{
                return `Can't delete Person id:${id}`;
            }
        }
    },
    Person : {
        actorInMovies(person){
            return person.movies;
        }
    }
}

export default PersonResolver;