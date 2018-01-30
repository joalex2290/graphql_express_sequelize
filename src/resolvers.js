export default {
    Class: {
        // get the teachers associated to the class
        teachers: ({ id }, args, { models, teacher }) =>
            models.Class.find({
                where: id
            }).then(class_ => class_.getTeachers()),
        // get the students associated to the class
        students: ({ id }, args, { models }) =>
            models.Class.find({
                where: id
            }).then(class_ => class_.getStudents()),
        // get the books associated to the class
        books: ({ id }, args, { models }) =>
            models.Class.find({
                where: id
            }).then(class_ => class_.getBooks()),
    },
    Query: {
        // get all models from the db
        allClasses: (parent, args, { models }) => models.Class.findAll(),
        allTeachers: (parent, args, { models }) => models.Teacher.findAll(),
        allStudents: (parent, args, { models }) => models.Student.findAll(),
        allBooks: (parent, args, { models }) => models.Book.findAll(),
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
        // associate and remove teachers, students and books to classes
        addTeacherToClass: (parent, args, { models }) => 
            models.Class.find({
                where: args.classId
            }).then(class_ => class_.addTeacher(args.teacherId)),
        addStudentToClass: (parent, args, { models }) => 
            models.Class.find({
                where: args.classId
            }).then(class_ => class_.addStudent(args.studentId)),
        addBookToClass: (parent, args, { models }) => 
            models.Class.find({
                where: args.classId
            }).then(class_ => class_.addBook(args.bookId)),
        removeTeacherFromClass: (parent, args, { models }) =>
            models.Class.find({
                where: args.classId
            }).then(class_ => class_.removeTeachers(args.teacherId)),
        removeStudentFromClass: (parent, args, { models }) =>
            models.Class.find({
                where: args.classId
            }).then(class_ => class_.removeStudents(args.studentId)),
        removeBookFromClass: (parent, args, { models }) =>
            models.Class.find({
                where: args.classId
            }).then(class_ => class_.removeBooks(args.bookId)),

    }
};