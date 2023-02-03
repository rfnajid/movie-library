import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import * as cors from 'cors';
import typeDefs from './graphql/schemas';
import resolvers from './graphql/resolvers';
import context from './graphql/context';
import router from './route';
import path = require('path');

require('dotenv').config();

const PORT = parseInt(process.env.APP_PORT);
const GRAPHQL_PATH= process.env.GRAPHQL_PATH!;

const app = express();
app.use(cors());

async function startApolloServer(){

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    introspection: false
  });
  
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: GRAPHQL_PATH });

  startExpress();
}

function startExpress(){

  app.set('views', path.join(__dirname, '/views'));
  app.set('view engine', "ejs");
  app.use(router);

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

startApolloServer();
