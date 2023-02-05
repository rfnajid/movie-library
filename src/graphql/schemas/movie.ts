
export const movieSchema = `#graphql

 type Movie {
     id: Int!
     title: String!
     description: String
     posterUrl: String
     actors: [Person]
     authors: [Person]
 }

 extend type Query {
    findAllMovie: [Movie]
    findOneMovie(id: Int!): Movie
 }

 extend type Mutation {
    createMovie(title: String!, description: String, posterUrl: String): Movie @isAuthenticated
    updateMovie(id: Int, title: String, description: String, posterUrl: String): Movie @isAuthenticated
    deleteMovie(id: Int!): String @isAuthenticated
    addActor(movieId: Int!, actorId: Int!): Movie @isAuthenticated
    deleteActor(movieId: Int!, actorId: Int!): Movie @isAuthenticated
    addAuthor(movieId: Int!, authorId: Int!): Movie @isAuthenticated
    deleteAuthor(movieId: Int!, authorId: Int!): Movie @isAuthenticated
 }

`;
