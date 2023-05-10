// class Student{
//     constructor(name,age,rollNo){
//         this.name = name;
//         this.age = age;
//         this.rollNo = rollNo;
//     }
//     print(sch){
//         console.log(this.name + " age is " +this.age+ " school is " +sch)
//     }

// }

// // const student = new Student('siva','23','1');

// // console.log(student);
// // student.print('schoolname');

// class School extends Student{
//     constructor(name,student_name,student_age,student_rollno){
//         super(student_name,student_age,student_rollno)
//         this.school = name;
        
//     }
// }
// const student1 = new School("school","siva","23","1");
// console.log(student1);


// function Student(name,age,rollno){
//     this.name = name;
//     this.age = age;
//     this.rollno = rollno;
// }
// const student1 = new Student("john","14","1");
// console.log(student1);


//copy by value
//copy by reference

// const user = {
//     name:'siva',
//     age:'25',
//     email:"siva@gmail.com"
// }
// // const user1 = user;
// // console.log(user1);

// const user2 = {
//     ...user,
//     print(){
//         console.log(this.name)
//     }
// };
// //console.log(user2);
// user2.print();

//lexical scoping


// let name = 'john';//global veriable

// function greetings(){
//     let message = "hi";//local veriable
//     console.log(message + "" + name)
// }
// greetings();

//closure

function greeting(){
    let message = " Hi";
    return message;

}

let hi = greeting();
console.log(hi);

// Sure, here are some short answers to JavaScript lexical questions:

// Lexical scoping in JavaScript refers to the way variables are resolved in nested functions based on their location in the code.

// JavaScript uses function scope to handle variable scope.

// Global scope refers to variables that are accessible from anywhere in the code, while local scope refers to variables that are only accessible within a specific function.

// Hoisting is the behavior of moving variable and function declarations to the top of their respective scopes during the compilation phase.

// Function declarations are hoisted to the top of their scope, while function expressions are not hoisted.

// Closure in JavaScript is the ability of a function to retain access to variables in its outer (enclosing) function scope even after the outer function has returned.

// Closure works by creating a persistent reference to the outer function scope through the use of a nested function, even after the outer function has completed its execution.