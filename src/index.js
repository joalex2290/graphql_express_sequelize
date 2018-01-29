import { } from 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import models from './models';
import typeDefs from './schema';
import resolvers from './resolvers';

const PORT = 3000;
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
const app = express();


app.use(
    '/graphiql',
    graphiqlExpress({
        endpointURL: '/graphql',
    }),
);

app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({ schema, context: { models } }),
);

models.sequelize.sync()
    .then(() => app.listen(PORT, () => console.log('listening on port 3000!')));