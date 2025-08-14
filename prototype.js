function Animal(name){
    this.name = name;

}
Animal.prototype.speak = function(){
    return`${this.name} makes a noise.`;
}
const dog = new Animal("Buddy");
console.log(dog.speak());