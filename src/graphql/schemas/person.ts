
export const personSchema = `#graphql

 type Person {
   id: Int!
   name: String!
   bio: String
   photoUrl: String
   actorIn: [Movie]
   authorIn: [Movie]
 }

 extend type Query {
   
   "Get all person"
   findAllPerson: [Person]
   
   "get one person by id"
   findOnePerson(id: Int!): Person
 }

 extend type Mutation {
   
   "Create a new Person. Person can be author or actor"
   createPerson(name: String!, bio: String, photoUrl: String): Person @isAuthenticated
   
   "Update existing person"
   updatePerson(id: Int, name: String, bio: String, photoUrl: String): Person @isAuthenticated
   
   "Delete person"
   deletePerson(id: Int!): String @isAuthenticated
 }

`;
