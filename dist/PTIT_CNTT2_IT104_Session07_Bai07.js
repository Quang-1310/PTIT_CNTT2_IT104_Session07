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
let newAccount = new Account(1, 100, [], true);
newAccount.deposit(10);
newAccount.withdraw(50);
newAccount.showHistory();
