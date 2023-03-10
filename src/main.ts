import resolvers from './graphql/resolvers';
import context from './graphql/context';
import router from './route';
import path = require('path');
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { createServer } from 'http';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser = require('body-parser');
import express = require('express');
import { protectedSchema, publicSchema, rootSchema } from './graphql/schemas';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { authDirective } from './utils/auth-directive';

require('dotenv').config();

const PORT = parseInt(process.env.APP_PORT);

async function startServer(){

  const app = express();
  const httpServer = createServer(app);

  const applyAuthSchemaTransform = authDirective();

  let schema = makeExecutableSchema({
    resolvers,
    typeDefs: [rootSchema, publicSchema, protectedSchema],
  });
  schema = applyAuthSchemaTransform(schema);
  

  const apolloServer = new ApolloServer({
    schema: schema,
    introspection: true,
    plugins: [
      ApolloServerPluginLandingPageDisabled(),
      ApolloServerPluginDrainHttpServer({ httpServer })
    ],

  });
  
  await apolloServer.start();


  app.set('views', path.join(__dirname, '/views'));
  app.set('view engine', "ejs");
  app.use(
    router,
    cors(),
    bodyParser.json(),
    expressMiddleware(apolloServer, {
      context: context
    })
  );

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

startServer();

