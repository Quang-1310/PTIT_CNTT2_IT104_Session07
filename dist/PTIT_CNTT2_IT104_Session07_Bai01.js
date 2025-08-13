"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    company;
    phone;
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfor() {
        console.log(`Name: ${this.name} - Company: ${this.company} - Phone: ${this.phone}`);
    }
    getPhone() {
        return this.phone;
    }
}
class Manager extends Employee {
    teamSize;
    constructor(teamSize, name, company, phone) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfor() {
        console.log(`Name: ${this.name} - Company: ${this.company} - Phone: ${this.getPhone()} - TeamSize: ${this.teamSize}`);
    }
}
let manager = new Manager(10, "Quang", "Rikkei", "0987654321");
manager.printInfor();
