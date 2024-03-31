class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    set password(value) {
        this._password = value;
    }
    get password() {
        return this._password.toUpperCase();
    }
    set email(value) {
        this._email = value;
    }
    get email() {
        return this._email.toUpperCase();
    }
    set username(value) {
        this._username = value;
    }
    get username() {
        return this._username.toUpperCase();
    }
}

let aa = new User('aa', 'bb', 'cc');
console.log(aa);
console.log(aa.password);
console.log(aa.email);
console.log(aa.username);