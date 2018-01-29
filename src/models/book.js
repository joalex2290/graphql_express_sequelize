export default (sequelize, DataTypes) => {
    const Book = sequelize.define('book', {
        name: DataTypes.STRING,
    });

    return Book;
};