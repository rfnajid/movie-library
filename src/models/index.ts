

import user from "./user";
import movie from "./movies";
import person from "./person";
import { Crypt } from "src/util/crypt";
import movieActors from "./movieActors";

export const User = user;
export const Movie = movie;
export const Person = person;
export const MovieActor = movieActors;

User.beforeCreate(async (user) => {
    user.password = Crypt.hash(user.password);
});

Movie.belongsToMany(Person, {
    through: movieActors,
    foreignKey: 'movieId',
    otherKey: 'actorId'
});

Person.belongsToMany(Movie, {
    through: movieActors,
    foreignKey: 'actorId',
    otherKey: 'movieId'
});
    