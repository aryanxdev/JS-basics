function setUsername(username) {
    this.username = username;
    console.log('called');
}

function createUser(username, email, password) {
    setUsername.call(this, username)
    this.email = email;
    this.password = password;
};

let user = new createUser('Aryan Sagar', 'aryan@r3dpill.com', 'aryansagar093970');
let user2 = new createUser("Aryan Sagar", "aryan@r3dpill.com", "aryansagar093970");

console.log(user);
console.log(user2);