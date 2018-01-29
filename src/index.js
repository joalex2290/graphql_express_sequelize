import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import models from './models';

const PORT = 3000;

const app = express();

app.use(
    '/graphiql',
    graphiqlExpress({
        endpointURL: '/graphql',
    }),
);

models.sequelize.sync()
    .then(() => app.listen(PORT, () => console.log('listening on port 3000!')));