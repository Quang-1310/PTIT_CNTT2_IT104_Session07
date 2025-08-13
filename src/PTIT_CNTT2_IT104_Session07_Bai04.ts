abstract class Person{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    abstract displayInfor(): void;
}

class Student extends Person{
    id: number;
    constructor(name: string, id: number){
        super(name);
        this.id = id;
    }

    displayInfor(): void {
        console.log(`ID: ${this.id} - Name: ${this.name}`);
        
    }
}

class Teacher extends Person{
    subject: string;
    constructor(name: string, subject: string){
        super(name);
        this.subject = subject;
    }

    displayInfor(): void {
        console.log(`Name: ${this.name} - Subject: ${this.subject}`);
        
    }
}

let student = new Student("Quang", 1);
student.displayInfor();

let teacher = new Teacher("Mr.An","Typescript");
teacher.displayInfor();