export default {
    Class: {
        // get the teachers associated to the class
        teachers: ({ id }, args, { models }) =>
            models.ClassTeacher.findAll({
                where: {
                    class_id: id,
                },
            }),
        // get the students associated to the class
        students: ({ id }, args, { models }) =>
            models.ClassStudent.findAll({
                where: {
                    class_id: id,
                },
            }),
        // get the books associated to the class
        books: ({ id }, args, { models }) =>
            models.ClassBook.findAll({
                where: {
                    class_id: id,
                },
            }),
    },
    ClassTeacher: {
        // get the teacher associated to the class
        teacher: ({ teacher_id }, args, { models }) =>
            models.Teacher.findOne({
                where: {
                    id: teacher_id,
                },
            }),
    },
    ClassStudent: {
        // get the student associated to the class
        student: ({ student_id }, args, { models }) =>
            models.Student.findOne({
                where: {
                    id: student_id,
                },
            }),
    },
    ClassBook: {
        // get the book associated to the class
        book: ({ bookId }, args, { models }) =>
            models.Book.findOne({
                where: {
                    id: book_id,
                },
            }),
    },
    Query: {
        // list models from the db
        allClasses: (parent, args, { models }) => models.Class.findAll(),
        allTeachers: (parent, args, { models }) => models.Teacher.findAll(),
        allStudents: (parent, args, { models }) => models.Student.findAll(),
        allBooks: (parent, args, { models }) => models.Book.findAll(),
        allClassTeacher: (parent, args, { models }) => models.ClassTeacher.findAll(),
    },
    Mutation: {
        // create models on the db
        createClass: (parent, args, { models }) => models.Class.create(args),
        createTeacher: (parent, args, { models }) => models.Teacher.create(args),
        createStudent: (parent, args, { models }) => models.Student.create(args),
        createBook: (parent, args, { models }) => models.Book.create(args),
        // update models on the db
        updateClass: (parent, { id, newName }, { models }) => models.Class.update({ name: newName }, { where: { id } }),
        updateTeacher: (parent, { id, newName }, { models }) => models.Teacher.update({ name: newName }, { where: { id } }),
        updateStudent: (parent, { id, newName }, { models }) => models.Student.update({ name: newName }, { where: { id } }),
        updateBook: (parent, { id, newName }, { models }) => models.Book.update({ name: newName }, { where: { id } }),
        // delete models on the db
        deleteClass: (parent, args, { models }) => models.Class.destroy({ where: args }),
        deleteTeacher: (parent, args, { models }) => models.Teacher.destroy({ where: args }),
        deleteStudent: (parent, args, { models }) => models.Student.destroy({ where: args }),
        deleteBook: (parent, args, { models }) => models.Book.destroy({ where: args }),
        // actions for pivot tables on the db
        addTeacherToClass: (parent, args, { models }) => models.ClassTeacher.create(args),
        addStudentToClass: (parent, args, { models }) => models.StudentTeacher.create(args),
        addBookToClass: (parent, args, { models }) => models.ClassBook.create(args),
        removeTeacherToClass: (parent, args, { models }) => models.ClassTeacher.destroy({ where: args }),
        removeStudentToClass: (parent, args, { models }) => models.StudentTeacher.destroy({ where: args }),
        removeBookToClass: (parent, args, { models }) => models.ClassBook.destroy({ where: args }),
    }
};