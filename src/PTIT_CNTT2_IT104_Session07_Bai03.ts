abstract class Animal{
    name: string;
    constructor(name: string){
        this.name = name;
    }

    abstract makeNoise(): void;
    printName(): string{
        return this.name;
    }
}

class Cat extends Animal{
    constructor(name: string){
        super(name);
    }

    makeNoise(): void{
        console.log("Meo Meo");
    }
}

class Dog extends Animal{
    constructor(name: string){
        super(name);
    }

    makeNoise(): void{
        console.log("Gâu Gâu");
    }
}

let cat = new Cat("Mèo");
console.log(`${cat.printName()}`);
cat.makeNoise();

let dog = new Dog("Hoàn");
console.log(`${dog.printName()}`);
dog.makeNoise();

