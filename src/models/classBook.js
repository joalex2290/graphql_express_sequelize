export default (sequelize, DataTypes) => {
    const ClassBook = sequelize.define('class_book');
    
    return ClassBook;
};