
export const movieSchema = `#graphql

 type Movie {
     id: Int!
     title: String!
     description: String
     posterUrl: String
     actors: [Person]
 }

 extend type Query {
    findAllMovie: [Movie]
    findOneMovie(id: Int!): Movie
 }

 extend type Mutation {
    createMovie(title: String!, description: String, posterUrl: String): Movie
    updateMovie(id: Int, title: String, description: String, posterUrl: String): Movie
    deleteMovie(id: Int!): String
    addActor(movieId: Int!, actorId: Int!): Movie
    deleteActor(movieId: Int!, actorId: Int!): Movie
 }

`;
