export default (sequelize, DataTypes) => {
    const Teacher = sequelize.define('teacher', {
        name: DataTypes.STRING,
    });

    return Teacher;
};