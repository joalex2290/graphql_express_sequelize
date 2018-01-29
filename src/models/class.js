export default (sequelize, DataTypes) => {
    const Class = sequelize.define('class', {
        name: DataTypes.STRING,
    });

    Class.associate = (models) => {
        // 1 to many teacher
        Class.hasMany(models.ClassTeacher, {
            foreignKey: 'class_id',
        });
        // 1 to many student
        Class.hasMany(models.ClassStudent, {
            foreignKey: 'class_id',
        });
        // 1 to many book
        Class.hasMany(models.ClassBook, {
            foreignKey: 'class_id',
        });
    };

    return Class;
};