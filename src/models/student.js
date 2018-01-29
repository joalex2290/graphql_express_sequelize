export default (sequelize, DataTypes) => {
    const Student = sequelize.define('student', {
        name: DataTypes.STRING,
    });

    Student.associate = (models) => {
        // 1 to many class student
        Student.hasMany(models.ClassStudent, {
            foreignKey: 'student_id',
        });
    };

    return Student;
};