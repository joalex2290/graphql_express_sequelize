// import libraries to run the api server
import { } from 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
// import models and db connection (SEQUELIZE)
import db from './db';

// import libraries to use (GRAPHQL)
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
// import type definitions and resolvers (GRAPHQL)
import typeDefs from './typeDefs';
import resolvers from './resolvers';
// create the schema using graphql-tools (GRAPHQL)
const schema = makeExecutableSchema({ typeDefs, resolvers });

const PORT = 3000;
const app = express();

// RESTFUL API 
app.get('/api/v1/classes', (req, res) => db.Class.findAll()
    .then((classes) => res.status(200).send(classes))
    .catch((error) => res.status(400).send(error))
);

// GRAPHQL API
app.use('/api/v2',bodyParser.json(),graphqlExpress({ schema, context: { db } }));

// graphiql URL that will use the API URL endpoint
app.use('/graphiql', graphiqlExpress({ endpointURL: '/api/v2', }));

// run db connection and the application
db.sequelize.sync().then(() => app.listen(PORT, () => console.log('listening on port 3000!')));