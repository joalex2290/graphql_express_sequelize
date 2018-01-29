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
};