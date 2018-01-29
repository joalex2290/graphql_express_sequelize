// import basic modules to run the api server
import { } from 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';

// import models, db connection using sequelize, schema and resolvers
import models from './models';
import typeDefs from './schema';
import resolvers from './resolvers';

const PORT = 3000;
// create the schema using graphql-tools
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
const app = express();

// Url for graphiql
app.use(
    '/graphiql',
    graphiqlExpress({
        endpointURL: '/graphql',
    }),
);

// Url to use the API
app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({ schema, context: { models } }),
);

// start the server and create the db schema
models.sequelize.sync()
    .then(() => app.listen(PORT, () => console.log('listening on port 3000!')));