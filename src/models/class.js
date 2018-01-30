export default (sequelize, DataTypes) => {
    const Class = sequelize.define('class', {
        name: DataTypes.STRING,
    });

    Class.associate = (models) => {
        // n to many teacher
        Class.belongsToMany(models.Teacher, { through: 'class_teacher' });
        // n to many student
        Class.belongsToMany(models.Student, { through: 'class_student' });
        // n to many book
        Class.belongsToMany(models.Book, { through: 'class_book' });
    };

    return Class;
};