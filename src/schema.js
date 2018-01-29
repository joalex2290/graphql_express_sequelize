export default `
  type Class {
    id: Int!
    name: String!
    teachers: [Teacher!]!
    students: [Student!]!
    books: [Book!]!
  }
  type Teacher {
    id: Int!
    name: String!
  }
  type Student {
    id: Int!
    name: String!
  }
  type Book {
    id: Int!
    name: String!
  }
  type ClassTeacher {
    id: Int!
    classId: Int!
    teacher_id: Int!
    teacher: Teacher!
  }
  type ClassStudent {
    id: Int!
    classId: Int!
    student_id: Int!
    student: Student!
  }
  type ClassBook {
    id: Int!
    classId: Int!
    book_id: Int!
    book: Book!
  }
  type Query {
    allClasses: [Class!]!
    allTeachers: [Teacher!]!
    allStudents: [Student!]!
    allBooks: [Book!]!
    allClassTeacher: [ClassTeacher!]!
  }
  type Mutation {
    createClass(name: String!): Class!
    createTeacher(name: String!): Teacher!
    createStudent(name: String!): Student!
    createBook(name: String!): Book!
    updateClass(id: Int!, newName: String!): [Int!]!
    updateTeacher(id: Int!, newName: String!): [Int!]!
    updateStudent(id: Int!, newName: String!): [Int!]!
    updateBook(id: Int!, newName: String!): [Int!]!
    deleteClass(id: Int!): Int!
    deleteTeacher(id: Int!): Int!
    deleteStudent(id: Int!): Int!
    deleteBook(id: Int!): Int!
    addTeacherToClass(class_id: Int!,teacher_id: Int!): ClassTeacher!
    addStudentToClass(class_id: Int!,student_id: Int!): ClassStudent!
    addBookToClass(class_id: Int!,book_id: Int!): ClassBook!
    removeTeacherToClass(class_id: Int!,teacher_id: Int!): Int!
    removeStudentToClass(class_id: Int!,student_id: Int!): Int!
    removeBookToClass(class_id: Int!,book_id: Int!): Int!
  }
`;