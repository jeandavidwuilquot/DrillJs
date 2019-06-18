
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
document.querySelector("#run").addEventListener("click", ()=>{
    const c= new Cat("Skitty",9);
    const d= new Cat("Pixel",6);
    console.log(c,d)


})

   