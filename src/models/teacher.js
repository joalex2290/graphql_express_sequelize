export default (sequelize, DataTypes) => {
    const Teacher = sequelize.define('teacher', {
        // model attributes and data type
        name: DataTypes.STRING,
    });
    // model associations
    Teacher.associate = (models) => {
        Teacher.belongsToMany(models.Class, { through: 'class_teacher' });
    }

    return Teacher;
};