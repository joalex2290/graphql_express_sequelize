// import basic modules to run the api server
import { } from 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';

// import models, db connection using sequelize, schema and resolvers
import db from './db';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const PORT = 3000;
// create the schema using graphql-tools
const schema = makeExecutableSchema({typeDefs,resolvers});
const app = express();

// Url for graphiql
app.use('/graphiql',graphiqlExpress({endpointURL: '/api/v1',}));

// Url to use the API
app.use('/api/v1',bodyParser.json(),graphqlExpress({ schema, context: { db } }));

// start the server and create the db schema
db.sequelize.sync().then(() => app.listen(PORT, () => console.log('listening on port 3000!')));