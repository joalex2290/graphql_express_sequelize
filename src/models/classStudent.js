export default (sequelize, DataTypes) => {
    const ClassStudent = sequelize.define('class_student');

    return ClassStudent;
};