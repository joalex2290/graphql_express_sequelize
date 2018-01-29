export default (sequelize, DataTypes) => {
    const Teacher = sequelize.define('teacher', {
        name: DataTypes.STRING,
    });

    Teacher.associate = (models) => {
        // 1 to many class teachers
        Teacher.hasMany(models.ClassTeacher, {
            foreignKey: 'teacher_id',
        });
    };

    return Teacher;
};