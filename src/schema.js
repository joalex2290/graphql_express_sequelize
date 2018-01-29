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
    teacher: Teacher!
  }
  type ClassStudent {
    id: Int!
    classId: Int!
    student: Student!
  }
  type ClassBook {
    id: Int!
    classId: Int!
    book: Book!
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
    addTeacherToClass(classId: Int!,teacherId: Int!): ClassTeacher!
  }
`;