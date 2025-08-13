"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    printName() {
        return this.name;
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("Meo Meo");
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("Gâu Gâu");
    }
}
let cat = new Cat("Mèo");
console.log(`${cat.printName()}`);
cat.makeNoise();
let dog = new Dog("Hoàn");
console.log(`${dog.printName()}`);
dog.makeNoise();
