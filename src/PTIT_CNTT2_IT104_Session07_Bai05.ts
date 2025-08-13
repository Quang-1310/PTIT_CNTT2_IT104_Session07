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

let user = new userAcc(1,"Quang", "quang", false, "manager", true);
user.login();
user.logout();