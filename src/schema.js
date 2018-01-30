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
    classes: [Class!]!
  }
  type Student {
    id: Int!
    name: String!
    classes: [Class!]!
  }
  type Book {
    id: Int!
    name: String!
    classes: [Class!]!
  }
  type Query {
    allClasses: [Class!]!
    allTeachers: [Teacher!]!
    allStudents: [Student!]!
    allBooks: [Book!]!
  }
  type Mutation {
    createClass(name: String!): Class!
    createTeacher(name: String!): Teacher!
    createStudent(name: String!): Student!
    createBook(name: String!): Book!
    updateClass(id: Int!, newName: String!): Boolean!
    updateTeacher(id: Int!, newName: String!): Boolean!
    updateStudent(id: Int!, newName: String!): Boolean!
    updateBook(id: Int!, newName: String!): Boolean!
    deleteClass(id: Int!): Boolean!
    deleteTeacher(id: Int!): Boolean!
    deleteStudent(id: Int!): Boolean!
    deleteBook(id: Int!): Boolean!
    addTeacherToClass(classId: Int!, teacherId: Int!): Boolean!
    addStudentToClass(classId: Int!, studentId: Int!): Boolean!
    addBookToClass(classId: Int!, bookId: Int!): Boolean!
    removeTeacherFromClass(classId: Int!, teacherId: Int!): Boolean!
    removeStudentFromClass(classId: Int!, studentId: Int!): Boolean!
    removeBookFromClass(classId: Int!, bookId: Int!): Boolean!
  }
`;