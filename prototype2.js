const Creature = {
    breathe(){
        return"Breathing.....";
    }
};

const Animal= {
    eat(){
        return"Eating....";
    }
};

Animal.__proto__ = Creature;

const dog = {
    bark(){
        return"Woof!";
    }
};

dog.__proto__ = Animal;

console.log(dog.bark());
console.log(dog.eat());
console.log(dog.breathe());