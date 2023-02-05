
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
    findAllPerson: [Person]
    findOnePerson(id: Int!): Person
 }

 extend type Mutation {
    createPerson(name: String!, bio: String, photoUrl: String): Person @isAuthenticated
    updatePerson(id: Int, name: String, bio: String, photoUrl: String): Person @isAuthenticated
    deletePerson(id: Int!): String @isAuthenticated
 }

`;
