class Vehicle{
    protected name: string;
    protected speed: number;
    protected id: number;
    constructor(name: string, speed: number, id: number){
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(): void{
        if(this.speed <= 0){
            console.log("Vận tốc = 0");
            
        }
        else{
            --this.speed;
            console.log("Giảm tốc thành công");
            
        }
    }

    speedUp(): void{
        ++this.speed;
        console.log("Tăng tốc thành công");
        
    }

    showSpeed(): number{
        return this.speed;
    }
}

class Bicycle extends Vehicle{
    gear: number;
    constructor(name: string, speed: number, id: number, gear: number){
        super(name, speed, id);
        this.gear = gear;
    }

    showInfor(): void{
        console.log(`Name: ${this.name} - Speed: ${this.speed} - ID: ${this.id} - Gear: ${this.gear}`);
        
    }
}

let bicycle = new Bicycle("SH", 50,1,100);
bicycle.slowDown();
console.log(`Vận tốc hiện tại: ${bicycle.showSpeed()}`);
bicycle.speedUp();
console.log(`Vận tốc hiện tại: ${bicycle.showSpeed()}`);
bicycle.showInfor();