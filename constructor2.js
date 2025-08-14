class User{
    constructor(username,email,password){
        this.username = username;
        this.password= password;
        this.email = email;
    }
    encryptpassword(){
        return`${this.password}abc`
    }
    changeUsername(){
        return`${this.username.toUpperCase()}`
    }
}
const chai = new User ("Chai","Chai@gmail.com","123")
console.log(chai.encryptpassword())
console.log(chai.changeUsername())