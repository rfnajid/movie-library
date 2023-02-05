

import user from "./user";
import movie from "./movies";
import person from "./person";
import movieActors from "./movieActors";
import movieAuthor from "./movieAuthor";
import { Crypt } from "src/utils/crypt";

export const User = user;
export const Movie = movie;
export const Person = person;
export const MovieActor = movieActors;
export const MovieAuthor = movieAuthor;

User.beforeCreate(async (user) => {
    user.password = Crypt.hash(user.password);
});

Movie.belongsToMany(Person, {
    as: 'actors',
    through: movieActors,
    foreignKey: 'movieId',
    otherKey: 'actorId'
});

Person.belongsToMany(Movie, {
    as: "actorIn",
    through: movieActors,
    foreignKey: 'actorId',
    otherKey: 'movieId'
});

Movie.belongsToMany(Person, {
    as: 'authors',
    through: movieAuthor,
    foreignKey: 'movieId',
    otherKey: 'authorId'
});

Person.belongsToMany(Movie, {
    as:"authorIn",
    through: movieAuthor,
    foreignKey: 'authorId',
    otherKey: 'movieId'
});
    
    