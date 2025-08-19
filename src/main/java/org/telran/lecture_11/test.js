class User {
    #name = "";
    #age = 0;
    constructor(newName, newAge) {
        this.#name = newName;
        this.#age = newAge;
    }
    setAge(newAge) {
        this.#age = newAge;
    }
    #setName(newName) {
        this.#name = newName;
    }

    getName() {
        return this.#name;
    }
}

const userIvan = new User("Ivan", 30);
console.log(userIvan.getName());

userIvan.#setName("Petr");
console.log(userIvan.getName());