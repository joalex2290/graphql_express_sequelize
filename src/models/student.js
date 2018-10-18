export default (sequelize, DataTypes) => {
    const Student = sequelize.define('student', {
        // model attributes and data type
        name: DataTypes.STRING,
    });
    // model associations
    Student.associate = (models) => {
        Student.belongsToMany(models.Class, { through: 'class_student' });
    }

    return Student;
};