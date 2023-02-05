import { movieSchema } from "./movie";
import { personSchema } from "./person";
import { userSchema } from "./user";

export const rootSchema = `#graphql

directive @isAuthenticated on FIELD_DEFINITION

 type Query {
     root: String
 }
 type Mutation {
     root: String
 }

`;

export const protectedSchema = [personSchema, movieSchema];

export const publicSchema = [userSchema];