import Sequelize from 'sequelize';

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    },
);

sequelize.authenticate()
    .then( err => console.log('Connection has been established successfully.'))
    .catch(err => console.log('Unable to connect to the database:', err));

const db = {
    Class: sequelize.import('./class'),
    Teacher: sequelize.import('./teacher'),
    Student: sequelize.import('./student'),
    Book: sequelize.import('./book'),
    ClassTeacher: sequelize.import('./classTeacher'),
    ClassStudent: sequelize.import('./classStudent'),
    ClassBook: sequelize.import('./classBook'),
};

Object.keys(db).forEach((modelName) => {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;

export default db;