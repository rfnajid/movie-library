
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
   "Get all movies"
   findAllMovie: [Movie]
   
   "Get one movie by id"
   findOneMovie(id: Int!): Movie
 }

 extend type Mutation {
   
   "Insert New Movie"
   createMovie(title: String!, description: String, posterUrl: String): Movie @isAuthenticated
   
   "Update existing movie"
   updateMovie(id: Int, title: String, description: String, posterUrl: String): Movie @isAuthenticated
   
   "Delete movie by id"
   deleteMovie(id: Int!): String @isAuthenticated
   
   "Add an actor to a movie"
   addActor(movieId: Int!, actorId: Int!): Movie @isAuthenticated
   
   "Delete an actor from a movie"
   deleteActor(movieId: Int!, actorId: Int!): Movie @isAuthenticated
   
   "Add an author to a movie"
   addAuthor(movieId: Int!, authorId: Int!): Movie @isAuthenticated
   
   "Delete an author from a movie"
   deleteAuthor(movieId: Int!, authorId: Int!): Movie @isAuthenticated
 }

`;
