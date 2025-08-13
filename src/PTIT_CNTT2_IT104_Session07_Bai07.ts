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

let newAccount = new Account(1, 100,[], true);
newAccount.deposit(10);
newAccount.withdraw(50);
newAccount.showHistory();
