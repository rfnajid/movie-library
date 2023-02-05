import { Movie, Person } from "../../models";

const findByPk = (id: number) => {
    return Person.findByPk(id, {
        include: [{
            as: 'actorIn',
            model: Movie
        },{
            as: 'authorIn',
            model: Movie
        }]
    });
}

export const personQueryHelper = {
    findByPk: findByPk
}