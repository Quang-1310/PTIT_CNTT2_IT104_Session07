"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    name;
    passWord;
    isLogin;
    role;
    constructor(id, name, passWord, isLogin, role) {
        this.id = id;
        this.name = name;
        this.passWord = passWord;
        this.isLogin = isLogin;
        this.role = role;
    }
    login() {
        this.isLogin = false;
    }
    logout() {
        if (this.isLogin === true) {
            this.isLogin = false;
            console.log("Đăng xuất thành công");
        }
    }
}
class userAcc extends Account {
    status;
    constructor(id, name, passWord, isLogin, role, status) {
        super(id, name, passWord, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status) {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        }
        else {
            console.log("Tài khoản đã bị khoá");
        }
    }
}
class adminAcc extends Account {
    accounts = [];
    constructor(id, name, passWord, isLogin, role) {
        super(id, name, passWord, isLogin, role);
    }
    addUserAcc(acc) {
        this.accounts.push(acc);
    }
    banUser(id) {
        let findUser = this.accounts.find(user => user.id === id);
        if (findUser) {
            findUser.status = false;
            console.log("Đã ban người dùng");
        }
    }
}
let admin = new adminAcc(0, "Admin", "adminPwd", true, "admin");
let user1 = new userAcc(1, "Alice", "pwd1", false, "user", true);
let user2 = new userAcc(2, "Bob", "pwd2", false, "user", true);
admin.addUserAcc(user1);
admin.addUserAcc(user2);
admin.banUser(1);
