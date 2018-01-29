export default (sequelize, DataTypes) => {
    const Book = sequelize.define('book', {
        name: DataTypes.STRING,
    });

    Book.associate = (models) => {
        // 1 to many class books
        Book.hasMany(models.ClassBook, {
            foreignKey: 'book_id',
        });
    };

    return Book;
};