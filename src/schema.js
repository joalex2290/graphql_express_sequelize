export default `
  type Class {
    id: Int!
    name: String!
    createdAt: String!
    updatedAt: String! 
    teachers: [Teacher!]!
    students: [Student!]!
    books: [Book!]!
  }
  type Teacher {
    id: Int!
    name: String!
    createdAt: String!
    updatedAt: String! 
    classes: [Class!]!
  }
  type Student {
    id: Int!
    name: String!
    createdAt: String!
    updatedAt: String! 
    classes: [Class!]!
  }
  type Book {
    id: Int!
    name: String!
    createdAt: String!
    updatedAt: String! 
    classes: [Class!]!
  }
  type Query {
    allClasses: [Class!]!
    allTeachers: [Teacher!]!
    allStudents: [Student!]!
    allBooks: [Book!]!
  }
`;