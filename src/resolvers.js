export default {
    Class: {
        teachers: ({ id }, args, { models }) =>
            models.ClassTeacher.findAll({
                where: {
                    class_id: id,
                },
            }),
        students: ({ id }, args, { models }) =>
            models.ClassStudent.findAll({
                where: {
                    class_id: id,
                },
            }),
        books: ({ id }, args, { models }) =>
            models.ClassBook.findAll({
                where: {
                    class_id: id,
                },
            }),
    },
    ClassTeacher: {
        teacher: ({ teacherId }, args, { models }) =>
            models.Teacher.findOne({
                where: {
                    id: teacherId,
                },
            }),
    },
    ClassStudent: {
        student: ({ studentId }, args, { models }) =>
            models.Student.findOne({
                where: {
                    id: studentId,
                },
            }),
    },
    ClassBook: {
        book: ({ bookId }, args, { models }) =>
            models.Book.findOne({
                where: {
                    id: bookId,
                },
            }),
    },
    Query: {
        allClasses: (parent, args, { models }) => models.Class.findAll(),
        allTeachers: (parent, args, { models }) => models.Teacher.findAll(),
        allStudents: (parent, args, { models }) => models.Student.findAll(),
        allBooks: (parent, args, { models }) => models.Book.findAll(),
    },
    Mutation: {
        createClass: (parent, args, { models }) => models.Class.create(args),
        createTeacher: (parent, args, { models }) => models.Teacher.create(args),
        createStudent: (parent, args, { models }) => models.Student.create(args),
        createBook: (parent, args, { models }) => models.Book.create(args),
        addTeacherToClass: (parent, args, { models }) => models.ClassTeacher.create(args),
    }
};