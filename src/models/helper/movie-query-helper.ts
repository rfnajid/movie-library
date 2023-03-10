import { Movie, Person } from "../../models";

const findByPk = (id: number) => {
    return Movie.findByPk(id, {
        include: [{
            as: 'actors',
            model: Person
        },{
            as: 'authors',
            model: Person
        }]
    });
}

export const movieQueryHelper = {
    findByPk: findByPk
}