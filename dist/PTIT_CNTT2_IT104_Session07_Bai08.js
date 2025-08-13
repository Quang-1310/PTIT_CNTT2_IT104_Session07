"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class History {
    newBalance;
    oldBlance;
    constructor(newBlance, oldBlance) {
        this.newBalance = newBlance;
        this.oldBlance = oldBlance;
    }
}
class Account {
    accountNumber;
    balance;
    history = [];
    status;
    constructor(accountNumber, balance, history, status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = history;
        this.status = status;
    }
    deposit(money) {
        let preBlance = this.balance;
        this.balance += money;
        this.history.push(new History(this.balance, preBlance));
    }
    withdraw(money) {
        if (money > this.balance) {
            console.log("Không đủ số dư!");
            return;
        }
        let preBalance = this.balance;
        this.balance -= money;
        this.history.push(new History(this.balance, preBalance));
    }
    showHistory() {
        this.history.forEach((history) => {
            console.log(`Số dư cũ: ${history.oldBlance} - Số dư hiện tại: ${history.newBalance}`);
        });
    }
    getBalance() {
        return this.balance;
    }
}
class checkingAccount extends Account {
    overdraftLimit;
    constructor(accountNumber, balance, history, status, overdraftLimit) {
        super(accountNumber, balance, history, status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(money) {
        if (this.balance + this.overdraftLimit >= money) {
            let preBalance = this.balance;
            this.balance -= money;
            this.history.push(new History(this.balance, preBalance));
        }
        else {
            console.log("Số tiền rút vượt quá hạn mức");
        }
    }
}
let acc = new checkingAccount(1, 100, [], true, 50);
acc.deposit(20);
acc.withdraw(130);
acc.withdraw(50);
acc.showHistory();
