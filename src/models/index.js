import Sequelize from 'sequelize';

const sequelize = new Sequelize(
    'test',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql',
    },
);

sequelize.authenticate()
    .then( err => console.log('Connection has been established successfully.'))
    .catch(err => console.log('Unable to connect to the database:', err));

const db = {
};

db.sequelize = sequelize;

export default db;