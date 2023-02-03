import userType from './user';

const rootType = `#graphql
 type Query {
     root: String
 }
 type Mutation {
     root: String
 }

`;

export default [rootType, userType];