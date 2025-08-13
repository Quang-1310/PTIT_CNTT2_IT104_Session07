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
let user = new userAcc(1, "Quang", "quang", false, "manager", true);
user.login();
user.logout();
