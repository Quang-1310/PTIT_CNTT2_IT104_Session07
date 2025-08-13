"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    speed;
    id;
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        if (this.speed <= 0) {
            console.log("Vận tốc = 0");
        }
        else {
            --this.speed;
            console.log("Giảm tốc thành công");
        }
    }
    speedUp() {
        ++this.speed;
        console.log("Tăng tốc thành công");
    }
    showSpeed() {
        return this.speed;
    }
}
class Bicycle extends Vehicle {
    gear;
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfor() {
        console.log(`Name: ${this.name} - Speed: ${this.speed} - ID: ${this.id} - Gear: ${this.gear}`);
    }
}
let bicycle = new Bicycle("SH", 50, 1, 100);
bicycle.slowDown();
console.log(`Vận tốc hiện tại: ${bicycle.showSpeed()}`);
bicycle.speedUp();
console.log(`Vận tốc hiện tại: ${bicycle.showSpeed()}`);
bicycle.showInfor();
