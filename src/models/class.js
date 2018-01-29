export default (sequelize, DataTypes) => {
    const Class = sequelize.define('class', {
        name: DataTypes.STRING,
    });

    Class.associate = (models) => {
        // 1 to many with teacher
        Class.hasMany(models.ClassTeacher, {
            foreignKey: 'classId',
        });
        // 1 to many with student
        Class.hasMany(models.ClassStudent, {
            foreignKey: 'classId',
        });
        // 1 to many with book
        Class.hasMany(models.ClassBook, {
            foreignKey: 'classId',
        });
    };

    return Class;
};