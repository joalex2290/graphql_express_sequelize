export default {
    Class: {
        // get the teachers associated to the class
        teachers: ({ id }, args, { db, teacher }) => 
                    db.Class.find({where: id})
                    .then(response => response.getTeachers()),
        // get the students associated to the class
        students: ({ id }, args, { db }) => 
                    db.Class.find({where: id})
                    .then(response => response.getStudents()),
        // get the books associated to the class
        books: ({ id }, args, { db }) =>
                    db.Class.find({where: id})
                    .then(response => response.getBooks()),
    },
    Query: {
        // get all db from the db
        classes: (parent, args, { db }) => db.Class.findAll(),
        teachers: (parent, args, { db }) => db.Teacher.findAll(),
        students: (parent, args, { db }) => db.Student.findAll(),
        books: (parent, args, { db }) => db.Book.findAll(),
        book: (parent, { id }, { db }) => db.Book.find({where: id }),
    },
    Mutation: {
        // create db on the db
        createClass: (parent, args, { db }) => db.Class.create(args),
        createTeacher: (parent, args, { db }) => db.Teacher.create(args),
        createStudent: (parent, args, { db }) => db.Student.create(args),
        createBook: (parent, args, { db }) => db.Book.create(args),
        // update db on the db
        updateClass: (parent, { id, name }, { db }) => db.Class.update({ name: name }, { where: { id } }),
        updateTeacher: (parent, { id, name }, { db }) => db.Teacher.update({ name: name }, { where: { id } }),
        updateStudent: (parent, { id, name }, { db }) => db.Student.update({ name: name }, { where: { id } }),
        updateBook: (parent, { id, name }, { db }) => db.Book.update({ name: name }, { where: { id } }),
        // delete db on the db
        deleteClass: (parent, args, { db }) => db.Class.destroy({ where: args }),
        deleteTeacher: (parent, args, { db }) => db.Teacher.destroy({ where: args }),
        deleteStudent: (parent, args, { db }) => db.Student.destroy({ where: args }),
        deleteBook: (parent, args, { db }) => db.Book.destroy({ where: args }),
        // associate and remove teachers, students and books to classes
        addTeacherToClass: (parent, { classId, teacherId } , { db }) => 
            db.Class.find({where: classId})
            .then(response => response.addTeacher(teacherId)),
        addStudentToClass: (parent, { classId, studentId }, { db }) => 
            db.Class.find({ where: classId})
            .then(response => response.addStudent(studentId)),
        addBookToClass: (parent, { classId, bookId }, { db }) => 
            db.Class.find({ where: classId})
            .then(response => response.addBook(bookId)),
        removeTeacherFromClass: (parent, { classId, teacherId }, { db }) => 
            db.Class.find({ where: classId})
            .then(response => response.removeTeachers(teacherId)),
        removeStudentFromClass: (parent, { classId, studentId }, { db }) =>
            db.Class.find({where: classId})
            .then(response => response.removeStudents(studentId)),
        removeBookFromClass: (parent, { classId, bookId }, { db }) =>
            db.Class.find({where: classId})
            .then(response => response.removeBooks(bookId)),

    }
};