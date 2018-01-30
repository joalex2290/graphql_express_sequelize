export default (sequelize, DataTypes) => {
    const Student = sequelize.define('student', {
        name: DataTypes.STRING,
    });

    return Student;
};