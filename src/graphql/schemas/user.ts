
export const userSchema = `#graphql

 type User {
     id: Int!
     name: String!
     email: String!
     password: String!
 }

 extend type Mutation {
     register(name: String!, email: String!, password: String!): User
     login(email: String!, password:String!): LoginResponse
 }

 type LoginResponse {
    user: User!
    token: String!
 }
`;
