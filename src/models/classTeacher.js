export default (sequelize, DataTypes) => {
    const ClassTeacher = sequelize.define('class_teacher');

    return ClassTeacher;
};