GraphQL API server using express and sequelize (mysql)

HOW TO INSTALL:
    - add mysql container ID to DB_HOST variable in env file
    - do the following steps:
        1. docker exec -it YOUR_CONTAINER mysql -u root -p
        2. Enter password:
        3. ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
        4. ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
        5. SELECT plugin FROM mysql.user WHERE User = 'root';


Database schema:
- Table: classes
    Columns:
    -   name: id
    -   DataType: int
    -   Description: primary key

    -   name: name
    -   DataType: varchar(255)
    -   Description: the name of the class

    -   name: createdAt
    -   DataType: date
    -   Description: timestamp of when was created the record

    -   name: updatedAt
    -   DataType: date
    -   Description: timestamp of when was the last update of the record

- Table: teachers
    Columns:
    -   name: id
    -   DataType: int
    -   Description: primary key

    -   name: name
    -   DataType: varchar(255)
    -   Description: the name of the class

    -   name: createdAt
    -   DataType: date
    -   Description: timestamp of when was created the record

    -   name: updatedAt
    -   DataType: date
    -   Description: timestamp of when was the last update of the record

- Table: students
    Columns:
    -   name: id
    -   DataType: int
    -   Description: primary key

    -   name: name
    -   DataType: varchar(255)
    -   Description: the name of the class

    -   name: createdAt
    -   DataType: date
    -   Description: timestamp of when was created the record

    -   name: updatedAt
    -   DataType: date
    -   Description: timestamp of when was the last update of the record

- Table: books
    Columns:
    -   name: id
    -   DataType: int
    -   Description: primary key

    -   name: name
    -   DataType: varchar(255)
    -   Description: the name of the class

    -   name: createdAt
    -   DataType: date
    -   Description: timestamp of when was created the record

    -   name: updatedAt
    -   DataType: date
    -   Description: timestamp of when was the last update of the record

- Table: class_teacher
    Columns:
    -   name: classId
    -   DataType: int
    -   Description: foreign key, references classes (id)

    -   name: teacherId
    -   DataType: int
    -   Description: foreign key, references teachers (id)

    -   name: createdAt
    -   DataType: date
    -   Description: timestamp of when was created the record

    -   name: updatedAt
    -   DataType: date
    -   Description: timestamp of when was the last update of the record

- Table: class_student
    Columns:
    -   name: classId
    -   DataType: int
    -   Description: foreign key, references classes (id)

    -   name: studentId
    -   DataType: int
    -   Description: foreign key, references students (id)

    -   name: createdAt
    -   DataType: date
    -   Description: timestamp of when was created the record

    -   name: updatedAt
    -   DataType: date
    -   Description: timestamp of when was the last update of the record

- Table: class_book
    Columns:
    -   name: classId
    -   DataType: int
    -   Description: foreign key, references classes (id)

    -   name: bookId
    -   DataType: int
    -   Description: foreign key, references books (id)

    -   name: createdAt
    -   DataType: date
    -   Description: timestamp of when was created the record

    -   name: updatedAt
    -   DataType: date
    -   Description: timestamp of when was the last update of the record

Technologies:
    - nodeJS 6 -> Back-end language
    - express -> nodeJS framework
    - mysql -> database
    - graphql -> query language for the api
    - body-parser -> it's use to parse POST request
    - dotenv -> it's use to create env variables on a .env file
    - graphql-server-express -> it's use to better handling http request
    - graphql-tools -> it's use to create the schema
    - sequelize -> it's the orm for this project
    - docker -> it's use to deploy the application in a container

Challenges:
    - Structure the project correctly
    - Modularity and names best practices
    - n to m relationships with sequelize
    - adding and removing model associations
    - creating the resolvers because the n to m relatioships

URLs:
    - allClasses: get all classes with associated teachers, students and books - http://localhost:3000/graphql?query={allClasses{id%20name%20teachers{id%20name}%20students{id%20name}%20books{id%20name}}}
    - allTeachers: get all teachers - http://localhost:3000/graphql?query={allTeachers{id%20name}}
    - allStudents: get all students - http://localhost:3000/graphql?query={allStudents{id%20name}}
    - allBooks: get all books - http://localhost:3000/graphql?query={allBooks{id%20name}}
    - createTeacher(name): create a new teacher, just name as a parameter - http://localhost:3000/graphiql?query=mutation{createTeacher(name:"test")}
    - createStudent(name): create a new student, just name as a parameter - http://localhost:3000/graphiql?query=mutation{createStudent(name:"test")}
    - createBook(name): create a new book, just name as a parameter - http://localhost:3000/graphiql?query=mutation{createBook(name:"test")}
    - updateTeacher(id,name): update a teacher, just id,name as parameters - http://localhost:3000/graphiql?query=mutation{updateTeacher(id:7,newName:%22test2%22)}
    - updateStudent(id,name): update a student, just id,name as parameters - http://localhost:3000/graphiql?query=mutation{updateStudent(id:6,newName:%22test_Student%22)}
    - updateBook(id,name): update a book, just id,name as parameters - http://localhost:3000/graphiql?query=mutation{updateBook(id:6,newName:%22Test Book%22)}
    - deleteTeacher(id): delete a new teacher, just id as a parameter - http://localhost:3000/graphiql?query=mutation{deleteTeacher(id:6)}
    - deleteStudent(id): delete a new student, just id as a parameter - http://localhost:3000/graphiql?query=mutation{deleteStudent(id:6)}
    - deleteBook(id): delete a new book, just id as a parameter - http://localhost:3000/graphiql?query=mutation{deleteBook(id:6)}
    - addTeacherToClass(classid,teacherid): add a teacher to a class - http://localhost:3000/graphiql?query=mutation{addTeacherToClass(classId:1,teacherId:6)}
    - addStudentToClass(classid,studentid): add a student to a class - http://localhost:3000/graphiql?query=mutation{addStudentToClass(classId:1,studentId:6)}
    - addBookToClass(classid,bookid): add a book to a class - http://localhost:3000/graphiql?query=mutation{addBookToClass(classId:1,bookId:6)}
    - removeTeacherFromClass(classid,teacherid): remove a teacher from a class - http://localhost:3000/graphiql?query=mutation{removeTeacherFromClass(classId:1,teacherId:6)}
    - removeStudentFromClass(classid,studentid): remove a student from a class - http://localhost:3000/graphiql?query=mutation{removeStudentFromClass(classId:1,studentId:6)}
    - removeBookFromClass(classid,bookid): remove a book from a class - http://localhost:3000/graphiql?query=mutation{removeBookFromClass(classId:1,bookId:6)}


        