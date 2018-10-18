export default (sequelize, DataTypes) => {
    const Book = sequelize.define('book', {
        // model attributes and data type
        name: DataTypes.STRING,
    });

    // model associations
    Book.associate = (models) => {
        Book.belongsToMany(models.Class, { through: 'class_book' });
    }
    return Book;
};