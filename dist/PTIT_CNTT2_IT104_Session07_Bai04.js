"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    id;
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfor() {
        console.log(`ID: ${this.id} - Name: ${this.name}`);
    }
}
class Teacher extends Person {
    subject;
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfor() {
        console.log(`Name: ${this.name} - Subject: ${this.subject}`);
    }
}
let student = new Student("Quang", 1);
student.displayInfor();
let teacher = new Teacher("Mr.An", "Typescript");
teacher.displayInfor();
