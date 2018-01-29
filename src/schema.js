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
    teacher: [Teacher!]!
  }
  type ClassStudent {
    id: Int!
    classId: Int!
    student: [Student!]!
  }
  type ClassBook {
    id: Int!
    classId: Int!
    book: [Book!]!
  }
  type Query {
    allClasses: [Class!]!
    allTeachers: [Teacher!]!
    allStudents: [Student!]!
    allBooks: [Book!]!
  }
  type Mutation {
    createTeacher(name: String!): Teacher!
  }
`;