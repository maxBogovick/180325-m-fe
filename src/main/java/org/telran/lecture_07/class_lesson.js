class User {
    constructor(name, secondName, age) {
        this.firstName = name;
        this.lastName = secondName;
        this.age = age;
    }

    sayName() {
        console.log("My name is " + this.firstName);
    }

    sayLastName() {
        console.log("My last name is " + this.lastName);
    }

    getAge() {
        return this.age;
    }

    setAge(newAge) {
        this.age = newAge;
    }
}

const user1 = new User("Ivan", "Ivanov", 30);
console.log(user1);

const arra = new Array(10);

user1.sayName();
user1.sayLastName();

console.log("Get user last name  = " + user1.lastName);

user1.setAge(10);

console.log(user1);

console.log(user1.getAge());

user1.age = "fkjgfjgf";

console.log(user1);



const array = [1, 2, 3, 4, 5]; // new Array(5); array[0] = 1, array[1] = 2

console.log(array);

array.push(10);

console.log(array.pop());
console.log(array.length());

