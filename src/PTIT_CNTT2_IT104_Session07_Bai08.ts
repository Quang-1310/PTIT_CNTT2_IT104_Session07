class History{
    newBalance: number;
    oldBlance: number;
    constructor(newBlance: number, oldBlance: number){
        this.newBalance = newBlance;
        this.oldBlance = oldBlance;
    }
    
}
class Account{
    public accountNumber: number;
    protected balance: number;
    protected history: History[] = [];
    protected status: boolean;
    constructor(accountNumber: number, balance: number, history: History[], status: boolean){
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = history;
        this.status = status;
    }
    
    deposit(money: number): void{
        let preBlance = this.balance;
        this.balance += money;
        this.history.push(new History(this.balance, preBlance));
    }

    withdraw(money: number): void{
        if (money > this.balance) {
            console.log("Không đủ số dư!");
            return;
        }
        let preBalance = this.balance;
        this.balance -= money;
        this.history.push(new History(this.balance, preBalance));

    }

    showHistory(): void{
        this.history.forEach((history) => {
            console.log(`Số dư cũ: ${history.oldBlance} - Số dư hiện tại: ${history.newBalance}`);
            
        })
    }

    getBalance(): number{
        return this.balance;
    }
}

class checkingAccount extends Account{
    overdraftLimit: number;

    constructor(accountNumber: number, balance: number, history: History[], status: boolean, overdraftLimit: number) {
        super(accountNumber, balance, history, status);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(money: number): void {
        if(this.balance + this.overdraftLimit >= money){
            let preBalance = this.balance;
            this.balance -= money;
            this.history.push(new History(this.balance, preBalance));
        }
        else{
            console.log("Số tiền rút vượt quá hạn mức");
            
        }
    }
}

let acc = new checkingAccount(1, 100, [], true, 50);
acc.deposit(20);  
acc.withdraw(130); 
acc.withdraw(50);  
acc.showHistory();