class Employee{
    public name: string;
    protected company: string;
    private phone: string;
    constructor(name: string, company: string, phone: string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfor(): void{
        console.log(`Name: ${this.name} - Company: ${this.company} - Phone: ${this.phone}`);
        
    }

    getPhone(): string{
        return this.phone;
    }
}

class Manager extends Employee{
    teamSize: number;
    constructor(teamSize: number,name: string, company: string, phone: string){
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfor(): void {
        console.log(`Name: ${this.name} - Company: ${this.company} - Phone: ${this.getPhone()} - TeamSize: ${this.teamSize}`);
        
    }
}

let manager = new Manager(10,"Quang", "Rikkei", "0987654321");
manager.printInfor();