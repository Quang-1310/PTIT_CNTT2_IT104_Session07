class Account{
    public id: number;
    public name: string;
    private passWord: string;
    public isLogin: boolean;
    public role: string;
    constructor(id: number, name: string, passWord: string, isLogin: boolean, role: string){
        this.id = id;
        this.name = name;
        this.passWord = passWord;
        this.isLogin = isLogin;
        this.role = role;
    }

    login(): void{
        this.isLogin = false;
    }

    logout(): void{
        if(this.isLogin === true){
            this.isLogin = false;
            console.log("Đăng xuất thành công");
            
        }
    }
}


class userAcc extends Account{
    status: boolean;
    constructor(id: number, name: string, passWord: string, isLogin: boolean, role: string, status: boolean){
        super(id, name, passWord, isLogin, role);
        this.status = status;
    }

    login(): void {
        if(this.status){
            this.isLogin = true;
            console.log("Đăng nhập thành công");
            
        }
        else{
            console.log("Tài khoản đã bị khoá");
            
        }
    }

    
}

class adminAcc extends Account{
    accounts: userAcc[] = [];
    constructor(id: number, name: string, passWord: string, isLogin: boolean, role: string){
        super(id, name, passWord, isLogin, role);
    }

    addUserAcc(acc: userAcc): void {
        this.accounts.push(acc);
    }

    banUser(id: number): void{
        let findUser = this.accounts.find(user => user.id === id);
        if(findUser){
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


