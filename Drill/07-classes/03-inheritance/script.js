class Animal {
    constructor(name,greeting){
    this.name=name;
    this.greeting=greeting;
    }
    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}

class Dog extends Animal {
    constructor(name,greeting) {
        super(name);
        this.constructor.greeting = "Ouaf";
    }
}



class Cat extends Animal {
    constructor(name,greeting) {
        super(name);
        this.constructor.greeting = "Miaou";
    }

}


document.querySelector("#run").addEventListener("click", () => {
    const c = new Cat("Kitty");
    const d = new Dog("Dougy");


    console.log(c.sayHello());
    console.log(d.sayHello());
})