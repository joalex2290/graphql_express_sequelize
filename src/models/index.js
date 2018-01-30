import Sequelize from 'sequelize';

// set up the connection to the database
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    },
);

// get all the models
const db = {
    Class: sequelize.import('./Class'),
    Teacher: sequelize.import('./Teacher'),
    Student: sequelize.import('./Student'),
    Book: sequelize.import('./Book'),
};

// associate models if a relationship with another model exist
Object.keys(db).forEach((modelName) => {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;

export default db;