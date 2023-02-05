import { personSchema } from "./person";
import { userSchema } from "./user";

const rootSchema = `#graphql
 type Query {
     root: String
 }
 type Mutation {
     root: String
 }

`;

export default [rootSchema, userSchema, personSchema];